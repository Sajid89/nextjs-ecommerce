import Link from 'next/link';

async function fetchProducts() {
    const res = await fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:3000/data/products.json' : '/data/products.json');
    return res.json();
}  

export default async function Products() {
    const products = await fetchProducts();

    return (
        <div>
            <h1>Our Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
