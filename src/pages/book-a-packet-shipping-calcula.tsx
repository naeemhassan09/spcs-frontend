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
import styles from "./book-a-packet-shipping-calcula.module.css";

const BookAPacketShippingCalcula: FunctionComponent = () => {
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
      <div className={styles.bookAPacketShippingCalcula}>
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
          <b className={styles.spcs}>Book a packet</b>
          <img className={styles.frameChild} alt="" src="/vector-21319.svg" />
        </div>
        <div className={styles.bookAPacketParent}>
          <b className={styles.spcs}>shipping Calculator</b>
          <img className={styles.frameChild} alt="" src="/vector-21322.svg" />
        </div>
        <div className={styles.content}>
          <div className={styles.shipperForm}>
            <div className={styles.shipperFormInner}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameDiv}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shippingFromParent}>
                            <div className={styles.shippingFrom}>
                              Shipping From
                            </div>
                            <div className={styles.zipCodeWrapper}>
                              <Autocomplete
                                className={styles.frameInner}
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
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameDiv}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shippingFromParent}>
                            <div className={styles.shippingFrom}>
                              shipping To
                            </div>
                            <div className={styles.zipCodeWrapper}>
                              <Autocomplete
                                className={styles.frameInner}
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
                  <div className={styles.frameContainer}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameDiv}>
                        <div className={styles.shippingFromParent}>
                          <div className={styles.shippingFrom}>City</div>
                          <div className={styles.zipCodeWrapper}>
                            <Autocomplete
                              className={styles.frameInner}
                              size="small"
                              disablePortal
                              options={["USA", "Uk"]}
                              renderInput={(params: any) => (
                                <TextField
                                  {...params}
                                  color="primary"
                                  label=""
                                  variant="outlined"
                                  placeholder="Select City"
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
                      <div className={styles.shippingFromParent}>
                        <div className={styles.shippingFrom}>Zip Code</div>
                        <div className={styles.zipCodeWrapper}>
                          <TextField
                            className={styles.volumetricDimentionWidth}
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
                <div className={styles.frameGroup}>
                  <div className={styles.frameParent3}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameDiv}>
                        <div className={styles.shippingFromParent}>
                          <div className={styles.shippingFrom}>
                            Volumetric Dimensions
                          </div>
                          <div className={styles.zipCodeWrapper}>
                            <TextField
                              className={styles.volumetricDimentionWidth}
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
                        <div className={styles.frameWrapper15}>
                          <div className={styles.zipCodeWrapper}>
                            <TextField
                              className={styles.volumetricDimentionWidth}
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
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameDiv}>
                        <div className={styles.frameWrapper15}>
                          <div className={styles.zipCodeWrapper}>
                            <TextField
                              className={styles.volumetricDimentionWidth}
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
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameDiv}>
                        <div className={styles.shippingFromParent}>
                          <div className={styles.shippingFrom}>
                            Volumetric Weight kg
                          </div>
                          <div className={styles.zipCodeWrapper}>
                            <TextField
                              className={styles.volumetricDimentionWidth}
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
                  </div>
                </div>
                <div className={styles.frameWrapper21}>
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent6}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shippingFromParent}>
                            <div
                              className={styles.shippingFrom}
                            >{` No.of. Pieces `}</div>
                            <div className={styles.zipCodeWrapper}>
                              <TextField
                                className={styles.volumetricDimentionWidth}
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
                          <div className={styles.shippingFromParent}>
                            <div className={styles.shippingFrom}>
                              Net Weight
                            </div>
                            <div className={styles.zipCodeWrapper}>
                              <TextField
                                className={styles.volumetricDimentionWidth}
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
                    </div>
                    <div className={styles.frameWrapper26}>
                      <div className={styles.frameDiv}>
                        <div className={styles.shippingFromParent}>
                          <div className={styles.shippingFrom}>
                            Declared Value in $
                          </div>
                          <div className={styles.zipCodeWrapper}>
                            <TextField
                              className={styles.volumetricDimentionWidth}
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
              </div>
            </div>
            <div className={styles.frameParent7}>
              <button className={styles.calculateWrapper}>
                <b className={styles.calculate}>Calculate</b>
              </button>
              <button className={styles.calculateWrapper}>
                <b className={styles.calculate}>Refresh</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.clickOnCalculateToSeeShipWrapper}>
          <div
            className={styles.clickOnCalculate}
          >{`Click On Calculate To See Shipping Type Charges `}</div>
        </div>
        <div className={styles.content1}>
          <div className={styles.contentInner}>
            <div className={styles.frameParent8}>
              <div className={styles.standardParent}>
                <b className={styles.standard}>Standard</b>
                <b className={styles.to4Business}>1 TO 4 Business Days</b>
                <div className={styles.shippingCostContainer}>
                  <p className={styles.shippingCost}>Shipping Cost : $50</p>
                  <p className={styles.shippingCost}>Custom Cost : $10</p>
                </div>
              </div>
              <button className={styles.calculateWrapper}>
                <b className={styles.calculate}>Select</b>
              </button>
            </div>
          </div>
          <div className={styles.contentChild}>
            <div className={styles.frameParent9}>
              <div className={styles.standardParent}>
                <b className={styles.standard}>Standard</b>
                <b className={styles.to4Business}>1 TO 4 Business Days</b>
                <div className={styles.shippingCostContainer}>
                  <p className={styles.shippingCost}>Shipping Cost : $50</p>
                  <p className={styles.shippingCost}>Custom Cost : $10</p>
                </div>
              </div>
              <button className={styles.calculateWrapper}>
                <b className={styles.calculate}>Select</b>
              </button>
            </div>
          </div>
          <div className={styles.contentInner1}>
            <div className={styles.frameParent8}>
              <div className={styles.standardParent}>
                <b className={styles.standard}>Standard</b>
                <b className={styles.to4Business}>1 TO 4 Business Days</b>
                <div className={styles.shippingCostContainer}>
                  <p className={styles.shippingCost}>Shipping Cost : $50</p>
                  <p className={styles.shippingCost}>Custom Cost : $10</p>
                </div>
              </div>
              <button className={styles.calculateWrapper}>
                <b className={styles.calculate}>Select</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.frameParent11}>
            <Link className={styles.backWrapper} to="/book-a-packet-main">
              <b className={styles.spcs}>Back</b>
            </Link>
            <Link className={styles.backWrapper} to="/book-a-packet-pickup">
              <b className={styles.spcs}>Next</b>
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameParent12}>
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
                <p className={styles.shippingCost}>Information</p>
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
  );
};

export default BookAPacketShippingCalcula;
