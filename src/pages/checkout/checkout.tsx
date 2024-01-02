import React, { useLayoutEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { Button } from "../../components/button/button";
import { useWindowSize } from "@uidotdev/usehooks";
import { generatePaymentUrl } from "../../utils/generatePaymentUrl";
import { placeOrder } from "../../api/placeOrder";

type TChechoutPageParams = {
    productId: string;
}

type TCheckoutUserData = {
    name: string | null;
    email: string | null;
    phone: string | null;
    city: string | null;
    address: string | null;
    zip: string | null;
}

export const CheckoutPage: React.FC = (
) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const {productId} = useParams<TChechoutPageParams>();

    const product = useMemo(() => {
        return products.find(product => product.id === productId);
    }, [productId]);

    const [error, setError] = useState<string | null>(null);
    const { width: windowWidth } = useWindowSize();

    const [userData, setUserData] = useState<TCheckoutUserData>({
        name: null,
        email: null,
        phone: null,
        city: null,
        address: null,
        zip: null,
    });

    const changeUserData = (key: keyof TCheckoutUserData, value: string) => {
        setUserData({
            ...userData,
            [key]: value
        })
    }

    const areAllFieldsFilled = useMemo(() => {

        const userDataValues = Object.values(userData);


        return userDataValues.every((value) => {
            return value !== null && value !== '';
        })
    }, [userData]);

    const handleCheckout = async () => {
        if (!areAllFieldsFilled) {
            setError('please, fill all the fields');

            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
              });

            return;
        }

        if (product ){

        const MNT_TRANSACTION_ID = Date.now().toString()+product.id;

        const url = generatePaymentUrl(product, userData.email || '', MNT_TRANSACTION_ID)

        placeOrder({
            MNT_TRANSACTION_ID: MNT_TRANSACTION_ID,
            USER_NAME: userData.name || '',
            USER_EMAIL: userData.email || '',
            USER_PHONE: userData.phone || '',
            USER_CITY: userData.city || '',
            USER_ADDRESS: userData.address || '',
            USER_ZIP: userData.zip || '',
            PRODUCT_ID: product.id,
        }).then((res) => {
            window.open(url, '_self');
        })
        }

        setError(null);
    }

    return (
        <div className="pt-10">
            <div className="w-full flex justify-center text-[32px] font-semibold items-center border-0 ssm:border-b-0 border-b border-solid border-black ssm:pb-0 pb-10" >
                <p>
                    checkout
                </p>
            </div>
            <div className="w-full flex justify-center text-[18px] font-bold items-center -mt-1 text-red-500" >
                <p>
                    {error}
                </p>
            </div>
            <div className="ssm:mt-20 mt-8">
                <div className="flex w-full justify-center flex-wrap pb-[100px]">
                    <div className="flex flex-col ssm:items-start items-center  border-0 ssm:border-r ssm:border-b-0 border-b border-solid border-black ssm:pr-12 pr-0">
                        <p className="text-black text-[32px] font-semibold text-center">
                            personal information
                        </p>
                        <div className="flex ssm:mt-[100px] mt-8 items-center">
                            <p className="text-black text-[32px] font-semibold mr-5 w-[90px]">
                                name
                            </p>
                            <input className="border border-black h-8 px-2 w-min" value={
                                userData.name || ''
                            } onInput={
                                (e) => {
                                    changeUserData('name', (e.target as HTMLInputElement).value)
                                }
                            }  />
                        </div>
                        <div className="flex mt-[30px] items-center">
                            <p className="text-black text-[32px] font-semibold mr-5 w-[90px]">
                                phone
                            </p>
                            <input  className="border border-black h-8 px-2 w-min" value={
                                userData.phone || ''
                            } onInput={
                                (e) => {
                                    changeUserData('phone', (e.target as HTMLInputElement).value)
                                }
                            }  />
                        </div>
                        <div className="flex mt-[30px] items-center">
                            <p className="text-black text-[32px] font-semibold mr-5 w-[90px]">
                                email
                            </p>
                            <input type="email"  className="border border-black h-8 px-2 w-min" value={
                                userData.email || ''
                            } onInput={
                                (e) => {
                                    changeUserData('email', (e.target as HTMLInputElement).value)
                                }
                            }  />
                        </div>
                        <div className="mt-[30px] ssm:w-[330px] w-full box-border text-center ssm:text-left px-10 ssm:px-0 pb-8 ssm:pb-0">
                            <p className="font-semibold"> 
                                Please ensure that your email address is correct as we will send your order confirmation and tracking information to this email address.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col border-0 ssm:border-r ssm:border-b-0 border-b border-solid border-black ssm:px-12 ssm:mt-0 mt-6 pb-8 ssm:pb-0" >
                        <p className="text-black text-[32px] font-semibold text-center ">
                            shipping information
                        </p>
                        <div className="flex ssm:mt-[100px] mt-8 items-center">
                            <p className="text-black text-[32px] font-semibold mr-5 w-[120px]">
                                city
                            </p>
                            <input className="border border-black h-8 px-2 w-min" value={
                                userData.city || ''
                            } onInput={
                                (e) => {
                                    changeUserData('city', (e.target as HTMLInputElement).value)
                                }
                            }  />
                        </div>
                        <div className="flex mt-[30px] items-center">
                            <p className="text-black text-[32px] font-semibold mr-5 w-[120px]">
                                address
                            </p>
                            <input className="border border-black h-8 px-2 w-min" value={
                                userData.address || ''
                            } onInput={
                                (e) => {
                                    changeUserData('address', (e.target as HTMLInputElement).value)
                                }
                            }  />
                        </div>
                        <div className="flex mt-[30px] items-center">
                            <p className="text-black text-[32px] font-semibold mr-5 w-[120px]">
                                zip
                            </p>
                            <input className="border border-black h-8 px-2 w-min" value={
                                userData.zip || ''
                            } onInput={
                                (e) => {
                                    changeUserData('zip', (e.target as HTMLInputElement).value)
                                }
                            }  />
                            </div>
                    </div>
                    <div className="flex flex-col ssm:px-12 ssm:items-start items-center text-center ssm:text-left"
                        style={{
                            marginTop: windowWidth && windowWidth > 1286 ? '0px' : '32px'
                        }}
                    >
                        <p className="text-black text-[32px] font-semibold ">
                            checkout
                        </p>
                        <p className="text-black text-2xl font-semibold w-[350px] mt-8">
                            all items ships in 1 buisness day. delivery across the russia takes 3-5 days
                        </p>
                        <div className="mt-8 flex items-center">
                            <img src={product?.image} className="w-[150px] h-[195px] object-cover" alt={product?.name} />
                            <div className="flex flex-col ml-5">
                                <p className="text-black text-4xl font-semibold">
                                    {product?.name}
                                </p>
                                <p className="text-black text-xl font-semibold">
                                    {product?.priceRub}₽
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-12 items-center flex-wrap justify-center ssm:justify-start ssm:gap-10 gap-4">
                                <p className="text-black text-[32px] font-semibold">
                                    total: {product?.priceRub}₽
                                </p>
                                <Button text="continue" className="h-[38px] py-[1px] px-10 " onClick={handleCheckout} />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}