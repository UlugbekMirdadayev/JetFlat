import React, { ChangeEvent, useState, useRef, FC } from 'react';
import { Checkbox } from '../checkbox';
import { Button } from '../button';
import styles from './style.module.scss';
import { SearchIcon } from '../../assets';
import useOnClickOutside from '../../hooks/useOutsideHook';
import { Select } from '../select/Select';
import clsx from 'clsx';
import { Search } from './Search';
import { SelectOne } from './SelectOne';
import { SelectTwo } from './SelectTwo';

export const Filters = () => {
  const [idx, setIdx] = useState(0);
  return (
    <div className={styles.filters}>
      <div className={styles.filters__head}>
        <Search />
        <div className={clsx(styles.select, 'mr40')}>
          {/* <Select
            options={['1–2-комнатная;', '1–2-комнатная; студи']}
            selectedIbdex={idx}
            setSelectedIndex={setIdx}
          /> */}
          <SelectOne />
        </div>
        <div className={styles.select}>
          {/* <Select
            options={['1–2-комнатная;', '1–2-комнатная; студи']}
            selectedIbdex={idx}
            setSelectedIndex={setIdx}
          /> */}
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
