import React, { FC, ReactElement, ReactNode, ChangeEvent } from 'react';
import styles from './style.module.scss';

type Props = {
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value?: string;
  name?: string;
  children?: ReactNode;
  dis?: boolean;
};

export const Radio: FC<Props> = (props: Props): ReactElement => {
  const { checked, onChange, label, name, children, dis, value } = props;
  return (
    <label className={styles.labelContainer}>
      <input
        className={styles.checkboxInput}
        name={name}
        type="radio"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <span className={styles.checkboxIcon} />
      <div className={styles.checkboxLabel}>{children}</div>
    </label>
  );
};
