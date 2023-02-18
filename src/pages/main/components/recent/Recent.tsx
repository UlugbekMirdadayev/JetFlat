import { useCallback, useRef } from 'react';
import styles from './style.module.scss';
import image from '../../../../assets/image/house.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import 'swiper/css';
import 'swiper/css/pagination';
import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from '../../../../assets/svg/arrow-right.svg';

export const Recent = () => {
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
    <section className={styles.recent}>
      <div className="container">
        <div className="heading mb60">
          <div className={clsx([styles.mobile_line, 'heading__line'])} />
          <h2>Вы недавно смотрели</h2>
        </div>
        <>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            ref={sliderRef}
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
                  <div className={clsx([styles.mb_d_none,'border__rightBorder'])} />
                  <div className={'border__topBorder'} />
                  <div className={'border__bottomBorder'} />
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
                  <div className={clsx([styles.mb_d_none,'border__rightBorder'])} />
                  <div className={'border__topBorder'} />
                  <div className={'border__bottomBorder'} />
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
                  <div className={clsx([styles.mb_d_none,'border__rightBorder'])} />
                  <div className={'border__topBorder'} />
                  <div className={'border__bottomBorder'} />
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
                  <div className={'border__topBorder'} />
                  <div className={'border__bottomBorder'} />
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className={styles.center_mobile_navs}>
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
        </>
      </div>
    </section>
  );
};
