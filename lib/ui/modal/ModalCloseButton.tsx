import styled from 'styled-components'

import { Hoverable } from '../base/Hoverable'
import { centerContent } from '../css/centerContent'
import { sameDimensions } from '../css/sameDimensions'
import { transition } from '../css/transition'
import { CloseIcon } from '../icons/CloseIcon'
import { OnClickProp } from '../props'
import { getColor } from '../theme/getters'

const size = 24

const IconWrapper = styled.div`
  ${sameDimensions(size)};
  ${centerContent};
  ${transition};
  font-size: ${size.toString()}px;
`

const Container = styled(Hoverable)`
  padding: 0 !important;
  min-height: ${size.toString()}px !important;
  color: ${getColor('contrast')};
  &:hover ${IconWrapper} {
    color: ${getColor('contrast')};
  }
`

export const ModalCloseButton = ({ onClick }: OnClickProp) => {
  return (
    <Container onClick={onClick}>
      <IconWrapper>
        <CloseIcon />
      </IconWrapper>
    </Container>
  )
}
