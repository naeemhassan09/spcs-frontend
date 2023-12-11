import { FunctionComponent, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./shipments-return-shipment-sele.module.css";

const ShipmentsReturnShipmentSele: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.shipmentsReturnShipmentSele}>
        <Header logout="/logout1@2x.png" />
        <div className={styles.returnShipmentProcessParent}>
          <b className={styles.returnShipmentProcess}>
            Return Shipment process
          </b>
          <img className={styles.frameChild} alt="" src="/vector-2135.svg" />
        </div>
        <div className={styles.selectCourierAndAssignWrapper}>
          <b className={styles.selectCourierAnd}>Select Courier and Assign</b>
        </div>
        <div className={styles.content}>
          <div className={styles.frame427318946Parent}>
            <div className={styles.frame427318946}>
              <div className={styles.selectWrapper}>
                <div className={styles.select}>
                  <p className={styles.courier}>Select</p>
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group4@2x.png"
                />
              </div>
              <div className={styles.maskGroupContainer}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group4@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group4@2x.png"
                />
              </div>
            </div>
            <div className={styles.frame427318945}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.courier}>Courier</p>
                  <p className={styles.courier}> name</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>DHL</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>FedEx</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>TNT Express</div>
              </div>
              <div className={styles.isabelaContainer}>
                <div className={styles.select}> Isabela</div>
              </div>
              <div className={styles.steveContainer}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.isabelaContainer}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.steveContainer}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.isabelaContainer}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.steveContainer}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.isabelaContainer}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.steveContainer}>
                <div className={styles.select}>John doe</div>
              </div>
            </div>
            <div className={styles.frame427318945}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.courier}>Shipping</p>
                  <p className={styles.courier}>Cost</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>$20</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>$25</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>$25</div>
              </div>
            </div>
            <div className={styles.frame427318945}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.courier}>Custom</p>
                  <p className={styles.courier}>Cost</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>$10</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>$15</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>$15</div>
              </div>
            </div>
            <div className={styles.frame427318945}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.courier}>Estimated Time</p>
                  <p className={styles.courier}>For Delivery</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>! To 4 Business Days.</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>1 To 4 Business Days</div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>1 To 4 Business Days</div>
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
          <div className={styles.frameParent}>
            <Link
              className={styles.backWrapper}
              to="/shipments-return-shipment-chose-individual-country"
            >
              <b className={styles.returnShipmentProcess}>Back</b>
            </Link>
            <Link
              className={styles.backWrapper}
              to="/shipments-print-return-shipping-label"
            >
              <b className={styles.returnShipmentProcess}>Confirm</b>
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameGroup}>
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
                <p className={styles.courier}>Information</p>
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

export default ShipmentsReturnShipmentSele;
