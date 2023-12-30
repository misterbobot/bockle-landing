import React, { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { Button } from "../../components/button/button";


import Arrow from './arrow.svg';
import { useWindowSize } from "@uidotdev/usehooks";

type TItemPageParams = {
    productId: string;
}
const IMAGE_WIDTH = '40vw';

export const ItemPage: React.FC = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const swiperElRef = useRef(null);

    const { width: windowWidth } = useWindowSize();

    const { productId } = useParams<TItemPageParams>();
    const navigate = useNavigate();

    const item = useMemo(() => {
        return products.find(product => product.id === productId);
    }, [productId])

    const handlePrevious = useCallback(() => {
        // @ts-ignore
        swiperElRef?.current.swiper.slidePrev();

      }, [swiperElRef]);
   
      const handleNext = useCallback(() => {
        // @ts-ignore
        swiperElRef.current.swiper.slideNext();
      }, [swiperElRef]);

    return (
        <div className="px-[30px] w-full flex box-border items-center justify-center relative flex-wrap "
            style={{
                height: windowWidth && windowWidth > 1000 ? `calc(100vh - 61px)` : 'auto'
            }}
        >
            <div className="flex items-center justify-center sm:w-auto w-full h-full">
            <div onClick={handlePrevious} className="min-w-10 cursor-pointer ">
                <img src={Arrow} alt="" />
            </div>
            <swiper-container
            ref={swiperElRef}
                style={{
                    width: windowWidth && windowWidth > 1000 ? `calc(${IMAGE_WIDTH} + 30px)` : '65vw',
                    marginLeft: '15px',
                    marginRight:  windowWidth && windowWidth > 1000 ? '0px' : '15px',
                    height: '100%'
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    item?.images.map((image) => {
                        return (
                            <swiper-slide>
                                <img
                                    src={image}
                                    alt={item.name}
                                    style={{
                                        height: windowWidth && windowWidth > 1000 ? `100%` : '50vh',
                                        width: windowWidth && windowWidth > 1000 ? IMAGE_WIDTH : '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </swiper-slide>
                        );
                    })
                }
            </swiper-container>
            <div onClick={handleNext} className="cursor-pointer min-w-10">
                <img src={Arrow} 
                    alt="arrow-next"
                    style={{
                        'transform': 'rotate(180deg)',
                    }}
                 />
            </div>
            </div>
            <div className="flex-1 box-border md:px-20 px-1 h-full flex flex-col mt-10 md:mt-0 items-center md:items-start overflow-auto min-w-[200px]"
                style={{
                    justifyContent: 'safe center'
                }}
            >
                    <p className="text-black text-[64px] font-semibold md:leading-[60px] md:mb-10 mb-0  leading-[54px] text-center">
                        {item?.name}
                    </p>
                    <div>
                        <p className="text-black text-[40px] font-semibold md:text-left text-center md:mb-0 mb-10">
                            {item?.priceRub}₽
                        </p>
                        <div className="flex gap-10 flex-wrap md:mb-10 mb-0 md:w-100 w-full ">
                            <p className="text-black text-2xl font-semibold md:text-left text-center ">
                                {item?.description}
                            </p>
                            <p className="text-black text-2xl font-semibold md:text-left text-center">
                                All items are refundable within 14 days of purchase. Contact us for more information.
                            </p>
                        </div>
                    </div>
                    <Button text="Buy" className="w-[250px] md:mt-10 mt-10 mb-20 md:mb-5" onClick={() => {
                        navigate('/checkout/'+productId)
                    }}  />
                </div>
        </div>
    );
}