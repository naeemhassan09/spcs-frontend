import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./shipments-consolidation-print.module.css";

const ShipmentsConsolidationPrint: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.shipmentsConsolidationPrint}>
        <Header logout="/logout1@2x.png" />
        <div className={styles.returnShipmentProcessParent}>
          <b className={styles.returnShipmentProcess}>
            Return Shipment process
          </b>
          <img className={styles.frameChild} alt="" src="/vector-2135.svg" />
        </div>
        <div className={styles.printShippingLabelWrapper}>
          <b className={styles.printShippingLabel}>Print Shipping Label</b>
        </div>
        <div className={styles.typeShipmentBarcodeForNewWrapper}>
          <b className={styles.printShippingLabel}>
            Type Shipment Barcode for new shipment
          </b>
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
          <div className={styles.frameContainer}>
            <div className={styles.frame427318951Parent}>
              <div className={styles.frame427318951}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.barcode}>
                    <p className={styles.origin}>Origin</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.barcode}>UAE</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
              </div>
              <div className={styles.frame427318946}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.barcode}>
                    <p className={styles.origin}> Barcode</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>123456789</div>
                </div>
              </div>
              <div className={styles.frame4273189461}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.barcode}>
                    <p className={styles.origin}>Destination</p>
                    <p className={styles.origin}> Country</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.barcode}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>USA</div>
                </div>
              </div>
              <div className={styles.frame427318953}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.barcode}>
                    <p className={styles.origin}>Total No Return of</p>
                    <p className={styles.origin}>Parcels</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.barcode}>6</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>UK</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>USA</div>
                </div>
              </div>
              <div className={styles.frame4273189462}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.barcode}>
                    Total Parcels Weight (kg)
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.barcode}>22 kg</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>2kg</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>5kg</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>5kg</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>3kg</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>5kg</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>6kg</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>5kg</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>8kg</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>5kg</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>6kg</div>
                </div>
              </div>
              <div className={styles.frame427318953}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.barcode}>
                    <p className={styles.origin}>TotalVolumetric</p>
                    <p className={styles.origin}>Weight</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.barcode}>23</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>3</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>4</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>7</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>3</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>7</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>1</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>2</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>1</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>1</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>1</div>
                </div>
              </div>
              <div className={styles.frame427318953}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.barcode}>
                    <p className={styles.origin}>Return Combined</p>
                    <p className={styles.origin}>Shipment</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.barcode}>2</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Pakistan</div>
                </div>
              </div>
              <div className={styles.frame427318949}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.barcode}>
                    <p className={styles.origin}>Assigned</p>
                    <p className={styles.origin}>Courier</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.barcode}> Assigned</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
                <div className={styles.unassignedWrapper}>
                  <div className={styles.barcode}>Un Assigned</div>
                </div>
              </div>
              <div className={styles.frame427318950}>
                <div className={styles.printLabelWrapper}>
                  <div className={styles.barcode}>
                    <p className={styles.origin}>Modify</p>
                  </div>
                </div>
                <div className={styles.frame427318950Inner}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Modify</div>
                  </div>
                </div>
                <div className={styles.frame427318950Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Modify</div>
                  </div>
                </div>
                <div className={styles.frame427318950Inner1}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Modify</div>
                  </div>
                </div>
                <div className={styles.frame427318950Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Modify</div>
                  </div>
                </div>
                <div className={styles.frame427318950Inner1}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Modify</div>
                  </div>
                </div>
                <div className={styles.frame427318950Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Modify</div>
                  </div>
                </div>
                <div className={styles.frame427318950Inner1}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.frame427318950Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Modify</div>
                  </div>
                </div>
                <div className={styles.frame427318950Inner1}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Modify</div>
                  </div>
                </div>
                <div className={styles.frame427318950Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Modify</div>
                  </div>
                </div>
                <div className={styles.frame427318950Inner1}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>{`Modify `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent8}>
              <div className={styles.groupChild8} />
              <div className={styles.dhlParent}>
                <div className={styles.dhl}>{`DHL   `}</div>
                <div className={styles.assignedCourierToWrapper}>
                  <div className={styles.assignedCourierTo}>
                    Assigned Courier To
                  </div>
                </div>
                <div className={styles.btc123456789Wrapper}>
                  <div className={styles.btc123456789}> Btc 123456789</div>
                </div>
                <div className={styles.assignedParent}>
                  <div className={styles.assigned4}>Assigned</div>
                  <div className={styles.statusWrapper}>
                    <div className={styles.status}>Status</div>
                  </div>
                </div>
                <div className={styles.groupParent}>
                  <div className={styles.groupWrapper}>
                    <div className={styles.originParent}>
                      <div className={styles.origin1}>Origin</div>
                      <div className={styles.countryUsaContainer}>
                        <span className={styles.countryUsaContainer1}>
                          <p className={styles.origin}>&nbsp;</p>
                          <p className={styles.origin}>
                            <span className={styles.totalParcels}>Country</span>
                            <span className={styles.uae}> : USA</span>
                          </p>
                          <p className={styles.origin}>
                            <span className={styles.city}>{`City `}</span>
                            <span>: Los Angeles</span>
                          </p>
                          <p className={styles.origin}>
                            <span className={styles.city}>State</span>
                            <span> : California</span>
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.destinationParent}>
                    <div className={styles.destination1}>Destination</div>
                    <div className={styles.countryUaeContainer}>
                      <span className={styles.countryUsaContainer1}>
                        <p className={styles.origin}>&nbsp;</p>
                        <p className={styles.origin}>
                          <span className={styles.totalParcels}>Country</span>
                          <span className={styles.uae}> : UAE</span>
                        </p>
                        <p className={styles.origin}>
                          <span className={styles.city}>City</span>
                          <b className={styles.uae}>{` `}</b>
                          <span>: Dubai</span>
                        </p>
                        <p className={styles.origin}>
                          <span className={styles.city}>State</span>
                          <span> : .......</span>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className={styles.totalParcels6PacketsWeigParent}>
                    <div className={styles.totalParcelsContainer}>
                      <span className={styles.countryUsaContainer1}>
                        <p className={styles.origin}>
                          <span className={styles.totalParcels}>
                            Total Parcels
                          </span>
                          <span className={styles.uae}> : 6 packets</span>
                        </p>
                        <p className={styles.origin}>
                          <span className={styles.city}>Weight</span>
                          <span> : 22kg</span>
                        </p>
                        <p className={styles.origin}>
                          <span className={styles.totalParcels}>
                            Dimensions
                          </span>
                          <span className={styles.uae}> : 8x8x8</span>
                        </p>
                        <p className={styles.origin}>
                          <span className={styles.totalParcels}>
                            volumetric Weight
                          </span>
                          <span className={styles.uae}> : 23</span>
                        </p>
                        <p className={styles.origin}>{`   `}</p>
                      </span>
                    </div>
                    <div className={styles.packageDetalisWrapper}>
                      <div className={styles.packageDetalis}>
                        Package Detalis
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-234.svg"
                  />
                  <img
                    className={styles.groupChild9}
                    alt=""
                    src="/vector-235.svg"
                  />
                </div>
                <img
                  className={styles.groupChild10}
                  alt=""
                  src="/vector-237.svg"
                />
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-2379.svg"
                />
                <div className={styles.barcodeParent}>
                  <img
                    className={styles.barcodeIcon}
                    alt=""
                    src="/barcode@2x.png"
                  />
                  <img
                    className={styles.barcodeIcon1}
                    alt=""
                    src="/barcode1@2x.png"
                  />
                  <img
                    className={styles.barcodeIcon2}
                    alt=""
                    src="/barcode2@2x.png"
                  />
                  <img
                    className={styles.barcodeIcon3}
                    alt=""
                    src="/barcode3@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.maskGroupParent}>
                    <div className={styles.maskGroup}>
                      <div className={styles.spcs}>{`SPCS `}</div>
                      <div className={styles.maskGroupChild} />
                    </div>
                    <b className={styles.spcs1}>{`SPCS    `}</b>
                  </div>
                </div>
                <div className={styles.returnCombinedShipmentContainer}>
                  <span className={styles.totalParcels}>
                    Return Combined Shipment #
                  </span>
                  <span className={styles.span1}> 02</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.openInWindowsWrapper}
            onClick={openCSideDrawer}
          >
            <b className={styles.returnShipmentProcess}>Check</b>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.contentInner}>
            <button className={styles.downloadLabelWrapper}>
              <b className={styles.apply}>Download label</b>
            </button>
          </div>
        </div>
        <div className={styles.content3}>
          <div className={styles.frameParent1}>
            <button className={styles.applyWrapper}>
              <b className={styles.apply}>Back</b>
            </button>
            <button className={styles.applyWrapper}>
              <b className={styles.apply}>Print</b>
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
                <p className={styles.origin}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
            </div>
          </div>
          <div className={styles.spcsAllRightsReservedWrapper}>
            <div className={styles.scanBarcode}>
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

export default ShipmentsConsolidationPrint;
