import { FunctionComponent, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import CSideDrawer from "../components/c-side-drawer";
import PortalDrawer from "../components/portal-drawer";
import styles from "./branches-view-all-branches-mai.module.css";

const BranchesViewAllBranchesMai: FunctionComponent = () => {
  const [isCSideDrawerOpen, setCSideDrawerOpen] = useState(false);

  const openCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(true);
  }, []);

  const closeCSideDrawer = useCallback(() => {
    setCSideDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.branchesViewAllBranchesMai}>
        <Header logout="/logout1@2x.png" />
        <div className={styles.viewAllBranchesParent}>
          <b className={styles.viewAllBranches}>View All Branches</b>
          <img className={styles.frameChild} alt="" src="/vector-21315.svg" />
        </div>
        <div className={styles.viewAllBranchesWrapper}>
          <b className={styles.viewAllBranches1}>View All Branches</b>
        </div>
        <div className={styles.totalBranches3Parent}>
          <div className={styles.totalBranches3}> Total Branches: 3</div>
          <div className={styles.frameWrapper}>
            <Link className={styles.addNewWrapper} to="/branches-add-branch">
              <b className={styles.viewAllBranches}>Add New</b>
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
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.maskGroupContainer}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper1}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper1}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper1}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
              <div className={styles.maskGroupWrapper1}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group7@2x.png"
                />
              </div>
            </div>
            <div className={styles.members1}>
              <div className={styles.cityWrapper}>
                <div className={styles.select}>Branch Name</div>
              </div>
              <div className={styles.cityContainer}>
                <div className={styles.select}>Lorem Ipsum</div>
              </div>
              <div className={styles.cityFrame}>
                <div className={styles.select}>Lorem Ipsum</div>
              </div>
              <div className={styles.cityContainer}>
                <div className={styles.select}>Lorem Ipsum</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>123456789</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>City</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>City</div>
              </div>
            </div>
            <div className={styles.members2}>
              <div className={styles.cityWrapper}>
                <div className={styles.select}>Address/Country</div>
              </div>
              <div className={styles.cityContainer}>
                <div className={styles.select}>UAE , Dubai</div>
              </div>
              <div className={styles.cityFrame}>
                <div className={styles.select}>USA , California</div>
              </div>
              <div className={styles.cityContainer}>
                <div className={styles.select}>UK , London</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>Steve</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Sarah</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>John Doe</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Bill Gates</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>100$</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>100$</div>
              </div>
            </div>
            <div className={styles.members2}>
              <div className={styles.cityWrapper}>
                <div className={styles.select}>{`City/State/Zip `}</div>
              </div>
              <div className={styles.cityContainer}>
                <div className={styles.select}>UAE, Dubai 0000</div>
              </div>
              <div className={styles.cityFrame}>
                <div className={styles.select}>California, vermont, 66-88</div>
              </div>
              <div className={styles.cityContainer}>
                <div className={styles.select}>London, England, 56225</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>wall bert</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>zerox khan</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>danil rock</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>roman reigns</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>Clothes</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Fashion Kit</div>
              </div>
            </div>
            <div className={styles.members4}>
              <div className={styles.statusWrapper}>
                <div className={styles.select}>Phone</div>
              </div>
              <div className={styles.bookingCreatedWrapper}>
                <div className={styles.select}>+92 316 8954213</div>
              </div>
              <div className={styles.bookingCreatedContainer}>
                <div className={styles.select}>+1 484 2625 2655</div>
              </div>
              <div className={styles.bookingCreatedWrapper}>
                <div className={styles.select}>+44 2416 2616 56</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>Cancel</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Pending</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>Received</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Cancel</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>Delivered</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Delivered</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>Delivered</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>Delivered</div>
              </div>
            </div>
            <div className={styles.members5}>
              <div className={styles.cityWrapper}>
                <div className={styles.select}>Email</div>
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
              <div className={styles.clothesFrame}>
                <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>2023-09-12 , 1: 00 pm</div>
              </div>
              <div className={styles.clothesFrame}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.fashionKitContainer}>
                <div className={styles.select}>2023-09-12</div>
              </div>
              <div className={styles.clothesFrame}>
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
                  <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupContainer}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper}>
                <div className={styles.eyeParent}>
                  <img className={styles.eyeIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper1}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper1}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper1}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.maskGroupWrapper1}>
                <div className={styles.eyeParent}>
                  <img className={styles.editIcon} alt="" src="/eye1@2x.png" />
                  <img className={styles.editIcon} alt="" src="/edit1@2x.png" />
                  <img
                    className={styles.editIcon}
                    alt=""
                    src="/delete1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.openInWindowsWrapper}
            onClick={openCSideDrawer}
          >
            <b className={styles.viewAllBranches}>Check</b>
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
          <div className={styles.frameParent}>
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

export default BranchesViewAllBranchesMai;
