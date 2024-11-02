import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';
import classNames from 'classnames';
import { Title } from '../Title/title';


export function About() {
    const title = 'ABOUT'; // 状態を管理しない
    const description = '私たちについて'; // 状態を管理しない
  return (
    <section  className={classNames(styles.flex, styles.about)} >
        <div className={styles.about_image}>
            <Image src="/img/about.jpg" alt="" width={500} height={300}/>
        </div>
        <div className={styles.about_text}>
            <Title title={title} description={description}/>
            <p className={styles.about_p}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
            </p>
        </div>
    </section>
  );
}

