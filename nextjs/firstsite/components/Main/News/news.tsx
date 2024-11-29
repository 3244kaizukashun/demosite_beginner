import { Title } from '../Title/title';
import styles from './news.module.css';

export function News() {
    const title = 'NEWS'; // 状態を管理しない
    const description = 'ニュース'; // 状態を管理しない
  return (
    <section className={styles.news}>
        <Title title={title} description={description}/>
        <ul>
            <li className={styles.list}>
                <div className={styles.flex_list}>
                    <p>2021.01.01</p>
                    <p className={styles.tag}>NEWS</p>
                </div>
                <p >タイトルタイトルタイトルタイトル</p>
            </li>
            <li>
                <div className={styles.flex_list}>
                    <p>2021.01.01</p>
                    <p className={styles.tag}>NEWS</p>
                </div>
                <p >タイトルタイトルタイトルタイトル</p>
            </li>
            <li>
                <div className={styles.flex_list}>
                    <p>2021.01.01</p>
                    <p className={styles.tag}>NEWS</p>
                </div>
                <p >タイトルタイトルタイトルタイトル</p>
            </li>
            
        </ul>
    </section>
  );
}