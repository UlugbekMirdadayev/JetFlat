import { FC } from 'react';
import s from './style.module.scss';
import { ReactComponent as GeoLocation } from '../../assets/svg/geolocation.svg';
import { ReactComponent as Info } from '../../assets/svg/info.svg';
import clsx from 'clsx';

type Props = { step: number; setStep: Function };

const FirstStep: FC<Props> = ({ step, setStep }) => {
  const handleNext = () => setStep(step + 1);
  return step === 0 ? (
    <div className={s.step__first}>
      <div className={s.wrapper}>
        <div className={clsx([s.wrapper__col, s.wrapper__left])}>
          <div className={s.title}>
            Детали <br className="d-none" /> вашего бронирования
          </div>
          <div className={s.wrapper_col}>
            <div className={s.column}>
              <div className={s.row}>
                <div className={s.title}>
                  № 1240 <span>2-к квартира, 4 этаж, 53,8 м2</span>
                </div>
              </div>
              <div className={s.row}>
                <div className={s.status}>Европланировка</div>
                <div className={s.status__name}>С отделкой</div>
              </div>
              <div className={s.plane}>
                <img src={require('../../assets/image/plan.png')} alt="" />
                <div className={s.text}>1 подъезд/18 этажей</div>
              </div>
              <div className={s.link}>Расположение на этаже</div>
              <div className={s.description}>
                В настоящий момент эту квартиру смотрят еще 3 человека
              </div>
            </div>
            <div className={s.column}>
              <div className={s.row}>
                <div className={s.title}>ЖК “Зеленый остров”</div>
              </div>
              <div className={s.row}>
                <div className={s.title}>Дом 1</div>
                <div className={s.status__button}>Комфорт</div>
              </div>
              <div className={s.row}>
                <div className={s.location_btn}>
                  <GeoLocation />
                </div>
                <div className={s.location__inner}>
                  <span>ВИЗ,</span> адрес дома в ЖК
                </div>
              </div>
              <div className={s.row}>
                <div className={clsx([s.status, s.status__second])}>
                  Жилье ЭКО, собственная котельная
                </div>
              </div>
              <div className={s.row}>
                <div className={s.paragraph}>Монолит, высота потолков - 5,0</div>
              </div>
              <div className={s.row}>
                <div className={s.paragraph}>
                  Преимущество номер один примерно такой длины, описание и характеристика на 2
                  строки
                </div>
              </div>
              <div className={s.row}>
                <div className={s.paragraph_teal}>Изменить выбор</div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx([s.wrapper__col, s.wrapper__right])}>
          <div className={s.title}>Детали вашей цены</div>
          <div className={clsx([s.row, 'space-between'])}>
            <div className={s.paragraph}>№ 1240, 2-к квартира</div>
            <div className={s.paragraph_w600}>4 934 400 ₽</div>
          </div>
          <div className={clsx([s.row, 'space-between'])}>
            <div className={s.paragraph}>Скидка от застройщика</div>
            <div className={s.paragraph_w600}>200 000 ₽</div>
          </div>
          <div className={clsx([s.row, 'space-between'])}>
            <div className={s.paragraph}>
              Отделка <span className="teal_color">Премиум</span>
            </div>
            <div className={s.paragraph_w600}>1 200 000 ₽</div>
          </div>
          <div className={s.text_right}>
            <div className={s.paragraph_teal}>Убрать</div>
          </div>
          <div className={clsx([s.row, 'space-between', s['align-start']])}>
            <div className={s.price_text}>Цена</div>
            <div className={s.text_right}>
              <div className={s.price_text}>4 854 400 *₽</div>
              <div className={s.paragraph_w600}>88 000 ₽/м2</div>
            </div>
          </div>
          <div className={clsx([s.paragraph, s.f14])}>
            Указанная итоговая цена — это сумма, которую вы платите Застройщику
          </div>
          <div className={clsx([s.paragraph_teal, s.f14])}>
            Сервис jet-flat.com не взимает с покупателей комиссию за бронирование
          </div>
          <div className={clsx([s.paragraph, s.f15, 'mt10'])}>
            *Это итоговая цена квартиры, которая включает в себя скидки от Застройщика по акциям и
            спец. предложениям.
            <div className={clsx([s.paragraph, s.f15, 'mt10'])}>
              Обратите внимание, что срок действия цены может быть ограничен условиями от
              Застройщика.
            </div>
          </div>
        </div>
      </div>

      <div className={s.second_container}>
        <div className={s.title}>Полезно знать</div>
        <div className={clsx([s.row_cards, 'row space-between'])}>
          <div className={s.card}>
            <div className={s.card__title}>Форма договора с Застройщиком</div>
            <div className={s.card__desc}>Договор долевого участия (ДДУ, счета ЭСКРОУ)</div>
          </div>
          <div className={s.card}>
            <div className={s.card__title}>Ипотека от банков</div>
            <div className={s.card__desc}>СБЕР, Газпромбанк, Альфа, Уралсиб, Открытие</div>
            <div className={clsx([s.card__desc, 'teal_color'])}>
              Подача заявок на ипотеку на сайте - бесплатно
            </div>
          </div>
          <div className={s.card}>
            <div className={s.card__title}>TRADE IN (зачет втооричного жилья)</div>
            <div className={s.card__desc}>
              СУсловия бронирования при реализации вторичного жилья указываются Застройщиком в
              Подтверждении брони
            </div>
          </div>
        </div>
      </div>

      <div className={s.popup}>
        <Info />
        <div className={s.paragraph}>
          Услуга бронирования бесплатна. Бронь действует 24 часа с момента подтверждения заявки. Для
          установки брони на более длительный срок, пожалуйста, сообщите об этом в примечании к
          бронированию.
        </div>
      </div>
      <button className={s.next} onClick={handleNext}>
        Продолжить
      </button>
    </div>
  ) : null;
};

export default FirstStep;
