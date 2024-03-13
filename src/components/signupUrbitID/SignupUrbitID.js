import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import CustomInput from "../customInput/CustomInput";
import CustomTooltip from "../../components/CustomToolTip/CustomToolTip";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarListingContext } from "../../globalContext/SideBarListingContext/SidebarListingProvider";
import { setListingCountValue } from "../../globalContext/SideBarListingContext/SidebarListingAction";
import { styles } from "./SignupUrbit.styles";

import assetsImage from "../../assets";
import "./SignupUrbit.css";

const SignupUrbitID = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [sidebarListingState, sidebarListingDispatch] = useContext(
    SidebarListingContext
  );

  return (
    <div className="signup-urbit-main-container">
      <div className="signup-urbit-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="sign-urbit-content-wrapper">
        <div style={{ marginBottom: "16px" }}>
          <img src={assetsImage.musterIcon} alt="mustericon" />
        </div>
        <div className="signup-urbit-heading" style={{ textAlign: "left" }}>
          Connect your Urbit ID
        </div>
        <Formik
          initialValues={{ urbitID: "", accessKey: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("values--->", values);
            setTimeout(() => {
              navigate("/setupwallet");
              sidebarListingDispatch(
                setListingCountValue(sidebarListingState.count + 1)
              );
              resetForm();

              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="login-field-container">
                <div style={{ marginBottom: "16px" }}>
                  <Field name="urbitID">
                    {({ field }) => (
                      <CustomInput
                        {...field}
                        className="custom-input-margin"
                        placeholder="Urbit ID..."
                        style={{ ...styles.inputfield }}
                      />
                    )}
                  </Field>
                </div>
                <div>
                  <Field name="accessKey">
                    {({ field }) => (
                      <CustomInput
                        {...field}
                        placeholder="Access key"
                        style={{ ...styles.inputfield }}
                      />
                    )}
                  </Field>
                </div>
              </div>
              <div
                className="signup-urbit-underlined-text"
                style={{
                  paddingTop: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Where can I find my access key?
                <CustomTooltip
                  title="You can either use the ”+code” command 
within your Urbit's dojo or easily locate it in 
your hosting provider's admin section."
                >
                  <span className="login-tooltip-trigger-text">?</span>
                </CustomTooltip>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ paddingRight: "8px" }}>
                  <img
                    className="signup-urbit-image-style"
                    onClick={() => setChecked(!checked)}
                    src={
                      checked
                        ? assetsImage.filledCheckBox
                        : assetsImage.outlinedCheckBox
                    }
                    alt="checkbox"
                  />
                </div>
                <div className="signup-urbit-checkbox-text">
                  I have read the Terms Of Service and Privacy Policy
                </div>
              </div>
              <div>
                <div className="signup-urbit-button-container">
                  <button
                    className={
                      checked
                        ? "signup-urbit-button"
                        : "signup-urbit-button-unchecked"
                    }
                    type="submit"
                    disabled={isSubmitting || !checked}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="sign-urbit-right-side-design">
        <img src={assetsImage.loginRightSideDesign} alt=" side design " />
      </div>
    </div>
  );
};

export default SignupUrbitID;
