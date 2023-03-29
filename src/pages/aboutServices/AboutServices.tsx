import { useRef, useCallback } from 'react';
import s from './style.module.scss';
import { HistoryLink } from '../../components/historyLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import Popup from '../apartmentSelect/popup';
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow-right.svg';
import { Link } from 'react-router-dom';

export const AboutServices = () => {
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
    <div className={s.container}>
      <div className="container">
        <HistoryLink links={[{ name: 'О сервисе', link: '/about' }]} />
        <div className={s.title}>О сервисе</div>
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.col__title}>OVERVIEW</div>
            <div className={s.col__text}>
              Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
              affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and perform
              at a higher level than you ever thought was possible—especially with a mixer in the
              affordable price category. Scratch combines professional-level performance and
              outright DJing fun in a way nothing else ever has. You’ve got to experience it to
              really see what it’s all about!
            </div>
            <div className={s.col__text}>
              Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
              affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and perform
              at a higher level than you ever thought was possible—especially with a mixer in the
              affordable price category. Scratch combines professional-level performance and
              outright DJing fun in a way nothing else ever has. You’ve got to experience it to
              really see what it’s all about!
            </div>
          </div>
          <div className={s.col}>
            <div className={s.col__img}>
              <img src={require('../../assets/image/about_city.png')} alt="..." />
            </div>
          </div>
        </div>
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.col__title}>OVERVIEW</div>
            <div className={s.col__text}>
              Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
              affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and perform
              at a higher level than you ever thought was possible—especially with a mixer in the
              affordable price category. Scratch combines professional-level performance and
              outright DJing fun in a way nothing else ever has. You’ve got to experience it to
              really see what it’s all about!
            </div>
            <div className={s.col__text}>
              Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
              affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and perform
              at a higher level than you ever thought was possible—especially with a mixer in the
              affordable price category.
            </div>
          </div>
          <div className={s.col}>
            <div className={s.col__img}>
              <img src={require('../../assets/image/about_city.png')} alt="..." />
            </div>
          </div>
        </div>
        <div className={s.slider}>
          <h2 className={s.slider__title}>OVERVIEW</h2>
          <Swiper
            ref={sliderRef}
            slidesPerView={'auto'}
            spaceBetween={50}
            initialSlide={1}
            centeredSlides={window.innerWidth <= 1024}
            className={s.slider__row}>
            <SwiperSlide className={s.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
              <img src={require('../../assets/image/about_city.png')} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className={s.navigations}>
            <div className={s.navigations__text}>
              Six dedicated software-based FX to apply to individual channel or both using the
              premium performance base toggle paddles. You can adjust your FX mix from Dry to Wet as
              you feel the mix.
            </div>
            <div className="swiper-nav">
              <button className="swiper-nav__btn swiper-nav__btn--prev" onClick={handlePrev}>
                <ArrowIcon />
              </button>
              <button className="swiper-nav__btn" onClick={handleNext}>
                <ArrowIcon />
              </button>
            </div>
            <Link className={s.navigations__btn} to={'/residential-estates'}>
              142 жилых комплекса
            </Link>
          </div>
        </div>
      </div>
      <Popup
        title="Ваше спокойствие- наш приоритет"
        desc={
          <div className={s.popup_dec}>
            Добавьте свою новостройку и получайте заявки на бронирование квартир онлайн
          </div>
        }
        btn="Зарегистрировать свою новостройку"
      />
    </div>
  );
};
