import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import styles from "./member-view-member.module.css";

const MemberViewMember: FunctionComponent = () => {
  return (
    <div className={styles.memberViewMember}>
      <Header logout="/logout@2x.png" />
      <div className={styles.memberParent}>
        <b className={styles.member}>Member</b>
        <img className={styles.frameChild} alt="" src="/vector-213.svg" />
      </div>
      <div className={styles.adminProfileWrapper}>
        <b className={styles.adminProfile}>Admin Profile</b>
      </div>
      <div className={styles.totalUsers3TotalAdminParent}>
        <div className={styles.totalUsers}>Total Users : 3 Total Admin : 1</div>
        <div className={styles.frameParent}>
          <Link
            className={styles.membersWrapper}
            to="/member-view-all-members-main"
          >
            <b className={styles.member}>Members</b>
          </Link>
          <Link className={styles.membersWrapper} to="/member-add-member">
            <b className={styles.member}>Add New</b>
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
          <div className={styles.frameContainer}>
            <a className={styles.deleteWrapper}>
              <b className={styles.member}>Delete</b>
            </a>
            <a className={styles.deleteWrapper}>
              <b className={styles.member}>Edit</b>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <button className={styles.backWrapper}>
            <b className={styles.back}>Back</b>
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.frameDiv}>
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

export default MemberViewMember;
