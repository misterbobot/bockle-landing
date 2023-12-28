import React from "react";
import { ProductItem } from "../../data/types";
import { ProductCard } from "../productCard/productCard";

type TItemsProps = {
    products: ProductItem[]
}

export const ItemsList: React.FC<TItemsProps> = ({ products }) => {
    return (
        <>
            {
                products.map((product) => {
                    return (
                        <div className="  ">
                            <ProductCard product={product} /> 
                        </div>
                    );
                })
            }
        </>
    );
}