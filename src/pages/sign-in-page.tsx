import { FunctionComponent, useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./sign-in-page.module.css";

const SignInPage: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.signInPage}>
      <div className={styles.navContainer}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img
              className={styles.openParcelIcon}
              alt=""
              src="/open-parcel@2x.png"
            />
            <b className={styles.spcs}>{`SPCS    `}</b>
          </div>
          <div className={styles.navLinksWrapper}>
            <div className={styles.navLinks}>
              <a className={styles.home}>Home</a>
              <a className={styles.home}>About us</a>
              <a className={styles.home}>Contact us</a>
              <a className={styles.shippingCalculator}>Shipping Calculator</a>
              <a className={styles.trackYourShipment}>Track Your Shipment</a>
            </div>
          </div>
          <div className={styles.actions}>
            <a className={styles.signIn}>Sign In</a>
            <a className={styles.signIn}>Sign up</a>
            <button className={styles.menu} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.welcomeToSmallPacketConsolWrapper}>
          <b className={styles.welcomeToSmallContainer}>
            <p className={styles.welcomeToSmall}>{`Welcome To Small `}</p>
            <p className={styles.welcomeToSmall}>Packet Consolidated</p>
            <p className={styles.welcomeToSmall}>Shipment And ExporDelivery</p>
          </b>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.signInWrapper}>
                <div className={styles.signIn1}>Sign In</div>
              </div>
            </div>
            <div className={styles.adminWrapper}>
              <div className={styles.admin}>{`Admin `}</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.emailAddressWrapper}>
              <TextField
                className={styles.emailAddress}
                color="primary"
                size="small"
                placeholder="Email"
                variant="outlined"
                type="email"
              />
            </div>
            <div className={styles.emailAddressWrapper}>
              <TextField
                className={styles.emailAddress}
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
            <Link
              className={styles.bookParcelBtn}
              to="/dashboard-dashboard-main"
            >
              <b className={styles.spcs}>Sign In</b>
            </Link>
          </div>
          <div className={styles.forgotPasswordWrapper}>
            <div className={styles.forgotPassword}>{`Forgot Password? `}</div>
          </div>
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
              <p className={styles.welcomeToSmall}>Information</p>
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

export default SignInPage;
