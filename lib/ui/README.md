# @lib/ui

This package provides a comprehensive library of React components and hooks, meticulously designed to cover all facets of a modern user interface. This package includes a wide range of components such as buttons, forms, modals, and navigation bars, along with utility hooks and services for authentication, analytics, and state management. It's built to empower developers with the tools they need to create elegant, responsive, and accessible user experiences with ease.

## Getting Started

1. Add a `styled.d.ts` to your project and include the following content to integrate this package's theme with `styled-components`' default theme:

```typescript
import 'styled-components'
import { Theme } from '@lib/ui/theme/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

2. **Add `persistentState` File for Local Storage Interaction:** Place a `persistentState` file in the `state` folder of your app package to enhance local storage interaction.

```tsx
import { TemporaryStorage } from '@lib/ui/state/TemporaryStorage'
import { LocalStorage } from '@lib/ui/state/LocalStorage'
import { createPersistentStateHook } from '@lib/ui/state/createPersistentStateHook'
import { createPersistentStateManager } from '@lib/ui/state/createPersistentStateManager'

export enum PersistentStateKey {
  ThemePreference = 'themePreference',
}

const persistentStorage =
  typeof window !== 'undefined'
    ? new LocalStorage<PersistentStateKey>()
    : new TemporaryStorage<PersistentStateKey>()

export const usePersistentState =
  createPersistentStateHook<PersistentStateKey>(persistentStorage)

export const managePersistentState =
  createPersistentStateManager<PersistentStateKey>(persistentStorage)
```

3. **Implement `ThemeProvider` and `GlobalStyle` in Your App:** In your application, use the `ThemeProvider` from this package to manage theme changes and store user preferences with the `usePersistentState` hook. Include the `GlobalStyle` component to apply global CSS styles, such as font family and custom scrollbars, ensuring a consistent look and feel across your app.

```tsx
import { GlobalStyle } from '@lib/ui/css/GlobalStyle'
import { Inter } from 'next/font/google'
import {
  PersistentStateKey,
  usePersistentState,
} from '@product/ui-demo/state/persistentState'
import { ThemePreference } from '@lib/ui/theme/ThemePreference'
import { DarkLightThemeProvider } from '@lib/ui/theme/DarkLightThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

export const App = () => {
  const [theme, setTheme] = usePersistentState<ThemePreference>(
    PersistentStateKey.ThemePreference,
    'system',
  )

  return (
    <DarkLightThemeProvider value={theme} onChange={setTheme}>
      <GlobalStyle fontFamily={inter.style.fontFamily} />
      // ...
    </DarkLightThemeProvider>
  )
}
```
