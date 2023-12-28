export enum ECollection {
    MEN = 'MEN',
    WOMAN = 'WOMAN',
    FW24 = 'FW24',
}

export type ProductItem = {
    id: string;
    priceRub: number;
    name: string;
    description: string;
    image: string;
    collections: ECollection[];
    images: string[];
}