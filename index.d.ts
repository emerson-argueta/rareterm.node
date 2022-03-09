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
type SignedTrade = {
    type: string,
    make: {
        assetType: {
            assetClass: string,
            tokenId: string,
            contract: string
        },
        value: string
    },
    take: {
        assetType: {
            assetClass: string
        },
        value: string
    },
    data: {
        dataType: string,
        payouts: [],
        originFees: []
    },
    salt: string,
    maker: string,
    signature: string
}
type TradeReceipt = {
    type: string,
    maker: string,
    make: {
        assetType: {
            assetClass: string,
            contract: string,
            tokenId: string,
            uri: string,
            creators: [],
            royalties: [],
            signatures: []
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
    cancelled: false,
    salt: string,
    signature: string,
    createdAt: string,
    lastUpdateAt: string,
    pending: [],
    hash: string,
    makeBalance: string,
    makePriceUsd: number,
    data: {
        dataType: string,
        payouts: [],
        originFees: []
    }
}
type SignedToken = {
    type: string,
    tokenId: string,
    uri: string,
    tokenURI: string,
    contract: string,
    creators: [],
    royalties: [],
    signatures: []

}
type TokenReceipt = {
    id: string
    contract: string
    tokenId: string
    creators: [],
    supply: string
    lazySupply: string
    owners: [],
    royalties: [],
    date: string
    pending: [],
    deleted: boolean
}
declare class FS {
    add(item: ArrayBuffer | Blob | File | string): Promise<string>
}
declare class Trade {
    create(tradeCondition: TradeCondition): Promise<SignedTrade>
    send(singedTrad: SignedTrade): Promise<TradeReceipt>
}
declare class Token {
    create(token: { type: 'ERC721' | 'ERC1155', metadata: NftMetadata, contract?: string, creators?: NftCreators, royalties?: NftRoyalties, supply?: number }): Promise<SignedToken>
    send(signedToken: SignedToken): Promise<TokenReceipt>
}
declare class Rareterm {
    fs: FS
    token: Token
    trade: Trade
    account: string
    init(config: InitConfig)
}

export = Rareterm