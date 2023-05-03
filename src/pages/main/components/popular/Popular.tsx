import { useRef, useCallback } from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import house from '../../../../assets/image/popular-img.jpg';
import houseBig from '../../../../assets/image/popular-big.jpg';
import { Button } from '../../../../components/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRightIcon } from '../../../../assets';

export const Popular = ({ title, description, bigLayout = true }: any) => {
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
    <section className={styles.popular}>
      <div className="container">
        <div className={clsx([styles.heading, 'heading mb60'])}>
          <div className={styles.pc_line}>
            <div className="heading__line" />
          </div>
          <h2 className="mb40">{title || 'Популярные ЖК'}</h2>
          <p className={`heading__desc mb60 sm-text-center`}>
            {description ||
              'В этих популярных жилых комплексах вы точно найдёте что-нибудь для себя'}
          </p>
          <div className={styles.is_pc}>
            <div className={styles.list}>
              {bigLayout && (
                <>
                  <Link to={'/residential-estates/0'} className={clsx(styles.card, styles['card--big'])}>
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

                    <div className={clsx([styles.border__rightBorder, 'border__rightBorder'])} />
                    <div className={'border__topBorder'} />
                    <div className={'border__bottomBorder'} />
                  </Link>
                  <Link to={'/residential-estates'} className={styles.card}>
                    <div className={styles.card__img}>
                      <span className={clsx('ship', styles.card__ship)}>май 2023г</span>
                      <img src={house} alt="" />
                    </div>
                    <div className={styles.card__info}>
                      <h4 className={styles.card__title}>River Park</h4>
                      <p className={styles.card__desc}>Здесь будет ваш текст любого объёма</p>
                    </div>
                    <div className={clsx([styles.nav_btn, 'border__rightBorder'])} />
                    <div className={'border__topBorder'} />
                    <div className={'border__bottomBorder'} />
                  </Link>
                </>
              )}
              {[1, 2, 3].map((_, key) => (
                <Link key={key} to={'/residential-estates'} className={styles.card}>
                  <div className={styles.card__img}>
                    <span className={clsx('ship', styles.card__ship)}>Есть сданные</span>
                    <img src={house} alt="" />
                  </div>
                  <div className={styles.card__info}>
                    <h4 className={styles.card__title}>Discovery Residence</h4>
                    <p className={styles.card__desc}>Здесь будет ваш текст любого объёма</p>
                  </div>
                  <div className={clsx([styles.border__rightBorder, 'border__rightBorder'])} />
                  <div className={'border__topBorder'} />
                  <div className={'border__bottomBorder'} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.is_mobile}>
          <Swiper ref={sliderRef} slidesPerView={'auto'}>
            <SwiperSlide className={styles.slide}>
              <Link to={'/residential-estates'} className={styles.card}>
                <img src={house} className={styles.card__img} alt="" />
                <div className={clsx([styles.card__ship, 'ship'])}>май 2023г</div>
                <div className={'border__topBorder'} />
                <div className={'border__bottomBorder'} />
                <div className={clsx([styles.nav_btn, 'border__rightBorder'])} />
                <div className={styles.card__title}>Discovery Residence</div>
                <p className={styles.card__desc}>Здесь будет ваш текст любого объёма</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Link to={'/residential-estates'} className={styles.card}>
                <img src={house} className={styles.card__img} alt="" />
                <div className={clsx([styles.card__ship, 'ship'])}>май 2023г</div>
                <div className={'border__topBorder'} />
                <div className={'border__bottomBorder'} />
                <div className={clsx([styles.nav_btn, 'border__rightBorder'])} />
                <div className={styles.card__title}>Discovery Residence</div>
                <p className={styles.card__desc}>Здесь будет ваш текст любого объёма</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Link to={'/residential-estates'} className={styles.card}>
                <img src={house} className={styles.card__img} alt="" />
                <div className={clsx([styles.card__ship, 'ship'])}>май 2023г</div>
                <div className={'border__topBorder'} />
                <div className={'border__bottomBorder'} />
                <div className={clsx([styles.nav_btn, 'border__rightBorder'])} />
                <div className={styles.card__title}>Discovery Residence</div>
                <p className={styles.card__desc}>Здесь будет ваш текст любого объёма</p>
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className={clsx([styles.nav_btn, 'row center slider_container'])}>
            <button className="prev relative-btn-border" onClick={handlePrev}>
              <ArrowRightIcon />
            </button>
            <button className="next relative-btn-border" onClick={handleNext}>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className={styles.center_button}>
          <Button variant="orange">
            <Link to={'/residential-estates'}>Смотреть все ЖК</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
