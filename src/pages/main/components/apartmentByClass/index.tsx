import styles from './style.module.scss';
import clsx from 'clsx';
import ap1 from '../../../../assets/image/ap1.jpg';
import ap2 from '../../../../assets/image/ap2.jpg';
import ap3 from '../../../../assets/image/ap3.jpg';
import ap4 from '../../../../assets/image/ap4.jpg';
import { Link, useNavigate } from 'react-router-dom';

export const ApartmentByClass = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.apartment}>
      <div className="container">
        <div className={clsx([styles.heading, 'heading mb60'])}>
          <div className="heading__line" />
          <h2 className="mb40">Поиск по классу жилых домов</h2>
          <p className={clsx([styles._desc, 'heading__desc'])}>
            Характеристика класса домов поможет определиться с местом проживания
          </p>
        </div>

        <div className={styles.list}>
          <div onClick={() => navigate('/search-result')} className={styles.card}>
            <div className={styles.card__inner}>
              <div className={styles.card__img}>
                <span className={clsx('ship ship--gray', styles.card__ship)}>
                  <Link to="/library/classes"> Стандарт</Link>
                </span>
                <img src={ap1} alt="" />
              </div>
              <div className={styles.card__info}>
                <h4 className="f28 w700 pb20">53 ЖК</h4>
              </div>
            </div>
            <div className={clsx([styles.border, 'border__rightBorder'])} />
            <div className={clsx([styles.border_y, 'border__topBorder'])} />
            <div className={clsx([styles.border_y, 'border__bottomBorder'])} />
          </div>
          <div onClick={() => navigate('/search-result')} className={styles.card}>
            <div className={clsx(styles.card__inner, styles.green)}>
              <div className={styles.card__img}>
                <span className={clsx('ship ship--green', styles.card__ship)}>
                  <Link to="/library/classes/comforts"> Комфорт</Link>
                </span>
                <img src={ap2} alt="" />
              </div>
              <div className={styles.card__info}>
                <h4 className="f28 w700 pb20">24 ЖК</h4>
              </div>
            </div>
            <div className={clsx([styles.border, 'border__rightBorder'])} />
            <div className={clsx([styles.border_y, 'border__topBorder'])} />
            <div className={clsx([styles.border_y, 'border__bottomBorder'])} />
          </div>
          <div onClick={() => navigate('/search-result')} className={styles.card}>
            <div className={clsx(styles.card__inner, styles.teal)}>
              <div className={styles.card__img}>
                <span className={clsx('ship ship--teal', styles.card__ship)}>
                  <Link to="/library/classes">Бизнес</Link>
                </span>
                <img src={ap3} alt="" />
              </div>
              <div className={styles.card__info}>
                <h4 className="f28 w700 pb20">142 ЖК</h4>
              </div>
            </div>
            <div className={clsx([styles.border, 'border__rightBorder'])} />
            <div className={clsx([styles.border_y, 'border__topBorder'])} />
            <div className={clsx([styles.border_y, 'border__bottomBorder'])} />
          </div>
          <div onClick={() => navigate('/search-result')} className={styles.card}>
            <div className={clsx(styles.card__inner, styles.purple)}>
              <div className={styles.card__img}>
                <span className={clsx('ship ship--purple', styles.card__ship)}>
                  <Link to="/library/classes">Элит</Link>
                </span>
                <img src={ap4} alt="" />
              </div>
              <div className={styles.card__info}>
                <h4 className="f28 w700 pb20">12 ЖК</h4>
              </div>
            </div>
            <div className={clsx([styles.border, 'border__rightBorder'])} />
            <div className={clsx([styles.border_y, 'border__topBorder'])} />
            <div className={clsx([styles.border_y, 'border__bottomBorder'])} />
          </div>
        </div>
      </div>
    </section>
  );
};
