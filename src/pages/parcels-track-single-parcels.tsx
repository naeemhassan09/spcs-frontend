import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./parcels-track-single-parcels.module.css";

const ParcelsTrackSingleParcels: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.parcelsTrackSingleParcels}>
        <Header logout="/logout@2x.png" />
        <div className={styles.bookAPacketParent}>
          <b className={styles.bookAPacket}>Book a packet</b>
          <img className={styles.frameChild} alt="" src="/vector-21311.svg" />
        </div>
        <div className={styles.scanOrTypeBarcodeViewShWrapper}>
          <b
            className={styles.scanOrType}
          >{`Scan or Type barcode & View Shipment Details`}</b>
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
          <div className={styles.frame427318921Parent}>
            <div className={styles.frame427318921}>
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
                  src="/mask-group1@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="/mask-group1@2x.png"
                />
              </div>
              <div className={styles.maskGroupFrame}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group6@2x.png"
                />
              </div>
            </div>
            <div className={styles.frame427318946}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Barcode</p>
                  <p className={styles.row}>Number</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Un Assigned</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}> Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
            </div>
            <div className={styles.frame427318920}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Booked `}</p>
                  <p className={styles.row}>Country</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Pakistan</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Pakistan</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}> Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
            </div>
            <div className={styles.frame427318922}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Destination `}</p>
                  <p className={styles.row}>Country</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>USA</div>
              </div>
            </div>
            <div className={styles.frame427318947}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Weight</p>
                  <p className={styles.row}>(kg)</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}> 6kg</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>5</div>
              </div>
            </div>
            <div className={styles.frame427318947}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Volumetric `}</p>
                  <p className={styles.row}>Weight</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}> 6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>5</div>
              </div>
            </div>
            <div className={styles.frame4273189461}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Total `}</p>
                  <p className={styles.row}>Pieces</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>2</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>8</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
            </div>
            <div className={styles.frame4273189461}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Total value `}</p>
                  <p className={styles.row}> USD</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>$100</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>100$</div>
              </div>
            </div>
            <div className={styles.frame4273189221}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Total No</p>
                  <p className={styles.row}>Of Shipments</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>2</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>john</div>
              </div>
            </div>
            <div className={styles.frame427318948}>
              <div className={styles.consigneeNameWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>packet</p>
                  <p className={styles.row}>Description</p>
                </div>
              </div>
              <div className={styles.steveWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>8</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>6</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.johnDoeWrapper}>
                <div className={styles.select}>5</div>
              </div>
              <div className={styles.isabelaWrapper}>
                <div className={styles.select}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.checkWrapper} onClick={openCSideDrawer}>
            <b className={styles.bookAPacket}>Check</b>
          </div>
        </div>
        <div className={styles.parcelsTrackSingleParcelsInner}>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.bookingCreated}>
                  <p className={styles.row}>Booking</p>
                  <p className={styles.row}>Created</p>
                </div>
              </div>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.bookingCreated}>
                  <p className={styles.row}>{`First Mile `}</p>
                  <p className={styles.row}>Picked up</p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.bookingCreated}>Shipped</div>
              </div>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img className={styles.doneIcon} alt="" src="/done@2x.png" />
                </div>
                <div className={styles.bookingCreated}>
                  <p className={styles.row}>Arrived At</p>
                  <p className={styles.row}>Destination</p>
                </div>
              </div>
            </div>
            <div className={styles.groupParent}>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <img className={styles.doneIcon} alt="" src="/done@2x.png" />
              </div>
              <div className={styles.bookingCreated}>Delivered</div>
            </div>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.contentInner}>
            <Link
              className={styles.backWrapper}
              to="/parcels-track-parcel-main"
            >
              <b className={styles.bookAPacket}>Back</b>
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameParent3}>
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

export default ParcelsTrackSingleParcels;
