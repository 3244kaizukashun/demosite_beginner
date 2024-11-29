import React from 'react';
import Image from 'next/image';
import styles from './mainvisual.module.css';


export function Mainvisual() {
  return (
    <section className={styles.mainvisual}>
        <div  style={{ position: "relative", width: "100%", height: "500px" }}>
        <Image src="/img/mainvisual.jpg" alt="" layout="fill" objectFit="cover" />
        </div>
    </section>
  );
}