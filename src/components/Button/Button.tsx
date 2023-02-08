import React from "react";
import styles from "./button.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ children, onClick, ...rest }) => {
  return (
    <button className={styles.button} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
