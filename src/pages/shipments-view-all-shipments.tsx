import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./shipments-view-all-shipments.module.css";

const ShipmentsViewAllShipments: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.shipmentsViewAllShipments}>
        <Header logout="/logout1@2x.png" />
        <div className={styles.shipmentsParent}>
          <b className={styles.shipments}>Shipments</b>
          <img className={styles.frameChild} alt="" src="/vector-2139.svg" />
        </div>
        <div className={styles.viewAllShipmentsWrapper}>
          <b className={styles.viewAllShipments}>View All Shipments</b>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.destinationCountryParent}>
                        <div className={styles.destinationCountry}>
                          Destination Country
                        </div>
                        <div className={styles.frameWrapper3}>
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
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.destinationCountryParent}>
                        <div className={styles.destinationCountry}>Status</div>
                        <div className={styles.frameWrapper3}>
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
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper7}>
              <button className={styles.applyWrapper}>
                <b className={styles.apply}>Apply</b>
              </button>
            </div>
            <div className={styles.frameWrapper7}>
              <button className={styles.applyWrapper}>
                <b className={styles.apply}>Refresh</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.shipmentsGroup}>
            <div className={styles.shipments1}>
              <div className={styles.selectWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>Select</p>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupContainer}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupContainer}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupContainer}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupContainer}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupContainer}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper8}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
            </div>
            <div className={styles.shipments2}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>Shipment Barcode</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.johnDoeWrapper1}>
                <div className={styles.select}>123456789</div>
              </div>
            </div>
            <div className={styles.shipments3}>
              <div className={styles.statusWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>Status</p>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.readyForDispatchParent}>
                  <div className={styles.readyForDispatch}>
                    Ready for Dispatch
                  </div>
                  <div className={styles.instanceChild} />
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.readyForDispatchParent}>
                  <div className={styles.readyForDispatch}>
                    Ready for Dispatch
                  </div>
                  <div className={styles.instanceChild} />
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.readyForDispatchParent}>
                  <div className={styles.readyForDispatch}>
                    Ready for Dispatch
                  </div>
                  <div className={styles.instanceChild} />
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.shipmentInTransitParent}>
                  <div className={styles.shipmentInTransit}>
                    Shipment in Transit
                  </div>
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.shipmentInTransitParent}>
                  <div className={styles.shipmentInTransit}>
                    Shipment in Transit
                  </div>
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.shipmentInTransitParent}>
                  <div className={styles.shipmentInTransit}>
                    Shipment in Transit
                  </div>
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.readyForDispatchParent}>
                  <div className={styles.readyForDispatch}>
                    Ready for Dispatch
                  </div>
                  <div className={styles.instanceChild} />
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.shipmentArrivedParent}>
                  <div className={styles.shipmentArrived}>Shipment Arrived</div>
                  <div className={styles.instanceChild4} />
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.shipmentArrivedParent}>
                  <div className={styles.shipmentArrived}>Shipment Arrived</div>
                  <div className={styles.instanceChild4} />
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.shipmentArrivedParent}>
                  <div className={styles.shipmentArrived}>Shipment Arrived</div>
                  <div className={styles.instanceChild4} />
                </div>
              </div>
              <div className={styles.maskGroupWrapper8}>
                <div className={styles.readyForDispatchParent}>
                  <div className={styles.readyForDispatch}>
                    Ready for Dispatch
                  </div>
                  <div className={styles.instanceChild} />
                </div>
              </div>
            </div>
            <div className={styles.shipments4}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>{`Shipment `}</p>
                  <p className={styles.shipment}>Number</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>01</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>04</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>02</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>04</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>05</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>04</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>06</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>07</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>08</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>09</div>
              </div>
              <div className={styles.johnDoeWrapper1}>
                <div className={styles.select}>01</div>
              </div>
            </div>
            <div className={styles.shipments5}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>Origin</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.johnDoeWrapper1}>
                <div className={styles.select}>vPakilstan</div>
              </div>
            </div>
            <div className={styles.shipments6}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>Destination</p>
                  <p className={styles.shipment}>Country</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.johnDoeWrapper1}>
                <div className={styles.select}>USA</div>
              </div>
            </div>
            <div className={styles.shipments7}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>Weight</p>
                  <p className={styles.shipment}>(kg)</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>500kg</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>600kg</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>845kg</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>1000kg</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>500kg</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>500kg</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>500kg</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>500kg</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>500kg</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>400kg</div>
              </div>
              <div className={styles.johnDoeWrapper1}>
                <div className={styles.select}>7000kg</div>
              </div>
            </div>
            <div className={styles.shipments8}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>Volumetric</p>
                  <p className={styles.shipment}>Weight</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>450</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>580</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>845</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>999</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>450</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>450</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>480</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>480</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>480</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>150</div>
              </div>
              <div className={styles.johnDoeWrapper1}>
                <div className={styles.select}>650</div>
              </div>
            </div>
            <div className={styles.shipments9}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>{`Total no of `}</p>
                  <p className={styles.shipment}>{`Packages `}</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>100</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>200</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>200</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>300</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>300</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.johnDoeWrapper1}>
                <div className={styles.select}>400</div>
              </div>
            </div>
            <div className={styles.shipments8}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>{`Total no of `}</p>
                  <p className={styles.shipment}>{`Packages `}</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>100</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>200</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>200</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>300</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>300</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>250</div>
              </div>
              <div className={styles.johnDoeWrapper1}>
                <div className={styles.select}>400</div>
              </div>
            </div>
            <div className={styles.shipmentsvariant8}>
              <div className={styles.selectWrapper}>
                <div className={styles.select}>
                  <p className={styles.shipment}>Actions</p>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
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
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
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
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
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
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
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
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
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
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
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
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
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
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
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
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
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
                  <img className={styles.eyeIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.eyeIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.openInWindowsWrapper}
            onClick={openCSideDrawer}
          >
            <b className={styles.shipments}>Check</b>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.contentInner}>
            <button className={styles.applyWrapper}>
              <b className={styles.apply}>Back</b>
            </button>
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
            <div className={styles.informationShippingGuidelineWrapper}>
              <div className={styles.informationShippingGuidelineContainer}>
                <p className={styles.shipment}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
            </div>
          </div>
          <div className={styles.spcsAllRightsReservedWrapper}>
            <div className={styles.readyForDispatch}>
              © 2023 SPCS. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      {isCSideDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeCSideDrawer}
        >
          <CSideDrawer onClose={closeCSideDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default ShipmentsViewAllShipments;
