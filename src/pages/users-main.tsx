import { FunctionComponent, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import MenuSideBar from "../components/menu-side-bar";
import PortalDrawer from "../components/portal-drawer";
import MenuBar1 from "../components/menu-bar1";
import ChooseDrawer from "../components/choose-drawer";
import styles from "./users-main.module.css";

const UsersMain: FunctionComponent = () => {
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
      <div className={styles.usersMain}>
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
                  src="/logout1@2x.png"
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
        <div className={styles.allUsersWrapper}>
          <b className={styles.allUsers}>All Users</b>
        </div>
        <div className={styles.totalUsers3TotalAdminParent}>
          <div className={styles.totalUsers}>
            Total Users : 3 Total Admin : 1
          </div>
          <div className={styles.frameParent}>
            <a className={styles.allUsersContainer}>
              <b className={styles.spcs}>All Users</b>
            </a>
            <Link className={styles.addUserWrapper} to="/user-add-user">
              <b className={styles.spcs}>Add User</b>
            </Link>
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
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupContainer}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupContainer}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper1}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper2}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper1}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper2}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper1}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper2}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper1}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group14@2x.png"
                />
              </div>
            </div>
            <div className={styles.members1}>
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
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Sarah</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Dall</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>City</div>
              </div>
            </div>
            <div className={styles.members2}>
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
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>staff@sarahgt1</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>staff@Stevedam</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>staff@Dall_bill3</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>100$</div>
              </div>
            </div>
            <div className={styles.members3}>
              <div className={styles.cityWrapper}>
                <div className={styles.select}>Email</div>
              </div>
              <div className={styles.cityContainer}>
                <div className={styles.select}>Adminhasnainkhan@gmail.com</div>
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
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>sarah1@gmail.com</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>stevedam@gmail.com</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>{`dall-@gmail.com `}</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
            </div>
            <div className={styles.members4}>
              <div className={styles.cityWrapper}>
                <div className={styles.select}>Role</div>
              </div>
              <div className={styles.cityContainer}>
                <div className={styles.select}>Admin</div>
              </div>
              <div className={styles.cityFrame}>
                <div className={styles.select}>User1</div>
              </div>
              <div className={styles.cityContainer}>
                <div className={styles.select}>User2</div>
              </div>
              <div className={styles.cityFrame}>
                <div className={styles.select}>User3</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Staff</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>Staff</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Staff</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>Delivered</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Delivered</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>Delivered</div>
              </div>
              <div className={styles.fashionKitContainer}>
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
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.deliveredWrapper}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>2023-09-12</div>
              </div>
            </div>
            <div className={styles.members6}>
              <div className={styles.selectWrapper}>
                <div className={styles.select}>Actions</div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper1}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper2}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper1}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper2}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper1}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper2}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper1}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye3@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit4@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete3@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.openInWindowsWrapper}
            onClick={openChooseDrawer}
          >
            <b className={styles.spcs}>Check</b>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.contentInner}>
            <button className={styles.backWrapper}>
              <b className={styles.back}>Back</b>
            </button>
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
            <div className={styles.informationShippingGuidelineParent}>
              <div className={styles.informationShippingGuidelineContainer}>
                <p className={styles.information}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
              <img
                className={styles.maskGroupIcon11}
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

export default UsersMain;
