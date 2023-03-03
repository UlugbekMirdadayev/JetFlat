import React from 'react';
import styles from './style.module.scss';
// import clsx from 'clsx';
import { ReactComponent as ArrowLinkIcon } from '../../../../assets/svg/arrow-link.svg';
import hImg from '../../../../assets/image/hover.jpg';
import clsx from 'clsx';

export const ApartmentTypeSearch = () => {
  return (
    <section className={styles.apartment}>
      <div className="container">
        <div className={clsx(styles.heading, 'heading mb50')}>
          <h2 className="">Поиск квартир по типу планировки</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.accord}>
            <div className={styles.link}>
              <h4 className={styles.link__text}>Классика</h4>
              <ArrowLinkIcon className={styles.link__icon} />
            </div>
            <div className={styles.accord__item}>
              <div className={clsx(styles.box, styles['box--green'])}>
                <img src={hImg} alt="" className={styles.hImage} />
                <h4 className={styles.box__title}>Классика</h4>
                <p className={styles.box__text}>
                  Грамотно продуманные планировки квартир, с небольшими холлами и коридорами,
                  уютными балконами или лоджиями, изолированными комнатами и кухней. В этом классе
                  жилья, как правило, во всех квартирах один санузел, часто совмещённый.
                  <span className={clsx([styles.box__link, styles.box__link_md])}>
                    <span>Смотреть варианты</span>
                    <ArrowLinkIcon />
                  </span>
                </p>
                <div className={styles.box__link}>
                  <span>Смотреть варианты</span>
                  <ArrowLinkIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accord}>
            <div className={styles.link}>
              <h4 className={styles.link__text}>Студия</h4>
              <ArrowLinkIcon className={styles.link__icon} />
            </div>
            <div className={styles.accord__item}>
              <div className={clsx(styles.box, styles['box--pink'])}>
                <img src={hImg} alt="" className={styles.hImage} />
                <h4 className={styles.box__title}>Студия</h4>
                <p className={styles.box__text}>
                  Грамотно продуманные планировки квартир, с небольшими холлами и коридорами,
                  уютными балконами или лоджиями, изолированными комнатами и кухней.
                  <span className={clsx([styles.box__link, styles.box__link_md])}>
                    <span>Смотреть варианты</span>
                    <ArrowLinkIcon />
                  </span>
                </p>
                <div className={styles.box__link}>
                  <span>Смотреть варианты</span>
                  <ArrowLinkIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accord}>
            <div className={styles.link}>
              <h4 className={styles.link__text}>Европланировка</h4>
              <ArrowLinkIcon className={styles.link__icon} />
            </div>
            <div className={styles.accord__item}>
              <div className={clsx(styles.box, styles['box--blue'])}>
                <img src={hImg} alt="" className={styles.hImage} />
                <h4 className={styles.box__title}>Европланировка</h4>
                <p className={styles.box__text}>
                  Грамотно продуманные планировки квартир, с небольшими холлами и коридорами,
                  уютными балконами или лоджиями, изолированными комнатами и кухней. В этом классе
                  жилья, как правило, во всех квартирах один санузел, часто совмещённый. В этом
                  классе жилья, как правило, во всех квартирах один санузел, часто совмещённый.
                  <span className={clsx([styles.box__link, styles.box__link_md])}>
                    <span>Смотреть варианты</span>
                    <ArrowLinkIcon />
                  </span>
                </p>
                <div className={styles.box__link}>
                  <span>Смотреть варианты</span>
                  <ArrowLinkIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accord}>
            <div className={styles.link}>
              <h4 className={styles.link__text}>Двухуровневые</h4>
              <ArrowLinkIcon className={styles.link__icon} />
            </div>
            <div className={styles.accord__item}>
              <div className={clsx(styles.box, styles['box--yellow'])}>
                <img src={hImg} alt="" className={styles.hImage} />
                <h4 className={styles.box__title}>Двухуровневые</h4>
                <p className={styles.box__text}>
                  Грамотно продуманные планировки квартир, с небольшими холлами и коридорами.
                  <span className={clsx([styles.box__link, styles.box__link_md])}>
                    <span>Смотреть варианты</span>
                    <ArrowLinkIcon />
                  </span>
                </p>
                <div className={styles.box__link}>
                  <span>Смотреть варианты</span>
                  <ArrowLinkIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accord}>
            <div className={styles.link}>
              <h4 className={styles.link__text}>Пентхаус</h4>
              <ArrowLinkIcon className={styles.link__icon} />
            </div>
            <div className={styles.accord__item}>
              <div className={clsx(styles.box, styles['box--violet'])}>
                <img src={hImg} alt="" className={styles.hImage} />
                <h4 className={styles.box__title}>Пентхаус</h4>
                <p className={styles.box__text}>
                  Грамотно продуманные планировки квартир, с небольшими холлами и коридорами,
                  уютными балконами или лоджиями, изолированными комнатами и кухней. В этом классе
                  жилья, как правило, во всех квартирах один санузел, часто совмещённый.
                  <span className={clsx([styles.box__link, styles.box__link_md])}>
                    <span>Смотреть варианты</span>
                    <ArrowLinkIcon />
                  </span>
                </p>
                <div className={styles.box__link}>
                  <span>Смотреть варианты</span>
                  <ArrowLinkIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accord}>
            <div className={styles.link}>
              <h4 className={styles.link__text}>Свободной планировки</h4>
              <ArrowLinkIcon className={styles.link__icon} />
            </div>
            <div className={styles.accord__item}>
              <div className={clsx(styles.box, styles['box--purple'])}>
                <img src={hImg} alt="" className={styles.hImage} />
                <h4 className={styles.box__title}>Свободной планировки</h4>
                <p className={styles.box__text}>
                  Грамотно продуманные планировки квартир, с небольшими холлами и коридорами,
                  уютными балконами или лоджиями, изолированными комнатами и кухней. В этом классе
                  жилья, как правило, во всех квартирах один санузел, часто совмещённый.
                  <span className={clsx([styles.box__link, styles.box__link_md])}>
                    <span>Смотреть варианты</span>
                    <ArrowLinkIcon />
                  </span>
                </p>
                <div className={styles.box__link}>
                  <span>Смотреть варианты</span>
                  <ArrowLinkIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
