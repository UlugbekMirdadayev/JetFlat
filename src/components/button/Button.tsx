import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './style.module.scss';

type IButtonVariant = 'outlined' | 'orange' | 'outlinedWhite' | 'primary';

type Props = {
  text?: string;
  onClick?: () => void;
  className?: string;
  variant?: IButtonVariant;
  fluid?: boolean;
  size?: 'large' | 'small';
  disabled?: boolean;
  children?: React.ReactNode;
  id?: string | undefined;
};

export const Button: FC<Props> = ({
  disabled,
  size = 'small',
  text,
  onClick,
  className,
  variant,
  fluid,
  id,
  children
}) => {
  return (
    <button
      id={id}
      disabled={disabled}
      className={clsx(
        styles.btn,
        {
          [styles.fluid]: fluid
        },
        variant && styles[variant],
        styles[size],
        className
      )}
      onClick={onClick}>
      {children || text}
    </button>
  );
};
