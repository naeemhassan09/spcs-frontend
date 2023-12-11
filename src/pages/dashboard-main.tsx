import { FunctionComponent, useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import styles from "./dashboard-main.module.css";

const DashboardMain: FunctionComponent = () => {
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
      <div className={styles.dashboardMain}>
        <div className={styles.navContainer}>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <img
                className={styles.menuIcon}
                alt=""
                src="/menu2@2x.png"
                onClick={openMenuSideBar}
              />
              <img
                className={styles.openParcelIcon}
                alt=""
                src="/open-parcel1@2x.png"
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
                  src="/logout2@2x.png"
                />
              </Link>
              <button className={styles.menu} onClick={openMenuBar} />
            </div>
          </div>
        </div>
        <div className={styles.heroContainer}>
          <img
            className={styles.heroContainerChild}
            alt=""
            src="/rectangle-41771@2x.png"
          />
          <div className={styles.heroContent}>
            <div className={styles.helloHasnainKhanContainer}>
              <p className={styles.hello}>Hello,</p>
              <p
                className={styles.hello}
              >{`       Hasnain Khan. Welcome Back `}</p>
              <p className={styles.toYourSpcs}>
                {" "}
                to Your SPCS, Dashboard ......
              </p>
            </div>
            <img
              className={styles.youngDeliveryManWearingBluIcon}
              alt=""
              src="/youngdeliverymanwearingbluepoloshirtcapstandingwithpenpointingsidewithfingerisolatedwhitebackgroundremovebgpreview-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.selectCountryForParcelsInfParent}>
              <div className={styles.selectCountryFor}>
                Select Country for Parcels Information
              </div>
              <div className={styles.usaParent}>
                <b className={styles.spcs}>USA</b>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-330.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.contentChild}>
            <div className={styles.frameParent}>
              <div className={styles.countryParent}>
                <div className={styles.selectCountryFor}>Country</div>
                <div className={styles.frameWrapper}>
                  <Autocomplete
                    className={styles.frameItem}
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
              <button className={styles.applyWrapper}>
                <b className={styles.apply}>Apply</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <b className={styles.b}>9</b>
              <div className={styles.bookedParcels}>Booked Parcels</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>5</b>
              <div className={styles.bookedParcels}>First Mile Pickedup</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>5</b>
              <div className={styles.bookedParcels}>In Transit</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>5</b>
              <div className={styles.bookedParcels}>Arrived</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>4</b>
              <div className={styles.bookedParcels}>Deliverd</div>
            </div>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.trackYourParcels}>Track Your Parcels</div>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.typeBarcodeWrapper}>
                <input
                  className={styles.typeBarcode}
                  placeholder="Type Barcode"
                  type="text"
                />
              </div>
              <div className={styles.scanBarcodeParent}>
                <div className={styles.scanBarcode}>Scan Barcode</div>
                <img
                  className={styles.barcodeScannerIcon}
                  alt=""
                  src="/barcode-scanner1@2x.png"
                />
              </div>
            </div>
            <button className={styles.applyContainer}>
              <b className={styles.apply}>Apply</b>
            </button>
            <button className={styles.applyContainer}>
              <b className={styles.apply}>Refresh</b>
            </button>
          </div>
        </div>
        <div className={styles.content3}>
          <div className={styles.contactForm}>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.frameWrapper}>
                    <TextField
                      className={styles.firstName}
                      color="primary"
                      size="small"
                      placeholder="First Name"
                      required={true}
                      variant="outlined"
                      type="text"
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <TextField
                      className={styles.firstName}
                      color="primary"
                      size="small"
                      placeholder="Email"
                      variant="outlined"
                      type="email"
                    />
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.frameWrapper}>
                    <TextField
                      className={styles.firstName}
                      color="primary"
                      size="small"
                      placeholder="Last Name"
                      variant="outlined"
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <Autocomplete
                      className={styles.frameItem}
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
                className={styles.frameTextfield}
                color="primary"
                placeholder="Message"
                variant="outlined"
                multiline
              />
            </div>
            <div className={styles.getStartedBtnParent}>
              <button className={styles.getStartedBtn}>
                <b className={styles.send}>Refresh</b>
              </button>
              <button className={styles.bookParcelBtn}>
                <b className={styles.send}>Send</b>
              </button>
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div className={styles.last24HoursParent}>
                <img
                  className={styles.last24Hours}
                  alt=""
                  src="/last-24-hours@2x.png"
                />
                <b className={styles.contactWithOur}>
                  Contact With Our Team WeAreAvailable24 Hours ......
                </b>
              </div>
              <div className={styles.manOnPhoneParent}>
                <img
                  className={styles.manOnPhone}
                  alt=""
                  src="/man-on-phone@2x.png"
                />
                <div className={styles.contactWithOur}>
                  <p className={styles.toYourSpcs}>
                    <b>Emergency Call</b>
                  </p>
                  <p className={styles.toYourSpcs}>
                    <b>&nbsp;</b>
                  </p>
                  <p className={styles.toYourSpcs}>+92 316 264242</p>
                  <p className={styles.toYourSpcs}>+92 316 895423</p>
                </div>
              </div>
            </div>
            <div className={styles.whatsappParent}>
              <b className={styles.spcs}>WhatsApp</b>
              <div className={styles.whatsappGroup}>
                <img
                  className={styles.whatsappIcon}
                  alt=""
                  src="/whatsapp@2x.png"
                />
                <div className={styles.chatWithUs}>Chat With Us</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameParent8}>
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
                <p className={styles.toYourSpcs}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group9@2x.png"
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

export default DashboardMain;
