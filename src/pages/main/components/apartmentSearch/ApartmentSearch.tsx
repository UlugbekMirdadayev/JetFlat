import React, { useState, useRef, useCallback } from 'react';
import { Select } from '../../../../components/select/Select';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Button } from '../../../../components/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import ap1 from '../../../../assets/image/ap1.jpg';
import ap2 from '../../../../assets/image/ap2.jpg';
import ap3 from '../../../../assets/image/ap3.jpg';
import ap4 from '../../../../assets/image/ap4.jpg';
import { ReactComponent as ArrowIcon } from '../../../../assets/svg/arrow-right.svg';

export const ApartmentSearch = () => {
  const [selectedIbdex, setSelectedIndex] = useState(0);
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className={styles.apartment}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className={clsx([styles.heading, 'heading mb60'])}>
              <div className="heading__line" />
              <h2 className="mb40">Поиск квартир по районам</h2>
              <p className="heading__desc">
                Характеристика районов поможет определиться с местом проживания
              </p>
            </div>
            <div className={styles.select__wrap}>
              <Select
                options={['Все районы', 'Академический']}
                selectedIbdex={selectedIbdex}
                setSelectedIndex={setSelectedIndex}
              />
            </div>
          </div>
          <div className={styles.pc_nav}>
            <div className="swiper-nav">
              <button
                className="swiper-nav__btn swiper-nav__btn--prev swiper-nav__btn--dis"
                onClick={handlePrev}>
                <ArrowIcon />
              </button>
              <button className="swiper-nav__btn" onClick={handleNext}>
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.list}>
          <Swiper
            modules={[Navigation]}
            ref={sliderRef}
            slidesPerView={'auto'}
            spaceBetween={0}
            className="mySwiper">
            <SwiperSlide className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.card__inner}>
                  <div className={styles.card__img}>
                    <span className={clsx('ship', styles.card__ship)}>32 ЖК</span>
                    <img src={ap1} alt="..." />
                  </div>
                  <div className={styles.card__info}>
                    <h4 className="f28 w700 mb20">Пионерский</h4>
                    <p className="f18 w400 pb20">УПИ, парк, близость центра</p>
                  </div>
                </div>
                <div className={'border__topBorder'} />
                <div className={'border__bottomBorder'} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.card__inner}>
                  <div className={styles.card__img}>
                    <span className={clsx('ship', styles.card__ship)}>125 ЖК</span>
                    <img src={ap2} alt="..." />
                  </div>
                  <div className={styles.card__info}>
                    <h4 className="f28 w700 mb20">Центр</h4>
                    <p className="f18 w400 pb20">Близость всего, ритм города</p>
                  </div>
                </div>
                <div className={'border__topBorder'} />
                <div className={'border__bottomBorder'} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.card__inner}>
                  <div className={styles.card__img}>
                    <span className={clsx('ship', styles.card__ship)}>15 ЖК</span>
                    <img src={ap3} alt="..." />
                  </div>
                  <div className={styles.card__info}>
                    <h4 className="f28 w700 mb20">Академический</h4>
                    <p className="f18 w400 pb20">Новый, яркий, молодой</p>
                  </div>
                </div>
                <div className={'border__topBorder'} />
                <div className={'border__bottomBorder'} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.card__inner}>
                  <div className={styles.card__img}>
                    <span className={clsx('ship', styles.card__ship)}>32 ЖК</span>
                    <img src={ap4} alt="..." />
                  </div>
                  <div className={styles.card__info}>
                    <h4 className="f28 w700 mb20">УНЦ, Краснолесье</h4>
                    <p className="f18 w400 pb20">Чистый воздух</p>
                  </div>
                </div>
                <div className={'border__topBorder'} />
                <div className={'border__bottomBorder'} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.card__inner}>
                  <div className={styles.card__img}>
                    <span className={clsx('ship', styles.card__ship)}>32 ЖК</span>
                    <img src={ap1} alt="..." />
                  </div>
                  <div className={styles.card__info}>
                    <h4 className="f28 w700 mb20">УНЦ, Краснолесье</h4>
                    <p className="f18 w400 pb20">Чистый воздух</p>
                  </div>
                </div>
                <div className={'border__topBorder'} />
                <div className={'border__bottomBorder'} />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={styles.mobile_nav}>
            <div className="swiper-nav">
              <button
                className="swiper-nav__btn swiper-nav__btn--prev swiper-nav__btn--dis"
                onClick={handlePrev}>
                <ArrowIcon />
              </button>
              <button className="swiper-nav__btn" onClick={handleNext}>
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.center_button}>
          <Button variant="orange">Показать все районы</Button>
        </div>
      </div>
    </section>
  );
};
