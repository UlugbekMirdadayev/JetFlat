import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../button';
import styles from './style.module.scss';
import { ChartIcon, HeartIcon, InfoIcon, JfColorIcon, LogoIcon, ProfileIcon } from '../../assets';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <>
      <div className={styles.is_pc}>
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
                  <Link to={'/library'} className={styles.menu__link}>
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
                  <Link to={'/residential-complexes'} className={styles.menu__link}>
                    Жилые Комплексы
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link to={'/regions'} className={styles.menu__link}>
                    Районы
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link to={'/about-services'} className={styles.menu__link}>
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
                <NavLink to="/">Политика конфиденциальности</NavLink>
                <NavLink to="/">Пользовательское соглашение</NavLink>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className={styles.is_responsive}>
        <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footer__inner}>
              <div className={styles.left}>
                <div className={styles.logo__wrap}>
                  <LogoIcon className={styles.logo} />
                </div>
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
              <div className={styles.reverse_column_mobile}>
                <div className={styles.right}>
                  <Button variant="outlined" className={styles.right__btn}>
                    Добавить новостройку
                  </Button>
                </div>
                <div className={styles.bar}>
                  <ul className={styles.menu}>
                    <li className={styles.menu__item}>
                      <Link to={'/'} className={styles.menu__link}>
                        Новостройки
                      </Link>
                    </li>

                    <li className={styles.menu__item}>
                      <Link to={'/ipoteka'} className={styles.menu__link}>
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
                      <Link to={'/library'} className={styles.menu__link}>
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
                      <Link to={'/residential-complexes'} className={styles.menu__link}>
                        Жилые Комплексы
                      </Link>
                    </li>
                    <li className={styles.menu__item}>
                      <Link to={'/regions'} className={styles.menu__link}>
                        Районы
                      </Link>
                    </li>
                    <li className={styles.menu__item}>
                      <Link to={'/'} className={styles.menu__link}>
                        О сервисе
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.footer__bottom}>
              <div className={clsx([styles.copyring__sm__text, styles.copyring])}>
                <p>
                  ©2021-2022, jet-flat.<span className={styles.red}>com</span> <sup>TM</sup>
                </p>
                <span className={styles.copyring__right}>Все права защищены</span>
              </div>
              <div className={styles.copyring}>
                <p>
                  <span className={styles.copyring__right}>Все права защищены</span>
                  <br />
                  ©2021–2022, jet-flat.<span className={styles.red}>com</span> <sup>TM</sup>
                </p>
              </div>
              <div className={styles.politics}>
                <NavLink to="/">Политика конфиденциальности</NavLink>
                <NavLink to="/">Пользовательское соглашение</NavLink>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
