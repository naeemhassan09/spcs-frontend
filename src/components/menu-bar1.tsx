import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./menu-bar1.module.css";

type MenuBar1Type = {
  onClose?: () => void;
};

const MenuBar1: FunctionComponent<MenuBar1Type> = ({ onClose }) => {
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
    <div className={styles.menuBar} data-animate-on-scroll>
      <div className={styles.navLinks}>
        <div className={styles.frameParent}>
          <div className={styles.groupParent}>
            <img className={styles.frameChild} alt="" src="/group-2111.svg" />
            <div className={styles.hasnainParent}>
              <div className={styles.hasnain}>{`Hasnain    `}</div>
              <div className={styles.hasnainkhan213}>{`hasnainkhan213   `}</div>
            </div>
            <a className={styles.edit} />
            <div className={styles.doorbellWrapper}>
              <img
                className={styles.doorbellIcon}
                alt=""
                src="/doorbell1@2x.png"
              />
            </div>
          </div>
          <img className={styles.frameItem} alt="" src="/vector-21310.svg" />
        </div>
        <div className={styles.frameGroup}>
          <Link className={styles.homeWrapper} to="/">
            <div className={styles.home}>Home</div>
          </Link>
          <Link className={styles.homeWrapper} to="/about-page-main">
            <div className={styles.home}>About Us</div>
          </Link>
          <Link className={styles.homeWrapper} to="/contact-page-main">
            <div className={styles.home}>Contact Us</div>
          </Link>
          <Link
            className={styles.homeWrapper}
            to="/book-a-packet-shipping-calculator"
          >
            <div className={styles.home}>Shipping Calculator</div>
          </Link>
          <Link className={styles.homeWrapper} to="/track-shipment">
            <div className={styles.home}>Track Shipment</div>
          </Link>
          <Link className={styles.homeWrapper} to="/dashboard-main">
            <div className={styles.home}>Dashboard</div>
          </Link>
          <Link className={styles.homeWrapper} to="/update-profile-main">
            <div className={styles.home}>Update Profile</div>
          </Link>
          <Link className={styles.usersWrapper} to="/user-add-user">
            <div className={styles.users}>Users</div>
          </Link>
          <Link className={styles.usersWrapper} to="/book-a-packet-main">
            <div className={styles.newShipment}>New Shipment</div>
          </Link>
          <Link className={styles.usersWrapper} to="/return-shipment-main">
            <div className={styles.returnShipment}>Return Shipment</div>
          </Link>
          <Link
            className={styles.usersWrapper}
            to="/track-return-shipment-details-main"
          >
            <div className={styles.returnShipment}>Track Return Shipment</div>
          </Link>
          <Link className={styles.usersWrapper} to="/manage-shipments-main">
            <div className={styles.returnShipment}>Manage Shipment</div>
          </Link>
          <Link className={styles.usersWrapper} to="/track-shipment-main">
            <div className={styles.returnShipment}>Tracking Dashboard</div>
          </Link>
          <div className={styles.platformIntegrationWrapper}>
            <div className={styles.returnShipment}>Platform Integration</div>
          </div>
          <Link className={styles.usersWrapper} to="/users-main">
            <div className={styles.returnShipment}>User Management</div>
          </Link>
          <Link className={styles.usersWrapper} to="/report-main">
            <div className={styles.returnShipment}>Reports</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuBar1;
