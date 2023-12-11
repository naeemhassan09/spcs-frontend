import { FunctionComponent, useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import styles from "./book-a-packet-main.module.css";

const BookAPacketMain: FunctionComponent = () => {
  const [dateFromDateTimePickerValue, setDateFromDateTimePickerValue] =
    useState<string | null>(null);
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.bookAPacketMain}>
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
            <b className={styles.spcs}>Book a Packet</b>
            <img className={styles.frameChild} alt="" src="/vector-21319.svg" />
          </div>
          <div className={styles.content}>
            <div className={styles.bookAPacket1}>
              <div className={styles.bookAPacketInner}>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameContainer}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Shipment Type
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <Autocomplete
                                className={styles.shippingType}
                                size="small"
                                disablePortal
                                options={["Normal", "Standard", "Urgent"]}
                                renderInput={(params: any) => (
                                  <TextField
                                    {...params}
                                    color="primary"
                                    label=""
                                    variant="outlined"
                                    placeholder="Select Type"
                                    helperText=""
                                    required
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Shipment Category
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <Autocomplete
                                className={styles.shippingType}
                                size="small"
                                disablePortal
                                options={["AIR", "Ship"]}
                                renderInput={(params: any) => (
                                  <TextField
                                    {...params}
                                    color="primary"
                                    label=""
                                    variant="outlined"
                                    placeholder="Optional"
                                    helperText=""
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper3}>
                        <div className={styles.bookingDateParent}>
                          <div className={styles.bookingDate}>Booking Date</div>
                          <div className={styles.shippingTypeWrapper}>
                            <div className={styles.shippingType}>
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
                    <div className={styles.frameContainer}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div
                              className={styles.shipmentType}
                            >{` No.of. Pieces `}</div>
                            <div className={styles.shippingTypeWrapper}>
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
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Net Weight
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Net Weight"
                                required={true}
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Declared Value in $
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Declared Value in $"
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Volumetric Dimensions
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Width"
                                required={true}
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameWrapper14}>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Lenght"
                                required={true}
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameWrapper14}>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Height"
                                required={true}
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Volumetric Weight kg
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Total Volumetric Weight"
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Invoice Attachment
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Upload Invoice"
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Upload Picture
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Upload Pics"
                                required={true}
                                variant="outlined"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.frameWrapper24}>
                  <div className={styles.frameDiv}>
                    <div className={styles.shipmentTypeParent}>
                      <div
                        className={styles.shipmentType}
                      >{`Content Description `}</div>
                      <div className={styles.shippingTypeWrapper}>
                        <TextField
                          className={styles.totalPieces}
                          color="primary"
                          size="small"
                          placeholder="About packet  "
                          required={true}
                          variant="outlined"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper24}>
                  <div className={styles.frameDiv}>
                    <div className={styles.shipmentTypeParent}>
                      <div
                        className={styles.shipmentType}
                      >{`Harmonized System Code  `}</div>
                      <div className={styles.shippingTypeWrapper}>
                        <TextField
                          className={styles.totalPieces}
                          color="primary"
                          size="small"
                          placeholder="HS Code"
                          required={true}
                          variant="outlined"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bookAPacketParent}>
            <b className={styles.spcs}>Shipping From</b>
            <img className={styles.frameChild} alt="" src="/vector-21320.svg" />
          </div>
          <div className={styles.content}>
            <div className={styles.shipperForm}>
              <div className={styles.shipperFormInner}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Shipper Name
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Consignee Name"
                                required={true}
                                variant="outlined"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div
                              className={styles.shipmentType}
                            >{`Phone 1 `}</div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Phone 1"
                                required={true}
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.shipmentTypeParent}>
                          <div className={styles.shipmentType}>Phone 2</div>
                          <div className={styles.shippingTypeWrapper}>
                            <TextField
                              className={styles.totalPieces}
                              color="primary"
                              size="small"
                              placeholder="Optional"
                              variant="outlined"
                              type="number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.shipmentTypeParent}>
                          <div className={styles.shipmentType}>
                            Email Address
                          </div>
                          <div className={styles.shippingTypeWrapper}>
                            <TextField
                              className={styles.totalPieces}
                              color="primary"
                              size="small"
                              placeholder="Email "
                              required={true}
                              variant="outlined"
                              type="email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent10}>
                    <div className={styles.frameParent11}>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameDiv}>
                            <div className={styles.frameDiv}>
                              <div className={styles.shipmentTypeParent}>
                                <div className={styles.shipmentType}>
                                  Country
                                </div>
                                <div className={styles.shippingTypeWrapper}>
                                  <Autocomplete
                                    className={styles.shippingType}
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
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Province/State
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <Autocomplete
                                className={styles.shippingType}
                                size="small"
                                disablePortal
                                options={["1", "2", "3"]}
                                renderInput={(params: any) => (
                                  <TextField
                                    {...params}
                                    color="primary"
                                    label=""
                                    variant="outlined"
                                    placeholder="Select Province/State"
                                    helperText=""
                                    required
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameDiv}>
                            <div className={styles.shipmentTypeParent}>
                              <div className={styles.shipmentType}>City</div>
                              <div className={styles.shippingTypeWrapper}>
                                <Autocomplete
                                  className={styles.shippingType}
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
                        </div>
                      </div>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>Zip Code</div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Zip Code"
                                required={true}
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.shipperFormChild}>
                <div className={styles.frameDiv}>
                  <div className={styles.shipmentTypeParent}>
                    <div
                      className={styles.shipmentType}
                    >{`Shipper Address `}</div>
                    <div className={styles.shippingTypeWrapper}>
                      <TextField
                        className={styles.totalPieces}
                        color="primary"
                        size="small"
                        placeholder="Shipper Address"
                        required={true}
                        variant="outlined"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bookAPacketParent}>
            <b className={styles.spcs}>Consignee To</b>
            <img className={styles.frameChild} alt="" src="/vector-21321.svg" />
          </div>
          <div className={styles.content2}>
            <div className={styles.consigneeToForm}>
              <div className={styles.shipperFormInner}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Consignee Name
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Consignee Name"
                                required={true}
                                variant="outlined"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div
                              className={styles.shipmentType}
                            >{`Phone 1 `}</div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Phone 1"
                                required={true}
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.shipmentTypeParent}>
                          <div className={styles.shipmentType}>Phone 2</div>
                          <div className={styles.shippingTypeWrapper}>
                            <TextField
                              className={styles.totalPieces}
                              color="primary"
                              size="small"
                              placeholder="Optional"
                              variant="outlined"
                              type="number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.shipmentTypeParent}>
                          <div className={styles.shipmentType}>
                            Email Address
                          </div>
                          <div className={styles.shippingTypeWrapper}>
                            <TextField
                              className={styles.totalPieces}
                              color="primary"
                              size="small"
                              placeholder="Email "
                              required={true}
                              variant="outlined"
                              type="email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent10}>
                    <div className={styles.frameParent11}>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameDiv}>
                            <div className={styles.frameDiv}>
                              <div className={styles.shipmentTypeParent}>
                                <div className={styles.shipmentType}>
                                  Country
                                </div>
                                <div className={styles.shippingTypeWrapper}>
                                  <Autocomplete
                                    className={styles.shippingType}
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
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>
                              Province/State
                            </div>
                            <div className={styles.shippingTypeWrapper}>
                              <Autocomplete
                                className={styles.shippingType}
                                size="small"
                                disablePortal
                                options={["1", "2", "3"]}
                                renderInput={(params: any) => (
                                  <TextField
                                    {...params}
                                    color="primary"
                                    label=""
                                    variant="outlined"
                                    placeholder="Select Province/State"
                                    helperText=""
                                    required
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameDiv}>
                            <div className={styles.shipmentTypeParent}>
                              <div className={styles.shipmentType}>City</div>
                              <div className={styles.shippingTypeWrapper}>
                                <Autocomplete
                                  className={styles.shippingType}
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
                        </div>
                      </div>
                      <div className={styles.frameWrapper24}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipmentTypeParent}>
                            <div className={styles.shipmentType}>Zip Code</div>
                            <div className={styles.shippingTypeWrapper}>
                              <TextField
                                className={styles.totalPieces}
                                color="primary"
                                size="small"
                                placeholder="Zip Code"
                                required={true}
                                variant="outlined"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.shipperFormChild}>
                <div className={styles.frameDiv}>
                  <div className={styles.shipmentTypeParent}>
                    <div
                      className={styles.shipmentType}
                    >{`Consignee Address `}</div>
                    <div className={styles.shippingTypeWrapper}>
                      <TextField
                        className={styles.totalPieces}
                        color="primary"
                        size="small"
                        placeholder="Shipper Address"
                        required={true}
                        variant="outlined"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content3}>
            <div className={styles.frameParent20}>
              <button className={styles.backWrapper}>
                <b className={styles.back}>Back</b>
              </button>
              <Link
                className={styles.nextWrapper}
                to="/book-a-packet-shipping-calculator"
              >
                <b className={styles.spcs}>Next</b>
              </Link>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.frameParent21}>
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
                  className={styles.maskGroupIcon}
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
      </>
    </LocalizationProvider>
  );
};

export default BookAPacketMain;
