async function fetchProduct(id) {
    const res = await fetch(`/data/products.json`);
    const products = await res.json();
    return products.find(product => product.id === parseInt(id));
}
  
export default async function ProductDetail({ params }) {
    const product = await fetchProduct(params.id);
  
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}
  