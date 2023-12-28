import React, { useLayoutEffect, useMemo } from "react";
import { ECollection } from "../../data/types";
import { products } from "../../data/products";
import { ItemsList } from "../../components/itemslist";

type TCollection = {
    collectionId: ECollection;
}

export const CollectionPage: React.FC<TCollection> = ({collectionId}) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const productsFromCollection = useMemo(() => {
        return products.filter((product) => product.collections.includes(collectionId))
    }, [collectionId]);

    const collectionName = useMemo(() => {
        if (collectionId === ECollection.MEN) {
            return 'bockle menswear'
        }
        if (collectionId === ECollection.WOMAN) {
            return 'bockle womanswear'
        }

        return 'bockle fw24'
    }, [collectionId]);

    return (
        <div className="pt-10">
            <div className="w-full flex justify-center text-[32px] font-semibold " >
                <p>
                    {collectionName}
                </p>
            </div>
            <div className="w-full justify-center mt-12 grid md:px-[200px] items-center justify-items-center gap-8 md:gap-14 box-border pb-10"
                style={{
                    gridTemplateColumns: `repeat(auto-fit, minmax(500px, 1fr))`
                }}
            >
                <ItemsList products={productsFromCollection} />
            </div>
            
        </div>
    );
}