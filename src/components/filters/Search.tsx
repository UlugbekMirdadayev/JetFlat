import React, { useState, useRef } from 'react';
import styles from './style.module.scss';
import { SearchIcon } from '../../assets';
import useOnClickOutside from '../../hooks/useOutsideHook';

const results = ['Зоопарк', 'Зоологический музей', 'Проспект зоологов'];

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const ref = useRef(null);

  const handleOpen = () => setIsOpen((o) => !o);

  useOnClickOutside(ref, () => setIsOpen(false));

  const activeValue = (v: string) => {
    setValue(v);
    setIsOpen(false);
  };

  return (
    <div className={styles.search} ref={ref}>
      <div onClick={handleOpen}>
        <input
          type="text"
          className={styles.search__field}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <SearchIcon className={styles.search__icon} />
      {isOpen && (
        <div className={styles['search-list']}>
          {results.map((result) => (
            <div
              key={result}
              className={styles['search-list__item']}
              onClick={() => activeValue(result)}>
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
