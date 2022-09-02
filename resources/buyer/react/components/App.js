import React, { useEffect, useState } from "react";
import ActivePhone from "./ActivePhone";
import SelectPhoneScreen from "./SelectPhoneScreen";
// https://github.com/ushelp/EasyQRCodeJS#react-support


export default function App({order: oo}) {
    const [order, _] = useState(oo);

    const [phoneList, _s] = useState(order.phones);
    // bank_name: "BCR"
    // number: "2222-2222"
    // seller_name: "Jhon"
    const [sellerPhone, setSellerPhone] = useState(false);

    // check if phoneList is more than one and sellerPhone is null
    useEffect(() => {
        if (phoneList && phoneList?.length == 1) {
            console.log("set active phone", phoneList[0]);
            setSellerPhone(phoneList[0]);
        }
    }, []);

    const renderSellerPhone = () => {
        const gobackPhoneList = (phoneList && phoneList.length > 1);
        // const gobackPhoneList = true;
        if (sellerPhone){
            return <ActivePhone sellerPhone={sellerPhone} order={order} gobackPhoneList={gobackPhoneList} setSellerPhone={setSellerPhone} />
        }
    }

    return (
        <div className="flex flex-col items-center min-h-screen min-w-screen">

            {phoneList && phoneList.length > 1 && !sellerPhone &&
                <SelectPhoneScreen phoneList={phoneList} setSellerPhone={setSellerPhone} />
            }
            {
            renderSellerPhone()
            }
        </div>
    )
}
