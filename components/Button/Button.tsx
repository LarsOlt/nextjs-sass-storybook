import React from "react";
import styles from "./Button.module.scss";

export interface Props {
  children: React.ReactNode;
  /** @default primary */
  version?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({ children, version = "primary" }) => {
  return <button className={`${styles.button} ${styles[version]}`}>{children}</button>;
};

export default Button;
