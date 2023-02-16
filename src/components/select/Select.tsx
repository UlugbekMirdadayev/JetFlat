import React, { ChangeEvent, useState, useRef, FC } from 'react';
import { ReactComponent as Icon } from '../../assets/svg/arrow-down.svg';

import styles from './style.module.scss';
import useOnClickOutside from '../../hooks/useOutsideHook';

import clsx from 'clsx';

type TSelectProps = {
  options: string[];
  placeholder?: string;
  selectedIbdex: number;
  setSelectedIndex: (selectedIbdex: number) => void;
};

export const Select: FC<TSelectProps> = ({
  options,
  placeholder,
  selectedIbdex,
  setSelectedIndex
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeList, setActiveList] = useState(0);

  const ref = useRef(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any, idx: number) => {
    setActiveList(idx);
    setIsOpen(false);
    setSelectedIndex(options.indexOf(value));
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeList === 0) {
        return;
      }
      setActiveList(activeList - 1);
    } else if (e.key === 'ArrowDown') {
      if (activeList >= options.length - 1) {
        return setActiveList(0);
      }
      setActiveList(activeList + 1);
    } else if (e.key === 'Enter') {
      //   let value = options[activeList];
      // setSelectedOption(value);
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.dropDownContainer} ref={ref}>
      <div className={styles.dropDownHeader} tabIndex={0} onClick={toggling} onKeyDown={onKeyDown}>
        <div className={styles.dropDownHeaderContent}>
          <span>{(selectedIbdex && options[selectedIbdex]) || options[0]}</span>
          <div className={clsx(styles.arrow, isOpen && styles.active)}>
            <Icon />
          </div>
        </div>
        <span data-label={placeholder}></span>
      </div>
      {isOpen && (
        <ul className={styles.selectList}>
          {options.map((option, idx) => (
            <li className={styles.listItem} onClick={() => onOptionClicked(option, idx)} key={idx}>
              <div className={styles.text}>{option}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
