import { FunctionComponent, useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import styles from "./user-add-user.module.css";

const UserAddUser: FunctionComponent = () => {
  const [isMenuSideBarOpen, setMenuSideBarOpen] = useState(false);
  const [isMenuBarOpen, setMenuBarOpen] = useState(false);

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

  return (
    <>
      <div className={styles.userAddUser}>
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
        <div className={styles.usersParent}>
          <b className={styles.spcs}>Users</b>
          <img className={styles.frameChild} alt="" src="/vector-21317.svg" />
        </div>
        <div className={styles.addUsersWrapper}>
          <b className={styles.addUsers}>Add Users</b>
        </div>
        <div className={styles.totalUsers3TotalAdminParent}>
          <div className={styles.totalUsers}>
            Total Users : 3 Total Admin : 1
          </div>
          <div className={styles.frameParent}>
            <a className={styles.allUsersWrapper}>
              <b className={styles.spcs}>All Users</b>
            </a>
            <a className={styles.allUsersWrapper}>
              <b className={styles.spcs}>Add User</b>
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.formParent}>
            <div className={styles.formParentInner}>
              <div className={styles.frameGroup}>
                <div className={styles.firstNameFeildParent}>
                  <div className={styles.firstNameFeild}>
                    <div className={styles.firstNameFeildWrapper}>
                      <div className={styles.firstNameFeild1}>
                        <div className={styles.firstName}>First Name</div>
                        <div className={styles.frame}>
                          <TextField
                            className={styles.uploadPic}
                            color="primary"
                            size="small"
                            placeholder="First Name"
                            required={true}
                            variant="outlined"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.lastNameParent}>
                      <div className={styles.lastName}>Last Name</div>
                      <div className={styles.frame}>
                        <TextField
                          className={styles.uploadPic}
                          color="primary"
                          size="small"
                          placeholder="Last Name"
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.lastNameParent}>
                    <div className={styles.lastName}>User name</div>
                    <div className={styles.frame}>
                      <TextField
                        className={styles.uploadPic}
                        color="primary"
                        size="small"
                        placeholder="@username"
                        variant="outlined"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.lastNameParent}>
                    <div className={styles.lastName}>Email Address</div>
                    <div className={styles.frame}>
                      <TextField
                        className={styles.uploadPic}
                        color="primary"
                        size="small"
                        placeholder="Email"
                        variant="outlined"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.roleParent}>
                  <div className={styles.role}> Role</div>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.roleWrapper}>
                        <Autocomplete
                          className={styles.role1}
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
            <div className={styles.loremIpsumDolorSitAmetConParent}>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus..
              </div>
              <div className={styles.addParent}>
                <div className={styles.add}>
                  <b className={styles.spcs}>Add</b>
                </div>
                <button className={styles.refreshWrapper}>
                  <b className={styles.refresh}>Refresh</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.frameParent1}>
            <div className={styles.frameContainer}>
              <div className={styles.lastNameParent}>
                <div className={styles.lastName}>Upload picture</div>
                <div className={styles.frame}>
                  <TextField
                    className={styles.uploadPic}
                    color="primary"
                    size="small"
                    placeholder="upload pic"
                    variant="outlined"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper4}>
              <div className={styles.frameParent2}>
                <button className={styles.refreshWrapper}>
                  <b className={styles.refresh}>Browse</b>
                </button>
                <button className={styles.refreshWrapper}>
                  <b className={styles.refresh}>Upload</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.frameParent3}>
            <Link className={styles.backWrapper} to="/update-profile-main">
              <b className={styles.spcs}>Back</b>
            </Link>
            <a className={styles.allUsersWrapper}>
              <b className={styles.spcs}>Check</b>
            </a>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameParent4}>
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
                <p className={styles.information}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group10@2x.png"
              />
            </div>
          </div>
          <div className={styles.spcsAllRightsReservedWrapper}>
            <div className={styles.spcsAllRights}>
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
    </>
  );
};

export default UserAddUser;
