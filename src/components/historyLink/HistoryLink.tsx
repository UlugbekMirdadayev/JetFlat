import styles from './style.module.scss';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const HistoryLink = ({ links = [] }: any) => {
  return (
    <div>
      <ul className={clsx([styles.list, 'mb10'])}>
        <li className={styles.list__item}>
          <NavLink to={'/'} className={styles.list__link}>
            Главная
          </NavLink>
        </li>
        {links.length
          ? links?.map(({ link = '/', name = '' }: any) => (
              <li className={styles.list__item} key={link}>
                /
                <NavLink to={link} className={styles.list__link}>
                  {name}
                </NavLink>
              </li>
            ))
          : null}
      </ul>
      <div className="heading__line" style={{ width: 300 + links.length * 80 }} />
    </div>
  );
};
