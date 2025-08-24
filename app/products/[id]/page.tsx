interface ProductDetailProps {
    params: { id: string }
}

export default async function ProductDetail({ params }: ProductDetailProps) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await response.json();
    
    return(
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
            <h1>{product}</h1>
        </div>
    )
}