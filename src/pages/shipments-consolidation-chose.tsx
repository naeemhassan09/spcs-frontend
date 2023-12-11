import { FunctionComponent, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./shipments-consolidation-chose.module.css";

const ShipmentsConsolidationChose: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.shipmentsConsolidationChose}>
        <Header logout="/logout1@2x.png" />
        <div className={styles.returnShipmentProcessParent}>
          <b className={styles.returnShipmentProcess}>
            Return Shipment process
          </b>
          <img className={styles.frameChild} alt="" src="/vector-2135.svg" />
        </div>
        <div className={styles.selectIndividualCountryBefoWrapper}>
          <b
            className={styles.selectIndividualCountry}
          >{`Select Individual Country before Assigning to Courier `}</b>
        </div>
        <div className={styles.content}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
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
                <div className={styles.frame4273189461}>
                  <div className={styles.barcodeWrapper}>
                    <div className={styles.barcode}>
                      <p className={styles.origin}>Total No of</p>
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
                <div className={styles.frame4273189461}>
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
                <div className={styles.frame4273189463}>
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
                <div className={styles.frame427318954}>
                  <div className={styles.barcodeWrapper}>
                    <div className={styles.barcode}>
                      <p className={styles.origin}>Combined</p>
                      <p className={styles.origin}>Shipment</p>
                    </div>
                  </div>
                  <div className={styles.unAssignedWrapper}>
                    <div className={styles.barcode}>7</div>
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
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Modify</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Child}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Modify</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Inner1}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Modify</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Child}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Modify</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Inner1}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Modify</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Child}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Modify</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Inner1}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Details</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Child}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Modify</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Inner1}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Modify</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Child}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>Modify</div>
                    </div>
                  </div>
                  <div className={styles.frame427318950Inner1}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupChild} />
                      <div className={styles.printLabel1}>{`Modify `}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameInner} />
              <div className={styles.usaToUae}>USA to UAE</div>
              <div className={styles.combinedShipmentNo7Parent}>
                <div className={styles.returnShipmentProcess}>
                  <span className={styles.combinedShipmentNo}>
                    Combined Shipment No :
                  </span>
                  <b> 7</b>
                </div>
                <div className={styles.returnShipmentProcess}>
                  <span
                    className={styles.combinedShipmentNo}
                  >{`Total Combined Parcels of This Package is :  `}</span>
                  <b>6</b>
                </div>
                <div className={styles.totalWeightOf}>
                  Total Weight of This Package is : 22kg
                </div>
              </div>
              <img className={styles.groupIcon} alt="" src="/group-232.svg" />
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.groupParent}>
                <div className={styles.rectangleParent9}>
                  <div className={styles.groupChild8} />
                  <div className={styles.assignPackage}>Assign Package</div>
                </div>
                <div className={styles.frame427318951Group}>
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
                      <div className={styles.barcode}>UK</div>
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
                  <div className={styles.frame4273189461}>
                    <div className={styles.barcodeWrapper}>
                      <div className={styles.barcode}>
                        <p className={styles.origin}>Total No of</p>
                        <p className={styles.origin}>Parcels</p>
                      </div>
                    </div>
                    <div className={styles.unAssignedWrapper}>
                      <div className={styles.barcode}>5</div>
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
                  <div className={styles.frame4273189461}>
                    <div className={styles.barcodeWrapper}>
                      <div className={styles.barcode}>
                        Total Parcels Weight (kg)
                      </div>
                    </div>
                    <div className={styles.unAssignedWrapper}>
                      <div className={styles.barcode}>29 kg</div>
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
                  <div className={styles.frame4273189463}>
                    <div className={styles.barcodeWrapper}>
                      <div className={styles.barcode}>
                        <p className={styles.origin}>TotalVolumetric</p>
                        <p className={styles.origin}>Weight</p>
                      </div>
                    </div>
                    <div className={styles.unAssignedWrapper}>
                      <div className={styles.barcode}>9</div>
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
                  <div className={styles.frame427318954}>
                    <div className={styles.barcodeWrapper}>
                      <div className={styles.barcode}>
                        <p className={styles.origin}>Combined</p>
                        <p className={styles.origin}>Shipment</p>
                      </div>
                    </div>
                    <div className={styles.unAssignedWrapper}>
                      <div className={styles.barcode}>4</div>
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
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Modify</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Child}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Modify</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Inner1}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Modify</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Child}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Modify</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Inner1}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Modify</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Child}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Modify</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Inner1}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Details</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Child}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Modify</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Inner1}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Modify</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Child}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>Modify</div>
                      </div>
                    </div>
                    <div className={styles.frame427318950Inner1}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild} />
                        <div className={styles.printLabel1}>{`Modify `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.ukToUae}>UK to UAE</div>
                <div className={styles.groupChild20} />
                <div className={styles.groupChild21} />
                <div className={styles.combinedShipmentNo4Parent}>
                  <div className={styles.returnShipmentProcess}>
                    <span
                      className={styles.combinedShipmentNo}
                    >{`Combined Shipment No : `}</span>
                    <b>4</b>
                    <span className={styles.combinedShipmentNo}>{` `}</span>
                  </div>
                  <div className={styles.returnShipmentProcess}>
                    <span className={styles.combinedShipmentNo}>
                      Total Combined Parcels of This Package is :
                    </span>
                    <b> 5</b>
                  </div>
                  <div className={styles.returnShipmentProcess}>
                    <span className={styles.combinedShipmentNo}>
                      Total Weight of This Package is :
                    </span>
                    <b> 29kg</b>
                  </div>
                </div>
                <div className={styles.groupChild22} />
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
          <div className={styles.frameGroup}>
            <Link
              className={styles.backWrapper}
              to="/shipments-consolidation-all-parcels-main"
            >
              <b className={styles.returnShipmentProcess}>Back</b>
            </Link>
            <Link
              className={styles.backWrapper}
              to="/shipments-consolidation-select-courier"
            >
              <b className={styles.returnShipmentProcess}>Assign</b>
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameContainer}>
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
            <div className={styles.totalWeightOf}>
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

export default ShipmentsConsolidationChose;
