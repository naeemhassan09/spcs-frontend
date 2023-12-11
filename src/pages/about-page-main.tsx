import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DrawerMenu from "../components/drawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./about-page-main.module.css";

const AboutPageMain: FunctionComponent = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.aboutPageMain}>
        <div className={styles.navContainer}>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
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
                <Link
                  className={styles.trackYourShipment}
                  to="/track-shipment-main"
                >
                  Track Your Shipment
                </Link>
              </div>
            </div>
            <div className={styles.actions}>
              <Link className={styles.signIn} to="/chose-way-to-signin">
                Sign In
              </Link>
              <Link className={styles.signIn} to="/select-account-type">
                Sign up
              </Link>
              <button className={styles.menu} onClick={openDrawerMenu} />
            </div>
          </div>
        </div>
        <div className={styles.heroContainer}>
          <img
            className={styles.heroContainerChild}
            alt=""
            src="/rectangle-4177@2x.png"
          />
          <div className={styles.heroContent}>
            <div className={styles.aboutUsStreamlineContainer}>
              <p className={styles.aboutUs1}>About Us</p>
              <p className={styles.streamlineYourShipment}>
                Streamline Your Shipment Process with Our Advanced Solution
              </p>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.contentDescriptionWrapper}>
                <Form className={styles.contentDescription}>
                  <Form.Control type="text" placeholder="Barcode Number" />
                </Form>
              </div>
              <button className={styles.trackParcelBtn}>
                <div className={styles.trackParcel}>Track Parcel</div>
              </button>
            </div>
            <div className={styles.heroContentInner}>
              <div className={styles.getStartedBtnParent}>
                <Link
                  className={styles.getStartedBtn}
                  to="/chose-way-to-signin"
                >
                  <b className={styles.getStared}>Get Stared</b>
                </Link>
                <Link
                  className={styles.getStartedBtn}
                  to="/chose-way-to-signin"
                >
                  <b className={styles.getStared}>Book a Packet</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.aboutUsParent}>
            <div className={styles.ourMission}>About Us</div>
            <div
              className={styles.atSmallPacket}
            >{`At Small Packet Consolidated Shipment Export and Delivery, we are dedicated to revolutionizing the way shipments are handled in the Country market. Our comprehensive solution is tailored to meet the unique needs of fashion clothes sellers, dropshipping sellers on popular platforms like Amazon, Etsy, eBay, and Shopify, as well as a range of other industry players including courier companies, retailers, freight forwarders, and administrators.   `}</div>
          </div>
          <div className={styles.contentInner}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-42543@2x.png"
            />
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.aboutUsParent}>
            <div className={styles.ourMission}>Our Mission</div>
            <div className={styles.atSmallPacket}>
              Our mission is to provide a seamless and efficient platform that
              simplifies the entire process of small packet consolidated
              shipment export and delivery. By integrating cutting-edge
              technology and fostering strong partnerships, we aim to empower
              businesses with tools for parcel booking, real-time tracking,
              pricing and tax estimation, as well as seamless platform
              integrations. We envision a future where every shipment is handled
              with precision, transparency, and reliability, ultimately driving
              growth and success for our valued Merchant. Together, we're
              redefining the future of global logistics.
            </div>
          </div>
          <div className={styles.contentChild}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-42544@2x.png"
            />
          </div>
        </div>
        <div className={styles.integrations}>
          <div className={styles.amazonLogoTransparent1Parent}>
            <img
              className={styles.amazonLogoTransparent1Icon}
              alt=""
              src="/amazonlogotransparent-1@2x.png"
            />
            <img
              className={styles.shopifyLogo1Icon}
              alt=""
              src="/shopifylogo-1@2x.png"
            />
          </div>
          <div className={styles.etsyLogo1Parent}>
            <img
              className={styles.etsyLogo1Icon}
              alt=""
              src="/etsy-logo-1@2x.png"
            />
            <img
              className={styles.ebayLogo11Icon}
              alt=""
              src="/ebaylogo1-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameGroup}>
            <div className={styles.legalTermsConditionsPrivaWrapper}>
              <div className={styles.legalTermsContainer}>
                <p className={styles.legal}>Legal</p>
                <p className={styles.termsConditions}>{`Terms & Conditions`}</p>
                <p className={styles.termsConditions}>Privacy Policy</p>
                <p className={styles.termsConditions}>Cookie Policy</p>
                <p className={styles.termsConditions}>Disclaimer</p>
              </div>
            </div>
            <div className={styles.informationShippingGuidelineParent}>
              <div className={styles.informationShippingGuidelineContainer}>
                <p className={styles.streamlineYourShipment}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
          </div>
          <div className={styles.spcsAllRightsReservedWrapper}>
            <div className={styles.spcsAllRights}>
              © 2023 SPCS. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu onClose={closeDrawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default AboutPageMain;
