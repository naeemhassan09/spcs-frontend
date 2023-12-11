import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./drawer-menu.module.css";

type DrawerMenuType = {
  onClose?: () => void;
};

const DrawerMenu: FunctionComponent<DrawerMenuType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.drawerMenu} data-animate-on-scroll>
      <div className={styles.navLinks}>
        <div className={styles.homeWrapper}>
          <Link className={styles.home} to="/">
            Home
          </Link>
        </div>
        <div className={styles.homeWrapper}>
          <Link className={styles.home} to="/about-page-main">
            About us
          </Link>
        </div>
        <div className={styles.homeWrapper}>
          <Link className={styles.home} to="/contact-page-main">
            Contact us
          </Link>
        </div>
        <div className={styles.homeWrapper}>
          <Link className={styles.home} to="/book-a-packet-shipping-calculator">
            Shipping Calculator
          </Link>
        </div>
        <div className={styles.homeWrapper}>
          <Link className={styles.trackYourShipment} to="/track-shipment-main">
            Track Your Shipment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
