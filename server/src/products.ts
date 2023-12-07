export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Lions',
        price: 8.99,
        description: 'Lorem ipsum',
        image: 'http://localhost:8080/image0.jpeg',
        longDescription: 'Lorem Ipsum Doloret or sg like that'
    },
    {
        id: 2,
        name: 'Puma',
        price: 12.99,
        description: 'Lorem ipsum',
        image: 'http://localhost:8080/image1.png',
        longDescription: 'Lorem Ipsum Doloret or sg like that'
    }
];

export default products;