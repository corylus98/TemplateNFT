import { SupportedChainId } from '../connectors/index'
type AddressMap = { [chainId: number]: string }
export const TEMPLATE_NFT_ADDRESS: AddressMap = {
    [SupportedChainId.MAINNET]: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    [SupportedChainId.RINKEBY]: '0x174C1453283CbC4155F12d7aa9Bf29F894DD7ed5',
    [SupportedChainId.HARDHAT]: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
}
export const DISCORD_LINK = "";
export const TWITTER_LINK = "https://twitter.com/yuchen84596277";
export const MAX_SUPPLY = 4;
export const START_TIME = new Date(2022, 2-1, 12, 20, 30).valueOf();
export const MINT_PRICE = 0.01;