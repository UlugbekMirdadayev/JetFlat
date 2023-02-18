import { Checkbox } from '../checkbox';
import { Button } from '../button';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Search } from './Search';
import { SelectOne } from './SelectOne';
import { SelectTwo } from './SelectTwo';
import { ReactComponent as LocationIcon } from '../../assets/svg/location_primary.svg';

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filters__head}>
        <Search />
        <div className={clsx(styles.select, 'mr40')}>
          <SelectOne />
        </div>
        <div className={styles.select}>
          <SelectTwo />
        </div>
        <div className={styles.mobile_btn}>
          <Button variant="orange">
            <span>Проверить цены</span>
          </Button>
        </div>
      </div>
      <div className={styles.filters__bottom}>
        <div className={styles.filters__bottom}>
          <Checkbox>
            <p className="ml10 f18 mr40">Готовые квартиры</p>
          </Checkbox>
          <Checkbox>
            <p className="ml10 f18 mr40">Заселение до года</p>
          </Checkbox>
        </div>
        <a href="/" className={styles.filters__mapLink}>
          <LocationIcon /> Смотреть на карте
        </a>
        <div className={styles.pc_btn}>
          <Button variant="orange">
            <span>Проверить цены</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
