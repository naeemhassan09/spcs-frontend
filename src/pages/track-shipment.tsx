import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import ChooseDrawer from "../components/choose-drawer";
import styles from "./track-shipment.module.css";

const TrackShipment: FunctionComponent = () => {
  const [isMenuSideBarOpen, setMenuSideBarOpen] = useState(false);
  const [isMenuBarOpen, setMenuBarOpen] = useState(false);
  const [isChooseDrawerOpen, setChooseDrawerOpen] = useState(false);

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

  const openChooseDrawer = useCallback(() => {
    setChooseDrawerOpen(true);
  }, []);

  const closeChooseDrawer = useCallback(() => {
    setChooseDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.trackShipment}>
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
        <div className={styles.trackShipmentParent}>
          <b className={styles.spcs}>Track Shipment</b>
          <img className={styles.frameChild} alt="" src="/vector-21312.svg" />
        </div>
        <div className={styles.content}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
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
            <button className={styles.applyWrapper}>
              <b className={styles.apply}>Apply</b>
            </button>
            <button className={styles.applyWrapper}>
              <b className={styles.apply}>Refresh</b>
            </button>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.frame427318921Parent}>
            <div className={styles.frame427318921}>
              <div className={styles.selectWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Select</p>
                  <p className={styles.row}>row</p>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupFrame}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group15@2x.png"
                />
              </div>
            </div>
            <div className={styles.frame427318946}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Barcode</p>
                  <p className={styles.row}>Number</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Un Assigned</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}> Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
            </div>
            <div className={styles.frame427318920}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Booked `}</p>
                  <p className={styles.row}>Country</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Pakistan</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Pakistan</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}> Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
            </div>
            <div className={styles.frame427318922}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Destination `}</p>
                  <p className={styles.row}>Country</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>USA</div>
              </div>
            </div>
            <div className={styles.frame427318947}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Weight</p>
                  <p className={styles.row}>(kg)</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}> 6kg</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>5</div>
              </div>
            </div>
            <div className={styles.frame427318947}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Volumetric `}</p>
                  <p className={styles.row}>Weight</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}> 6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>5</div>
              </div>
            </div>
            <div className={styles.frame4273189461}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Total `}</p>
                  <p className={styles.row}>Pieces</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>2</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>8</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
            </div>
            <div className={styles.frame4273189461}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Total value `}</p>
                  <p className={styles.row}> USD</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>$100</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
            </div>
            <div className={styles.frame4273189221}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Total No</p>
                  <p className={styles.row}>Of Shipments</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>2</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>john</div>
              </div>
            </div>
            <div className={styles.frame427318948}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>packet</p>
                  <p className={styles.row}>Description</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>8</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.checkWrapper} onClick={openChooseDrawer}>
            <b className={styles.spcs}>Check</b>
          </div>
        </div>
        <div className={styles.trackShipmentInner}>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.bookingCreated}>
                  <p className={styles.row}>Booking</p>
                  <p className={styles.row}>Created</p>
                </div>
              </div>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.bookingCreated}>
                  <p className={styles.row}>{`First Mile `}</p>
                  <p className={styles.row}>Picked up</p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.bookingCreated}>Shipped</div>
              </div>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.bookingCreated}>
                  <p className={styles.row}>Arrived At</p>
                  <p className={styles.row}>Destination</p>
                </div>
              </div>
            </div>
            <div className={styles.groupParent}>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <img className={styles.doneIcon} alt="" src="/done@2x.png" />
              </div>
              <div className={styles.bookingCreated}>Delivered</div>
            </div>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.contentInner}>
            <Link className={styles.backWrapper} to="/track-shipment-main">
              <b className={styles.spcs}>Back</b>
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameParent3}>
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
                <p className={styles.row}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
              <img
                className={styles.maskGroupIcon3}
                alt=""
                src="/mask-group16@2x.png"
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
      {isChooseDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeChooseDrawer}
        >
          <ChooseDrawer onClose={closeChooseDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default TrackShipment;
