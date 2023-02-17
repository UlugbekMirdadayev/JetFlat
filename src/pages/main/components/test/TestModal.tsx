import React from 'react';
import ArrowRightIcon from '../../../../assets/svg/arrow-right.svg';
import { Checkbox } from '../../../../components/checkbox';
import styles from './style.module.scss';

export const TestModal = () => {
  return (
    <div className={styles.test_modal}>
      <h1>2. Тип недвижимости</h1>
      <form>
        <div>
          <Checkbox />
          <input type="text" placeholder="Регистрация" />
        </div>
        <div>
          <Checkbox />
          <input type="text" placeholder="Регистрация" />
        </div>
        <div>
          <Checkbox />
          <input type="text" placeholder="Регистрация" />
        </div>
      </form>
      <div className={styles._arrow_img}>
        <img src={ArrowRightIcon} alt="..." />
        <img src={ArrowRightIcon} alt="..." />
      </div>
    </div>
  );
};
