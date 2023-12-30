import { ECollection, ProductItem } from "./types";

export const products: ProductItem[] = [
    {
        id: '1',
        priceRub: 45000,
        name: '1/2 fur cōãt',
        description: 'Bōcklē 1/4 fūr cōāt has base made of fox fur Infused with unique leather inserts with metal buttons. The sleeves have insertions made of leopard eco fur. Coat is powered with metal zipper.',
        image: 'https://bockle.ru/images/1:2-5.jpg',
        collections: [ECollection.WOMAN, ECollection.FW24],
        images: [
            'https://bockle.ru/images/1:2-5.jpg',
            'https://bockle.ru/images/1:2-1.jpg',
            'https://bockle.ru/images/1:2-3.jpg',
            'https://bockle.ru/images/1:2-4.jpg',
        ]
    },

    {
        id: '2',
        priceRub: 45000,
        name: '1/4 fur cōãt',
        description: 'Bōcklē 3/4 fūr cōāt is crafted from vintage US eco fur and has rubbit fur endings in the sleeves and around the bottom. The top part is upping the shoulders so they look bigger, the leopard has gradient in the color from dark to light.',
        image: 'https://bockle.ru/images/1:4-2.jpg',
        collections: [ECollection.MEN, ECollection.FW24],
        images: [
            'https://bockle.ru/images/1:4-2.jpg',
            'https://bockle.ru/images/1:4-1.jpg',
            'https://bockle.ru/images/1:4-3.jpg',
            'https://bockle.ru/images/1:4-4.jpg',
            'https://bockle.ru/images/1:4-5.jpg',
            'https://bockle.ru/images/1:4-6.jpg',
        ]
    },

    {
        id: '3',
        priceRub: 30000,
        name: 'puffer jacket',
        description: 'Bōcklē fūr puffer jacket has inside filler added for increasing the visible size of the jacket. The jacket has big fur collar outside if the neck. The surface is covered with 100% foax fur.',
        image: 'https://bockle.ru/images/jk-2.jpg',
        collections: [ECollection.WOMAN, ECollection.FW24],
        images: [
            'https://bockle.ru/images/jk-2.jpg',
            'https://bockle.ru/images/jk-1.jpg',
            'https://bockle.ru/images/jk-3.jpg',
            'https://bockle.ru/images/jk-4.jpg',
        ]
    },
    {
        id: '4',
        priceRub: 15000,
        name: 'lōgō tēē',
        description: '100% cotton t-shirt with unique forces and bōcklē logo at the bottom.',
        image: 'https://bockle.ru/images/2023-12-31-01.31.243346.jpg',
        collections: [ECollection.WOMAN, ECollection.MEN, ECollection.FW24],
        images: [
            'https://bockle.ru/images/2023-12-31-01.31.243346.jpg',
            'https://bockle.ru/images/tee-2.jpg',
            'https://bockle.ru/images/tee-3.jpg',
        ]
    },
    
];
