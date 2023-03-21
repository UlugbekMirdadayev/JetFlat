import clsx from 'clsx';
import { FC } from 'react';
import s from './style.module.scss';

type Props = {};

const Articles: FC<Props> = () => {
  return (
    <div className={s.articles}>
      <div className={clsx([s.container, 'container'])}>
        <div className={s.title}>Полезно знать</div>
        <div className={s.card__grid}>
          <div className={s.card}>
            <div className={s.card__title}>Заголовок подборки</div>
            <div className={s.card__text}>
              Описание подборки, довольно длинное может быть и даже дюже длинное
            </div>
            <div className={s.card__btn}>Подать заявку в банк</div>
          </div>
          <div>
            <div className={s.card}>
              <div className={s.card__title}>Какая-то подборка</div>
            </div>
            <div className={s.card}>
              <div className={s.card__title}>Подборка с кнопкой</div>
              <div className={s.card__btn}>Кнопка для подборки</div>
            </div>
          </div>
          <div className={clsx([s.card, s.card__center])}>
            <img src={require('../../assets/image/alfa.jpg')} alt="alfa" />
            <div className={s.card__title}>Какая-то крутая подборка</div>
          </div>
        </div>
        <div className={s.card__grid}>
          <div className={s.block}>
            <div className={s.block__title}>Заголовок и все такое</div>
            <div className={s.block__text}>
              Банки-партнёры подберут ипотечную программу, рассчитают точную сумму ипотечных
              платежей, срок кредита и расскажут о процедуре выдачи ипотеки.
            </div>
          </div>
          <div className={s.block}>
            <div className={s.block__title}>Бесплатный сервис</div>
            <div className={s.block__text}>
              Все договорные отношения по оформлению ипотечного кредита вы заключаете с банком.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
