
import { ProductItem } from "../data/types";
import { MNT_CURRENCY_CODE, MNT_ID, MNT_SUCCESS_URL } from "./consts";
export const generatePaymentUrl = (item: ProductItem, userEmail: string) => {
    const MNT_TRANSACTION_ID = Date.now().toString()+item.id;
    const params = new URLSearchParams({
        MNT_ID: MNT_ID,
        MNT_TRANSACTION_ID: MNT_TRANSACTION_ID,
        MNT_CURRENCY_CODE: MNT_CURRENCY_CODE,
        MNT_SUCCESS_URL: MNT_SUCCESS_URL,
        MNT_SUBSCRIBER_ID: userEmail,
        MNT_AMOUNT: item.priceRub.toString(),
        MNT_DESCRIPTION: `BOCKLE: ${item.name} | FW24`,
        UMAIL_USER_EMAIL: userEmail,
    });

    const baseUrl = 'https://payanyway.ru/assistant.htm';

    return `${baseUrl}?${params.toString()}`;
}