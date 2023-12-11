import { FunctionComponent, useState, useCallback } from "react";
import {
  TextField,
  Icon,
  Autocomplete,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./parcels-all-parcels.module.css";

const ParcelsAllParcels: FunctionComponent = () => {
  const [dateFromDateTimePickerValue, setDateFromDateTimePickerValue] =
    useState<string | null>(null);
  const [dateFromDateTimePicker1Value, setDateFromDateTimePicker1Value] =
    useState<string | null>(null);
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.parcelsAllParcels}>
          <Header logout="/logout@2x.png" />
          <div className={styles.membersParent}>
            <b className={styles.members}>Members</b>
            <img className={styles.frameChild} alt="" src="/vector-2133.svg" />
          </div>
          <div className={styles.allParcelsDetailsWrapper}>
            <b className={styles.allParcelsDetails}>All Parcels Details</b>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.dateFromParent}>
                        <div className={styles.dateFrom}>Date From</div>
                        <div className={styles.dateFromWrapper}>
                          <div className={styles.frameItem}>
                            <DatePicker
                              value={dateFromDateTimePickerValue}
                              onChange={(newValue: any) => {
                                setDateFromDateTimePickerValue(newValue);
                              }}
                              slotProps={{
                                textField: {
                                  variant: "outlined",
                                  size: "small",
                                  fullWidth: true,
                                  required: true,
                                  color: "primary",
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.dateFromParent}>
                        <div className={styles.dateFrom}>Date From</div>
                        <div className={styles.dateFromWrapper}>
                          <div className={styles.frameItem}>
                            <DatePicker
                              value={dateFromDateTimePicker1Value}
                              onChange={(newValue: any) => {
                                setDateFromDateTimePicker1Value(newValue);
                              }}
                              slotProps={{
                                textField: {
                                  variant: "outlined",
                                  size: "small",
                                  fullWidth: true,
                                  required: true,
                                  color: "primary",
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.frameWrapper4}>
                        <div className={styles.countryParent}>
                          <div className={styles.country}>Country</div>
                          <div className={styles.dateFromWrapper}>
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
                    <div className={styles.frameWrapper3}>
                      <div className={styles.frameWrapper4}>
                        <div className={styles.countryParent}>
                          <div className={styles.country}>City</div>
                          <div className={styles.dateFromWrapper}>
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
            <div className={styles.frameWrapper9}>
              <div className={styles.frameWrapper10}>
                <div className={styles.frameWrapper11}>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameWrapper12}>
                      <div className={styles.frameWrapper4}>
                        <div className={styles.countryParent}>
                          <div className={styles.country}>Status</div>
                          <div className={styles.dateFromWrapper}>
                            <Autocomplete
                              className={styles.frameItem}
                              size="small"
                              disablePortal
                              options={[
                                "Booking Created",
                                "First Mile Picked Up",
                                "Shipped",
                                "Arrived at Destination",
                                "Delliverd",
                              ]}
                              renderInput={(params: any) => (
                                <TextField
                                  {...params}
                                  color="primary"
                                  label=""
                                  variant="outlined"
                                  placeholder="Select Status"
                                  helperText=""
                                />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper15}>
                      <div className={styles.dateFromParent}>
                        <div className={styles.dateFrom}>Consignee Name</div>
                        <div className={styles.dateFromWrapper}>
                          <TextField
                            className={styles.frameTextfield}
                            color="primary"
                            size="small"
                            placeholder="Consignee Name"
                            variant="outlined"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameWrapper17}>
                <button className={styles.applyWrapper}>
                  <b className={styles.apply}>Apply</b>
                </button>
              </div>
              <div className={styles.frameWrapper17}>
                <button className={styles.applyWrapper}>
                  <b className={styles.apply}>Refresh</b>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.frame427318946Parent}>
              <div className={styles.frame427318946}>
                <div className={styles.selectWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>Select</p>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper8}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frame427318948}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}> Barcode</p>
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
              <div className={styles.frameWrapper11}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>Shipper Name</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Steve</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>John doe</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Isabela</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}> Isabela</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Steve</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Isabela</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>John doe</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Steve</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Isabela</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>John doe</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>John doe</div>
                </div>
              </div>
              <div className={styles.frameWrapper11}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>{`Consignee `}</p>
                    <p className={styles.consignee}>Name</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Steve</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>John doe</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Isabela</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}> Isabela</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Steve</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Isabela</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>John doe</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Steve</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Isabela</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>John doe</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>John doe</div>
                </div>
              </div>
              <div className={styles.frame4273189462}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>Booking</p>
                    <p className={styles.consignee}>date</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
              </div>
              <div className={styles.frame4273189481}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>{`Weight `}</p>
                    <p className={styles.consignee}>(kg)</p>
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
              <div className={styles.frame427318949}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>Volumetric</p>
                    <p className={styles.consignee}>Weight</p>
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
              <div className={styles.frame4273189463}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>Destination</p>
                    <p className={styles.consignee}>Country</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Uk</div>
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
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Uk</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Uk</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>USA</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Uk</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>USA</div>
                </div>
              </div>
              <div className={styles.frame4273189464}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>City</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>London</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Los Angeles</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Los Angeles</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Los Angeles</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Los Angeles</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>London</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>London</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>Los Angeles</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>Los Angeles</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>London</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>City</div>
                </div>
              </div>
              <div className={styles.frame4273189491}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>Value</p>
                  </div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.unAssignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.assignedWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.unassignedWrapper6}>
                  <div className={styles.select}>100$</div>
                </div>
              </div>
              <div className={styles.frame427318952}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>Status</p>
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
                <div className={styles.frame427318952Inner}>
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
                <div className={styles.frame427318952Inner}>
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
                <div className={styles.frame427318952Inner}>
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
                <div className={styles.frame427318952Inner}>
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
                <div className={styles.actionsWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>Actions</p>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper8}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye2@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit2@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete2@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frame4273189466}>
                <div className={styles.barcodeWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>Description</p>
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
              <div className={styles.frame4273189467}>
                <div className={styles.printLabelWrapper}>
                  <div className={styles.select}>
                    <p className={styles.consignee}>{`Print `}</p>
                    <p className={styles.consignee}>Label</p>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
                <div className={styles.maskGroupWrapper8}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.groupChild} />
                    <div className={styles.printLabel1}>Print Label</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.openInWindowsWrapper}
              onClick={openCSideDrawer}
            >
              <b className={styles.members}>Check</b>
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
            <div className={styles.frameParent4}>
              <div className={styles.legalTermsConditionsPrivaWrapper}>
                <div className={styles.legalTermsContainer}>
                  <p className={styles.legal}>Legal</p>
                  <p
                    className={styles.termsConditions}
                  >{`Terms & Conditions`}</p>
                  <p className={styles.termsConditions}>Privacy Policy</p>
                  <p className={styles.termsConditions}>Cookie Policy</p>
                  <p className={styles.termsConditions}>Disclaimer</p>
                </div>
              </div>
              <div className={styles.informationShippingGuidelineWrapper}>
                <div className={styles.informationShippingGuidelineContainer}>
                  <p className={styles.consignee}>Information</p>
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
    </LocalizationProvider>
  );
};

export default ParcelsAllParcels;
