import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/header";
import styles from "./member-add-member.module.css";

const MemberAddMember: FunctionComponent = () => {
  return (
    <div className={styles.memberAddMember}>
      <Header logout="/logout@2x.png" />
      <div className={styles.memberParent}>
        <b className={styles.member}>Member</b>
        <img className={styles.frameChild} alt="" src="/vector-213.svg" />
      </div>
      <div className={styles.addMemberWrapper}>
        <b className={styles.addMember}>Add Member</b>
      </div>
      <div className={styles.totalUsers3TotalAdminParent}>
        <div className={styles.totalUsers}>Total Users : 3 Total Admin : 1</div>
        <Link
          className={styles.frameWrapper}
          to="/member-view-all-members-main"
        >
          <a className={styles.membersWrapper}>
            <b className={styles.member}>Members</b>
          </a>
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.formParent}>
          <b className={styles.addMemberIn}>Add Member In SPCS</b>
          <div className={styles.formParentInner}>
            <div className={styles.frameParent}>
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
                <div className={styles.frameContainer}>
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
          <div className={styles.loremIpsumDolorSitAmetConParent}>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus..
            </div>
            <div className={styles.addParent}>
              <div className={styles.add}>
                <b className={styles.member}>Add</b>
              </div>
              <button className={styles.refreshWrapper}>
                <b className={styles.refresh}>Refresh</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.frameGroup}>
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
            <div className={styles.frameParent1}>
              <button className={styles.browseWrapper}>
                <b className={styles.refresh}>Browse</b>
              </button>
              <button className={styles.browseWrapper}>
                <b className={styles.refresh}>Upload</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.frameParent2}>
          <button className={styles.browseWrapper}>
            <b className={styles.refresh}>Back</b>
          </button>
          <a className={styles.membersWrapper}>
            <b className={styles.member}>Check</b>
          </a>
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

export default MemberAddMember;
