interface InitConfig { key?: string, host: string, decryption_password?: string }
interface NftMetadata {
    name: string,
    description: string,
    image: string,
    attributes?: Array<{ trait_type: string, value: string }>
    custom_attributes?: any
}
type NftCreators = Array<{ account: string, value: number }>
type NftRoyalties = Array<{ account: string, value: number }>
interface TradeCondition {
    what: { type: string, id: any },
    with: { type: string, value: number },

}
type SellOrder = {
    type: string,
    maker: string,
    make: {
        assetType: {
            assetClass: string,
            contract: string,
            tokenId: string,
            uri: string,
            creators: [
                {
                    account: string,
                    value: number
                }
            ],
            royalties: Array<any>,
            signatures: Array<string>
        },
        value: string
    },
    take: {
        assetType: {
            assetClass: string
        },
        value: string
    },
    fill: string,
    makeStock: string,
    cancelled: boolean,
    salt: string,
    data: {
        dataType: string,
        payouts: Array<any>,
        originFees: Array<any>
    },
    signature: string,
    createdAt: string,
    lastUpdateAt: string,
    pending: Array<any>,
    hash: string,
    makeBalance: "0",
    makePriceUsd: number
}
type Token = {
    id: string,
    contract: string,
    tokenId: string,
    creators: [
        {
            account: string,
            value: number
        }
    ],
    supply: string,
    lazySupply: string,
    owners: Array<string>,
    royalties: [],
    date: string,
    pending: [],
    deleted: false
}
declare class Trade {
    create(tradeCondition: TradeCondition): Promise<SellOrder>
}
declare class Rarepress {
    trade: Trade
    account: string
    init(config: InitConfig)
    add(item: ArrayBuffer | Blob | File | string): Promise<string>
    create(token: { type: 'ERC721' | 'ERC1155', metadata: NftMetadata, creators?: NftCreators, royalties?: NftRoyalties, supply?: number }): Promise<Token>
}

export = Rarepress