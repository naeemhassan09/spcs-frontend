import { FunctionComponent, useState, useCallback } from "react";
import { TextField, Icon, Autocomplete } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Link } from "react-router-dom";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import AdminDrawer from "../components/admin-drawer";
import styles from "./member-view-all-members-main.module.css";

const MemberViewAllMembersMain: FunctionComponent = () => {
  const [dateFromDateTimePickerValue, setDateFromDateTimePickerValue] =
    useState<string | null>(null);
  const [dateFromDateTimePicker1Value, setDateFromDateTimePicker1Value] =
    useState<string | null>(null);
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);
  const [isAdminDrawerOpen, setAdminDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  const openAdminDrawer = useCallback(() => {
    setAdminDrawerOpen(true);
  }, []);

  const closeAdminDrawer = useCallback(() => {
    setAdminDrawerOpen(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.memberViewAllMembersMain}>
          <Header logout="/logout@2x.png" />
          <div className={styles.membersParent}>
            <b className={styles.members}>Members</b>
            <img className={styles.frameChild} alt="" src="/vector-2133.svg" />
          </div>
          <div className={styles.viewAllMembersWrapper}>
            <b className={styles.viewAllMembers}>View All Members</b>
          </div>
          <div className={styles.totalUsers3TotalAdminParent}>
            <div className={styles.totalUsers}>
              Total Users : 3 Total Admin : 1
            </div>
            <div className={styles.frameParent}>
              <a className={styles.selectAllWrapper}>
                <b className={styles.members}>Select All</b>
              </a>
              <Link
                className={styles.addMembersWrapper}
                to="/member-add-member"
              >
                <b className={styles.members}>Add Members</b>
              </Link>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
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
                  <div className={styles.frameParent1}>
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
                    <div className={styles.roleParent}>
                      <div className={styles.role}> Role</div>
                      <div className={styles.frameWrapper6}>
                        <div className={styles.frameWrapper7}>
                          <div className={styles.roleWrapper}>
                            <Autocomplete
                              className={styles.frameItem}
                              size="small"
                              disablePortal
                              options={["Admin", "Staff", "Worker"]}
                              renderInput={(params: any) => (
                                <TextField
                                  {...params}
                                  color="primary"
                                  label=""
                                  variant="outlined"
                                  placeholder=""
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
            <div className={styles.frameWrapper8}>
              <button className={styles.applyWrapper}>
                <b className={styles.apply}>Apply</b>
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.membersGroup} onClick={openCSideDrawer}>
              <div className={styles.members1}>
                <div className={styles.selectWrapper}>
                  <div className={styles.select}>Select</div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupContainer}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.members2}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Full Name</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Hasnain khan</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>John Doe</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Maya</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Isabela</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Sarah</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Steve</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Dall</div>
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
              <div className={styles.members3}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Username</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Admin@hasnainkhan</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>staff@johndoe21</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>staff@maya4</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>staff@isabela14</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>staff@sarahgt1</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>staff@Stevedam</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>staff@Dall_bill3</div>
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
                  <div className={styles.select}>Email</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>
                    Adminhasnainkhan@gmail.com
                  </div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>johndoe21@gmail.com</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>maya@gmail.com</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>isabela@gmail.com</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>sarah1@gmail.com</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>stevedam@gmail.com</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>{`dall-@gmail.com `}</div>
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
              <div className={styles.members5}>
                <div className={styles.cityWrapper}>
                  <div className={styles.select}>Role</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Admin</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Staff</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Staff</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Staff</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Staff</div>
                </div>
                <div className={styles.cityFrame}>
                  <div className={styles.select}>Staff</div>
                </div>
                <div className={styles.cityContainer}>
                  <div className={styles.select}>Staff</div>
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
              <div className={styles.members3}>
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
              <div className={styles.members7}>
                <div className={styles.selectWrapper}>
                  <div className={styles.select}>Actions</div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <Link className={styles.eye} to="/member-view-member" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupContainer}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper5}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maskGroupWrapper6}>
                  <div className={styles.eyeParent}>
                    <img className={styles.editIcon} alt="" src="/eye@2x.png" />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/edit@2x.png"
                    />
                    <img
                      className={styles.editIcon}
                      alt=""
                      src="/delete@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.openInWindowsWrapper}
              onClick={openAdminDrawer}
            >
              <b className={styles.members}>Check</b>
            </div>
          </div>
          <div className={styles.memberViewAllMembersMainInner}>
            <div className={styles.frameParent3}>
              <a className={styles.selectAllContainer}>
                <b className={styles.members}>Select All</b>
              </a>
              <a className={styles.selectAllContainer}>
                <b className={styles.members}>Delete</b>
              </a>
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
        {isAdminDrawerOpen && (
          <PortalDrawer
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Left"
            onOutsideClick={closeAdminDrawer}
          >
            <AdminDrawer onClose={closeAdminDrawer} />
          </PortalDrawer>
        )}
      </>
    </LocalizationProvider>
  );
};

export default MemberViewAllMembersMain;
