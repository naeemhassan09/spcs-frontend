import { FunctionComponent, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import styles from "./book-a-packet-overview.module.css";

const BookAPacketOverview: FunctionComponent = () => {
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
      <div className={styles.bookAPacketOverview}>
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
        <div className={styles.bookAPacketParent}>
          <b className={styles.spcs}>Book a Packet</b>
          <img className={styles.frameChild} alt="" src="/vector-21311.svg" />
        </div>
        <div className={styles.overviewWrapper}>
          <b className={styles.overview}>Overview</b>
        </div>
        <div className={styles.content}>
          <div className={styles.frameParent}>
            <div className={styles.shippingFromNameJohnDoeWrapper}>
              <div className={styles.overview}>
                <p className={styles.shippingFrom}>
                  <b>Shipping From</b>
                </p>
                <p className={styles.shippingFrom}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.shippingFrom}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Name</span>
                  <span> : John doe</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>{`Email `}</span>
                  <span>: Johndoe54@gmail.com</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.country}>Country</span>
                  <span className={styles.uk}> : Uk</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>{`City `}</span>
                  <span>: London</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>State</span>
                  <span> : England</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Zip Code</span>
                  <span> : 75160</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Address</span>
                  <span> : 123#,Street/2</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Phone1</span>
                  <span> : +92 316 8954213</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Phone2</span>
                  <span> : +92 316 8954213</span>
                </p>
              </div>
            </div>
            <button className={styles.editWrapper}>
              <b className={styles.edit}>Edit</b>
            </button>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.shippingFromNameJohnDoeWrapper}>
              <div className={styles.consigneeToNameContainer}>
                <p className={styles.shippingFrom}>
                  <b>Consignee To</b>
                </p>
                <p className={styles.shippingFrom}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.shippingFrom}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Name</span>
                  <span> : Isabela doe</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Email</span>
                  <span> : Isabela214@gmail.com</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.country}>Country</span>
                  <span className={styles.uk}> : USA</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>City</span>
                  <b className={styles.uk}>{` `}</b>
                  <span>: Los Angeles</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>State</span>
                  <span> : California</span>
                </p>
                <p className={styles.shippingFrom}>
                  <b className={styles.uk}>Zip Code</b>
                  <span> : 75160</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Address</span>
                  <span> : 123#,Street/1</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Phone1</span>
                  <span> : +2 1234 245 31</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Phone2</span>
                  <span> : +1 1234 245 21</span>
                </p>
              </div>
            </div>
            <button className={styles.editWrapper}>
              <b className={styles.edit}>Edit</b>
            </button>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.shippingFromNameJohnDoeWrapper}>
              <div className={styles.consigneeToNameContainer}>
                <p className={styles.shippingFrom}>
                  <b>Parcel Detalis</b>
                </p>
                <p className={styles.shippingFrom}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.shippingFrom}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.country}>Parcel Description</span>
                  <span className={styles.uk}> : Fashion Kit</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Qty</span>
                  <span> : 2 pieces</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Weight</span>
                  <span> : 0.5kg</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.country}>Dimensions</span>
                  <span className={styles.uk}> : 2x2x2</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.country}>volumetric Weight</span>
                  <span className={styles.uk}> : 3</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Value</span>
                  <span> : $2500</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Booking Date</span>
                  <span>{` : 2023-6-8   `}</span>
                </p>
                <p className={styles.shippingFrom}>&nbsp;</p>
                <p className={styles.shippingFrom}>{`   `}</p>
              </div>
            </div>
            <button className={styles.editWrapper}>
              <b className={styles.edit}>Edit</b>
            </button>
          </div>
        </div>
        <div className={styles.youCanCancelOrModifyYourWrapper}>
          <div
            className={styles.youCanCancel}
          >{`You can Cancel or Modify your pickup Address `}</div>
        </div>
        <div className={styles.content1}>
          <div className={styles.frameParent}>
            <div className={styles.frameParent1}>
              <div className={styles.pickupChargesAddedInYourSWrapper}>
                <b
                  className={styles.overview}
                >{`Pickup Charges Added in your Shipment Charges `}</b>
              </div>
              <div className={styles.shippingTypeUrgent50PicWrapper}>
                <div className={styles.consigneeToNameContainer}>
                  <p className={styles.shippingFrom}>
                    <span
                      className={styles.country}
                    >{`Shipping Type  : Urgent                            `}</span>
                    <span className={styles.uk}>$50</span>
                  </p>
                  <p className={styles.shippingFrom}>
                    <span
                      className={styles.country}
                    >{`Pickup Charges                                        `}</span>
                    <span className={styles.uk}> $10</span>
                  </p>
                  <p className={styles.blankLine7}>&nbsp;</p>
                  <p className={styles.blankLine7}>&nbsp;</p>
                  <p className={styles.shippingFrom}>
                    <span
                      className={styles.country}
                    >{`Total Amount You Have To Pay :           `}</span>
                    <span className={styles.uk}> $60</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.shippingTypeUrgent50PicWrapper}>
              <div className={styles.overview}>
                <span>you can Cancel Pickup To Click On</span>
                <span className={styles.country}>{` `}</span>
                <b>Cancel Pickup</b>
              </div>
            </div>
            <button className={styles.editWrapper}>
              <b className={styles.edit}>Cancel</b>
            </button>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.shippingFromNameJohnDoeWrapper}>
              <div className={styles.consigneeToNameContainer}>
                <p className={styles.shippingFrom}>
                  <b>Pickup Address</b>
                </p>
                <p className={styles.shippingFrom}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.shippingFrom}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Name</span>
                  <span> : Isabela doe</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Email</span>
                  <span> : Isabela214@gmail.com</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.country}>Country</span>
                  <span className={styles.uk}> : USA</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>City</span>
                  <b className={styles.uk}>{` `}</b>
                  <span>: Los Angeles</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>State</span>
                  <span> : California</span>
                </p>
                <p className={styles.shippingFrom}>
                  <b className={styles.uk}>Zip Code</b>
                  <span> : 75160</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Address</span>
                  <span> : 123#,Street/1</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Phone1</span>
                  <span> : +2 1234 245 31</span>
                </p>
                <p className={styles.shippingFrom}>
                  <span className={styles.name}>Phone2</span>
                  <span> : +1 1234 245 21</span>
                </p>
              </div>
            </div>
            <button className={styles.editWrapper}>
              <b className={styles.edit}>Modify</b>
            </button>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.frameParent3}>
            <Link
              className={styles.backWrapper}
              to="/book-a-packet-select-pickup-dt"
            >
              <b className={styles.spcs}>Back</b>
            </Link>
            <Link
              className={styles.backWrapper}
              to="/book-a-packet-pay-charges"
            >
              <b className={styles.spcs}>Next</b>
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameParent4}>
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
                <p className={styles.shippingFrom}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group11@2x.png"
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

export default BookAPacketOverview;
