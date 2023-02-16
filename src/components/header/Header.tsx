import React from 'react';
import { ChartIcon, HeartIcon, InfoIcon, JfIcon, LogoIcon } from '../../assets';
import { Button } from '../button';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className="container">
          <div className={styles.header__top}>
            <Link to={'/'} className={styles.logo}>
              <LogoIcon />
            </Link>
            <div className={styles.city}>Екатеринбург</div>
            <Link to={'/'}>
              <Button className={styles.add} variant="outlinedWhite">
                Добавить новостройку
              </Button>
            </Link>
            <Link to={'/'}>
              <Button className={styles.lk} variant="outlined">
                Личный кабинет
              </Button>
            </Link>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className="container">
          <div className={styles.header__bottom}>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <Link to={'/'} className={styles.list__link}>
                  Новостройки
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link to={'/'} className={styles.list__link}>
                  Жилые комплексы
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link to={'/'} className={styles.list__link}>
                  Застройщики
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link to={'/'} className={styles.list__link}>
                  Ипотека
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link to={'/'} className={styles.list__link}>
                  Trade-in
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link to={'/'} className={styles.list__link}>
                  Статьи
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link to={'/'} className={styles.list__link}>
                  О сервисе
                </Link>
              </li>
            </ul>

            <ul className={styles.bar}>
              <li className={styles.bar__item}>
                <Link to={'/'} className={styles.bar__link}>
                  <JfIcon />
                </Link>
              </li>
              <li className={styles.bar__item}>
                <Link to={'/'} className={styles.bar__link}>
                  <ChartIcon />
                </Link>
              </li>
              <li className={styles.bar__item}>
                <Link to={'/'} className={styles.bar__link}>
                  <HeartIcon />
                </Link>
              </li>
              <li className={styles.bar__item}>
                <Link to={'/'} className={styles.bar__link}>
                  <InfoIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
