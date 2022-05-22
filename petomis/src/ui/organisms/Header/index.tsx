import React from "react";
import Typography from "../../atoms/Typography";
import { FacebookIcon } from "../../icons/SocialMediaIcons";
import WebsiteSwitch from "../../molecules/WebsiteSwitch";
import styles from "./Header.module.css";
import classNames from "classnames";

export interface HeaderProps {
  isShrunk: boolean;
}

const Header = ({ isShrunk }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div
        className={classNames(styles.headerInner, {
          [styles.shrunkHeader]: isShrunk,
          [styles.defaultHeader]: !isShrunk,
        })}
      >
        <div className={styles.websiteSwitch}>
          <WebsiteSwitch />
        </div>
        <div className={styles.logo}>
          <Typography font="assistant" style="title">
            peTomis
          </Typography>
        </div>

        <div className={styles.socialIcons}>
          <FacebookIcon />
          <FacebookIcon />
          <FacebookIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
