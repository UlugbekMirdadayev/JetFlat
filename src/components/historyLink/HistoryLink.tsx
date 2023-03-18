import { useState, useLayoutEffect } from 'react';
import styles from './style.module.scss';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export const HistoryLink = ({ links = [] }: any) => {
  const { pathname } = useLocation();
  const [useWidthLine, setUseWidthLine] = useState(
    window.innerWidth >= 1920
      ? 370 + 100 * links?.filter(Boolean)?.length + 'px'
      : 15.625 + links?.filter(Boolean)?.length * 4.166666666666667 + 'vw'
  );

  const updateSize = () =>
    setUseWidthLine(
      window.innerWidth >= 1920
        ? 370 + 100 * links?.filter(Boolean)?.length + 'px'
        : 15.625 + links?.filter(Boolean)?.length * 4.166666666666667 + 'vw'
    );

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div>
      <ul className={clsx([styles.list, 'mb10'])}>
        <li className={styles.list__item}>
          <Link to={'/'} className={styles.list__link}>
            Главная
          </Link>
        </li>
        {links.length
          ? links?.filter(Boolean).map(({ link = '/', name = '' }: any) => (
              <li className={styles.list__item} key={link}>
                /
                <Link
                  to={link}
                  className={clsx([
                    styles.list__link,
                    pathname === link ? styles.list__link__active : ''
                  ])}>
                  {name}
                </Link>
              </li>
            ))
          : null}
      </ul>
      <div className="heading__line" style={{ width: useWidthLine }} />
    </div>
  );
};
