import React from "react";
import styles from "./Button.module.scss";

export interface Props {
  children: React.ReactNode;
  /** @default primary */
  variant?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({ children, variant = "primary" }) => {
  return <button className={`${styles.button} ${styles[variant]}`}>{children}</button>;
};

export default Button;
