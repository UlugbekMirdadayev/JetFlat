import React, { FC, useState, useMemo } from 'react';
import style from './style.module.scss';
import clsx from 'clsx';
import { ReactComponent as ArrowLinkIcon } from '../../assets/svg/arrow-link.svg';

type Props = {
  label?: string;
  description: any;
  className?: string;
  color?: string | undefined;
  defaultOpen?: boolean;
};

export const Accord: FC<Props> = ({
  label,
  className,
  description,
  color,
  defaultOpen = false,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  const isColor = useMemo(() => ({ backgroundColor: color }), [color]);

  return (
    <div className={clsx([style.accord, open && style.active])} {...props}>
      <div
        style={open ? isColor : {}}
        className={clsx([className, style.accord__row])}
        onClick={() => setOpen(!open)}>
        <div className={style.accord__label}>{label}</div>
        <div className={style.accord__description}>{description}</div>
        <div className={style.accord__arrow}>
          <ArrowLinkIcon />
        </div>
      </div>
      <div className={style.image_block}>
        <img src={require('../../assets/image/ekaterinburg-3.png')} alt="" />
      </div>
    </div>
  );
};
