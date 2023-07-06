/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Header({ title }) {
    return (
        <div className={'text-2xl bg-black text-white'}>
            <h1>{title}</h1>
        </div>
    );
}
