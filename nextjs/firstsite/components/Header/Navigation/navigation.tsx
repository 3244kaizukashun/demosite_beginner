import React from 'react';
import styles from './navigation.module.css';
import Link from 'next/link';


export function Navigation() { 
    return (
    <nav className={styles.nav}>
        <ul>
        <li><Link href="/news">NEWS</Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/business">BUSINESS</Link></li>
        <li><Link href="/company">COMPANY</Link></li>
        </ul>
    </nav>
    );
}


