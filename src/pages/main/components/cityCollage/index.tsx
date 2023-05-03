import { useRef, useCallback } from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Button } from '../../../../components/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as ArrowIcon } from '../../../../assets/svg/arrow-right.svg';
import { useNavigate } from 'react-router-dom';

export const CityCollage = () => {
  const sliderRef = useRef<any>(null);
  const navigate = useNavigate()
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const cities = [
    [
      {
        title: 'БЦ Высоцкий',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg.png')
      },
      {
        title: 'УРФУ УПИ',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-1.png')
      },
      {
        title: 'Лицей 110',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-2.png')
      }
    ],
    [
      {
        title: 'Гимназия 13 (английская)',
        desc: '6 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-3.png')
      },
      {
        title: 'СК Юность',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-4.png')
      },
      {
        title: 'Дендропарк',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-5.png')
      }
    ]
  ];
  return (
    <div className="container">
      <section className="apartment">
        <div className={clsx([styles.heading, 'heading mb60'])}>
          <div className="heading__line" />
          <h2 className={clsx([styles.title, 'mb40'])}>
            Екатеринбург — <br className={styles.mobile_br} /> откройте для себя этот город
          </h2>
          <p className={clsx([styles.desc, 'heading__desc mb40'])}>
            В этих популярных местах вы точно найдёте что-то для себя
          </p>
          <div className="heading__line" />
        </div>
        <div className={styles.pc_gallery}>
          <div className={styles.grid_row}>
            <div className={styles.collage}>
              {cities[0].map((city: any, key: number) => (
                <div className={clsx([styles.card, key ? styles.reverse_column : ''])} key={key}>
                  <div className={styles.card_info_}>
                    <h3 className={styles.card__title}>{city.title}</h3>
                    <p className="heading__desc">{city.desc}</p>
                  </div>
                  <div onClick={() => navigate("/search-result")} className={styles.card__img}>
                    <img src={city.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className={clsx([styles.collage, styles.reverse_collage])}>
              {cities[1].map((city: any, key: number) => (
                <div className={clsx([styles.card, styles.reverse_column])} key={key}>
                  <div className={styles.card_info_}>
                    <h3 className={styles.card__title}>{city.title}</h3>
                    <p className="heading__desc">{city.desc}</p>
                  </div>
                  <div onClick={() => navigate("/search-result")} className={styles.card__img}>
                    <img src={city.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.mobile_slider}>
          <Swiper slidesPerView={'auto'} spaceBetween={0} ref={sliderRef} className="mySwiper">
            {cities[0].map((item, key) => (
              <SwiperSlide key={key} className={styles.card}>
                <div className={clsx(styles.card__inner, styles.purple)}>
                  <div className={styles.card__img}>
                    <img src={require('../../../../assets/image/ap5.jpg')} alt="" />
                  </div>
                  <div className={styles.card__info}>
                    <h4 className="f28 w700 mb20">{item.title}</h4>
                    <p className={styles.card__info__desc}>{item.desc}</p>
                  </div>
                </div>
                <div className={clsx([styles.border__y, 'border__topBorder'])} />
                <div className={clsx([styles.border__y, 'border__bottomBorder'])} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
        <div className={styles.center_button}>
          <Button variant="orange" text="Показать все ориентиры" />
        </div>
      </section>
    </div>
  );
};
