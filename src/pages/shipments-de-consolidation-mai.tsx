import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/header";
import styles from "./shipments-de-consolidation-mai.module.css";

const ShipmentsDeConsolidationMai: FunctionComponent = () => {
  return (
    <div className={styles.shipmentsDeConsolidationMai}>
      <Header logout="/logout1@2x.png" />
      <div className={styles.deConsolidationParent}>
        <b className={styles.deConsolidation}>De-Consolidation</b>
        <img className={styles.frameChild} alt="" src="/vector-2137.svg" />
      </div>
      <div className={styles.deConsolidateOfConsolidatioWrapper}>
        <b className={styles.deConsolidateOfConsolidatio}>
          De-Consolidate of Consolidation Shipment
        </b>
      </div>
      <div className={styles.scanOrEnterTheConsolidatedWrapper}>
        <div className={styles.scanOrEnterContainer}>
          <p className={styles.scanOr}>
            Scan Or Enter The Consolidated shipment Barcode
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
          <button className={styles.applyWrapper}>
            <b className={styles.apply}>Back</b>
          </button>
          <Link
            className={styles.nextWrapper}
            to="/shipments-deconsolidation-each-shipment"
          >
            <b className={styles.deConsolidation}>Next</b>
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

export default ShipmentsDeConsolidationMai;
