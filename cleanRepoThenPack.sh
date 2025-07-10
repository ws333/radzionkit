./clean_lockfiles.sh
./clean_node_modules.sh
yarn install
yarn dedupe
yarn run pack