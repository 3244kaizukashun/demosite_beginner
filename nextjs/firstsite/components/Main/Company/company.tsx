import React from 'react';
import Image from 'next/image';
import styles from './company.module.css';
import classNames from 'classnames';
import { Title } from '../Title/title';


export function Company() {
    const title = "COMPANY";
    const description = '会社概要';
  return (
    <section className={classNames(styles.flex ,styles.dl)}>
    <div className={styles.company_text}>
        <Title title={title} description={description}/>
        <div className={styles.graf}>
            <dl className={classNames(styles.flex ,styles.dl)}>
                <dt className={styles.dt}>会社名</dt>
                <dd className={styles.dd}>ウェブエンターテイメントデザイン株式会社</dd>
            </dl>
            <dl className={classNames(styles.flex ,styles.dl)}>
                <dt className={styles.dt}>所在地</dt>
                <dd className={styles.dd}>東京都渋谷区桜丘町99-9 West Building 3F</dd>
            </dl>
            <dl className={classNames(styles.flex ,styles.dl)}>
                <dt className={styles.dt}>代表</dt>
                <dd className={styles.dd}>ＸＸＸＸＸＸ</dd>
            </dl>
            <dl className={classNames(styles.flex ,styles.dl)}>
                <dt className={styles.dt}>設立</dt>
                <dd className={styles.dd}>2021年1月1日</dd>
            </dl>
            <dl className={classNames(styles.flex ,styles.dl)}>
                <dt className={styles.dt}>資本金</dt>
                <dd className={styles.dd}>3,000,000円</dd>
            </dl>
            <dl className={classNames(styles.flex ,styles.dl)}>
                <dt className={styles.dt}>事業内容</dt>
                <dd className={styles.dd}>Web制作・マーケティング<br/>
                    インターネットメディア事業<br/>
                    プロモーション企画・制作<br/>
                    ソーシャル企画・運営<br/>
                </dd>
            </dl>
        </div>
    </div>
    <div className={styles.company_image}>
        <div className={styles.cmpany_center}>
            <Image src="/img/company.jpg" alt="" width={500} height={300}/> 
        </div>
    </div>
</section>
  );
}