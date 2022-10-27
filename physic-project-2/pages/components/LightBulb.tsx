import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
export default function LightBulb() {

    return (
        <div>
            <div className='light'>
                <div className='bulb'></div>
            </div>
        </div>
    )
}
