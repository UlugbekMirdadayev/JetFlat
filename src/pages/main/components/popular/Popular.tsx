import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import house from '../../../../assets/image/popular-img.jpg';
import houseBig from '../../../../assets/image/popular-big.jpg';
import { Button } from '../../../../components/button';

export const Popular = () => {
  return (
    <section className={styles.popular}>
      <div className="container">
        <div className="heading mb60">
          <div className="heading__line"></div>
          <h2 className="mb40">Популярные ЖК</h2>
          <p className="heading__desc">
            В этих популярных жилых комплексах вы точно найдёте что-нибудь для себя
          </p>
        </div>
        <div className={styles.list}>
          <Link to={'/'} className={clsx(styles.card, styles['card--big'])}>
            <div className={styles['card--big-half']}>
              <div className={clsx(styles.card__info, styles['card__info--big'])}>
                <h4 className={clsx(styles.card__title, 'cWhite')}>Repin Towers</h4>
                <p className={clsx(styles.card__desc, 'cWhite')}>
                  Здесь будет ваш текст любого объёма и содержания
                </p>
              </div>
            </div>
            <div className={styles['card--big-half']}>
              <div className={clsx(styles.card__img, styles['card--big-img'])}>
                <span className={clsx('ship', styles.card__ship)}>февраль 2023г</span>
                <img src={houseBig} alt="" />
              </div>
            </div>

            <div className={'border__rightBorder'}></div>
            <div className={'border__topBorder'}></div>
            <div className={'border__bottomBorder'}></div>
          </Link>
          <Link to={'/'} className={styles.card}>
            <div className={styles.card__img}>
              <span className={clsx('ship', styles.card__ship)}>май 2023г</span>
              <img src={house} alt="" />
            </div>
            <div className={styles.card__info}>
              <h4 className={styles.card__title}>River Park</h4>
              <p className={styles.card__desc}>Здесь будет ваш текст любого объёма</p>
            </div>
            {/* <div className={'border__rightBorder'}></div> */}
            <div className={'border__topBorder'}></div>
            <div className={'border__bottomBorder'}></div>
          </Link>
          <Link to={'/'} className={styles.card}>
            <div className={styles.card__img}>
              <span className={clsx('ship', styles.card__ship)}>Есть сданные</span>
              <img src={house} alt="" />
            </div>
            <div className={styles.card__info}>
              <h4 className={styles.card__title}>Discovery Residence</h4>
              <p className={styles.card__desc}>Здесь будет ваш текст любого объёма</p>
            </div>
            <div className={'border__rightBorder'}></div>
            {/* <div className={'border__topBorder'}></div> */}
            <div className={'border__bottomBorder'}></div>
          </Link>
          <Link to={'/'} className={styles.card}>
            <div className={styles.card__img}>
              <span className={clsx('ship', styles.card__ship)}>май 2023г</span>
              <img src={house} alt="" />
            </div>
            <div className={styles.card__info}>
              <h4 className={styles.card__title}>River Park</h4>
              <p className={styles.card__desc}>Здесь будет ваш текст любого объёма и содержания</p>
            </div>
            <div className={'border__rightBorder'}></div>
            {/* <div className={'border__topBorder'}></div> */}
            <div className={'border__bottomBorder'}></div>
          </Link>
          <Link to={'/'} className={styles.card}>
            <div className={styles.card__img}>
              <span className={clsx('ship', styles.card__ship)}>октябрь 2022г</span>
              <img src={house} alt="" className={styles.card__img} />
            </div>
            <div className={styles.card__info}>
              <h4 className={styles.card__title}>Vektori</h4>
              <p className={styles.card__desc}>Здесь будет ваш текст любого объёма</p>
            </div>
            {/* <div className={'border__rightBorder'}></div> */}
            <div className={'border__topBorder'}></div>
            <div className={'border__bottomBorder'}></div>
          </Link>
        </div>
        <Button variant="orange">Смотреть все ЖК</Button>
      </div>
    </section>
  );
};
