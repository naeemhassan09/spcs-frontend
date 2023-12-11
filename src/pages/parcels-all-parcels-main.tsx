import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./parcels-all-parcels-main.module.css";

const ParcelsAllParcelsMain: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.parcelsAllParcelsMain}>
        <Header logout="/logout@2x.png" />
        <div className={styles.parcelsParent}>
          <b className={styles.parcels}>Parcels</b>
          <img className={styles.frameChild} alt="" src="/vector-2134.svg" />
        </div>
        <div className={styles.companysAllParcelsDashboarWrapper}>
          <b className={styles.companysAllParcels}>
            Company’s All Parcels Dashboard
          </b>
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
                        <div className={styles.shippingTypeWrapper}>
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
                        <div className={styles.destinationCountry}>
                          Shipment Type
                        </div>
                        <div className={styles.shippingTypeWrapper}>
                          <Autocomplete
                            className={styles.frameItem}
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
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper6}>
              <button className={styles.applyWrapper}>
                <b className={styles.apply}>Apply</b>
              </button>
            </div>
            <div className={styles.frameWrapper6}>
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
                  <p className={styles.row}>Select</p>
                  <p className={styles.row}>row</p>
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
            <div className={styles.frame427318946}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}> Barcode</p>
                  <p className={styles.row}>Number</p>
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
                  <p className={styles.row}>Destination</p>
                  <p className={styles.row}> Country</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>UK</div>
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
                <div className={styles.select}>UK</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>UK</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>UK</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>UK</div>
              </div>
              <div className={styles.unassignedWrapper6}>
                <div className={styles.select}>USA</div>
              </div>
            </div>
            <div className={styles.frame427318948}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Shipment</p>
                  <p className={styles.row}>Type</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Urgent</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Standard</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Urgent</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Normal</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Standard</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Normal</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Normal</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Urgent</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Normal</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Standard</div>
              </div>
              <div className={styles.unassignedWrapper6}>
                <div className={styles.select}>Urgent</div>
              </div>
            </div>
            <div className={styles.frame4273189462}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Weight</p>
                  <p className={styles.row}> (kg)</p>
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
              <div className={styles.unassignedWrapper6}>
                <div className={styles.select}>6kg</div>
              </div>
            </div>
            <div className={styles.frame4273189463}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Volumetric</p>
                  <p className={styles.row}>Weight</p>
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
              <div className={styles.unassignedWrapper6}>
                <div className={styles.select}>1</div>
              </div>
            </div>
            <div className={styles.frame4273189464}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>item</p>
                  <p className={styles.row}>Description</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.unassignedWrapper6}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
            </div>
            <div className={styles.frame4273189465}>
              <div className={styles.printLabelWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Shipment</p>
                  <p className={styles.row}>Details</p>
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
              <div className={styles.maskGroupWrapper8}>
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
            <b className={styles.parcels}>Check</b>
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
                <p className={styles.row}>Information</p>
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

export default ParcelsAllParcelsMain;
