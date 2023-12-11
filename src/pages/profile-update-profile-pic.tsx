import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Header from "../components/header";
import styles from "./profile-update-profile-pic.module.css";

const ProfileUpdateProfilePic: FunctionComponent = () => {
  return (
    <div className={styles.profileUpdateProfilePic}>
      <Header logout="/logout@2x.png" />
      <div className={styles.profileParent}>
        <b className={styles.profile}>Profile</b>
        <img className={styles.frameChild} alt="" src="/vector-2132.svg" />
      </div>
      <div className={styles.updateProfilePictureWrapper}>
        <b className={styles.updateProfilePicture}>Update Profile PIcture</b>
      </div>
      <div className={styles.content}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.uploadProfilePictureParent}>
              <div className={styles.uploadProfilePicture}>
                Upload Profile picture
              </div>
              <div className={styles.uploadPicWrapper}>
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
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <button className={styles.browseWrapper}>
                <b className={styles.browse}>Browse</b>
              </button>
              <button className={styles.browseWrapper}>
                <b className={styles.browse}>Upload</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.contentInner}>
          <button className={styles.browseWrapper}>
            <b className={styles.browse}>Back</b>
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

export default ProfileUpdateProfilePic;
