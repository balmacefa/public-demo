/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const bankList = [
    {
        name: 'Bac San José',
        smsTo: ['7070', '1222'],
        details: 'Canal Autenticado: ₡500.000 Diarios y SMS: ₡100.000 diarios.\nUS$3,00 en montos superiores a ₡100.000 diarios',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Bac_credomatic_logo.png'
    },
    {
        name: 'Banco de Costa Rica',
        smsTo: ['2276'],
        details: 'Envío: ₡200.000 diarios. Sin costo comisión',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/LOGO_BCR.svg'
    },
    {
        name: 'Banco Nacional',
        smsTo: ['2627'],
        details: 'Envío: ₡200.000 diarios. Sin costo comisión',
        image: 'https://www.bncr.fi.cr/_themesdelivery/Banco-NacionalTheme/assets/images/logo.png'
    },
    {
        name: 'Banco Promérica',
        smsTo: ['6223', '2450'],
        details: 'Envíos hasta ₡100.000 sin costo y superiores $3.0 cada transacción.',
        image: 'https://www.promerica.fi.cr/media/1004/promerica_cr_155x90png.png'
    },
    {
        name: 'Banco Lafise',
        smsTo: ['9091'],
        details: 'Envío: ₡100.000 diarios. Sin costo comisión',
        image: 'https://www.lafise.com/Portals/0/Logo_LAFISEultimo2.png?ver=2020-03-11-120637-857'
    },
    {
        name: 'Banco Davivienda',
        smsTo: ['7070', '7474'],
        details: 'Envío: ₡100.000 diarios. Sin costo comisión',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Davivienda_logo.svg'
    },
    {
        name: 'Banco BCT',
        smsTo: ['60400300', '60409091'],
        details: 'Envíos hasta ₡100.000 sin costo y superiores ₡2.500 cada transacción.',
        image: 'https://pbs.twimg.com/profile_images/378800000539770036/700bce84fd1b7cf1889a06d53e479d92_400x400.jpeg'
    },
    {
        name: 'Grupo Mutual Alajuela',
        smsTo: ['7070', '7079'],
        details: 'Envío: ₡200.000 diarios. Sin costo comisión',
        image: 'https://gmapp.fi.cr/biblioteca//1/logos//logoGM.png'
    },
    {
        name: 'MUCAP',
        smsTo: ['6222', '9525'],
        details: 'Envío: ₡250.000 diarios, excepto en SMS:₡150.000. Sin costo comisión',
        image: 'https://www.mucap.fi.cr/images/logoMucap50Aniversario.png'
    },
    {
        name: 'Caja de Ande',
        smsTo: ['6222', '9532'],
        details: 'Envío: ₡300.000 diarios. Sin costo comisión',
        image: 'https://www.cajadeande.fi.cr/assets/img/v2/logo_v2.png'
    },
    {
        name: 'Coopealianza',
        smsTo: ['6222', '9523'],
        details: 'Envío: ₡200.000 diarios. Sin costo comisión',
        image: 'https://bkly.blob.core.windows.net/$web/StaticContent/App_Themes/CR_Coopealianza/Images/bankLogo.png'
    },
    {
        name: 'Coopecaja',
        smsTo: ['6222', '9526'],
        details: 'Envío: ₡200.000 diarios. Sin costo comisión',
        image: 'http://coopecaja.fi.cr/images/Interfaz-pasiva_14.jpg'
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function BankList() {
    const [selected, setSelected] = useState(bankList[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="mt-1 relative">
                        <Listbox.Button className="relative w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="flex items-center">
                                <img decoding="async" src={selected.image} alt="" className="flex-shrink-0 h-6" />
                                <span className="ml-3  font-mono capitalize text-gray-600 truncate font-semibold">{selected.name}</span>
                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-gray-100 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {bankList.map((bank) => (
                                    <Listbox.Option
                                        key={bank.name}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'bg-gray-300' : '',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={bank}
                                    >
                                        {({ selected, active }) => (
                                            <div className="py-1">
                                                <div className="flex flex-row justify-between">
                                                    <p
                                                        className={
                                                            classNames(
                                                                selected ? 'font-semibold' : 'font-normal',
                                                                'font-mono capitalize truncate text-gray-600')}
                                                    >
                                                        {bank.name}
                                                    </p>
                                                    <img  decoding="async" src={bank.image} alt="" className="h-6 mr-1" />
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </div>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
