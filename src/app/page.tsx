import {
  About,
  Gallery,
  HeaderBlock,
  Price,
  Promo,
} from '@/containers/MainPage';

import styles from './page.module.scss';

export default async function Home() {
  return (
    <div className={styles.page}>
      <HeaderBlock />
      <About className={styles.about} />
      <Price className={styles.price} />
      <Promo className={styles.promo} />
      <Gallery className={styles.gallery} />
    </div>
  );
}
