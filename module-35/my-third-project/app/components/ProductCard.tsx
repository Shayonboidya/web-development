import React from 'react';
import { Iproduct } from '../Type';

const ProductCard = ({ product }: { product: Iproduct }) => {
    return (

        <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">

            {/* Product Image */}
            <figure className="bg-base-200 p-4 relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />

                <div className="badge badge-success absolute top-4 left-4">
                    In Stock
                </div>
            </figure>

            <div className="card-body gap-3">

                {/* Product Name */}
                <h2 className="card-title text-xl font-bold">
                    {product.name}
                </h2>

                <p className="text-sm text-base-content/60 line-clamp-2">
                    {product.description}
                </p>

                {/* Price & Rating */}
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-primary">
                        ৳{product.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-1">
                        <span className="text-warning">★</span>
                        <span className="font-semibold">
                            {product.rating}
                        </span>
                    </div>
                </div>

                <div className="divider my-0"></div>

                {/* Category */}
                <div className="flex justify-between items-center">
                    <span className="badge badge-outline">
                        {product.category}
                    </span>

                    <span className="text-xs text-success font-medium">
                        {product.stock} Available
                    </span>
                </div>

                {/* Button */}
                <div className="card-actions mt-2">
                    <button className="btn btn-primary w-full rounded-xl hover:scale-[1.02] transition-transform">
                        <span>Buy Now</span>
                        <span>→</span>
                    </button>
                </div>

            </div>
        </div>

    );
};

export default ProductCard;