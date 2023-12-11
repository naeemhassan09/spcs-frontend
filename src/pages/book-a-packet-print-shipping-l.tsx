import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import ChooseDrawer from "../components/choose-drawer";
import styles from "./book-a-packet-print-shipping-l.module.css";

const BookAPacketPrintShippingL: FunctionComponent = () => {
  const [isMenuSideBarOpen, setMenuSideBarOpen] = useState(false);
  const [isMenuBarOpen, setMenuBarOpen] = useState(false);
  const [isChooseDrawerOpen, setChooseDrawerOpen] = useState(false);

  const openMenuSideBar = useCallback(() => {
    setMenuSideBarOpen(true);
  }, []);

  const closeMenuSideBar = useCallback(() => {
    setMenuSideBarOpen(false);
  }, []);

  const openMenuBar = useCallback(() => {
    setMenuBarOpen(true);
  }, []);

  const closeMenuBar = useCallback(() => {
    setMenuBarOpen(false);
  }, []);

  const openChooseDrawer = useCallback(() => {
    setChooseDrawerOpen(true);
  }, []);

  const closeChooseDrawer = useCallback(() => {
    setChooseDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.bookAPacketPrintShippingL}>
        <div className={styles.navContainer}>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <img
                className={styles.menuIcon}
                alt=""
                src="/menu1@2x.png"
                onClick={openMenuSideBar}
              />
              <img
                className={styles.openParcelIcon}
                alt=""
                src="/open-parcel@2x.png"
              />
              <b className={styles.spcs}>{`SPCS    `}</b>
            </div>
            <div className={styles.navLinksWrapper}>
              <div className={styles.navLinks}>
                <Link className={styles.home} to="/">
                  Home
                </Link>
                <Link className={styles.home} to="/about-page-main">
                  About us
                </Link>
                <Link className={styles.home} to="/contact-page-main">
                  Contact us
                </Link>
                <Link
                  className={styles.home}
                  to="/book-a-packet-shipping-calculator"
                >
                  Shipping Calculator
                </Link>
                <Link className={styles.trackYourShipment} to="/track-shipment">
                  Track Your Shipment
                </Link>
              </div>
            </div>
            <div className={styles.actions}>
              <Link className={styles.logoutParent} to="/sign-in-page">
                <div className={styles.logout}>Logout</div>
                <img
                  className={styles.logoutIcon}
                  alt=""
                  src="/logout@2x.png"
                />
              </Link>
              <button className={styles.menu} onClick={openMenuBar} />
            </div>
          </div>
        </div>
        <div className={styles.bookAPacketParent}>
          <b className={styles.spcs}>Book a packet</b>
          <img className={styles.frameChild} alt="" src="/vector-21319.svg" />
        </div>
        <div className={styles.printLabelWrapper}>
          <b className={styles.printLabel}>Print Label</b>
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
              <div className={styles.maskGroupFrame}>
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
              <div className={styles.maskGroupFrame}>
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
              <div className={styles.maskGroupFrame}>
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
              <div className={styles.maskGroupFrame}>
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
              <div className={styles.maskGroupFrame}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group4@2x.png"
                />
              </div>
            </div>
            <div className={styles.frame427318948}>
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
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>123456789</div>
              </div>
            </div>
            <div className={styles.frame4273189461}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>Shipper Name</div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}> Isabela</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
            </div>
            <div className={styles.frame427318950}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Consignee</p>
                  <p className={styles.row}> Name</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}> Isabela</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Isabela</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>John doe</div>
              </div>
            </div>
            <div className={styles.frame4273189462}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Booking</p>
                  <p className={styles.row}>date</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
            </div>
            <div className={styles.frame4273189481}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>{`Weight `}</p>
                  <p className={styles.row}>(kg)</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>1kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>2kg</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>3kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>6kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>8kg</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>5kg</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>6kg</div>
              </div>
            </div>
            <div className={styles.frame427318949}>
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
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>4</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>7</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>3</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>7</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>2</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>1</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>1</div>
              </div>
            </div>
            <div className={styles.frame4273189463}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Destination</p>
                  <p className={styles.row}>Country</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>USA</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Uk</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>USA</div>
              </div>
            </div>
            <div className={styles.frame4273189464}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>City</p>
                  <p className={styles.row}>Name</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>City</div>
              </div>
            </div>
            <div className={styles.frame4273189491}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Value</p>
                  <p className={styles.row}>$</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>100$</div>
              </div>
            </div>
            <div className={styles.frame427318952}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Shipping</p>
                  <p className={styles.row}>Status</p>
                </div>
              </div>
              <div className={styles.frame427318952Inner}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild} />
                  <div className={styles.bookingCreated}>Booking Created</div>
                  <div className={styles.instanceItem} />
                </div>
              </div>
              <div className={styles.frame427318952Child}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild} />
                  <div className={styles.bookingCreated}>Booking Created</div>
                  <div className={styles.instanceItem} />
                </div>
              </div>
              <div className={styles.frame427318952Inner1}>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.firstMilePicked}>
                    First Mile Picked Up
                  </div>
                  <div className={styles.instanceChild1} />
                </div>
              </div>
              <div className={styles.frame427318952Child}>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.firstMilePicked}>
                    First Mile Picked Up
                  </div>
                  <div className={styles.instanceChild1} />
                </div>
              </div>
              <div className={styles.frame427318952Inner1}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild4} />
                  <div className={styles.shipped}>Shipped</div>
                  <div className={styles.instanceChild5} />
                </div>
              </div>
              <div className={styles.frame427318952Child}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild4} />
                  <div className={styles.shipped}>Shipped</div>
                  <div className={styles.instanceChild5} />
                </div>
              </div>
              <div className={styles.frame427318952Inner1}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild8} />
                  <div className={styles.arrivedAtDestination}>
                    {" "}
                    Arrived at Destination
                  </div>
                  <div className={styles.instanceChild9} />
                </div>
              </div>
              <div className={styles.frame427318952Child}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild8} />
                  <div className={styles.arrivedAtDestination}>
                    {" "}
                    Arrived at Destination
                  </div>
                  <div className={styles.instanceChild9} />
                </div>
              </div>
              <div className={styles.frame427318952Inner1}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild12} />
                  <div className={styles.shipped}>Deliverd</div>
                  <div className={styles.instanceChild13} />
                </div>
              </div>
              <div className={styles.frame427318952Child}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild12} />
                  <div className={styles.shipped}>Deliverd</div>
                  <div className={styles.instanceChild13} />
                </div>
              </div>
            </div>
            <div className={styles.frame4273189465}>
              <div className={styles.barcodeWrapper}>
                <div className={styles.select}>
                  <p className={styles.row}>Packet</p>
                  <p className={styles.row}>Description</p>
                </div>
              </div>
              <div className={styles.unAssignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.assignedWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.unassignedWrapper}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent7}>
            <div className={styles.groupChild} />
            <div className={styles.maskGroupParent}>
              <div className={styles.maskGroup}>
                <div className={styles.spcs1}>{`SPCS `}</div>
                <div className={styles.maskGroupChild} />
              </div>
              <b className={styles.spcs2}>{`SPCS    `}</b>
            </div>
            <div className={styles.spcsParent}>
              <div className={styles.spcs3}>SPCS</div>
              <div className={styles.assignedParcelToWrapper}>
                <div className={styles.assignedParcelTo}>
                  Assigned Parcel To
                </div>
              </div>
              <div className={styles.khi123456789Wrapper}>
                <div className={styles.khi123456789}> KHI 123456789</div>
              </div>
              <div className={styles.bookingCreatedParent}>
                <div className={styles.bookingCreated2}>Booking Created</div>
                <div className={styles.statusContainer}>
                  <div className={styles.status2}>Status</div>
                </div>
              </div>
              <div className={styles.groupParent}>
                <div className={styles.groupContainer}>
                  <div className={styles.groupWrapper}>
                    <div className={styles.shippingFromParent}>
                      <div className={styles.shippingFrom}>Shipping From</div>
                      <div className={styles.nameJohnContainer}>
                        <span className={styles.nameJohnContainer1}>
                          <p className={styles.row}>
                            <span className={styles.email}>Name</span>
                            <span> : John doe</span>
                          </p>
                          <p className={styles.row}>
                            <span className={styles.email}>{`Email `}</span>
                            <span>: Johndoe54@gmail.com</span>
                          </p>
                          <p className={styles.row}>
                            <span className={styles.parcelDescription}>
                              Country
                            </span>
                            <span className={styles.b}> : Uk</span>
                          </p>
                          <p className={styles.row}>
                            <span className={styles.email}>{`City `}</span>
                            <span>: London</span>
                          </p>
                          <p className={styles.row}>
                            <span className={styles.email}>State</span>
                            <span> : England</span>
                          </p>
                          <p className={styles.row}>
                            <span className={styles.email}>Address</span>
                            <span> : 123#,Street/2</span>
                          </p>
                          <p className={styles.row}>
                            <span className={styles.email}>Phone1</span>
                            <span> : +92 316 8954213</span>
                          </p>
                          <p className={styles.row}>
                            <span className={styles.email}>Phone2</span>
                            <span> : +92 316 8954213</span>
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.consigneeToParent}>
                    <div className={styles.consigneeTo}>Consignee To</div>
                    <div className={styles.nameIsabelaContainer}>
                      <span className={styles.nameJohnContainer1}>
                        <p className={styles.row}>
                          <span className={styles.email}>Name</span>
                          <span> : Isabela doe</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>Email</span>
                          <span> : Isabela214@gmail.com</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.parcelDescription}>
                            Country
                          </span>
                          <span className={styles.b}> : USA</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>City</span>
                          <b className={styles.b}>{` `}</b>
                          <span>: Los Angeles</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>State</span>
                          <span> : California</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>Address</span>
                          <span> : 123#,Street/1</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>Phone1</span>
                          <span> : +2 1234 245 31</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>Phone2</span>
                          <span> : +1 1234 245 21</span>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className={styles.parcelDescriptionFashionKParent}>
                    <div className={styles.parcelDescriptionContainer}>
                      <span className={styles.nameJohnContainer1}>
                        <p className={styles.row}>
                          <span className={styles.parcelDescription}>
                            Parcel Description
                          </span>
                          <span className={styles.b}> : Fashion Kit</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>Qty</span>
                          <span> : 2 pieces</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>Weight</span>
                          <span> : 0.5kg</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.parcelDescription}>
                            Dimensions
                          </span>
                          <span className={styles.b}> : 2x2x2</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.parcelDescription}>
                            volumetric Weight
                          </span>
                          <span className={styles.b}> : 3</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>Value</span>
                          <span> : $2500</span>
                        </p>
                        <p className={styles.row}>
                          <span className={styles.email}>Booking Date</span>
                          <span>{` : 2023-6-8      `}</span>
                        </p>
                      </span>
                    </div>
                    <div className={styles.parcelDetalisWrapper}>
                      <div className={styles.consigneeTo}>Parcel Detalis</div>
                    </div>
                  </div>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="/vector-2341.svg"
                  />
                  <img
                    className={styles.groupInner}
                    alt=""
                    src="/vector-2351.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-236.svg"
                />
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="/vector-236.svg"
                />
              </div>
              <div className={styles.barcodeParent}>
                <img
                  className={styles.barcodeIcon}
                  alt=""
                  src="/barcode4@2x.png"
                />
                <img
                  className={styles.barcodeIcon1}
                  alt=""
                  src="/barcode5@2x.png"
                />
                <img
                  className={styles.barcodeIcon2}
                  alt=""
                  src="/barcode6@2x.png"
                />
                <img
                  className={styles.barcodeIcon3}
                  alt=""
                  src="/barcode7@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.checkWrapper} onClick={openChooseDrawer}>
            <b className={styles.spcs}>Check</b>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.contentInner}>
            <button className={styles.downloadLabelWrapper}>
              <b className={styles.apply}>Download label</b>
            </button>
          </div>
        </div>
        <div className={styles.content3}>
          <div className={styles.frameContainer}>
            <Link
              className={styles.backWrapper}
              to="/book-a-packet-pay-charges"
            >
              <b className={styles.spcs}>Back</b>
            </Link>
            <Link className={styles.newBookingWrapper} to="/book-a-packet-main">
              <b className={styles.spcs}>New Booking</b>
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameParent1}>
            <div className={styles.legalTermsConditionsPrivaWrapper}>
              <div className={styles.legalTermsContainer}>
                <p className={styles.legal}>Legal</p>
                <p className={styles.termsConditions}>{`Terms & Conditions`}</p>
                <p className={styles.termsConditions}>Privacy Policy</p>
                <p className={styles.termsConditions}>Cookie Policy</p>
                <p className={styles.termsConditions}>Disclaimer</p>
              </div>
            </div>
            <div className={styles.informationShippingGuidelineParent}>
              <div className={styles.informationShippingGuidelineContainer}>
                <p className={styles.row}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
              <img
                className={styles.maskGroupIcon11}
                alt=""
                src="/mask-group11@2x.png"
              />
            </div>
          </div>
          <div className={styles.spcsAllRightsReservedWrapper}>
            <div className={styles.scanBarcode}>
              © 2023 SPCS. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      {isMenuSideBarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMenuSideBar}
        >
          <MenuSideBar onClose={closeMenuSideBar} />
        </PortalDrawer>
      )}
      {isMenuBarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMenuBar}
        >
          <MenuBar1 onClose={closeMenuBar} />
        </PortalDrawer>
      )}
      {isChooseDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeChooseDrawer}
        >
          <ChooseDrawer onClose={closeChooseDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default BookAPacketPrintShippingL;
