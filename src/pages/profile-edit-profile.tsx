import { FunctionComponent, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from "@mui/material";
import Header from "../components/header";
import styles from "./profile-edit-profile.module.css";

const ProfileEditProfile: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.profileEditProfile}>
      <Header logout="/logout@2x.png" />
      <div className={styles.profileParent}>
        <b className={styles.profile}> Profile</b>
        <img className={styles.frameChild} alt="" src="/vector-2131.svg" />
      </div>
      <div className={styles.editProfileWrapper}>
        <b className={styles.editProfile}>Edit Profile</b>
      </div>
      <div className={styles.totalMembers3Parent}>
        <div className={styles.totalMembers}>Total Members : 3</div>
        <div className={styles.totalMembers}>Total Admin : 1</div>
      </div>
      <div className={styles.ellipseParent}>
        <img className={styles.frameItem} alt="" src="/ellipse-27@2x.png" />
        <div className={styles.frameParent}>
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
          <div className={styles.frameWrapper}>
            <a className={styles.editWrapper}>
              <b className={styles.profile}>Edit</b>
            </a>
          </div>
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
                          className={styles.totalPieces}
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
                <div className={styles.frameContainer}>
                  <div className={styles.lastNameParent}>
                    <div className={styles.lastName}>Last Name</div>
                    <div className={styles.frame}>
                      <TextField
                        className={styles.totalPieces}
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
                      className={styles.totalPieces}
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
                      className={styles.totalPieces}
                      color="primary"
                      size="small"
                      placeholder="Email"
                      variant="outlined"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.lastNameParent}>
                <div className={styles.firstName}>Password</div>
                <div className={styles.frame}>
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
              <div className={styles.titleParent}>
                <div className={styles.title}>Title</div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.roleWrapper}>
                      <Autocomplete
                        className={styles.role}
                        size="small"
                        disablePortal
                        options={["Admin", "CEO", "Others"]}
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
                <b className={styles.profile}>Update</b>
              </div>
              <button className={styles.refreshWrapper}>
                <b className={styles.refresh}>Refresh</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.contentInner}>
          <button className={styles.refreshWrapper}>
            <b className={styles.refresh}>Back</b>
          </button>
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

export default ProfileEditProfile;
