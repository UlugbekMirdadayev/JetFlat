import React, { ChangeEvent, useState, useRef, FC, useMemo } from 'react';
import { ReactComponent as Icon } from '../../assets/svg/arrow-down.svg';
import { Scrollbars } from 'react-custom-scrollbars-2';

import styles from './style.module.scss';
import useOnClickOutside from '../../hooks/useOutsideHook';
import clsx from 'clsx';
import { Checkbox } from '../checkbox';
import { Radio } from '../radio';

const radioBanks = [
  { id: 0, name: 'Без ипотеки', checked: false },
  { id: 1, name: 'Все банки', checked: false },
  { id: 2, name: 'Выбрать банк', checked: false }
];

const typeRooms = [
  { id: 0, label: 'Евробанк', checked: false, disabled: false },
  { id: 1, label: 'Пенобутанбанк', checked: false, disabled: false },
  { id: 2, label: 'Альфобанк', checked: false, disabled: false },
  { id: 3, label: 'Двухуровневый банк', checked: false, disabled: false },
  { id: 4, label: 'Сбербанк', checked: false, disabled: false }
];

type Props = {};

export const SelectTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeList, setActiveList] = useState(0);
  const [roomType, setRoomType] = useState(typeRooms);
  const [radioList, setRadioList] = useState(radioBanks);
  const [activeRadio, setActiveRadio] = useState(0);

  const checkedRoomsType = useMemo(() => {
    const filter = roomType.filter((i) => i.checked);
    return filter;
  }, [roomType]);

  const ref = useRef(null);
  const toggling = () => setIsOpen(!isOpen);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const onHandleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const newRoomType = roomType.map((item) => {
      return item.label === name ? { ...item, checked: checked } : item;
    });

    setRoomType(newRoomType);
  };

  return (
    <div className={styles.selectContainer} ref={ref}>
      <div className={styles.selectValue} tabIndex={0} onClick={toggling}>
        <span style={{ textTransform: 'initial' }}>
          {activeRadio === 0 ? 'Без ипотеки' : 'С ипотекой'};{' '}
          {checkedRoomsType.map((i) => i.label + ',')}
        </span>
        <div className={clsx(styles.arrow, isOpen && styles.active)}>
          <Icon />
        </div>
      </div>
      {isOpen && (
        <div className={styles.selectList}>
          <div className={styles.radioList}>
            {radioList.map((item) => (
              <div key={item.id} className={styles.radioList__item}>
                <Radio
                  name={item.name}
                  checked={item.id === activeRadio}
                  onChange={() => setActiveRadio(item.id)}>
                  <span className={clsx('ml10 f18 cDark')}>{item.name}</span>
                </Radio>
              </div>
            ))}
          </div>
          <div className={styles.bankList}>
            <Scrollbars
              // autoHide
              // autoHideDuration={400}

              renderView={({ style, ...props }) => (
                <div style={{ ...style, overflowX: 'auto', marginBottom: '0px' }} {...props} />
              )}
              renderThumbVertical={({ style, ...props }) => (
                <div className="thumbVertical" style={{ width: '4px' }} {...props} />
              )}
              thumbSize={15}
              renderTrackVertical={(props) => <div className="trackVertical" {...props} />}
              style={{ height: 162, right: -5 }}>
              <div>
                {roomType.map((item) => (
                  <div key={item.id} className={styles.bankList__item}>
                    <Checkbox
                      disabled={item.disabled}
                      name={item.label}
                      checked={item.checked}
                      onChange={onHandleSelect}>
                      <span className={clsx('ml10 f18', item.disabled && 'cTealLight')}>
                        {item.label}
                      </span>
                    </Checkbox>
                  </div>
                ))}
              </div>
            </Scrollbars>
          </div>
        </div>
      )}
    </div>
  );
};
