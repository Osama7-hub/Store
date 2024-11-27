// export const url = 'https://fakestoreapi.com/products';
// export const url = 'https://dummyjson.com/products/category/laptops';
export const url = "https://dummyjson.com/products";

export async function getAllProducts() {
    try {
        // const res = await fetch(`${url}?sortBy=id&order=desc`);
        const res = await fetch(`${url}?limit=1000&sortBy=id&order=desc`);
        // const res = await fetch(`${url}?skip=${skip}&limit=${limit}&sortBy=id&order=desc`);
        if (!res.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return res.json()
    } catch (error) {
        console.error(error.message);
    }
}

export async function getAllProductsPerPages(page) {
    const limit = 12;
    const skip = page * limit;
    try {
        const res = await fetch(`${url}?skip=${skip}&limit=${limit}&sortBy=id&order=desc`);
        if (!res.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return res.json()
    } catch (error) {
        console.error(error.message);
    }
}

export async function getProducts() {
    try {
        const res = await fetch(`${url}?limit=8&sortBy=id&order=desc`);
        if (!res.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return res.json()
    } catch (error) {
        console.error(error.message);
    }
}

export async function getProductById(id) {
    try {
        const res = await fetch(`${url}/${id}`);
        if (!res.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return res.json()
    } catch (error) {
        console.error(error.message);
    }
}

export async function getAllCategories() {
    try {
        // const res = await fetch(`${url}/categories`);
        const res = await fetch(`${url}/category-list`);
        if (!res.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return res.json()
    } catch (error) {
        console.error(error.message);
    }
}

export async function getProductByCategories(category = "") {
    try {
        const res = await fetch(`${url}/category/${category}`);
        if (!res.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return res.json()
    } catch (error) {
        console.error(error.message);
    }
}

export async function getProductBySearch(q = "") {
    try {
        // const res = await fetch(`${url}/search?q=${q}`);
        const res = await fetch(`${url}/search?q=${q}&sortBy=id&order=desc`);
        if (!res.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return res.json()
    } catch (error) {
        console.error(error.message);
    }
}
