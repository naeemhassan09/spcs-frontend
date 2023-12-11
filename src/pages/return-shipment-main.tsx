import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import styles from "./return-shipment-main.module.css";

const ReturnShipmentMain: FunctionComponent = () => {
  const [isMenuSideBarOpen, setMenuSideBarOpen] = useState(false);
  const [isMenuBarOpen, setMenuBarOpen] = useState(false);

  const openMenuSideBar = useCallback(() => {
    setMenuSideBarOpen(true);
  }, []);

  const closeMenuSideBar = useCallback(() => {
    setMenuSideBarOpen(false);
  }, []);

  const openMenuBar = useCallback(() => {
    setMenuBarOpen(true);
  }, []);

  const closeMenuBar = useCallback(() => {
    setMenuBarOpen(false);
  }, []);

  return (
    <>
      <div className={styles.returnShipmentMain}>
        <div className={styles.navContainer}>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <img
                className={styles.menuIcon}
                alt=""
                src="/menu1@2x.png"
                onClick={openMenuSideBar}
              />
              <img
                className={styles.openParcelIcon}
                alt=""
                src="/open-parcel@2x.png"
              />
              <b className={styles.spcs}>{`SPCS    `}</b>
            </div>
            <div className={styles.navLinksWrapper}>
              <div className={styles.navLinks}>
                <Link className={styles.home} to="/">
                  Home
                </Link>
                <Link className={styles.home} to="/about-page-main">
                  About us
                </Link>
                <Link className={styles.home} to="/contact-page-main">
                  Contact us
                </Link>
                <Link
                  className={styles.home}
                  to="/book-a-packet-shipping-calculator"
                >
                  Shipping Calculator
                </Link>
                <Link className={styles.trackYourShipment} to="/track-shipment">
                  Track Your Shipment
                </Link>
              </div>
            </div>
            <div className={styles.actions}>
              <Link className={styles.logoutParent} to="/sign-in-page">
                <div className={styles.logout}>Logout</div>
                <img
                  className={styles.logoutIcon}
                  alt=""
                  src="/logout@2x.png"
                />
              </Link>
              <button className={styles.menu} onClick={openMenuBar} />
            </div>
          </div>
        </div>
        <div className={styles.returnShipmentParent}>
          <b className={styles.spcs}>Return Shipment</b>
          <img className={styles.frameChild} alt="" src="/vector-21323.svg" />
        </div>
        <div className={styles.generateReturnShippingLabelParent}>
          <div className={styles.generateReturnShippingContainer}>
            <p className={styles.generateReturnShippingLabel}>
              <b>Generate Return Shipping Label</b>
            </p>
            <p className={styles.loremIpsumDolorSitAmetCon}>
              <span>
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi.
                </span>
              </span>
            </p>
            <p className={styles.generateReturnShippingLabel}>
              <span>
                <span>
                  {" "}
                  Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                </span>
                <span className={styles.span}>{` `}</span>
              </span>
            </p>
            <p className={styles.p}>
              <span>
                <span>.</span>
                <span className={styles.span}>{` `}</span>
              </span>
            </p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.expiryDateParent}>
                <div className={styles.expiryDate}>Expiry Date</div>
                <div className={styles.frameContainer}>
                  <div className={styles.firstNameWrapper}>
                    <input
                      className={styles.firstName}
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.submitWrapper}>
              <b className={styles.submit}>Submit</b>
            </button>
          </div>
        </div>
        <div className={styles.generateReturnShippingLabelWrapper}>
          <div className={styles.generateReturnShippingContainer1}>
            <p className={styles.generateReturnShippingLabel}>
              <b>Generate Return Shipping Label</b>
            </p>
            <p className={styles.loremIpsumDolorSitAmetCo}>
              <span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus..piscing elit Ut et massa mi.
                  Aliquam in hendrerit urna. Pellentesque sit amet sapien
                  fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus..
                </span>
                <span className={styles.span}>{` `}</span>
              </span>
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <TextField
                className={styles.frameItem}
                color="primary"
                size="small"
                placeholder="Enter Barcode Number"
                variant="outlined"
                type="text"
              />
              <div className={styles.scanBarcodeParent}>
                <div className={styles.scanBarcode}>Scan Barcode</div>
                <img
                  className={styles.barcodeScannerIcon}
                  alt=""
                  src="/barcode-scanner@2x.png"
                />
              </div>
            </div>
            <Link className={styles.applyWrapper} to="/return-shipment-label">
              <b className={styles.spcs}>Apply</b>
            </Link>
            <button className={styles.submitWrapper}>
              <b className={styles.submit}>Refresh</b>
            </button>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.frameParent1}>
            <button className={styles.submitWrapper}>
              <b className={styles.submit}>Back</b>
            </button>
            <Link className={styles.nextWrapper} to="/return-shipment-label">
              <b className={styles.spcs}>Next</b>
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameParent2}>
            <div className={styles.legalTermsConditionsPrivaWrapper}>
              <div className={styles.legalTermsContainer}>
                <p className={styles.loremIpsumDolorSitAmetCo}>Legal</p>
                <p className={styles.termsConditions}>{`Terms & Conditions`}</p>
                <p className={styles.termsConditions}>Privacy Policy</p>
                <p className={styles.termsConditions}>Cookie Policy</p>
                <p className={styles.termsConditions}>Disclaimer</p>
              </div>
            </div>
            <div className={styles.informationShippingGuidelineParent}>
              <div className={styles.informationShippingGuidelineContainer}>
                <p className={styles.p}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group10@2x.png"
              />
            </div>
          </div>
          <div className={styles.spcsAllRightsReservedWrapper}>
            <div className={styles.scanBarcode}>
              © 2023 SPCS. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      {isMenuSideBarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMenuSideBar}
        >
          <MenuSideBar onClose={closeMenuSideBar} />
        </PortalDrawer>
      )}
      {isMenuBarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMenuBar}
        >
          <MenuBar1 onClose={closeMenuBar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default ReturnShipmentMain;
