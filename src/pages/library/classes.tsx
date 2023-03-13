import { FC, useRef, useCallback } from 'react';
import clsx from 'clsx';
import { Accord } from '../../components/accordion';
import { HistoryLink } from '../../components/historyLink';
import s from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow-right.svg';
import { Link } from 'react-router-dom';

type Props = {};

const array = [
  {
    defaultOpen: true,
    color: '#E8EDF2',
    label: 'Стандарт',
    description:
      'Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными балконами или лоджиями, изолированными комнатами и кухней. В этом классе жилья, как правило, во всех квартирах один санузел, часто совмещённый.',
    link: '/library/classes'
  },
  {
    defaultOpen: true,
    color: '#ECFAC2',
    label: 'Комфорт',
    description:
      'Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными балконами или лоджиями, изолированными комнатами и кухней.',
    link: '/library/classes/comforts'
  },
  {
    defaultOpen: true,
    color: '#C9E7FF',
    label: 'Бизнес',
    description:
      'Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными балконами или лоджиями, изолированными комнатами и кухней. В этом классе жилья, как правило, во всех квартирах один санузел, часто совмещённый.  В этом классе жилья, как правило, во всех квартирах один санузел, часто совмещённый.'
  },
  {
    defaultOpen: true,
    color: '#EEC9FA',
    label: 'Элит',
    description: 'Грамотно продуманные планировки квартир, с небольшими холлами и коридорами.'
  }
];

export const Classes: FC<Props> = () => {
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
    <div className="result_container">
      <div className="container">
        <HistoryLink
          links={[
            { name: 'Библиотека', link: `/library` },
            { name: 'Классы домов', link: '/library/classes' }
          ]}
        />
        <div className={s.container}>
          <div className={s.title}>Страница всех классов</div>
          {array.map((item, key) => (
            <Accord key={key} {...item} />
          ))}
          <div className={clsx([s.gallery, s.mt160])}>
            <div className={s.card}>
              <img src={require('../../assets/image/ap1.jpg')} alt="" />
              <img src={require('../../assets/image/ap1.jpg')} alt="" />
            </div>
            <div className={clsx([s.card, s.card__big])}>
              <img src={require('../../assets/image/ap3.jpg')} alt="" />
            </div>
            <div className={clsx([s.card, s.card__big])}>
              <img src={require('../../assets/image/ap3.jpg')} alt="" />
            </div>
            <div className={s.card}>
              <img src={require('../../assets/image/ap1.jpg')} alt="" />
              <img src={require('../../assets/image/ap1.jpg')} alt="" />
            </div>
          </div>
          <div className={s.bottom__row}>
            <div className={s.desc}>
              Six dedicated software-based FX to apply to individual channel or both using the
              premium performance base toggle paddles. You can adjust your FX mix from Dry to Wet as
              you feel the mix.
            </div>
            <button>
              <Link to={'/residential-complexes'}> 142 жилых комплекса</Link>
            </button>
          </div>
          <div className={s.gallery__slider}>
            <Swiper slidesPerView={1} ref={sliderRef}>
              <SwiperSlide className={s.gallery__slider__item}>
                <img src={require('../../assets/image/ap3.jpg')} alt="" />
              </SwiperSlide>
              <SwiperSlide className={s.gallery__slider__item}>
                <img src={require('../../assets/image/ap1.jpg')} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className={s.gallery__slider__bottom}>
              <div className={s.desc}>
                Six dedicated software-based FX to apply to individual channel or both using the
                premium performance base toggle paddles. You can adjust your FX mix from Dry to Wet
                as you feel the mix.
              </div>
              <div className={s.navigations}>
                <div className="swiper-nav">
                  <button className="swiper-nav__btn swiper-nav__btn--prev" onClick={handlePrev}>
                    <ArrowIcon />
                  </button>
                  <button className="swiper-nav__btn" onClick={handleNext}>
                    <ArrowIcon />
                  </button>
                </div>
                <button className={s.link__btn}>
                  <Link to={'/residential-complexes'}> 142 жилых комплекса</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
