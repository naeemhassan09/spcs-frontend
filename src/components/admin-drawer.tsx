import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./admin-drawer.module.css";

type AdminDrawerType = {
  onClose?: () => void;
};

const AdminDrawer: FunctionComponent<AdminDrawerType> = ({ onClose }) => {
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
    <div className={styles.adminDrawer} data-animate-on-scroll>
      <div className={styles.navLinks}>
        <div className={styles.frameParent}>
          <div className={styles.groupParent}>
            <img className={styles.frameChild} alt="" src="/group-2111.svg" />
            <div className={styles.adminWrapper}>
              <div className={styles.admin}>Admin</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.editWrapper}>
                <a className={styles.edit} />
              </div>
              <img
                className={styles.doorbellIcon}
                alt=""
                src="/doorbell@2x.png"
              />
            </div>
          </div>
          <img className={styles.frameItem} alt="" src="/vector-21310.svg" />
        </div>
        <div className={styles.frameContainer}>
          <Link
            className={styles.dashboardWrapper}
            to="/dashboard-dashboard-main"
          >
            <div className={styles.dashboard}>Dashboard</div>
          </Link>
          <div className={styles.profileWrapper}>
            <b className={styles.profile}>Profile</b>
          </div>
          <Link className={styles.dashboardWrapper} to="/profile-edit-profile">
            <div className={styles.dashboard}>{`Edit Profile `}</div>
          </Link>
          <Link
            className={styles.dashboardWrapper}
            to="/profile-update-profile-pic"
          >
            <div className={styles.dashboard}>Change Prof Picture</div>
          </Link>
          <Link
            className={styles.dashboardWrapper}
            to="/profile-update-password"
          >
            <div className={styles.dashboard}>Change Password</div>
          </Link>
          <div className={styles.profileWrapper}>
            <b className={styles.profile}>Members</b>
          </div>
          <Link
            className={styles.dashboardWrapper}
            to="/member-view-all-members-main"
          >
            <div className={styles.dashboard}>View All Members</div>
          </Link>
          <Link className={styles.dashboardWrapper} to="/member-add-member">
            <div className={styles.addNewMember}>Add New Member</div>
          </Link>
          <div className={styles.profileWrapper}>
            <b className={styles.profile}>Parcels</b>
          </div>
          <Link
            className={styles.dashboardWrapper}
            to="/parcels-all-parcels-main"
          >
            <div className={styles.dashboard}>All Parcels</div>
          </Link>
          <Link
            className={styles.dashboardWrapper}
            to="/parcels-track-parcel-main"
          >
            <div className={styles.dashboard}>Track Parcel</div>
          </Link>
          <div className={styles.profileWrapper}>
            <b className={styles.profile}>Shipments</b>
          </div>
          <Link
            className={styles.dashboardWrapper}
            to="/shipments-view-all-shipments"
          >
            <div className={styles.dashboard}>View All Shipments</div>
          </Link>
          <Link
            className={styles.dashboardWrapper}
            to="/shipments-return-shipment-parcels-main"
          >
            <div className={styles.dashboard}>Return Shipments</div>
          </Link>
          <Link
            className={styles.dashboardWrapper}
            to="/shipments-consolidation-all-parcels-main"
          >
            <div className={styles.dashboard}>Consolidation</div>
          </Link>
          <Link
            className={styles.dashboardWrapper}
            to="/shipments-deconsolidation-main"
          >
            <div className={styles.dashboard}>De-Consolidation</div>
          </Link>
          <Link
            className={styles.dashboardWrapper}
            to="/shipments-track-shipment-main"
          >
            <div className={styles.dashboard}>Track Shipment</div>
          </Link>
          <div className={styles.profileWrapper}>
            <b className={styles.profile}>Manage Branches</b>
          </div>
          <Link
            className={styles.dashboardWrapper}
            to="/branches-view-all-branches-main"
          >
            <div className={styles.dashboard}>View All Branches</div>
          </Link>
          <Link className={styles.dashboardWrapper} to="/branches-add-branch">
            <div className={styles.dashboard}>Add Branch</div>
          </Link>
          <Link className={styles.dashboardWrapper} to="/reports-reports">
            <div className={styles.dashboard}>Reports</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDrawer;
