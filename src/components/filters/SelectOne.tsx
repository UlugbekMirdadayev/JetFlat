import React, { ChangeEvent, useState, useRef, FC, useMemo } from 'react';
import { ReactComponent as Icon } from '../../assets/svg/arrow-down.svg';

import styles from './style.module.scss';
import useOnClickOutside from '../../hooks/useOutsideHook';
import clsx from 'clsx';
import { Checkbox } from '../checkbox';

const rooms = [
  { id: 1, name: '1', checked: false },
  { id: 2, name: '2', checked: false },
  { id: 3, name: '3', checked: false },
  { id: 4, name: '4', checked: false },
  { id: 5, name: '5', checked: false },
  { id: 6, name: '5+', checked: false }
];

const typeRooms = [
  { id: 0, label: 'Любая', checked: false, disabled: false },
  { id: 1, label: 'Студия', checked: false, disabled: false },
  { id: 2, label: 'Европланировка', checked: false, disabled: false },
  { id: 3, label: 'Пентхаус', checked: false, disabled: false },
  { id: 4, label: 'Двухуровневая', checked: false, disabled: false }
];

type Props = {};

export const SelectOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeList, setActiveList] = useState(0);
  const [roomType, setRoomType] = useState(typeRooms);
  const [roomsList, setRoomsList] = useState(rooms);
  const [isNotStydio, setIsNotStydio] = useState(false);

  const checkedRooms = useMemo(() => {
    const filter = roomsList.filter((i) => i.checked);
    return filter;
  }, [roomsList]);

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

  const onHandleRooms = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const newRoomsList = roomsList.map((item) =>
      item.name === name ? { ...item, checked: checked } : item
    );

    const key = newRoomsList.findIndex((i) => i.name === '1' && i.checked);

    if (key == -1) {
      const newRoomType = roomType.map((item) => {
        return item.id === 1 ? { ...item, checked: false, disabled: true } : item;
      });
      setRoomType(newRoomType);
    } else {
      const newRoomType = roomType.map((item) => {
        return item.id === 1 ? { ...item, disabled: false } : item;
      });
      setRoomType(newRoomType);
    }
    setRoomsList(newRoomsList);
  };

  return (
    <div className={styles.selectContainer} ref={ref}>
      <div className={styles.selectValue} tabIndex={0} onClick={toggling}>
        <span>
          {checkedRooms.length
            ? checkedRooms.map((i) => i.name + '-').join('') + 'комнатная'
            : 'все'}
          ; {checkedRoomsType.map((i) => i.label + ',')}
        </span>
        <div className={clsx(styles.arrow, isOpen && styles.active)}>
          <Icon />
        </div>
      </div>
      {isOpen && (
        <div className={styles.selectList}>
          <div className={styles.rooms}>
            {roomsList.map((room) => (
              <label key={room.id} className={styles['room-container']}>
                <input
                  name={room.name}
                  className={styles.room__field}
                  type="checkbox"
                  checked={room.checked}
                  onChange={onHandleRooms}
                />
                <span className={styles.room__item}>{room.name}</span>
              </label>
            ))}
          </div>
          {roomType.map((item) => (
            <div key={item.id} className={styles.checkbox__item}>
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
      )}
    </div>
  );
};
