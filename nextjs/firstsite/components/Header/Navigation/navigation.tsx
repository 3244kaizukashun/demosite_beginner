import React from 'react';
import styles from './navigation.module.css';
import Link from 'next/link';


export function Navigation() { 
    return (
    <nav className={styles.nav}>
        <ul>
        <li><a href="#">NEWS</a></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><a href="#">BUSINESS</a></li>
        <li><a href="#">COMPANY</a></li>
        </ul>
    </nav>
    );
}


