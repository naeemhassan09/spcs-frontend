import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Header from "../components/header";
import styles from "./parcels-track-parcel-main.module.css";

const ParcelsTrackParcelMain: FunctionComponent = () => {
  return (
    <div className={styles.parcelsTrackParcelMain}>
      <Header logout="/logout@2x.png" />
      <div className={styles.parcelsParent}>
        <b className={styles.parcels}>Parcels</b>
        <img className={styles.frameChild} alt="" src="/vector-2134.svg" />
      </div>
      <div className={styles.scanOrTypeBarcodeViewShWrapper}>
        <b
          className={styles.scanOrType}
        >{`Scan or Type barcode & View Shipment Details`}</b>
      </div>
      <div className={styles.scanOrEnterTheBarcodeToVWrapper}>
        <div className={styles.scanOrEnterContainer}>
          <p className={styles.scanOr}>
            Scan Or Enter The Barcode To View Shipment Details
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
        <div className={styles.contentInner}>
          <button className={styles.applyWrapper}>
            <b className={styles.apply}>Next</b>
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.frameContainer}>
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

export default ParcelsTrackParcelMain;
