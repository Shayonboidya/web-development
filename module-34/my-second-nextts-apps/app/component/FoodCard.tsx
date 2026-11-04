import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface IFood {
    id: string;
    dish_name: string;
    rating: number;
    price: number;
    image_link: string;
}
const FoodCard = ({ food }: { food: IFood }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                {/* <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" /> */}
                <Image
                    src={food.image_link}
                    width={400}
                    height={400}
                    alt={food.dish_name}
                >
                </Image>

            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {food.dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <Link href={`/manu/${food.id}`}>
                        <div className="badge badge-outline">view details</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;