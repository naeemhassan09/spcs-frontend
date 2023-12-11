import { FunctionComponent, useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Header from "../components/header";
import styles from "./profile-update-password.module.css";

const ProfileUpdatePassword: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.profileUpdatePassword}>
      <Header logout="/logout@2x.png" />
      <div className={styles.profileParent}>
        <b className={styles.profile}>Profile</b>
        <img className={styles.frameChild} alt="" src="/vector-2132.svg" />
      </div>
      <div className={styles.updatePasswordWrapper}>
        <b className={styles.updatePassword}>Update Password</b>
      </div>
      <div className={styles.content}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.emailAddressParent}>
              <div className={styles.emailAddress}>Email Address</div>
              <TextField
                className={styles.emailAddress1}
                color="primary"
                size="small"
                placeholder="Email"
                variant="outlined"
                type="email"
              />
            </div>
          </div>
          <div className={styles.emailAddressParent}>
            <div className={styles.password}>Password</div>
            <div className={styles.totalPiecesWrapper}>
              <TextField
                className={styles.totalPieces}
                color="primary"
                size="small"
                placeholder="Password"
                required={true}
                variant="outlined"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPasswordClick}
                        aria-label="toggle password visibility"
                      >
                        <Icon>
                          {showPassword ? "visibility_off" : "visibility"}
                        </Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className={styles.emailAddressParent}>
            <div className={styles.password}>Confirm Password</div>
            <div className={styles.totalPiecesWrapper}>
              <TextField
                className={styles.totalPieces}
                color="primary"
                size="small"
                placeholder="Confirm Password"
                required={true}
                variant="outlined"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPasswordClick}
                        aria-label="toggle password visibility"
                      >
                        <Icon>
                          {showPassword ? "visibility_off" : "visibility"}
                        </Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <button className={styles.changePasswordWrapper}>
                <b className={styles.changePassword}>Change Password</b>
              </button>
              <button className={styles.refreshWrapper}>
                <b className={styles.changePassword}>Refresh</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.contentInner}>
          <button className={styles.refreshWrapper}>
            <b className={styles.changePassword}>Back</b>
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

export default ProfileUpdatePassword;
