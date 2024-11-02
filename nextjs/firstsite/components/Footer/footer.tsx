import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';


export function Footer() {
  return (
   <footer className={styles.footer} >
        <div className={styles.flex}>
            <div className={styles.logo}>
                <a href="#"><Image src="img/logo.svg" alt="" width={150} height={50}/></a>
            </div>
            <div className={styles.footer_text}>
                <p>Web Entertainment Design Inc. <br/>
                    West Building 3F <br/>
                    9-99 Sakuragaokacho Shibuya-ku <br/>
                    Tokyo, Japan 150-0031 <br/>
                    T/99-9999-9999
                </p>
            </div>
        </div>
        <p>© Web Entertainment Design Inc</p>
    </footer>
  );
}
     
    