import React from 'react';
import styles from './style.module.scss';
// import clsx from 'clsx';
import { ReactComponent as ArrowLinkIcon } from '../../../../assets/svg/arrow-link.svg';

export const ApartmentTypeSearch = () => {
  return (
    <section className={styles.apartment}>
      <div className="container">
        <div className="heading mb50">
          <h2 className="">Поиск квартир по типу планировки</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <h4 className={styles.link__text}>Классика</h4>
            <ArrowLinkIcon className={styles.link__icon} />
          </div>
          <div className={styles.link}>
            <h4 className={styles.link__text}>Студия</h4>
            <ArrowLinkIcon className={styles.link__icon} />
          </div>
          <div className={styles.link}>
            <h4 className={styles.link__text}>Европланировка</h4>
            <ArrowLinkIcon className={styles.link__icon} />
          </div>
          <div className={styles.link}>
            <h4 className={styles.link__text}>Двухуровневые</h4>
            <ArrowLinkIcon className={styles.link__icon} />
          </div>
          <div className={styles.link}>
            <h4 className={styles.link__text}>Пентхаус</h4>
            <ArrowLinkIcon className={styles.link__icon} />
          </div>
          <div className={styles.link}>
            <h4 className={styles.link__text}>Свободной планировки</h4>
            <ArrowLinkIcon className={styles.link__icon} />
          </div>
        </div>
      </div>
    </section>
  );
};
