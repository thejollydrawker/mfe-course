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
        description: 'Captivating Majesty: Limited Edition Lion Print',
        image: 'http://localhost:8080/image0.jpeg',
        longDescription: `Transform your space into a realm of untamed elegance with our Limited Edition Lion Print – a mesmerizing portrayal of the wild's majestic rulers. This exquisite piece captures the essence of regality, strength, and the untamed beauty of the savannah.

        🌟 Key Features:
        
        🎨 High-Quality Artistry: Meticulously crafted by skilled artists, this print exemplifies precision and attention to detail. Every stroke brings the lions to life, creating a captivating masterpiece that will be the focal point of any room.
        🖼️ Limited Edition: Indulge in exclusivity with our limited print run. Each piece is numbered and comes with a certificate of authenticity, ensuring you own a unique work of art that resonates with the spirit of the wild.
        🏡 Perfect for Any Setting: Whether adorning your living room, office, or bedroom, the power and grace exuded by these lions make a statement in any space. Let the symbolism of strength and unity resonate throughout your home or workplace.
        🌈 Versatile Decor: The neutral tones and dynamic composition make this print adaptable to various color schemes and design aesthetics. It seamlessly blends with both modern and traditional interiors.
        🌍 Wildlife Conservation Contribution: A percentage of the proceeds from each sale goes towards supporting wildlife conservation efforts. By bringing this print into your home, you become a part of a global movement to protect these magnificent creatures and their habitats.
        🛍️ Order Now and Elevate Your Space!
        
        Immerse yourself in the raw beauty of nature and make a bold statement with our Limited Edition Lion Print. Don't miss your chance to own a piece of the wild – order now and experience the allure of these majestic creatures in the comfort of your own space.
        
        👉 Click "Add to Cart" to secure your Limited Edition Lion Print and invite the untamed spirit of the savannah into your life.`
    },
    {
        id: 2,
        name: 'Puma',
        price: 12.99,
        description: 'Elegance in Motion: Limited Edition Puma Print',
        image: 'http://localhost:8080/image1.png',
        longDescription: `Embrace the untamed allure of the wilderness with our Limited Edition Puma Print – a striking depiction of grace, agility, and the untethered spirit of the elusive puma. This exceptional piece is a celebration of nature's sleek predators, bringing the essence of the wild into your living space.

        🌟 Key Features:
        
        🎨 Exquisite Artistry: Crafted by skilled artists, this print beautifully captures the fluidity and poise of the puma. Each detail is meticulously rendered, resulting in a captivating masterpiece that seamlessly blends artistry with the essence of the untamed.
        🖼️ Exclusive Limited Edition: Elevate your collection with this limited print run. Each piece is numbered and accompanied by a certificate of authenticity, ensuring you possess a one-of-a-kind work of art that embodies the spirit of the wilderness.
        🏡 Versatile Decor: Whether enhancing your living room, study, or den, the dynamic energy of these pumas complements various settings. The neutral tones and dynamic composition make it adaptable to diverse interior styles, adding a touch of wilderness to your personal space.
        🌈 Dynamic Aesthetics: The sleek and powerful presence of the pumas brings a touch of wild elegance to your home or office. Let the subtle yet captivating beauty of these magnificent creatures become the focal point of your interior design.
        🌍 Contribute to Wildlife Conservation: A portion of the proceeds from each sale goes towards supporting wildlife conservation initiatives. By choosing our Limited Edition Puma Print, you become a patron of efforts dedicated to preserving the habitats of these extraordinary animals.
        🛍️ Order Now and Redefine Your Space!
        
        Invite the spirit of the untamed into your life with our Limited Edition Puma Print. Be part of an exclusive circle that appreciates the grace and prowess of these elusive creatures. Secure your piece now by clicking "Add to Cart" and adorn your space with the captivating energy of the wild.`
    },
    {
        id: 3,
        name: 'Tiger',
        price: 11.99,
        description: 'Majestic Grandeur: Limited Edition Tiger Print',
        image: 'http://localhost:8080/image2.jpeg',
        longDescription: `Embark on a journey into the heart of the jungle with our Limited Edition Tiger Print – a breathtaking portrayal of strength, beauty, and the majestic allure of the tiger. This extraordinary piece serves as a testament to the untamed grandeur of one of nature's most iconic creatures.

        🌟 Key Features:
        
        🎨 Exemplary Artistry: Meticulously crafted by skilled artists, this print encapsulates the tiger's regal demeanor and powerful presence. Every stroke brings out the intricate details, creating a captivating masterpiece that captures the essence of the wild.
        🖼️ Exclusive Limited Edition: Elevate your art collection with this limited print run. Each piece is numbered and comes with a certificate of authenticity, ensuring that you possess a unique work of art that symbolizes the spirit of the jungle.
        🏡 Versatile Decor: Whether gracing your living room, office, or sanctuary, the dynamic energy of these tigers transforms any space. The rich hues and commanding composition effortlessly integrate with various interior styles, adding a touch of untamed splendor to your surroundings.
        🌈 Striking Aesthetics: The intense gaze and vibrant markings of the tiger create a focal point that commands attention. Let the aura of these magnificent creatures infuse your space with an air of wild sophistication and timeless elegance.
        🌍 Support Wildlife Conservation: A percentage of the proceeds from each sale contributes to wildlife conservation efforts. By choosing our Limited Edition Tiger Print, you actively participate in the protection of these endangered species and their habitats.
        🛍️ Order Now and Bring the Jungle Home!
        
        Indulge in the mystique of the jungle with our Limited Edition Tiger Print. Own a piece of the wild that embodies strength, beauty, and the untamed spirit. Click "Add to Cart" now and transform your space into a haven of majestic grandeur with this captivating tiger masterpiece.`
    }
];

export default products;