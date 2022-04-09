import React from "react";
import styles from "./Button.module.scss";

export interface Props {
  /** Text of the button */
  children: React.ReactNode;
  /**
   * Style of the button
   * @default primary */
  variant?: "primary" | "secondary";
}

/** Button component */
const Button: React.FC<Props> = ({ children, variant = "primary" }) => {
  return <button className={`${styles.button} ${styles[variant]}`}>{children}</button>;
};

export default Button;
