import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import ap1 from '../../../../assets/image/ap1.jpg';
import ap2 from '../../../../assets/image/ap2.jpg';
import ap3 from '../../../../assets/image/ap3.jpg';
import ap4 from '../../../../assets/image/ap4.jpg';

export const ApartmentByClass = () => {
  return (
    <section className={styles.apartment}>
      <div className="container">
        <div className="heading mb60">
          <div className="heading__line"></div>
          <h2 className="mb40">Поиск по классу жилых домов</h2>
          <p className="heading__desc">
            Характеристика класса домов поможет определиться с местом проживания
          </p>
        </div>

        <div className={styles.list}>
          <div className={styles.card}>
            <div className={styles.card__inner}>
              <div className={styles.card__img}>
                <span className={clsx('ship ', styles.card__ship)}>Стандарт</span>
                <img src={ap1} alt="" />
              </div>
              <div className={styles.card__info}>
                <h4 className="f28 w700 mb20">53 ЖК</h4>
              </div>
            </div>
            <div className={'border__rightBorder'}></div>
            <div className={'border__topBorder'}></div>
            <div className={'border__bottomBorder'}></div>
          </div>
          <div className={styles.card}>
            <div className={clsx(styles.card__inner, styles.green)}>
              <div className={styles.card__img}>
                <span className={clsx('ship ship--green', styles.card__ship)}>Комфорт</span>
                <img src={ap2} alt="" />
              </div>
              <div className={styles.card__info}>
                <h4 className="f28 w700 mb20">24 ЖК</h4>
              </div>
            </div>
            <div className={'border__rightBorder'}></div>
            <div className={'border__topBorder'}></div>
            <div className={'border__bottomBorder'}></div>
          </div>
          <div className={styles.card}>
            <div className={clsx(styles.card__inner, styles.teal)}>
              <div className={styles.card__img}>
                <span className={clsx('ship ship--teal', styles.card__ship)}>Бизнес</span>
                <img src={ap3} alt="" />
              </div>
              <div className={styles.card__info}>
                <h4 className="f28 w700 mb20">142 ЖК</h4>
              </div>
            </div>
            <div className={'border__rightBorder'}></div>
            <div className={'border__topBorder'}></div>
            <div className={'border__bottomBorder'}></div>
          </div>
          <div className={styles.card}>
            <div className={clsx(styles.card__inner, styles.purple)}>
              <div className={styles.card__img}>
                <span className={clsx('ship ship--purple', styles.card__ship)}>Элит</span>
                <img src={ap4} alt="" />
              </div>
              <div className={styles.card__info}>
                <h4 className="f28 w700 mb20">12 ЖК</h4>
              </div>
            </div>
            <div className={'border__rightBorder'}></div>
            <div className={'border__topBorder'}></div>
            <div className={'border__bottomBorder'}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
