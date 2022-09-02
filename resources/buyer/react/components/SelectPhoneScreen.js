import React from "react";
// https://github.com/ushelp/EasyQRCodeJS#react-support
import BankList from "./BankList";

import logoWhiteText from '../img/logo_icon_text.svg';
import { formatDivider } from './utils';

export default function SelectPhoneScreen({ phoneList, setSellerPhone }) {

    // loop through phoneList and create a list of phone numbers
    const phoneListItems = phoneList.map((phone, index) => {
        return (

            <div className="flex flex-col w-48" onClick={()=>setSellerPhone(phone)}>
                <div className="p-3 bg-gray-800 rounded-md transition duration-100 ease-in-out shadow hover:shadow-md hover:bg-gray-900 cursor-pointer">
                    <div className="font-mono text-xs text-gray-400 text-center normal-case">
                        <p className="text-left">{phone?.bank_name}</p>
                    </div>
                    <div className="font-mono text-xs text-gray-400 text-center normal-case mt-3 mb-1">
                        <p className="text-left">{phone?.seller_name}</p>
                    </div>
                    <div className="font-mono text-xs text-gray-400 text-center normal-case">
                        <h2 className="text-xl text-right">{formatDivider(phone?.number, '::', "ml-1 text-gray-500", 4)}</h2>
                    </div>

                </div>
            </div>
        );
    });

    return (
        <main className="flex w-full h-full">
            <div className="flex flex-col w-full min-h-screen bg-gray-700 pt-8 md:py-12 lg:py-24">
                <div className="flex flex-col items-center h-full">
                    {/* show label text "Número" white text */}
                    <div className="flex flex-col w-full max-w-xs space-y-6 items-center">

                        <section className="mb-5 ">
                            <div className="text-gray-400 text-center">
                                <a
                                    className="flex items-center justify-center"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={logoWhiteText} alt="Vercel Logo" className="h-12" />
                                </a>
                            </div>
                        </section>

                        <div className="!mt-0 text-center">
                            <h1 className="text-white text-2xl normal-case mb-3">Selecione cuenta</h1>
                            <p className="mt-3 font-mono text-xs text-white">Selecione la cuenta a depositar</p>
                        </div>

                        {phoneListItems}

                    </div>
                </div>
            </div>
        </main>
    );
}
