import React, { useState } from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import { ReactComponent as ArrowLinkIcon } from '../../../../assets/svg/arrow-link.svg';
import hImg from '../../../../assets/image/hover.jpg';

export const ApartmentsByTypeOfLayout = () => {
  const [pos, setPos] = useState({ y: 0, x: 0 });

  const handleSize = (e: any) => {
    setPos({ y: e.clientY / 20, x: e.clientX / 20 });
  };
  return (
    <section className={styles.apartment}>
      <div className="container">
        <div className="heading mb50">
          <h2 className="">Поиск квартир по типу планировки</h2>
        </div>
        <div className={clsx(styles.box, styles['box--green'])} onMouseMove={handleSize}>
          <img src={hImg} alt="" className={styles.hImage} style={{ top: pos.y - 30 }} />
          <h4 className={styles.box__title}>Классика</h4>
          <p className={styles.box__text}>
            Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными
            балконами или лоджиями, изолированными комнатами и кухней. В этом классе жилья, как
            правило, во всех квартирах один санузел, часто совмещённый.
          </p>
          <div className={styles.box__link}>
            <span>Смотреть варианты</span>
            <ArrowLinkIcon />
          </div>
        </div>
        <div className={clsx(styles.box, styles['box--pink'])}>
          <img src={hImg} alt="" className={styles.hImage} style={{ top: pos.y - 30 }} />
          <h4 className={styles.box__title}>Студия</h4>
          <p className={styles.box__text}>
            Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными
            балконами или лоджиями, изолированными комнатами и кухней.
          </p>
          <div className={styles.box__link}>
            <span>Смотреть варианты</span>
            <ArrowLinkIcon />
          </div>
        </div>
        <div className={clsx(styles.box, styles['box--blue'])}>
          <img src={hImg} alt="" className={styles.hImage} style={{ top: pos.y - 30 }} />
          <h4 className={styles.box__title}>Европланировка</h4>
          <p className={styles.box__text}>
            Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными
            балконами или лоджиями, изолированными комнатами и кухней. В этом классе жилья, как
            правило, во всех квартирах один санузел, часто совмещённый. В этом классе жилья, как
            правило, во всех квартирах один санузел, часто совмещённый.
          </p>
          <div className={styles.box__link}>
            <span>Смотреть варианты</span>
            <ArrowLinkIcon />
          </div>
        </div>
        <div className={clsx(styles.box, styles['box--yellow'])}>
          <img src={hImg} alt="" className={styles.hImage} style={{ top: pos.y - 30 }} />
          <h4 className={styles.box__title}>Двухуровневые</h4>
          <p className={styles.box__text}>
            Грамотно продуманные планировки квартир, с небольшими холлами и коридорами.
          </p>
          <div className={styles.box__link}>
            <span>Смотреть варианты</span>
            <ArrowLinkIcon />
          </div>
        </div>
        <div className={clsx(styles.box, styles['box--violet'])}>
          <img src={hImg} alt="" className={styles.hImage} style={{ top: pos.y - 30 }} />
          <h4 className={styles.box__title}>Пентхаус</h4>
          <p className={styles.box__text}>
            Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными
            балконами или лоджиями, изолированными комнатами и кухней. В этом классе жилья, как
            правило, во всех квартирах один санузел, часто совмещённый.
          </p>
          <div className={styles.box__link}>
            <span>Смотреть варианты</span>
            <ArrowLinkIcon />
          </div>
        </div>
        <div className={clsx(styles.box, styles['box--purple'])}>
          <img src={hImg} alt="" className={styles.hImage} style={{ top: pos.y - 30 }} />
          <h4 className={styles.box__title}>Свободной планировки</h4>
          <p className={styles.box__text}>
            Грамотно продуманные планировки квартир, с небольшими холлами и коридорами, уютными
            балконами или лоджиями, изолированными комнатами и кухней. В этом классе жилья, как
            правило, во всех квартирах один санузел, часто совмещённый.
          </p>
          <div className={styles.box__link}>
            <span>Смотреть варианты</span>
            <ArrowLinkIcon />
          </div>
        </div>
      </div>
    </section>
  );
};
