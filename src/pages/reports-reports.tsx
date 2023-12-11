import { FunctionComponent, useState, useCallback } from "react";
import { TextField, Icon, Autocomplete } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./reports-reports.module.css";

const ReportsReports: FunctionComponent = () => {
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
        <div className={styles.reportsReports}>
          <Header logout="/logout1@2x.png" />
          <div className={styles.reportParent}>
            <b className={styles.report}>Report</b>
            <img className={styles.frameChild} alt="" src="/vector-21316.svg" />
          </div>
          <div className={styles.seeAllParcelsReportsWrapper}>
            <b className={styles.seeAllParcels}>See all parcels Reports</b>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameDiv}>
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
                  <div className={styles.dateToParent}>
                    <div className={styles.dateFrom}>Date To</div>
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
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.statusParent}>
                        <div className={styles.status}>Status</div>
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
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper4}>
                <button className={styles.generateReportWrapper}>
                  <b className={styles.generateReport}>Generate Report</b>
                </button>
              </div>
              <div className={styles.frameWrapper4}>
                <button className={styles.applyWrapper}>
                  <b className={styles.generateReport}>Apply</b>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.membersParent}>
              <div className={styles.members}>
                <div className={styles.selectWrapper}>
                  <div className={styles.select}>Select</div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
              </div>
              <div className={styles.members1}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Barcode</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>123456789</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>City</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>City</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>City</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>City</div>
                </div>
              </div>
              <div className={styles.members2}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Shipper Name</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>John Doe</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Gill Robert</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Isabella</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Steve</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Sarah</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>John Doe</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Bill Gates</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>100$</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>100$</div>
                </div>
              </div>
              <div className={styles.members3}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Consignee Name</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Richard</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>sonta gill</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>jabil</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>wall bert</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>zerox khan</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>danil rock</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>roman reigns</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>Clothes</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>Fashion Kit</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>Clothes</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>Fashion Kit</div>
                </div>
              </div>
              <div className={styles.members4}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Status</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Received</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Received</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Received</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Received</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Received</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Received</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Recived</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>Delivered</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>Delivered</div>
                </div>
              </div>
              <div className={styles.members5}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Date</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.deliveredWrapper}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
                <div className={styles.deliveredContainer}>
                  <div className={styles.select}>2023-09-12</div>
                </div>
              </div>
              <div className={styles.members6}>
                <div className={styles.selectWrapper}>
                  <div className={styles.select}>Actions</div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <div className={styles.eyeParent}>
                    <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/edit1@2x.png"
                    />
                    <img
                      className={styles.eyeIcon}
                      alt=""
                      src="/delete1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.checkWrapper} onClick={openCSideDrawer}>
              <b className={styles.report}>Check</b>
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.contentInner}>
              <button className={styles.backWrapper}>
                <b className={styles.generateReport}>Back</b>
              </button>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.frameParent2}>
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
                  <p className={styles.information}>Information</p>
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

export default ReportsReports;
