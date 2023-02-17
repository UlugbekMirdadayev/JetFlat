import { Checkbox } from '../checkbox';
import { Button } from '../button';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Search } from './Search';
import { SelectOne } from './SelectOne';
import { SelectTwo } from './SelectTwo';

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
      </div>
      <div className={styles.filters__bottom}>
        <Checkbox>
          <p className="ml10 f18 mr40">Готовые квартиры</p>
        </Checkbox>
        <Checkbox>
          <p className="ml10 f18 mr40">Заселение до года</p>
        </Checkbox>
        <a href="/" className={styles.filters__mapLink}>
          Смотреть на карте
        </a>
        <Button variant="orange">Проверить цены</Button>
      </div>
    </div>
  );
};
