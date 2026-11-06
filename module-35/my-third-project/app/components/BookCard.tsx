import React from 'react';
import { Ibook } from '../Type';

const BookCard = ({book}:{book:Ibook}) => {
    return (

        <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">

            {/* Book Cover */}
            <figure className="bg-base-200 p-4 relative">
                <img
                    src={book.image}
                    alt={book.title}
                    className="h-52 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />

                <div className="badge badge-success absolute top-4 left-4">
                    In Stock
                </div>
            </figure>

            <div className="card-body gap-3">

                {/* Book Title */}
                <h2 className="card-title text-xl font-bold">
                    {book.title}
                </h2>

                {/* Author */}
                <p className="text-sm text-base-content/60">
                    By {book.author}
                </p>

                {/* Description */}
                <p className="text-sm text-base-content/60 line-clamp-2">
                    {book.description}
                </p>

                {/* Price & Rating */}
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-primary">
                        ৳{book.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-1">
                        <span className="text-warning">★</span>
                        <span className="font-semibold">
                            {book.rating}
                        </span>
                    </div>
                </div>

                <div className="divider my-0"></div>

                {/* Category & Stock */}
                <div className="flex justify-between items-center">
                    <span className="badge badge-outline">
                        {book.category}
                    </span>

                    <span className="text-xs text-success font-medium">
                        {book.stock} Available
                    </span>
                </div>

                {/* Action Button */}
                <div className="card-actions mt-2">
                    <button className="btn btn-primary w-full rounded-xl hover:scale-[1.02] transition-transform">
                        <span>Buy Book</span>
                        <span>→</span>
                    </button>
                </div>

            </div>
        </div>

    );
};

export default BookCard;