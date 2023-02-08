import React from "react";
import styles from "./button.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  children,
  className = "",
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
