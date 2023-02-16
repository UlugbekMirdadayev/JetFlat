import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import styles from './style.module.scss';
import { ChartIcon, HeartIcon, InfoIcon, JfColorIcon, LogoIcon, ProfileIcon } from '../../assets';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.left}>
            <div className={styles.logo__wrap}>
              <LogoIcon className={styles.logo} />
            </div>
          </div>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <Link to={'/'} className={styles.menu__link}>
                Новостройки
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link to={'/'} className={styles.menu__link}>
                Ипотека
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to={'/'} className={styles.menu__link}>
                Trade-in
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to={'/'} className={styles.menu__link}>
                Статьи
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to={'/'} className={styles.menu__link}>
                Библиотека
              </Link>
            </li>
          </ul>

          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <Link to={'/'} className={styles.menu__link}>
                Застройщики
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link to={'/'} className={styles.menu__link}>
                Жилые Комплексы
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to={'/'} className={styles.menu__link}>
                Районы
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to={'/'} className={styles.menu__link}>
                О сервисе
              </Link>
            </li>
          </ul>

          <div className={styles.right}>
            <Button variant="outlined" className={styles.right__btn}>
              Добавить новостройку
            </Button>
            <ul className={styles.bar}>
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
                  <ProfileIcon />
                </Link>
              </li>
              <li className={styles.bar__item}>
                <Link to={'/'} className={styles.bar__link}>
                  <InfoIcon />
                </Link>
              </li>
            </ul>
            <div className={styles.app}>
              <JfColorIcon />
              <span className={styles.app__text}>Мобильное приложение</span>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.copyring}>
            <p>
              ©2021–2022, jet-flat.<span className={styles.red}>com</span> <sup>TM</sup>{' '}
            </p>
            <p className={styles.copyring__right}>Все права защищены</p>
          </div>
          <div className={styles.politics}>
            <a href="/">Политика конфиденциальности</a>
            <a href="/">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
