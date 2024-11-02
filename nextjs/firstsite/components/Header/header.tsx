import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import { Navigation } from './Navigation/navigation';
import Link from 'next/link';


export function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/img/logo.svg" alt="logo" width={150} height={50} />
            </Link>
          </div>
        <Navigation />
        </div>
        <div className={styles.conect}><a href="#">お問い合わせ</a></div>
      </header>
  );
}