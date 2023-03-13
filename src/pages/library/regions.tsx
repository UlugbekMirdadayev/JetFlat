import { FC, useRef, useCallback } from 'react';
import clsx from 'clsx';
import { HistoryLink } from '../../components/historyLink';
import s from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow-right.svg';
import { ReactComponent as Location } from '../../assets/svg/location-with-border.svg';
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg';
import { ReactComponent as ShareIcon } from '../../assets/svg/share.svg';
import { Link, useParams } from 'react-router-dom';

type Props = {};

export const Regions: FC<Props> = () => {
  const { id = null } = useParams();
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
            { name: 'Екатеринбург', link: '/regions' },
            { name: 'Районы', link: `/residential-complexes` },
            id ? { name: 'ВИЗ', link: `/regions/${id}` } : null
          ]}
        />
        <div className={s.container}>
          <div className={s.title}>
            <div className={s.title__row}>
              <div className={clsx([s.status, s.status__transparent])}>Екатеринбург. ВИЗ</div>
              <div className={s.title__row}>
                <Location />
                <DownloadIcon />
                <ShareIcon />
              </div>
            </div>
            <div className={clsx([s.status, s.status__evro])}>
              Современный. Динамичный. Перспективный
            </div>
            {id && (
              <div className={s.inner__location}>
                Ориентиры поблизости:
                <span>Яхт-клуб, Центральный стадион, Гимназия № 2, Брайт ФИТ</span>
              </div>
            )}
          </div>

          <div className={s.row__center}>
            <div className={s.left}>
              <img src={require('../../assets/image/popular-big.jpg')} alt="" />
            </div>
            <div className={s.left}>
              <div className={s.title__md}>OVERVIEW</div>
              <div className={s.prg}>
                Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
                affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and
                perform at a higher level than you ever thought was possible—especially with a mixer
                in the affordable price category. Scratch combines professional-level performance
                and outright DJing fun in a way nothing else ever has. You’ve got to experience it
                to really see what it’s all about!
              </div>
            </div>
          </div>
          <div className={s.row__center}>
            <div className={s.left}>
              <div className={s.prg}>
                Numark Scratch is a 24-bit two-channel mixer that redefines what you can do with an
                affordable 2-channel scratch mixer. With Scratch, you’ll be able to create and
                perform at a higher level than you ever thought was possible—especially with a mixer
                in the affordable price category. Scratch combines professional-level performance
                and outright DJing fun in a way nothing else ever has. You’ve got to experience it
                to really see what it’s all about!
              </div>
            </div>
            <div className={s.right}>
              <img src={require('../../assets/image/popular-big.jpg')} alt="" />
            </div>
          </div>

          <div className={s.gallery}>
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
