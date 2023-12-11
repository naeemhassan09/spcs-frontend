import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import styles from "./book-a-packet-pay-charges.module.css";

const BookAPacketPayCharges: FunctionComponent = () => {
  const [dateFromDateTimePickerValue, setDateFromDateTimePickerValue] =
    useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isMenuSideBarOpen, setMenuSideBarOpen] = useState(false);
  const [isMenuBarOpen, setMenuBarOpen] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.bookAPacketPayCharges}>
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
                  <Link
                    className={styles.trackYourShipment}
                    to="/track-shipment"
                  >
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
            <b className={styles.spcs}>Book a packet</b>
            <img className={styles.frameChild} alt="" src="/vector-21319.svg" />
          </div>
          <div className={styles.payChargesWrapper}>
            <b className={styles.payCharges}>Pay Charges</b>
          </div>
          <div className={styles.noteLoremIpsumDolorSitAWrapper}>
            <div className={styles.noteLoremContainer}>
              <p className={styles.note}>Note :</p>
              <p className={styles.loremIpsumDolorSitAmetCo}>
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
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.shipperForm}>
              <div className={styles.addCreditOr}>Add credit or Debit Card</div>
              <div className={styles.shipperFormInner}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                      <div className={styles.frameContainer}>
                        <div className={styles.enterYourCardNoParent}>
                          <div className={styles.addCreditOr}>
                            Enter Your Card No
                          </div>
                          <div className={styles.totalPiecesWrapper}>
                            <TextField
                              className={styles.totalPieces}
                              color="primary"
                              size="small"
                              placeholder="Total Pieces"
                              required={true}
                              variant="outlined"
                              type="number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameDiv}>
                        <div className={styles.expiryDateParent}>
                          <div className={styles.expiryDate}>Expiry Date</div>
                          <div className={styles.totalPiecesWrapper}>
                            <div className={styles.dateFrom}>
                              <DatePicker
                                value={dateFromDateTimePickerValue}
                                onChange={(newValue: any) => {
                                  setDateFromDateTimePickerValue(newValue);
                                }}
                                slotProps={{
                                  textField: {
                                    variant: "outlined",
                                    size: "small",
                                    fullWidth: true,
                                    required: true,
                                    color: "primary",
                                  },
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.accountNoParent}>
                        <div className={styles.addCreditOr}>Account No</div>
                        <div className={styles.totalPiecesWrapper}>
                          <TextField
                            className={styles.totalPieces}
                            color="primary"
                            size="small"
                            placeholder="Account Number"
                            required={true}
                            variant="outlined"
                            type="number"
                          />
                        </div>
                      </div>
                      <div className={styles.accountNoParent}>
                        <div className={styles.addCreditOr}>Password</div>
                        <div className={styles.totalPiecesWrapper}>
                          <TextField
                            className={styles.totalPieces}
                            color="primary"
                            size="small"
                            placeholder="Password"
                            required={true}
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={handleShowPasswordClick}
                                    aria-label="toggle password visibility"
                                  >
                                    <Icon>
                                      {showPassword
                                        ? "visibility_off"
                                        : "visibility"}
                                    </Icon>
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <button className={styles.saveWrapper}>
                  <b className={styles.save}>Save</b>
                </button>
                <button className={styles.saveWrapper}>
                  <b className={styles.save}>Add Credit</b>
                </button>
                <button className={styles.saveWrapper}>
                  <b className={styles.save}>Refresh</b>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.b57fcd9996e24bc43c5301Parent}>
              <img
                className={styles.b57fcd9996e24bc43c5301Icon}
                alt=""
                src="/580b57fcd9996e24bc43c530-1@2x.png"
              />
              <img
                className={styles.visaLogo1Icon}
                alt=""
                src="/visa-logo-1@2x.png"
              />
            </div>
            <div className={styles.unionpayInternationalVectorParent}>
              <img
                className={styles.unionpayInternationalVectorIcon}
                alt=""
                src="/unionpayinternationalvectorlogo-1@2x.png"
              />
              <img
                className={styles.cef1014c0b5e49c01Icon}
                alt=""
                src="/58482354cef1014c0b5e49c0-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.frameParent4}>
              <Link className={styles.backWrapper} to="/book-a-packet-overview">
                <b className={styles.spcs}>Back</b>
              </Link>
              <Link
                className={styles.backWrapper}
                to="/book-a-packet-print-shipping-label"
              >
                <b className={styles.spcs}>Next</b>
              </Link>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.frameParent5}>
              <div className={styles.legalTermsConditionsPrivaWrapper}>
                <div className={styles.legalTermsContainer}>
                  <p className={styles.legal}>Legal</p>
                  <p
                    className={styles.termsConditions}
                  >{`Terms & Conditions`}</p>
                  <p className={styles.termsConditions}>Privacy Policy</p>
                  <p className={styles.termsConditions}>Cookie Policy</p>
                  <p className={styles.termsConditions}>Disclaimer</p>
                </div>
              </div>
              <div className={styles.informationShippingGuidelineParent}>
                <div className={styles.informationShippingGuidelineContainer}>
                  <p className={styles.loremIpsumDolorSitAmetCo}>Information</p>
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
    </LocalizationProvider>
  );
};

export default BookAPacketPayCharges;
