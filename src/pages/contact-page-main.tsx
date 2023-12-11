import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerMenu from "../components/drawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./contact-page-main.module.css";

const ContactPageMain: FunctionComponent = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.contactPageMain}>
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
            <div className={styles.contactWithUsContainer}>
              <p className={styles.contactWithUs}>{`Contact With Us `}</p>
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
          <div className={styles.feelFreeToAskUsEveryThinWrapper}>
            <div className={styles.feelFreeToContainer}>
              <p
                className={styles.streamlineYourShipment}
              >{`Feel Free To Ask Us Every Thing Because `}</p>
              <p className={styles.streamlineYourShipment}>
                We Are Here To Give You Best Experience!
              </p>
            </div>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frame}>
                    <TextField
                      className={styles.contentDescription}
                      color="primary"
                      size="small"
                      placeholder="First Name"
                      required={true}
                      variant="outlined"
                      type="text"
                    />
                  </div>
                  <div className={styles.frame}>
                    <TextField
                      className={styles.contentDescription}
                      color="primary"
                      size="small"
                      placeholder="Email"
                      variant="outlined"
                      type="email"
                    />
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frame}>
                    <TextField
                      className={styles.contentDescription}
                      color="primary"
                      size="small"
                      placeholder="Last Name"
                      variant="outlined"
                    />
                  </div>
                  <div className={styles.frame}>
                    <Autocomplete
                      className={styles.frameChild}
                      size="small"
                      disablePortal
                      options={["USA", "Uk"]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label=""
                          variant="outlined"
                          placeholder="Select Country"
                          helperText=""
                          required
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <TextField
                className={styles.frameItem}
                color="primary"
                placeholder="Message"
                variant="outlined"
                multiline
              />
            </div>
            <div className={styles.getStartedBtnGroup}>
              <button className={styles.getStartedBtn2}>
                <b className={styles.refresh}>Refresh</b>
              </button>
              <button className={styles.bookParcelBtn}>
                <b className={styles.refresh}>Send</b>
              </button>
            </div>
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
          <div className={styles.frameParent2}>
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
                src="/mask-group18@2x.png"
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

export default ContactPageMain;
