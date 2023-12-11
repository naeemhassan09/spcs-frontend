import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/header";
import styles from "./shipments-track-shipment-main.module.css";

const ShipmentsTrackShipmentMain: FunctionComponent = () => {
  return (
    <div className={styles.shipmentsTrackShipmentMain}>
      <Header logout="/logout1@2x.png" />
      <div className={styles.trackShipmentParent}>
        <b className={styles.trackShipment}>Track Shipment</b>
        <img className={styles.frameChild} alt="" src="/vector-21313.svg" />
      </div>
      <div className={styles.scanOrTypeBarcodeTrackSWrapper}>
        <b
          className={styles.scanOrType}
        >{`Scan or Type barcode & Track Shipment`}</b>
      </div>
      <div className={styles.scanOrEnterTheBarcodeToTWrapper}>
        <div className={styles.scanOrEnterContainer}>
          <p className={styles.scanOr}>
            Scan Or Enter The Barcode to Track Shipment
          </p>
          <p className={styles.loremIpsumDolorSitAmetCo}>
            <span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus..piscing elit Ut et massa mi.
                Aliquam in hendrerit urna. Pellentesque sit amet sapien
                fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                vitae mattis tellus..
              </span>
              <span className={styles.span}>{` `}</span>
            </span>
          </p>
        </div>
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
          <Link
            className={styles.applyWrapper}
            to="/shipments-track-shipment-view-track-shipment"
          >
            <b className={styles.trackShipment}>Apply</b>
          </Link>
          <button className={styles.refreshWrapper}>
            <b className={styles.refresh}>Refresh</b>
          </button>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.frameContainer}>
          <button className={styles.refreshWrapper}>
            <b className={styles.refresh}>Back</b>
          </button>
          <Link
            className={styles.nextWrapper}
            to="/shipments-track-shipment-view-track-shipment"
          >
            <b className={styles.trackShipment}>Next</b>
          </Link>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.frameDiv}>
          <div className={styles.legalTermsConditionsPrivaWrapper}>
            <div className={styles.legalTermsContainer}>
              <p className={styles.loremIpsumDolorSitAmetCo}>Legal</p>
              <p className={styles.termsConditions}>{`Terms & Conditions`}</p>
              <p className={styles.termsConditions}>Privacy Policy</p>
              <p className={styles.termsConditions}>Cookie Policy</p>
              <p className={styles.termsConditions}>Disclaimer</p>
            </div>
          </div>
          <div className={styles.informationShippingGuidelineWrapper}>
            <div className={styles.informationShippingGuidelineContainer}>
              <p className={styles.information}>Information</p>
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
  );
};

export default ShipmentsTrackShipmentMain;
