export interface ICategory {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    subcategories?: ISubcategory[];
}

export interface ISubcategory {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
}

export const categories: ICategory[] = [
    {
        id: 1,
        name: "Electronics",
        slug: "electronics",
        createdAt: "2024-12-01T10:00:00Z",
        updatedAt: "2025-01-01T10:00:00Z",
        subcategories: [
            {
                id: 101,
                name: "Mobiles & Accessories",
                slug: "mobiles-accessories",
                createdAt: "2024-12-02T12:00:00Z",
                updatedAt: "2025-01-02T12:00:00Z",
            },
            {
                id: 102,
                name: "Laptops & Computers",
                slug: "laptops-computers",
                createdAt: "2024-12-03T15:00:00Z",
                updatedAt: "2025-01-03T15:00:00Z",
            },
        ],
    },
    {
        id: 2,
        name: "Fashion",
        slug: "fashion",
        createdAt: "2024-11-20T09:30:00Z",
        updatedAt: "2025-01-05T09:30:00Z",
        subcategories: [
            {
                id: 201,
                name: "Men's Clothing",
                slug: "mens-clothing",
                createdAt: "2024-11-25T14:00:00Z",
                updatedAt: "2025-01-07T14:00:00Z",
            },
            {
                id: 202,
                name: "Women's Clothing",
                slug: "womens-clothing",
                createdAt: "2024-11-30T18:00:00Z",
                updatedAt: "2025-01-08T18:00:00Z",
            },
        ],
    },
    {
        id: 3,
        name: "Home & Kitchen",
        slug: "home-kitchen",
        createdAt: "2024-10-15T08:00:00Z",
        updatedAt: "2025-01-10T08:00:00Z",
        subcategories: [
            {
                id: 301,
                name: "Furniture",
                slug: "furniture",
                createdAt: "2024-10-18T13:00:00Z",
                updatedAt: "2025-01-12T13:00:00Z",
            },
            {
                id: 302,
                name: "Kitchen Appliances",
                slug: "kitchen-appliances",
                createdAt: "2024-10-22T17:00:00Z",
                updatedAt: "2025-01-15T17:00:00Z",
            },
        ],
    },
    // إضافة فئات جديدة هنا
    {
        id: 4,
        name: "Books & Stationery",
        slug: "books-stationery",
        createdAt: "2024-09-10T07:00:00Z",
        updatedAt: "2025-01-20T07:00:00Z",
        subcategories: [
            {
                id: 401,
                name: "Fiction Books",
                slug: "fiction-books",
                createdAt: "2024-09-12T10:00:00Z",
                updatedAt: "2025-01-22T10:00:00Z",
            },
            {
                id: 402,
                name: "Office Stationery",
                slug: "office-stationery",
                createdAt: "2024-09-15T14:00:00Z",
                updatedAt: "2025-01-25T14:00:00Z",
            },
        ],
    },
    {
        id: 5,
        name: "Sports & Outdoors",
        slug: "sports-outdoors",
        createdAt: "2024-08-05T06:00:00Z",
        updatedAt: "2025-01-30T06:00:00Z",
        subcategories: [
            {
                id: 501,
                name: "Fitness Equipment",
                slug: "fitness-equipment",
                createdAt: "2024-08-08T09:00:00Z",
                updatedAt: "2025-02-01T09:00:00Z",
            },
            {
                id: 502,
                name: "Outdoor Gear",
                slug: "outdoor-gear",
                createdAt: "2024-08-12T12:00:00Z",
                updatedAt: "2025-02-05T12:00:00Z",
            },
        ],
    },
    {
        id: 5,
        name: "Sports & Outdoors",
        slug: "sports-outdoors",
        createdAt: "2024-08-05T06:00:00Z",
        updatedAt: "2025-01-30T06:00:00Z",
        subcategories: [
            {
                id: 501,
                name: "Fitness Equipment",
                slug: "fitness-equipment",
                createdAt: "2024-08-08T09:00:00Z",
                updatedAt: "2025-02-01T09:00:00Z",
            },
            {
                id: 502,
                name: "Outdoor Gear",
                slug: "outdoor-gear",
                createdAt: "2024-08-12T12:00:00Z",
                updatedAt: "2025-02-05T12:00:00Z",
            },
        ],
    },
    {
        id: 5,
        name: "Sports & Outdoors",
        slug: "sports-outdoors",
        createdAt: "2024-08-05T06:00:00Z",
        updatedAt: "2025-01-30T06:00:00Z",
        subcategories: [
            {
                id: 501,
                name: "Fitness Equipment",
                slug: "fitness-equipment",
                createdAt: "2024-08-08T09:00:00Z",
                updatedAt: "2025-02-01T09:00:00Z",
            },
            {
                id: 502,
                name: "Outdoor Gear",
                slug: "outdoor-gear",
                createdAt: "2024-08-12T12:00:00Z",
                updatedAt: "2025-02-05T12:00:00Z",
            },
        ],
    },
    {
        id: 5,
        name: "Sports & Outdoors",
        slug: "sports-outdoors",
        createdAt: "2024-08-05T06:00:00Z",
        updatedAt: "2025-01-30T06:00:00Z",
        subcategories: [
            {
                id: 501,
                name: "Fitness Equipment",
                slug: "fitness-equipment",
                createdAt: "2024-08-08T09:00:00Z",
                updatedAt: "2025-02-01T09:00:00Z",
            },
            {
                id: 502,
                name: "Outdoor Gear",
                slug: "outdoor-gear",
                createdAt: "2024-08-12T12:00:00Z",
                updatedAt: "2025-02-05T12:00:00Z",
            },
        ],
    },    {
        id: 5,
        name: "Sports & Outdoors",
        slug: "sports-outdoors",
        createdAt: "2024-08-05T06:00:00Z",
        updatedAt: "2025-01-30T06:00:00Z",
        // subcategories: [
        //     {
        //         id: 501,
        //         name: "Fitness Equipment",
        //         slug: "fitness-equipment",
        //         createdAt: "2024-08-08T09:00:00Z",
        //         updatedAt: "2025-02-01T09:00:00Z",
        //     },
        //     {
        //         id: 502,
        //         name: "Outdoor Gear",
        //         slug: "outdoor-gear",
        //         createdAt: "2024-08-12T12:00:00Z",
        //         updatedAt: "2025-02-05T12:00:00Z",
        //     },
        // ],
    },
];