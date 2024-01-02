const API_URL = 'https://bockle.ru/place-order.php';

export const placeOrder = async (order: {
    MNT_TRANSACTION_ID: string;
    USER_NAME: string;
    USER_EMAIL: string;
    USER_PHONE: string;
    USER_CITY: string;
    USER_ADDRESS: string;
    USER_ZIP: string;
    PRODUCT_ID: string;
}) => {
    
    // post with form data

    const formData = new FormData();
    formData.append('MNT_TRANSACTION_ID', order.MNT_TRANSACTION_ID);
    formData.append('USER_NAME', order.USER_NAME);
    formData.append('USER_EMAIL', order.USER_EMAIL);
    formData.append('USER_PHONE', order.USER_PHONE);
    formData.append('USER_CITY', order.USER_CITY);
    formData.append('USER_ADDRESS', order.USER_ADDRESS);
    formData.append('USER_ZIP', order.USER_ZIP);
    formData.append('PRODUCT_ID', order.PRODUCT_ID);

    return fetch(API_URL, {
        method: 'POST',
        body: formData,
    });

}