/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Header({ title }) {
    return (
        <div className={'text-2xl text-center'}>
            <h1>{title}</h1>
        </div>
    );
}
