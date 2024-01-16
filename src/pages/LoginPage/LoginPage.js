import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import CustomInput from "../../components/customInput/CustomInput";
import CustomTooltip from "../../components/CustomToolTip/CustomToolTip";
import { styles } from "../../components/signupUrbitID/SignupUrbit.styles";

import assetsImage from "../../assets";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const Onbording = () => {
    navigate("/");
  };

  return (
    <div className="login-page-main-container">
      <div
        style={{
          marginTop: "15px",
          paddingLeft: "15px",
          color: "white",
          zIndex: "1",
          cursor: "pointer",
        }}
        onClick={Onbording}
      >
        <img
          style={{ paddingRight: "4px" }}
          src={assetsImage.backIcon}
          alt="backicon"
        />
        Back
        <div className="login-page-side-design"></div>
      </div>
      <div
        style={{
          position: "relative",
          height: "100vh",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <img src={assetsImage.musterIcon} alt="muster icon" />
        </div>
        <div className="login-heading">Log in to Muster</div>
        <Formik
          initialValues={{ urbitID: "", accessKey: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setTimeout(() => {
              resetForm();
              setSubmitting(false);
            }, 3000);
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
                        // index="1"
                        {...field}
                        placeholder="Access key"
                        style={{ ...styles.inputfield }}
                        // password
                      />
                    )}
                  </Field>
                </div>
              </div>
              <div>
                <div>
                  <div
                    className="login-underlined-text"
                    style={{
                      paddingTop: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Where can I find my access key?
                    <CustomTooltip title="This is a tooltip message. you can pass here your custom message">
                      <span className="login-tooltip-trigger-text">?</span>
                    </CustomTooltip>
                  </div>
                </div>
              </div>
              <div>
                <div className="login-button-container">
                  <button
                    className="login-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="login-page-right-side-design">
        <img src={assetsImage.loginRightSideDesign} alt=" side design " />
      </div>
    </div>
  );
};

export default LoginPage;
