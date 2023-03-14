import { useState } from 'react';
import styles from './style.module.scss';
import { Select } from '../../../../components/select/Select';
import { ReactComponent as Gk7Icon } from '../../../../assets/svg/7gk.svg';
import { ReactComponent as GrinvichIcon } from '../../../../assets/svg/grinvich.svg';
import { ReactComponent as AstraIcon } from '../../../../assets/svg/astra.svg';
import { ReactComponent as GolosIcon } from '../../../../assets/svg/golos.svg';
import { ReactComponent as PickIcon } from '../../../../assets/svg/pick.svg';
import { Button } from '../../../../components/button';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const brands = [
  { id: 0, brand: Gk7Icon },
  { id: 1, brand: GrinvichIcon },
  { id: 2, brand: AstraIcon },
  { id: 3, brand: GrinvichIcon },
  { id: 4, brand: AstraIcon },
  { id: 5, brand: GolosIcon },
  { id: 6, brand: AstraIcon },
  { id: 7, brand: PickIcon },
  { id: 8, brand: GolosIcon },
  { id: 9, brand: PickIcon },
  { id: 10, brand: GrinvichIcon },
  { id: 11, brand: GolosIcon },
  { id: 12, brand: PickIcon },
  { id: 13, brand: PickIcon },
  { id: 14, brand: GolosIcon }
];

export const ApartmentSearchByDeveloper = () => {
  const [selectedIbdex, setSelectedIndex] = useState(0);
  return (
    <section className="apartment">
      <div className="container">
        <div className={clsx([styles.heading, 'heading mb60'])}>
          <div className="heading__line" />
          <h2 className={clsx([styles.title, 'mb40'])}>Поиск квартир по застройщику</h2>
          <p className={clsx([styles.desc, 'heading__desc'])}>
            Надёжность Застройщика проверена. Документы для сделки соответствуют действующему
            законодательству
          </p>
        </div>
        <div className={styles.select__wrap}>
          <div className="heading__line" />
          <Select
            options={['Выбрать застройщика', 'Голос', 'Пик']}
            selectedIbdex={selectedIbdex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
      </div>
      <div className="container container--mod">
        <div className={styles.list}>
          {brands.map(({ id, brand: Brand }) => (
            <div key={id} className={styles.box}>
              <Brand />
            </div>
          ))}

          <div className={styles.box}>
            <GrinvichIcon />
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.center_button}>
          <Link to="/developers">
            <Button variant="orange">Показать всех застройщиков</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
