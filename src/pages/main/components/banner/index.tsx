import React from 'react';
// import { Button } from '../../../../components/button';
// import { Checkbox } from '../../../../components/checkbox';
import { Filters } from '../../../../components/filters';
import styles from './style.module.scss';

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.banner__left}>
          <hr className={styles.hr} />
          <h2 className={styles.title}>Сервис бронирования и покупки квартир</h2>
          <p className={styles.desc}>
            Вы можете зафиксировать стоимость квартиры, забронировав ее на нашем сайте бесплатно
          </p>
        </div>
        <Filters />
      </div>
    </section>
  );
};
