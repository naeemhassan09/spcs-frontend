import { FunctionComponent, useState, useCallback } from "react";
import { TextField, Icon, Autocomplete } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import ChooseDrawer from "../components/choose-drawer";
import styles from "./report-main.module.css";

const ReportMain: FunctionComponent = () => {
  const [dateFromDateTimePickerValue, setDateFromDateTimePickerValue] =
    useState<string | null>(null);
  const [dateFromDateTimePicker1Value, setDateFromDateTimePicker1Value] =
    useState<string | null>(null);
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.reportMain}>
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
                    src="/logout1@2x.png"
                  />
                </Link>
                <button className={styles.menu} onClick={openMenuBar} />
              </div>
            </div>
          </div>
          <div className={styles.reportParent}>
            <b className={styles.spcs}>Report</b>
            <img className={styles.frameChild} alt="" src="/vector-21316.svg" />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameDiv}>
                    <div className={styles.dateFromParent}>
                      <div className={styles.dateFrom}>Date From</div>
                      <div className={styles.dateFromWrapper}>
                        <div className={styles.frameItem}>
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
                  <div className={styles.dateToParent}>
                    <div className={styles.dateFrom}>Date To</div>
                    <div className={styles.dateFromWrapper}>
                      <div className={styles.frameItem}>
                        <DatePicker
                          value={dateFromDateTimePicker1Value}
                          onChange={(newValue: any) => {
                            setDateFromDateTimePicker1Value(newValue);
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
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.statusParent}>
                        <div className={styles.status}>Status</div>
                        <div className={styles.dateFromWrapper}>
                          <Autocomplete
                            className={styles.frameItem}
                            size="small"
                            disablePortal
                            options={[
                              "Booking Created",
                              "First Mile Picked Up",
                              "Shipped",
                              "Arrived at Destination",
                              "Delliverd",
                            ]}
                            renderInput={(params: any) => (
                              <TextField
                                {...params}
                                color="primary"
                                label=""
                                variant="outlined"
                                placeholder="Select Status"
                                helperText=""
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper4}>
                <button className={styles.generateReportWrapper}>
                  <b className={styles.generateReport}>Generate Report</b>
                </button>
              </div>
              <div className={styles.frameWrapper4}>
                <button className={styles.applyWrapper}>
                  <b className={styles.generateReport}>Apply</b>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.membersParent}>
              <div className={styles.members}>
                <div className={styles.selectWrapper}>
                  <div className={styles.select}>Select</div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group14@2x.png"
                  />
                </div>
              </div>
              <div className={styles.members1}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Barcode</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>City</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>City</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>City</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>City</div>
                </div>
              </div>
              <div className={styles.members2}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Shipper Name</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>John Doe</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Gill Robert</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Isabella</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Steve</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Sarah</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>John Doe</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Bill Gates</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>100$</div>
                </div>
              </div>
              <div className={styles.members3}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Consignee Name</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Richard</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>sonta gill</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>jabil</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>wall bert</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>zerox khan</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>danil rock</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>roman reigns</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>Clothes</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>Fashion Kit</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>Clothes</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>Fashion Kit</div>
                </div>
              </div>
              <div className={styles.members4}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Status</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Received</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Return</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Return</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>Delivered</div>
                </div>
              </div>
              <div className={styles.members5}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Date</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
              </div>
              <div className={styles.members6}>
                <div className={styles.selectWrapper}>
                  <div className={styles.select}>Actions</div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.checkWrapper} onClick={openChooseDrawer}>
              <b className={styles.spcs}>Check</b>
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.contentInner}>
              <button className={styles.backWrapper}>
                <b className={styles.generateReport}>Back</b>
              </button>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.frameParent2}>
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
                  <p className={styles.information}>Information</p>
                  <p className={styles.shippingGuideline}>Shipping Guideline</p>
                </div>
                <img
                  className={styles.maskGroupIcon11}
                  alt=""
                  src="/mask-group10@2x.png"
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
    </LocalizationProvider>
  );
};

export default ReportMain;
