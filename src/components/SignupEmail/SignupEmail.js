import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import CustomInput from "../customInput";
import Sidebar from "../Sidebar/Sidebar";
import { styles } from "../signupUrbitID/SignupUrbit.styles";

import "./SignupEmail.css";
import assetsImage from "../../assets";

const SignupEmail = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  return (
    <div className="signup-email-main-container">
      <div className="signup-email-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="sign-email-content-wrapper">
        <div style={{ marginBottom: "16px" }}>
          <img src={assetsImage.musterIcon} alt="mustor icon" />
        </div>
        <div className="signup-email-heading" style={{ textAlign: "left" }}>
          Provide us an email
        </div>
        <p className="sign-email-text">
          If you choose to switch to a permanent Urbit ID after testing Muster,
          we’ll use this email to send you a package with all your browsing data
          from this trial period.
        </p>
        <Formik
          initialValues={{ urbitID: "", accessKey: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              resetForm();
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div
                className="signup-email-field-container"
                style={{ marginTop: "40px" }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <Field name="urbitID">
                    {({ field }) => (
                      <CustomInput
                        {...field}
                        className="custom-input-margin"
                        placeholder="Email..."
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
                        placeholder="Confirm email"
                        style={{ ...styles.inputfield }}
                      />
                    )}
                  </Field>
                </div>
              </div>
              <div
                className="signup-email-underlined-text"
                style={{ width: "298px", color: "white" }}
              >
                Where can I find my access key?
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
                <div className="signup-email-checkbox-text">
                  I have read the Terms Of Service and Privacy Policy
                </div>
              </div>
              <div>
                <div
                  className="signup-email-button-container"
                  style={{ paddingTop: "40px" }}
                >
                  <button
                    className={
                      checked
                        ? "signup-email-button"
                        : "signup-email-button-unchecked"
                    }
                    type="submit"
                    disabled={isSubmitting || !checked}
                    onClick={() => navigate("/setupwallet")}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="signup-email-skip-text">Skip for now</div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SignupEmail;
