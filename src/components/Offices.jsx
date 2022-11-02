import React from 'react';
import Divider from './Divider';

const brandOffices = [
    {
        name: 'Tijuana',
        phone: '(664) xxx xxxx',
        email: 'contacto@aliusmx.com',
    },
    {
        name: 'Tecate',
        phone: '(664) xxx xxxx',
        email: 'contacto@aliusmx.com',
    },
    {
        name: 'Ensenada',
        phone: '(664) xxx xxxx',
        email: 'contacto@aliusmx.com',
    },
];

function Offices() {
    return (
        <div className="max-w-6xl flex flex-col justify-center items-center h-[500px] w-full">
            <div className="flex flex-col justify-start md:w-[45%] sm:w-[10%]">
                <h1 className="text-3xl">Oficinas</h1>
                <Divider styles="mb-8" />
                <div className="flex flex-col py-2">
                    {brandOffices.map(({ name, phone, email }) => (
                        <div className="flex flex-row mb-8">
                            <div className="flex flex-col">
                                <p className="text-xl">{name}</p>
                                <p className="text-sm">{phone}</p>
                                <p className="text-sm">{email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Offices;
