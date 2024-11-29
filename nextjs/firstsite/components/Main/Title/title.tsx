import React from 'react';
import styles from './title.module.css';
// Props の型を定義
interface TitleProps {
    title: string;        // title の型を string に指定
    description: string;  // description の型を string に指定
}
export function Title({ title, description }: TitleProps) { // Props を受け取る
    return (
        <div className={styles.title}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={styles.border}></div>
        </div>
    );
}