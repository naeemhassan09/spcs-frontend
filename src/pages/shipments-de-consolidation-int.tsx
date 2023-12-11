import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./shipments-de-consolidation-int.module.css";

const ShipmentsDeConsolidationInt: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.shipmentsDeConsolidationInt}>
        <Header logout="/logout1@2x.png" />
        <div className={styles.deConsolidationParent}>
          <b className={styles.deConsolidation}>De-Consolidation</b>
          <img className={styles.frameChild} alt="" src="/vector-2137.svg" />
        </div>
        <div className={styles.allDeConsolidationPackagesWrapper}>
          <b className={styles.allDeConsolidationPackages}>
            All De-Consolidation Packages
          </b>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.cityParent}>
                        <div className={styles.city}>City</div>
                        <div className={styles.frameWrapper4}>
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
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper5}>
              <button className={styles.applyWrapper}>
                <b className={styles.apply}>Apply</b>
              </button>
            </div>
            <div className={styles.frameWrapper5}>
              <button className={styles.applyWrapper}>
                <b className={styles.apply}>Refresh</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.frame427318946Parent}>
              <div className={styles.frame427318946}>
                <div className={styles.selectWrapper}>
                  <div className={styles.select}>
                    <p className={styles.destination}>Select</p>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper8}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frame4273189461}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.destination}> Barcode</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>123456789</div>
                </div>
              </div>
              <div className={styles.frame4273189461}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.destination}>Destination</p>
                    <p className={styles.destination}>Country</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>USA</div>
                </div>
              </div>
              <div className={styles.frame4273189463}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.destination}>City</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>New York</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Los Angeles</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Chicago</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Houston</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Phoenix</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Philadelphia</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>San Antonio</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>San Diego</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Dallas</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>San Jose</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>City</div>
                </div>
              </div>
              <div className={styles.frame427318950}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.destination}> Packages</p>
                    <p className={styles.destination}>No</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>1</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>2</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>3</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>4</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>5</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>6</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>7</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>8</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>9</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>10</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>123456789</div>
                </div>
              </div>
              <div className={styles.frame4273189461}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.destination}>No of</p>
                    <p className={styles.destination}>Parcels</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>John doe</div>
                </div>
              </div>
              <div className={styles.frame427318948}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.destination}>Status</p>
                  </div>
                </div>
                <div className={styles.frame427318948Inner}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.instanceChild} />
                    <div className={styles.assigned2}>Assigned</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.frame427318948Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.instanceChild} />
                    <div className={styles.assigned2}>Assigned</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.frame427318948Inner}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.unAssigned2}>Un Assigned</div>
                    <div className={styles.instanceChild1} />
                  </div>
                </div>
                <div className={styles.frame427318948Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.unAssigned2}>Un Assigned</div>
                    <div className={styles.instanceChild1} />
                  </div>
                </div>
                <div className={styles.frame427318948Inner}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.unAssigned2}>Un Assigned</div>
                    <div className={styles.instanceChild1} />
                  </div>
                </div>
                <div className={styles.frame427318948Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.instanceChild} />
                    <div className={styles.assigned2}>Assigned</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.frame427318948Inner}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.instanceChild} />
                    <div className={styles.assigned2}>Assigned</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.frame427318948Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.instanceChild} />
                    <div className={styles.assigned2}>Assigned</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.frame427318948Inner}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.instanceChild} />
                    <div className={styles.assigned2}>Assigned</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.frame427318948Child}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.instanceChild} />
                    <div className={styles.assigned2}>Assigned</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
              </div>
              <div className={styles.frame4273189465}>
                <div className={styles.printLabelWrapper}>
                  <div className={styles.select}>
                    <p className={styles.destination}>{`View `}</p>
                    <p className={styles.destination}>Details</p>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Detailsl</div>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Details</div>
                  </div>
                </div>
                <div className={styles.frame427318946Inner9}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel11}>Print Label</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.openInWindowsWrapper}
            onClick={openCSideDrawer}
          >
            <b className={styles.deConsolidation}>Check</b>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.frameParent1}>
            <Link
              className={styles.backWrapper}
              to="/shipments-deconsolidation-each-shipment"
            >
              <b className={styles.deConsolidation}>Back</b>
            </Link>
            <button className={styles.applyWrapper}>
              <b className={styles.apply}>Assign</b>
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
                <p className={styles.destination}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
            </div>
          </div>
          <div className={styles.spcsAllRightsReservedWrapper}>
            <div className={styles.spcsAllRights}>
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

export default ShipmentsDeConsolidationInt;
