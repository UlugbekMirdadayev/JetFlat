import styles from './style.module.scss';
import clsx from 'clsx';
import { Button } from '../../../../components/button';

export const CityCollage = () => {
  const cities = [
    [
      {
        title: 'БЦ Высоцкий',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg.png')
      },
      {
        title: 'УРФУ УПИ',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-1.png')
      },
      {
        title: 'Лицей 110',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-2.png')
      }
    ],
    [
      {
        title: 'Гимназия 13 (английская)',
        desc: '6 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-3.png')
      },
      {
        title: 'СК Юность',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-4.png')
      },
      {
        title: 'Дендропарк',
        desc: '3 жилых комплекса',
        image: require('../../../../assets/image/ekaterinburg-5.png')
      }
    ]
  ];
  return (
    <section className="apartment">
      <div className="container">
        <div className="heading mb60">
          <div className="heading__line" />
          <h2 className="mb40">Екатеринбург — откройте для себя этот город</h2>
          <p className="heading__desc mb40">
            В этих популярных местах вы точно найдёте что-то для себя
          </p>
          <div className="heading__line" />
        </div>
        <div className={styles.grid_row}>
          <div className={styles.collage}>
            {cities[0].map((city: any, key: number) => (
              <div className={clsx([styles.card, key ? styles.reverse_column : ''])} key={key}>
                <div className="info_">
                  <h3 className={styles.card__title}>{city.title}</h3>
                  <p className="heading__desc">{city.desc}</p>
                </div>
                <div className={styles.card__img}>
                  <img src={city.image} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className={clsx([styles.collage, styles.reverse_collage])}>
            {cities[1].map((city: any, key: number) => (
              <div className={clsx([styles.card, styles.reverse_column])} key={key}>
                <div className="info_">
                  <h3 className={styles.card__title}>{city.title}</h3>
                  <p className="heading__desc">{city.desc}</p>
                </div>
                <div className={styles.card__img}>
                  <img src={city.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button variant="orange" text="Показать все ориентиры" />
      </div>
    </section>
  );
};
