import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Header from "../components/header";
import styles from "./dashboard-dashboard-main.module.css";

const DashboardDashboardMain: FunctionComponent = () => {
  return (
    <div className={styles.dashboardDashboardMain}>
      <Header logout="/logout@2x.png" />
      <div className={styles.adminDashboardWrapper}>
        <b className={styles.adminDashboard}>Admin Dashboard</b>
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <TextField
                className={styles.frameChild}
                color="primary"
                size="small"
                placeholder="Enter Barcode Number"
                variant="outlined"
                type="text"
              />
              <img className={styles.searchIcon} alt="" src="/search@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.selectCountryTo}>
          Select Country To See Shipment Process and Other Details
        </div>
        <div className={styles.frameGroup}>
          <TextField
            className={styles.frameItem}
            color="primary"
            size="small"
            placeholder="Enter Barcode Number"
            variant="outlined"
            type="text"
          />
          <button className={styles.refreshWrapper}>
            <b className={styles.refresh}>Refresh</b>
          </button>
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.parent}>
              <b className={styles.b}>9</b>
              <div className={styles.totalBranches}>Total Branches</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>5</b>
              <div className={styles.totalBranches}>Total Users</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>5</b>
              <div className={styles.totalBranches}>Return Shipment</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.parent}>
              <b className={styles.b}>5</b>
              <div className={styles.totalBranches}>Total Return Parcel</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>4</b>
              <div className={styles.totalBranches}>In Warehouse</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>4</b>
              <div className={styles.totalBranches}>Return to Wendor</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content3}>
        <div className={styles.frameParent2}>
          <div className={styles.frameDiv}>
            <div className={styles.parent}>
              <b className={styles.b}>9</b>
              <div className={styles.totalBranches}>In Bounded parcels</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>5</b>
              <div className={styles.totalBranches}>Out Bounded Parcels</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>5</b>
              <div className={styles.totalBranches}>{`Total Shipments `}</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.parent}>
              <b className={styles.b}>5</b>
              <div className={styles.totalBranches}>In Transit</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>4</b>
              <div className={styles.totalBranches}>{`arrived Shipment `}</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>4</b>
              <div className={styles.totalBranches}>Delivered Parcels</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.adminNotificationsWrapper}>
        <b className={styles.adminDashboard}>Admin Notifications</b>
      </div>
      <div className={styles.content4}>
        <div className={styles.frameParent5}>
          <div className={styles.spcsNotificationParent}>
            <div className={styles.spcsNotification}>SPCS Notification</div>
            <button className={styles.refreshWrapper}>
              <b className={styles.refresh}>open</b>
            </button>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.pm}>14:36pm</div>
              </div>
              <div className={styles.replyArrowParent}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.pm}>14:36pm</div>
              </div>
              <div className={styles.replyArrowGroup}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.loremIpsumDolor}>14:36pm</div>
              </div>
              <div className={styles.replyArrowGroup}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.loremIpsumDolor}>14:36pm</div>
              </div>
              <div className={styles.replyArrowGroup}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.loremIpsumDolor}>14:36pm</div>
              </div>
              <div className={styles.replyArrowGroup}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.loremIpsumDolor}>14:36pm</div>
              </div>
              <div className={styles.replyArrowParent}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.adminNotificationsWrapper}>
        <b className={styles.adminDashboard}>Admin Dashboard</b>
      </div>
      <div className={styles.content5}>
        <div className={styles.frameParent7}>
          <div className={styles.spcsNotificationParent}>
            <div className={styles.spcsNotification}>Recent Activities</div>
            <button className={styles.refreshWrapper}>
              <b className={styles.refresh}>open</b>
            </button>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.pm}>14:36pm</div>
              </div>
              <div className={styles.replyArrowParent}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.pm}>14:36pm</div>
              </div>
              <div className={styles.replyArrowGroup}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.pm}>14:36pm</div>
              </div>
              <div className={styles.replyArrowGroup}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.pm}>14:36pm</div>
              </div>
              <div className={styles.replyArrowGroup}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.pm}>14:36pm</div>
              </div>
              <div className={styles.replyArrowGroup}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <FormControlLabel
                className={styles.frameInner}
                label=""
                control={<Checkbox color="primary" />}
              />
              <div className={styles.departmentOfPackingParent}>
                <b className={styles.departmentOfPacking}>
                  Department of Packing
                </b>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </div>
              </div>
              <div className={styles.todayParent}>
                <div className={styles.loremIpsumDolor}>Today</div>
                <div className={styles.pm}>14:36pm</div>
              </div>
              <div className={styles.replyArrowGroup}>
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/reply-arrow@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/delete4@2x.png"
                />
                <img
                  className={styles.replyArrowIcon}
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.frameParent9}>
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
  );
};

export default DashboardDashboardMain;
