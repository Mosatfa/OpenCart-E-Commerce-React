export interface ICategory {
    name: string;
    slug: string;
    url: string
}

export interface ISubcategory {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
}

export interface IProduct {
    id: number;
    title: string;
    slug: string
    description: string,
    brand: string,
    price: number;
    discountPercentage: number;
    images: string[];
    rating: number,
    reviews: [],
    stock: number
}


export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserResponse {
    results: {
        access_token: string
    }
}