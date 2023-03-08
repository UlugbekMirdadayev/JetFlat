import clsx from 'clsx';
import { Select } from '../select/Select';
import s from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
const colors = ['#FFDECB', '#BEF2D4', '#D9E6F1', '#FFEABC', '#E6E9EB', '#EEC9FA'];

const status = [
  {
    short: 'С',
    name: 'Студия',
    color: 0
  },
  {
    short: 'К',
    name: 'Классика',
    color: 1
  },
  {
    short: 'Е',
    name: 'Европланировка',
    color: 2
  },
  {
    short: 'Д',
    name: 'Двухуровневая',
    color: 3
  },
  {
    short: 'СП',
    name: 'Свободной планировки',
    color: 4
  },
  {
    short: 'П',
    name: 'Пентхаус',
    color: 5
  }
];

const isColorStyle = (index: number) => ({ backgroundColor: colors[index] });

export const Chess = () => {
  return (
    <div className={s.chess__container}>
      <div className={s.header__row}>
        <div className={s.header__label}>
          <div className={s.header__label__inner}>Дом или корпус</div>
          <div className={s.header__select}>
            <Select options={['дом 1']} selectedIbdex={0} setSelectedIndex={(e) => e} />
          </div>
        </div>
        <div className={s.header__label}>
          <div className={s.header__label__inner}>Подъезд</div>
          <div className={s.header__select}>
            <Select options={['1', '2', '3']} selectedIbdex={0} setSelectedIndex={(e) => e} />
          </div>
        </div>
        <div className={s.header__row__right}>
          <button className={s.header__gray_btn}>Стандарт</button>
          <div className={clsx([s.header__label__inner, s.mb0])}>Март 2022, сдан</div>
        </div>
      </div>
      <div className={s.status__wrapper}>
        <div className={s.status__wrapper__title}>Условные обозначения:</div>
        {status.map((st) => (
          <div className={s.status__row} key={st.color}>
            <div style={isColorStyle(st.color)} className={s.status__box}>
              {st.short}
            </div>
            <div className={s.status__name}>{st.name}</div>
          </div>
        ))}
      </div>
      <div>
        <div className={s.chess__wrapper}>
          {status.map((st) => (
            <div key={st.color} className={s.chess__wrapper__row}>
              <div className={clsx([s.chess__box, s.chess__box__first])}>5</div>

              <Swiper slidesPerView={'auto'} className={s.chess__wrapper}>
                {status.map((item) => (
                  <SwiperSlide key={item.color} className={s.chess__box}>
                    <div className={s.chess__box__head}>
                      <div className={s.chess__box__head__number}>№13</div>
                      <div className={s.chess__box__head__text}>3-к</div>
                    </div>
                    <div className={s.chess__box__head}>
                      <div
                        className={clsx([
                          s.chess__box__head__number,
                          s.chess__box__head__line_through
                        ])}>
                        6 900 00Р
                      </div>
                      <div className={s.chess__box__head__text}>
                        <div style={isColorStyle(item.color)} className={s.status__box}>
                          {item.short}
                        </div>
                      </div>
                    </div>
                    <div className={s.chess__box__head}>
                      <div className={s.chess__box__head__price}>10 050 000Р</div>
                    </div>
                    <div className={s.chess__box__head}>
                      <div className={s.chess__box__head__small}>91 822Р/м2</div>
                      <div className={s.chess__box__head__text}>109,45 м2</div>
                    </div>
                    <div className={s.chess__box__head}>
                      <div className={s.chess__box__head__link}>Выбрать отделку</div>
                    </div>
                    <div className={s.chess__box__popup}>
                      Бронь действует 24 часа с момента подтверждения заявки. Для установки брони на
                      более длительный срок укажите это в примечании при подаче заявки.
                    </div>
                  </SwiperSlide>
                ))}
                {status.map((item) => (
                  <SwiperSlide key={item.color} className={s.chess__box}>
                    <div className={s.chess__box__head}>
                      <div className={s.chess__box__head__number}>№13</div>
                      <div className={s.chess__box__head__text}>3-к</div>
                    </div>
                    <div className={s.chess__box__head}>
                      <div
                        className={clsx([
                          s.chess__box__head__number,
                          s.chess__box__head__line_through
                        ])}>
                        6 900 00Р
                      </div>
                      <div className={s.chess__box__head__text}>
                        <div style={isColorStyle(item.color)} className={s.status__box}>
                          {item.short}
                        </div>
                      </div>
                    </div>
                    <div className={s.chess__box__head}>
                      <div className={s.chess__box__head__price}>10 050 000Р</div>
                    </div>
                    <div className={s.chess__box__head}>
                      <div className={s.chess__box__head__small}>91 822Р/м2</div>
                      <div className={s.chess__box__head__text}>109,45 м2</div>
                    </div>
                    <div className={s.chess__box__head}>
                      <div className={s.chess__box__head__link}>Выбрать отделку</div>
                    </div>
                    <div className={s.chess__box__popup}>
                      Бронь действует 24 часа с момента подтверждения заявки. Для установки брони на
                      более длительный срок укажите это в примечании при подаче заявки.
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
