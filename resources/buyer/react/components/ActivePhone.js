import React, { useEffect } from "react";
// https://github.com/ushelp/EasyQRCodeJS#react-support
import QRCode from "easyqrcodejs";
import BankList from "./BankList";

import logoBlackText from '../img/logo_icon_dark_text_sinpay.svg';
import logoWhiteText from '../img/logo_icon_text.svg';
import { formatDivider } from './utils';

export default function ActivePhone({ sellerPhone, order, gobackPhoneList, setSellerPhone }) {

    const webQRCode = React.useRef();

    useEffect(() => {
        const size = 150;
        new QRCode(webQRCode.current,
            {
                text: "https://github.com/ushelp/EasyQRCodeJS",
                width: size,
                height: size,
            });
    }, [webQRCode]);


    const smsQRCode = React.useRef();

    useEffect(() => {
        const size = 90;
        new QRCode(smsQRCode.current,
            {
                text: "https://github.com/ushelp/EasyQRCodeJS",
                width: size,
                height: size,
            });
    }, [smsQRCode]);

    return (
        <main className="flex w-full h-full">
            {/* 2 divided sections, one for each side of the screen. max height is set to the height of the screen */}
            <div className="hidden md:flex flex-col w-1/2 min-h-screen bg-gray-50 md:py-12 lg:py-24">
                <div className="flex flex-col items-center h-full">
                    <div className="space-y-6 font-mono capitalize text-center font-bold text-gray-600 ">
                        {/* Float left position relative goBack menu button */}

                        <h1 className="text-2xl normal-case">Detalle de la Orden</h1>

                        <div>
                            <h1 className="text-xl font-light">Total:</h1>
                            <h2 className="text-3xl">{formatDivider(order?.amount, "CRC ", "ml-1 text-gray-500")}</h2>
                        </div>

                        <div>
                            <h1 className="text-xl font-light">Número:</h1>
                            <h2 className="text-2xl">{formatDivider(sellerPhone?.number, '', "ml-1 text-gray-500", 4)}</h2>
                        </div>

                        <div>
                            <h1 className="text-xl font-light">Nombre:</h1>
                            <h2 className="text-2xl">{sellerPhone?.seller_name}</h2>
                        </div>

                        <div>
                            <div className="flex flex-col items-center" ref={webQRCode}></div>
                            {/* powered by sinpay terms - privacy */}
                            <div className="mt-3 font-mono text-xs text-gray-400 text-center font-normal normal-case">
                                <p>Escanear para redirigir</p>
                                <p>a esta página</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="flex items-center justify-center w-full">
                    <div className="text-gray-400 text-center">
                        <a
                            className="flex items-center justify-center"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={logoBlackText} alt="SINPAY Logo" className="h-20" />
                        </a>
                        {/* powered by sinpay terms - privacy */}
                        <div className="mt-3 font-mono text-xs">
                            <p>Powered by sinpay</p>
                            <p>Terms - Privacy</p>
                        </div>
                    </div>
                </footer>
            </div>

            <div className="flex flex-col w-full md:w-1/2 min-h-screen bg-gray-700 pt-8 md:py-12 lg:py-24">
                <div className="flex flex-col items-center h-full">
                    {/* show label text "Número" white text */}
                    <div className="flex flex-col w-full max-w-xs space-y-6">

                        <footer className="mb-5 md:hidden">
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
                        </footer>

                        <div className="!mt-0 text-center">
                            <h1 className="text-white text-2xl normal-case">Detalle del pago</h1>
                            <p className="mt-3 font-mono text-xs text-white">Use estos datos en su app sinpe o genere el SMS</p>
                        </div>
                        <div>
                            <h1 className="text-white mb-2">Número <span className="md:hidden italic text-sm">- {sellerPhone?.seller_name}</span>  {gobackPhoneList &&

                                <span className="text-sm text-bolder cursor-pointer hover:text-gray-300" onClick={()=>setSellerPhone(false)}>- Cambiar cuenta</span>

                            }</h1>
                            <div className="bg-gray-100 hover:bg-gray-300 hover:cursor-pointer shadow-md px-1 py-2 text-center font-mono font-bold text-gray-600 rounded-sm relative">

                                <div className="absolute p-1 -top-3 -right-3 bg-gray-100 hover:bg-gray-300 hover:cursor-pointer rounded">
                                    {/* h6 -> height: 1.5rem; */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                </div>

                                <h1 className="text-2xl">{formatDivider(sellerPhone?.number, '', "ml-1 text-gray-500", 4)}</h1>


                            </div>
                        </div>

                        <div>
                            <h1 className="text-white  mb-2">Monto</h1>
                            <div className="bg-gray-100 hover:bg-gray-300 hover:cursor-pointer shadow-md px-1 py-2 text-center font-mono font-bold text-gray-600 rounded-sm relative">

                                <div className="absolute p-1 -top-3 -right-3 bg-gray-100 hover:bg-gray-300 hover:cursor-pointer rounded">
                                    {/* h6 -> height: 1.5rem; */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                </div>

                                <h1 className="text-2xl">{formatDivider(order?.amount, "", "ml-1 text-gray-500")}</h1>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-white  mb-2">Detalle</h1>
                            <div className="bg-gray-100 hover:bg-gray-300 hover:cursor-pointer shadow-md px-1 py-2 text-center font-mono font-bold text-gray-600 rounded-sm relative">

                                <div className="absolute p-1 -top-3 -right-3 bg-gray-100 hover:bg-gray-300 hover:cursor-pointer rounded">
                                    {/* h6 -> height: 1.5rem; */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                </div>

                                <h1 className="text-2xl">{formatDivider(order?.otp, '', "ml-1 text-pink-500", 4)}</h1>

                            </div>
                            <div className="flex flex-col items-center mt-3 font-mono text-xs text-center text-white">

                                {/* inline block */}
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" inline-block text-yellow-300 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block text-yellow-300 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <p>Este código identifica la transacción</p>
                            </div>
                        </div>

                        {/* divider */}
                        <div className="border-b border-gray-200"></div>
                        <div>
                            <h1 className="text-white  mb-2">Banco</h1>
                            <BankList />
                        </div>

                        <div className="flex flex-col items-center order-last md:order-none !mt-4 md:!mt-6">
                            <div className="p-3 bg-gray-800 rounded-md">
                                <div className="p-2 bg-white rounded-md" ref={smsQRCode}></div>

                                <div className="mt-3 font-mono text-xs text-gray-400 text-center font-normal normal-case">
                                    <p>Enviar sms</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer select-none">
                            <div className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md w-48">
                                <div className="flex flex-col items-center">

                                    <div className="text-center">
                                        <p className="text-sm w-full">
                                            <span>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                </svg>
                                            </span>
                                            Enviar SMS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
