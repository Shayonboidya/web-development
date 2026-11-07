import React from 'react';
import ProductCard from '../components/ProductCard';
import { Iproduct } from '../Type';

const getProducts = async ()=>{
    // const res = await fetch("http://localhost:5000/products", {cache:'no-store'});
    const res = await fetch("http://localhost:5000/products", {cache:'force-cache'});
    return res.json();
}
const ProductsPage = async() => {
    const products:Iproduct[] = await getProducts();

    return (
        <div>
            <h3>Products page: {products.length} </h3>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;