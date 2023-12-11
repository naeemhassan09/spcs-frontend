import { FunctionComponent, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import AdminDrawer from "./admin-drawer";
import PortalDrawer from "./portal-drawer";
import styles from "./header.module.css";

type HeaderType = {
  logout?: string;
};

const Header: FunctionComponent<HeaderType> = ({ logout }) => {
  const [isAdminDrawerOpen, setAdminDrawerOpen] = useState(false);
  const [isAdminDrawer1Open, setAdminDrawer1Open] = useState(false);

  const openAdminDrawer = useCallback(() => {
    setAdminDrawerOpen(true);
  }, []);

  const closeAdminDrawer = useCallback(() => {
    setAdminDrawerOpen(false);
  }, []);

  const openAdminDrawer1 = useCallback(() => {
    setAdminDrawer1Open(true);
  }, []);

  const closeAdminDrawer1 = useCallback(() => {
    setAdminDrawer1Open(false);
  }, []);

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <button
              className={styles.menuDesktopIcon}
              onClick={openAdminDrawer}
            />
            <img
              className={styles.openParcelIcon}
              alt=""
              src="/open-parcel@2x.png"
            />
            <b className={styles.spcs}>{`SPCS    `}</b>
          </div>
          <div className={styles.combineShipmentsParent}>
            <Link
              className={styles.combineShipments}
              to="/shipments-consolidation-all-parcels-main"
            >
              Combine Shipments
            </Link>
            <Link
              className={styles.combineShipments}
              to="/shipments-deconsolidation-main"
            >
              De-Consolidated Shipment
            </Link>
            <Link
              className={styles.combineShipments}
              to="/shipments-track-shipment-main"
            >
              Track Shipment
            </Link>
            <Link
              className={styles.combineShipments}
              to="/shipments-consolidation-print-shipping-label"
            >
              Print Shipping Label
            </Link>
          </div>
          <div className={styles.actions}>
            <Link className={styles.logoutParent} to="/sign-in-page">
              <div className={styles.logout}>Logout</div>
              <img className={styles.logoutIcon} alt="" src={logout} />
            </Link>
            <button className={styles.humberger} onClick={openAdminDrawer1} />
          </div>
        </div>
      </div>
      {isAdminDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeAdminDrawer}
        >
          <AdminDrawer onClose={closeAdminDrawer} />
        </PortalDrawer>
      )}
      {isAdminDrawer1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeAdminDrawer1}
        >
          <AdminDrawer onClose={closeAdminDrawer1} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;
