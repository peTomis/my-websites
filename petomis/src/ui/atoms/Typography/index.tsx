import classNames from "classnames";
import React from "react";
import styles from "./Typography.module.css";

export interface TypographyProps {
  children: React.ReactNode;
  font?: string;
  style?: string;
}

const Typography = ({ font, style, children }: TypographyProps) => {
  return (
    <span
      className={classNames(styles.style, {
        [styles.assistant]: font === "assistant",
        [styles.title]: style === "title",
      })}
    >
      {children}
    </span>
  );
};

export default Typography;
