import { FunctionComponent, useEffect } from "react";
import styles from "./c-side-drawer.module.css";

type CSideDrawerType = {
  onClose?: () => void;
};

const CSideDrawer: FunctionComponent<CSideDrawerType> = ({ onClose }) => {
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
    <div className={styles.cSideDrawer} data-animate-on-scroll>
      <div className={styles.openInWindow}>Open In Window</div>
    </div>
  );
};

export default CSideDrawer;
