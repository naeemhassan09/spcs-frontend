import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./shipments-return-shipment-parc.module.css";

const ShipmentsReturnShipmentParc: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.shipmentsReturnShipmentParc}>
        <Header logout="/logout1@2x.png" />
        <div className={styles.returnShipmentProcessParent}>
          <b className={styles.returnShipmentProcess}>
            Return Shipment process
          </b>
          <img className={styles.frameChild} alt="" src="/vector-2135.svg" />
        </div>
        <div className={styles.combineAllReturnParcelsAndWrapper}>
          <b className={styles.combineAllReturn}>
            Combine All return Parcels and Ship
          </b>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.destinationCountryParent}>
                        <div className={styles.destinationCountry}>
                          Destination Country
                        </div>
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
          <div className={styles.frame427318947Parent}>
            <div className={styles.frame427318947}>
              <div className={styles.selectWrapper}>
                <div className={styles.select}>
                  <p className={styles.destination}>Select</p>
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
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
            </div>
            <div className={styles.frame427318946}>
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
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
            </div>
            <div className={styles.frame4273189461}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.destination}>Destination</p>
                  <p className={styles.destination}> Country</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>UAE</div>
              </div>
            </div>
            <div className={styles.frame427318948}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.destination}>Parcel Return</p>
                  <p className={styles.destination}> Reason</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Damaged</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Damaged</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Damaged</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Damaged</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Not Working</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Not Working</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Not Working</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Not Working</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Not Working</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Not Working</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Not Working</div>
              </div>
            </div>
            <div className={styles.frame4273189462}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.destination}>Weight (kg)</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>1kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>2kg</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>3kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>6kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>8kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>6kg</div>
              </div>
            </div>
            <div className={styles.frame4273189463}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.destination}>Volumetric</p>
                  <p className={styles.destination}>Weight</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>2</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>7</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>7</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>2</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>1</div>
              </div>
            </div>
            <div className={styles.frame427318949}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.description1}>
                  <p className={styles.destination}>Status</p>
                  <p className={styles.destination}>{`  `}</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Ready For Combine</div>
              </div>
            </div>
            <div className={styles.frame4273189464}>
              <div className={styles.printLabelWrapper}>
                <div className={styles.select}>
                  <p className={styles.destination}>Details</p>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.printLabel1}>Details</div>
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
        <div className={styles.content1}>
          <div className={styles.frameParent1}>
            <button className={styles.applyWrapper}>
              <b className={styles.apply}>Back</b>
            </button>
            <Link
              className={styles.combineWrapper}
              to="/shipments-return-shipment-chose-individual-country"
            >
              <b className={styles.returnShipmentProcess}>Combine</b>
            </Link>
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

export default ShipmentsReturnShipmentParc;
