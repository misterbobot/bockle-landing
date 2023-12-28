import React from "react";
import { ProductItem } from "../../data/types"
import { useNavigate } from "react-router-dom";

type TProductCardProps = {
    product: ProductItem;
}

export const ProductCard: React.FC<TProductCardProps> = ({ product }: TProductCardProps) => {

    const navigate = useNavigate();

    return (
        <div
            className="border border-black flex flex-col sm:w-[400px] cursor-pointer"
            onClick={() => {
                navigate('/item/'+product.id)
            }}
        >
            <img
                src={product.image}
                alt={product.name}
                className="border-0 border-b border-black h-[500px] object-cover"
            />
            <div className="flex p-3 justify-between items-center">
                <p className="text-black text-xl font-semibold ">
                    {product.name}
                </p>
                <p className="text-black text-xl font-semibold -mt-1">
                    {product.priceRub}₽
                </p>
            </div>

        </div>
    );
}