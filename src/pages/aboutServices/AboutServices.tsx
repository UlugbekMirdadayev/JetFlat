import React, { useRef } from 'react';
import styles from './style.module.scss';
import { HistoryLink } from '../../components/historyLink';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

export const AboutServices = () => {
  const sliderRef = useRef<any>(null);
  return (
    <div className="container">
      <div className={styles.container}>
        <HistoryLink links={[{ name: 'О сервисе', link: '/about-services' }]} />
        <div className="heading mb80 mt20">
          <h2>О сервисе</h2>
        </div>
        <div className={clsx([styles.row, 'mb80', 'pt20'])}>
          <div className={styles.col}>
            <h4 className="f28 w700 mb20">OVERVIEW</h4>
            <p className="mt30 f18">
              Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
              affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and perform
              at a higher level than you ever thought was possible—especially with a mixer in the
              affordable price category. Scratch combines professional-level performance and
              outright DJing fun in a way nothing else ever has. You’ve got to experience it to
              really see what it’s all about!
            </p>
            <p className="mt30 f18">
              Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
              affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and perform
              at a higher level than you ever thought was possible—especially with a mixer in the
              affordable price category. Scratch combines professional-level performance and
              outright DJing fun in a way nothing else ever has. You’ve got to experience it to
              really see what it’s all about!
            </p>
          </div>
          <img src={require('../../assets/image/about_city.png')} alt="" />
        </div>
        <div className={clsx([styles.row, 'mb80'])}>
          <img src={require('../../assets/image/about_city.png')} alt="" />
          <div className={styles.col}>
            <h4 className="f28 w700 mb20">OVERVIEW</h4>
            <p className="mt30 f18">
              Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
              affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and perform
              at a higher level than you ever thought was possible—especially with a mixer in the
              affordable price category. Scratch combines professional-level performance and
              outright DJing fun in a way nothing else ever has. You’ve got to experience it to
              really see what it’s all about!
            </p>
            <p className="mt30 f18">
              Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
              affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and perform
              at a higher level than you ever thought was possible—especially with a mixer in the
              affordable price category. Scratch combines professional-level performance and
              outright DJing fun in a way nothing else ever has. You’ve got to experience it to
              really see what it’s all about!
            </p>
          </div>
        </div>
        <div className="mb80 pb80">
          <h2 className="mt30 pb30 f18">OVERVIEW</h2>
          <Swiper
            modules={[Navigation]}
            ref={sliderRef}
            slidesPerView={3.5}
            spaceBetween={50}
            pagination={{
              clickable: true
            }}
            className="mySwiper">
            <SwiperSlide className={styles.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
