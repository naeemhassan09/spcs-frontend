import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DrawerMenu from "../components/drawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./home-page-main.module.css";

const HomePageMain: FunctionComponent = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.homePageMain}>
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
                <div className={styles.home}>Home</div>
                <Link className={styles.aboutUs} to="/about-page-main">
                  About us
                </Link>
                <Link className={styles.aboutUs} to="/contact-page-main">
                  Contact us
                </Link>
                <Link
                  className={styles.aboutUs}
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
            <div className={styles.welcomeToOurContainer}>
              <p
                className={styles.welcomeToOur}
              >{`Welcome to Our Comprehensive Shipping Solution! `}</p>
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
            <div className={styles.atSmallPacket}>
              At Small Packet Consolidated Shipment Export and Delivery, we are
              dedicated to revolutionizing the way shipments are handled in the
              Country market. Our comprehensive solution is tailored to
            </div>
            <Link className={styles.learnMoreWrapper} to="/about-page-main">
              <b className={styles.learnMore}>Learn More</b>
            </Link>
          </div>
          <div className={styles.contentInner}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-4254@2x.png"
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
              technology .
            </div>
            <Link className={styles.learnMoreWrapper} to="/about-page-main">
              <b className={styles.learnMore}>Learn More</b>
            </Link>
          </div>
          <div className={styles.contentChild}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-42541@2x.png"
            />
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.exploreOurFeaturesParent}>
            <div className={styles.exploreOurFeatures}>
              Explore Our Features
            </div>
            <div className={styles.hassleFreeParcelBookingContainer}>
              <ul className={styles.hassleFreeParcelBookingRea}>
                <li className={styles.hassleFreeParcelBooking}>
                  Hassle-Free Parcel Booking
                </li>
                <li className={styles.hassleFreeParcelBooking}>
                  Real-Time Tracking Dashboard
                </li>
                <li className={styles.hassleFreeParcelBooking}>
                  Seamless Platform Integration
                </li>
                <li className={styles.hassleFreeParcelBooking}>
                  Customized Shipping Options
                </li>
                <li className={styles.hassleFreeParcelBooking}>
                  Automated Order Processing
                </li>
                <li className={styles.hassleFreeParcelBooking}>
                  Multi-Carrier Support
                </li>
                <li className={styles.hassleFreeParcelBooking}>
                  Transparent Pricing Calculations
                </li>
                <li>User-Friendly Interface</li>
              </ul>
            </div>
          </div>
          <div className={styles.contentInner}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-42542@2x.png"
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

export default HomePageMain;
