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
import styles from "./update-profile-main.module.css";

const UpdateProfileMain: FunctionComponent = () => {
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

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.updateProfileMain}>
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
        <div className={styles.updateProfileParent}>
          <b className={styles.spcs}>Update Profile</b>
          <img className={styles.frameChild} alt="" src="/vector-21318.svg" />
        </div>
        <div className={styles.adminProfileWrapper}>
          <b className={styles.adminProfile}>Admin Profile</b>
        </div>
        <div className={styles.totalUsers3TotalAdminParent}>
          <div className={styles.totalUsers}>
            Total Users : 3 Total Admin : 1
          </div>
          <div className={styles.frameParent}>
            <a className={styles.allUsersWrapper}>
              <b className={styles.spcs}>All Users</b>
            </a>
            <Link className={styles.addUserWrapper} to="/user-add-user">
              <b className={styles.spcs}>Add User</b>
            </Link>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.frameItem} alt="" src="/ellipse-27@2x.png" />
          <div className={styles.frameGroup}>
            <div className={styles.hasnainKhanParent}>
              <div className={styles.hasnainKhan}>Hasnain khan</div>
              <div className={styles.spcsAllRights}>@hasnainkhan213</div>
              <div className={styles.hasnainkhangm9886gmailcomParent}>
                <div className={styles.hasnainkhangm9886gmailcom}>
                  Hasnainkhangm9886@gmail.com
                </div>
                <div className={styles.administrator}>- Administrator</div>
              </div>
              <div className={styles.helloIAm}>
                Hello, I am Hasnain Khan and I am a Designer
              </div>
            </div>
            <div
              className={styles.rectangleParent}
              onClick={onGroupContainerClick}
            >
              <div className={styles.groupChild} data-scroll-to="rectangle" />
              <div className={styles.edit}>Edit</div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.formParent}>
            <div className={styles.formParentInner}>
              <div className={styles.frameContainer}>
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
                <div className={styles.frameDiv}>
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
                <div className={styles.frameDiv}>
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
                  <div className={styles.frameDiv}>
                    <div className={styles.frameWrapper3}>
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
            <div className={styles.importantNoteForAdministratParent}>
              <div className={styles.importantNoteForContainer}>
                <b>Important Note For Administrator :</b>
                <span className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus..
                </span>
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
            <div className={styles.frameDiv}>
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
            <div className={styles.frameWrapper5}>
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
          <div className={styles.contentInner}>
            <button className={styles.refreshWrapper}>
              <b className={styles.refresh}>Back</b>
            </button>
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

export default UpdateProfileMain;
