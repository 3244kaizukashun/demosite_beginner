import React from 'react';
import Image from 'next/image';
import styles from './business.module.css';
import classNames from 'classnames';
import { Title } from '../Title/title';


export function Business() {
    const title = 'BUSINESS'; // 状態を管理しない
    const description = '事業内容'; // 状態を管理しない
  return (
    <section className={styles.business}>
        <Title title={title} description={description}/>
        <div className={styles.flex}>
            <div className={styles.left}>
                <div className={classNames(styles.item ,styles.left_top)}>
                    <h2>- Web制作・マーケティング</h2>
                    <Image src="/img/business1.jpg" alt="" width={500} height={300} />
                </div>
                <div className={styles.item}>
                    <h2>- インターネットメディア事業</h2>
                    <Image src="/img/business2.jpg" alt="" width={500} height={300} />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.item}>
                    <h2>- プロモーション企画・制作</h2>
                    <Image src="/img/business3.jpg" alt="" width={500} height={300} />
                </div>
                <div className={classNames(styles.item ,styles.right_bottom)}>
                    <h2>- ソーシャル企画・運営</h2>
                    <Image src="/img/business4.jpg" alt="" width={500} height={300} />
                </div>
            </div>
        </div>
    </section>
  );
}