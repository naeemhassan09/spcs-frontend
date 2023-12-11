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
import styles from "./branches-add-branch.module.css";

const BranchesAddBranch: FunctionComponent = () => {
  return (
    <div className={styles.branchesAddBranch}>
      <Header logout="/logout1@2x.png" />
      <div className={styles.addBranchParent}>
        <b className={styles.addBranch}>Add Branch</b>
        <img className={styles.frameChild} alt="" src="/vector-21314.svg" />
      </div>
      <div className={styles.addNewBranchWrapper}>
        <b className={styles.addNewBranch}>Add New Branch</b>
      </div>
      <div className={styles.content}>
        <div className={styles.shipperForm}>
          <div className={styles.shipperFormInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.shipperNameParent}>
                        <div className={styles.shipperName}>Shipper Name</div>
                        <div className={styles.shipperNmaeWrapper}>
                          <TextField
                            className={styles.shipperNmae}
                            color="primary"
                            size="small"
                            placeholder="Consignee Name"
                            required={true}
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.shipperNameParent}>
                        <div className={styles.shipperName}>{`Phone 1 `}</div>
                        <div className={styles.shipperNmaeWrapper}>
                          <TextField
                            className={styles.shipperNmae}
                            color="primary"
                            size="small"
                            placeholder="Phone 1"
                            required={true}
                            variant="outlined"
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.shipperNameParent}>
                      <div className={styles.shipperName}>Phone 2</div>
                      <div className={styles.shipperNmaeWrapper}>
                        <TextField
                          className={styles.shipperNmae}
                          color="primary"
                          size="small"
                          placeholder="Optional"
                          variant="outlined"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.shipperNameParent}>
                      <div className={styles.shipperName}>Email Address</div>
                      <div className={styles.shipperNmaeWrapper}>
                        <TextField
                          className={styles.shipperNmae}
                          color="primary"
                          size="small"
                          placeholder="Email "
                          required={true}
                          variant="outlined"
                          type="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameDiv}>
                        <div className={styles.frameDiv}>
                          <div className={styles.shipperNameParent}>
                            <div className={styles.shipperName}>Country</div>
                            <div className={styles.shipperNmaeWrapper}>
                              <Autocomplete
                                className={styles.frameItem}
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.shipperNameParent}>
                        <div className={styles.shipperName}>Province/State</div>
                        <div className={styles.shipperNmaeWrapper}>
                          <Autocomplete
                            className={styles.frameItem}
                            size="small"
                            disablePortal
                            options={["1", "2", "3"]}
                            renderInput={(params: any) => (
                              <TextField
                                {...params}
                                color="primary"
                                label=""
                                variant="outlined"
                                placeholder="Select Province/State"
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
                <div className={styles.frameParent3}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameDiv}>
                        <div className={styles.shipperNameParent}>
                          <div className={styles.shipperName}>City</div>
                          <div className={styles.shipperNmaeWrapper}>
                            <Autocomplete
                              className={styles.frameItem}
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.shipperNameParent}>
                        <div className={styles.shipperName}>Branch Pin</div>
                        <div className={styles.shipperNmaeWrapper}>
                          <TextField
                            className={styles.shipperNmae}
                            color="primary"
                            size="small"
                            placeholder="Zip Code"
                            required={true}
                            variant="outlined"
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.shipperFormChild}>
            <div className={styles.frameDiv}>
              <div className={styles.shipperNameParent}>
                <div className={styles.shipperName}>Branch Address</div>
                <div className={styles.shipperNmaeWrapper}>
                  <TextField
                    className={styles.shipperNmae}
                    color="primary"
                    size="small"
                    placeholder="Shipper Address"
                    required={true}
                    variant="outlined"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.frameParent5}>
          <Link
            className={styles.backWrapper}
            to="/branches-view-all-branches-main"
          >
            <b className={styles.addBranch}>Back</b>
          </Link>
          <Link
            className={styles.backWrapper}
            to="/branches-view-all-branches-main"
          >
            <b className={styles.addBranch}>Check</b>
          </Link>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.frameParent6}>
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

export default BranchesAddBranch;
