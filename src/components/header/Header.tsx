import { useEffect, useState } from 'react';
import { ChartIcon, HeartIcon, InfoIcon, JfIcon, LogoIcon } from '../../assets';
import { Button } from '../button';
import styles from './style.module.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import { ReactComponent as Close } from '../../assets/svg/close.svg';
import { ReactComponent as LocationIcon } from '../../assets/svg/location.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg';
import clsx from 'clsx';

export const Header = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <header className={styles.header}>
      <ul
        style={
          open
            ? { transform: 'translateY(0)', opacity: 1 }
            : { transform: 'translateY(-100%)', opacity: 0 }
        }
        className={styles.list_mobile}>
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
          <Link to={'/ipoteka'} className={styles.list__link}>
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
          <Link to={'/about-services'} className={styles.list__link}>
            О сервисе
          </Link>
        </li>
        <Button className={styles.add_} variant="outlinedWhite">
          Добавить новостройку
        </Button>
      </ul>
      <div className={styles.header__inner}>
        <div className="container">
          <div className={styles.header__top}>
            <div className={styles.logo}>
              <button
                style={open ? { transform: 'scale(0.8)' } : {}}
                className={styles.menu}
                onClick={() => setOpen(!open)}>
                {open ? <Close /> : <Menu />}
              </button>
              <Link to={'/'}>
                <LogoIcon />
              </Link>
            </div>
            <div className={styles.city}>
              <LocationIcon />
              Екатеринбург
            </div>
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
            <div className={styles.mobil_loation}>
              <LocationIcon />
              <div className={clsx([styles.list__link, 'fs16'])}>Екатеринбург</div>
            </div>
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
                <Link to={'/ipoteka'} className={styles.list__link}>
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
                <Link to={'/about-services'} className={styles.list__link}>
                  О сервисе
                </Link>
              </li>
            </ul>

            <ul className={styles.bar}>
              <li className={styles.bar__item}>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    clsx([styles.bar__link, isActive ? styles.active_link : ''])
                  }>
                  <JfIcon />
                </NavLink>
              </li>
              <li className={clsx([styles.bar__item, styles.user_mobile_btn])}>
                <NavLink
                  to={'/profile'}
                  className={({ isActive }) =>
                    clsx([styles.bar__link, isActive ? styles.active_link : ''])
                  }>
                  <UserIcon />
                </NavLink>
              </li>
              <li className={styles.bar__item}>
                <NavLink
                  to={'/comparison'}
                  className={({ isActive }) =>
                    clsx([styles.bar__link, isActive ? styles.active_link : ''])
                  }>
                  <ChartIcon />
                </NavLink>
              </li>
              <li className={styles.bar__item}>
                <NavLink
                  to={'/likes'}
                  className={({ isActive }) =>
                    clsx([styles.bar__link, isActive ? styles.active_link : ''])
                  }>
                  <HeartIcon />
                </NavLink>
              </li>
              <li className={styles.bar__item}>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    clsx([styles.bar__link, isActive ? styles.active_link : ''])
                  }>
                  <InfoIcon />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
