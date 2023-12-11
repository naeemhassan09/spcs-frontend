import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./shipments-track-shipment-view.module.css";

const ShipmentsTrackShipmentView: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.shipmentsTrackShipmentView}>
        <Header logout="/logout1@2x.png" />
        <div className={styles.trackShipmentParent}>
          <b className={styles.trackShipment}>Track Shipment</b>
          <img className={styles.frameChild} alt="" src="/vector-21312.svg" />
        </div>
        <div className={styles.scanOrTypeBarcodeTrackSWrapper}>
          <b
            className={styles.scanOrType}
          >{`Scan or Type barcode & Track Shipment`}</b>
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
          <div className={styles.frame427318946Parent}>
            <div className={styles.frame427318946}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.consigneeName}>
                  <p className={styles.barcode}>Barcode</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.consigneeName}>123456789</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>Un Assigned</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}> Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>Steve</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>John doe</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>Steve</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>John doe</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>John doe</div>
              </div>
            </div>
            <div className={styles.frame427318946}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.consigneeName}>
                  <p className={styles.barcode}>Status</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.consigneeName}>
                  Arrived At Destination
                </div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>4</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>8</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>1</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>3</div>
              </div>
            </div>
            <div className={styles.frame427318949}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.consigneeName}>
                  <p className={styles.barcode}>Shipment</p>
                  <p className={styles.barcode}>No</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.consigneeName}>6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>Pakistan</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>Pakistan</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}> Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>Steve</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>John doe</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>Steve</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>John doe</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>John doe</div>
              </div>
            </div>
            <div className={styles.frame427318949}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.consigneeName}>
                  <p className={styles.barcode}>Origin</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.consigneeName}>UAE</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>Pakistan</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>Pakistan</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}> Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>Steve</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>John doe</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>Steve</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>John doe</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>John doe</div>
              </div>
            </div>
            <div className={styles.frame427318922}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.consigneeName}>
                  <p className={styles.barcode}>{`Destination `}</p>
                  <p className={styles.barcode}>Country</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.consigneeName}>USA</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>USA</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>USA</div>
              </div>
            </div>
            <div className={styles.frame427318947}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.consigneeName}>
                  <p className={styles.barcode}>Weight</p>
                  <p className={styles.barcode}>(kg)</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.consigneeName}> 200kg</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>5</div>
              </div>
            </div>
            <div className={styles.frame427318947}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.consigneeName}>
                  <p className={styles.barcode}>{`Volumetric `}</p>
                  <p className={styles.barcode}>Weight</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.consigneeName}>150</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>5</div>
              </div>
            </div>
            <div className={styles.frame427318950}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.consigneeName}>
                  <p className={styles.barcode}>Total no of</p>
                  <p className={styles.barcode}>Packages</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.consigneeName}>100</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>4</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>8</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>1</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>3</div>
              </div>
            </div>
            <div className={styles.frame427318950}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.consigneeName}>
                  <p className={styles.barcode}>Total no of</p>
                  <p className={styles.barcode}>Parcels</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.consigneeName}>1000</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>4</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>8</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>1</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.consigneeName}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.consigneeName}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.checkWrapper} onClick={openCSideDrawer}>
            <b className={styles.trackShipment}>Check</b>
          </div>
        </div>
        <div className={styles.shipmentsTrackShipmentViewInner}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.readyForDispatchedContainer}>
                  <p className={styles.barcode}>Ready For</p>
                  <p className={styles.barcode}>{`Dispatched `}</p>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.readyForDispatchedContainer}>
                  In Transit
                </div>
              </div>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.readyForDispatchedContainer}>
                  <p className={styles.barcode}>Arrived At</p>
                  <p className={styles.barcode}>Destination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.contentInner}>
            <Link
              className={styles.backWrapper}
              to="/shipments-track-shipment-main"
            >
              <b className={styles.trackShipment}>Back</b>
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
                <p className={styles.barcode}>Information</p>
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

export default ShipmentsTrackShipmentView;
