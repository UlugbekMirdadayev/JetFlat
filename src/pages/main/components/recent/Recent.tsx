import React from 'react';
import styles from './style.module.scss';
import image from '../../../../assets/image/house.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

import 'swiper/css';
import 'swiper/css/pagination';

export const Recent = () => {
  return (
    <section className={styles.recent}>
      <div className="container">
        <div className="heading mb60">
          <div className="heading__line"></div>
          <h2>Вы недавно смотрели</h2>
        </div>
        <>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            pagination={{
              clickable: true
            }}
            className="mySwiper">
            <SwiperSlide className={styles.slide}>
              <Link to={'/'} className={styles.card}>
                <div className={styles.card__inner}>
                  <img src={image} className={styles.card__img} alt="" />
                  <div className={styles.card__info}>
                    <div className={styles.card__ship}>Есть сданные</div>
                    <LinesEllipsis
                      text="Discovery Residence"
                      maxLine="2"
                      ellipsis="..."
                      trimRight
                      title="Discovery Residence"
                      basedOn="letters"
                      className={styles.card__title}
                      component="h4"
                    />
                    <LinesEllipsis
                      text="Здесь будет ваш текст любого объёма"
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      title="Здесь будет ваш текст любого объёма"
                      basedOn="letters"
                      className={styles.card__desc}
                      component="p"
                    />
                  </div>
                  <div className={'border__rightBorder'}></div>
                  <div className={'border__topBorder'}></div>
                  <div className={'border__bottomBorder'}></div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Link to={'/'} className={styles.card}>
                <div className={styles.card__inner}>
                  <img src={image} className={styles.card__img} alt="" />
                  <div className={styles.card__info}>
                    <div className={styles.card__ship}>Есть сданные</div>
                    <LinesEllipsis
                      text="Discovery Residence"
                      maxLine="2"
                      ellipsis="..."
                      trimRight
                      title="Discovery Residence"
                      basedOn="letters"
                      className={styles.card__title}
                      component="h4"
                    />
                    <LinesEllipsis
                      text="Здесь будет ваш текст любого объёма"
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      title="Здесь будет ваш текст любого объёма"
                      basedOn="letters"
                      className={styles.card__desc}
                      component="p"
                    />
                  </div>
                  <div className={'border__rightBorder'}></div>
                  <div className={'border__topBorder'}></div>
                  <div className={'border__bottomBorder'}></div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Link to={'/'} className={styles.card}>
                <div className={styles.card__inner}>
                  <img src={image} className={styles.card__img} alt="" />
                  <div className={styles.card__info}>
                    <div className={styles.card__ship}>Есть сданные</div>
                    <LinesEllipsis
                      text="Discovery Residence"
                      maxLine="2"
                      ellipsis="..."
                      trimRight
                      title="Discovery Residence"
                      basedOn="letters"
                      className={styles.card__title}
                      component="h4"
                    />
                    <LinesEllipsis
                      text="Здесь будет ваш текст любого объёма"
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      title="Здесь будет ваш текст любого объёма"
                      basedOn="letters"
                      className={styles.card__desc}
                      component="p"
                    />
                  </div>
                  <div className={'border__rightBorder'}></div>
                  <div className={'border__topBorder'}></div>
                  <div className={'border__bottomBorder'}></div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Link to={'/'} className={styles.card}>
                <div className={styles.card__inner}>
                  <img src={image} className={styles.card__img} alt="" />
                  <div className={styles.card__info}>
                    <div className={styles.card__ship}>Есть сданные</div>
                    <LinesEllipsis
                      text="Discovery Residence"
                      maxLine="2"
                      ellipsis="..."
                      trimRight
                      title="Discovery Residence"
                      basedOn="letters"
                      className={styles.card__title}
                      component="h4"
                    />
                    <LinesEllipsis
                      text="Здесь будет ваш текст любого объёма"
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      title="Здесь будет ваш текст любого объёма"
                      basedOn="letters"
                      className={styles.card__desc}
                      component="p"
                    />
                  </div>
                  {/* <div className={'border__rightBorder'}></div> */}
                  <div className={'border__topBorder'}></div>
                  <div className={'border__bottomBorder'}></div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </section>
  );
};
