import React, { FC /*useState*/ } from 'react';

type Props = {
  label?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  color?: string | undefined;
  defaultOpen?: boolean;
};

export const Accord: FC<Props> = ({
  // label,
  // onClick,
  className
  // color,
  // defaultOpen = false,
  // children
}) => {
  // const [open, setOpen] = useState<boolean>(defaultOpen);
  return <div className={className}>Accord</div>;
};
