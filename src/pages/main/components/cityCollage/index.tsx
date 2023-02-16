import React from 'react';
import styles from './style.module.scss';
// import clsx from 'clsx';
import { Button } from '../../../../components/button';

export const CityCollage = () => {
  return (
    <section className="apartment">
      <div className="container">
        <div className="heading mb60">
          <div className="heading__line"></div>
          <h2 className="mb40">Екатеринбург — откройте для себя этот город</h2>
          <p className="heading__desc mb40">
            В этих популярных местах вы точно найдёте что-то для себя
          </p>
          <div className="heading__line">
            БЦ Высоцкий
          </div>
        </div>
        <div className={styles.collage}>

        </div>
        <Button variant="orange">Показать все ориентиры</Button>
      </div>
    </section>
  );
};
