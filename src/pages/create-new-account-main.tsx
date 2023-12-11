import { FunctionComponent, useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerMenu from "../components/drawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./create-new-account-main.module.css";

const CreateNewAccountMain: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.createNewAccountMain}>
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
                <Link
                  className={styles.trackYourShipment}
                  to="/track-shipment-main"
                >
                  Track Your Shipment
                </Link>
              </div>
            </div>
            <div className={styles.actions}>
              <Link className={styles.signIn} to="/chose-way-to-signin">
                Sign In
              </Link>
              <Link className={styles.signIn} to="/select-account-type">
                Sign up
              </Link>
              <button className={styles.menu} onClick={openDrawerMenu} />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.welcomeToSpcsRegisteredYouWrapper}>
            <div className={styles.welcomeToSpcsContainer}>
              <p className={styles.welcomeToSpcs}>
                <b>Welcome To SPCS</b>
              </p>
              <p className={styles.welcomeToSpcs}>Registered your company</p>
              <p className={styles.welcomeToSpcs}>&nbsp;</p>
              <p className={styles.welcomeToSpcs}>&nbsp;</p>
              <p className={styles.welcomeToSpcs}>{`We Are Waiting To `}</p>
              <p className={styles.welcomeToSpcs}>Give you Best Experience</p>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.createNewAccountWrapper}>
                <div className={styles.createNewAccount}>
                  Create New Account
                </div>
              </div>
              <div className={styles.alreadyHaveAnAccountParent}>
                <div className={styles.alreadyHaveAn}>
                  Already Have An Account?
                </div>
                <div className={styles.signin}>SignIn</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.contentDescriptionWrapper}>
                <TextField
                  className={styles.contentDescription}
                  color="primary"
                  size="small"
                  placeholder="About Company"
                  required={true}
                  variant="outlined"
                  type="text"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frame}>
                  <TextField
                    className={styles.contentDescription}
                    color="primary"
                    size="small"
                    placeholder="First Name"
                    required={true}
                    variant="outlined"
                    type="text"
                  />
                </div>
                <div className={styles.frame}>
                  <TextField
                    className={styles.contentDescription}
                    color="primary"
                    size="small"
                    placeholder="First Name"
                    required={true}
                    variant="outlined"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.contentDescriptionWrapper}>
                <Autocomplete
                  className={styles.frameChild}
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
              <div className={styles.contentDescriptionWrapper}>
                <TextField
                  className={styles.contentDescription}
                  color="primary"
                  size="small"
                  placeholder="Email"
                  variant="outlined"
                  type="email"
                />
              </div>
              <div className={styles.contentDescriptionWrapper}>
                <TextField
                  className={styles.contentDescription}
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
              <div className={styles.contentDescriptionWrapper}>
                <TextField
                  className={styles.contentDescription}
                  color="primary"
                  size="small"
                  placeholder=" Confirm Password"
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
              <Link className={styles.bookParcelBtn} to="/signin-main">
                <b className={styles.createAnAccount}>Create An Account</b>
              </Link>
            </div>
            <div className={styles.byJoiningYouAgreeToTheWWrapper}>
              <div className={styles.byJoiningYou}>
                By joining, you agree to the web Terms of Service and to
                occasionally receive emails from us. Please read our Privacy
                Policy to learn how we use your personal data.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frameParent1}>
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
                <p className={styles.welcomeToSpcs}>Information</p>
                <p className={styles.shippingGuideline}>Shipping Guideline</p>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group11@2x.png"
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
      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu onClose={closeDrawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default CreateNewAccountMain;
