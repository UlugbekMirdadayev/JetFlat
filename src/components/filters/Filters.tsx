import { Checkbox } from '../checkbox';
import { Button } from '../button';
import styles from './style.module.scss';
import { Search } from './Search';
import { SelectOne } from './SelectOne';
import { SelectTwo } from './SelectTwo';
import { ReactComponent as LocationIcon } from '../../assets/svg/location_primary.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Filters = () => {
  const [radio, setRadio] = useState<null | number>(null);
  const navigate = useNavigate();
  return (
    <div className={styles.filters}>
      <div className={styles.filters__head}>
        <Search />
        <div>
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
          <Checkbox onChange={() => setRadio(radio === 0 ? null : 0)} checked={radio === 0}>
            <p className="ml10 f18 mr40">Готовые квартиры</p>
          </Checkbox>
          <Checkbox onChange={() => setRadio(radio === 1 ? null : 1)} checked={radio === 1}>
            <p className="ml10 f18 mr40">Заселение до года</p>
          </Checkbox>
        </div>
        <Link to="/" className={styles.filters__mapLink}>
          <LocationIcon /> Смотреть на карте
        </Link>
        <div className={styles.pc_btn}>
          <Button variant="orange" onClick={() => navigate('/search-result')}>
            <span>Проверить цены</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
