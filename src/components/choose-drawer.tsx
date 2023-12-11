import { FunctionComponent, useEffect } from "react";
import styles from "./choose-drawer.module.css";

type ChooseDrawerType = {
  onClose?: () => void;
};

const ChooseDrawer: FunctionComponent<ChooseDrawerType> = ({ onClose }) => {
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
    <div className={styles.chooseDrawer} data-animate-on-scroll>
      <div className={styles.navLinks}>
        <div className={styles.openInWindowWrapper}>
          <a className={styles.openInWindow}>Open In Window</a>
        </div>
      </div>
    </div>
  );
};

export default ChooseDrawer;
