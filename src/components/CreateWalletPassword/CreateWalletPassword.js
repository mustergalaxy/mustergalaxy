import React from "react";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import CustomInput from "../customInput";
import { Formik, Form, Field } from "formik";
import { styles } from "./CreateWalletStyles";

import "./CreateWalletPassword.css";

// import "./ImportedWalletSuccessful.css";

const CreateWalletPassword = () => {
  return (
    <div className="createWalletPassword-main-comntainer">
      <div className="createWalletPassword-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="createWalletPassword-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="icon" />
        </div>
        <div className="createWalletPassword-main-heading">
          Create a new password
        </div>
        <div className="createdWalletPassword-text">
          Use this password whenever you need to log in to your wallet.
        </div>

        <Formik
          initialValues={{ password: "", reenterpassword: "" }}
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
              <div className="create-Wallet-field-container">
                <div style={{ marginBottom: "8px" }}>
                  <Field name="urbitID">
                    {({ field }) => (
                      <CustomInput
                        {...field}
                        className="custom-input-margin"
                        placeholder="Password"
                        style={{ ...styles.inputfield }}
                        password
                      />
                    )}
                  </Field>
                </div>
                <div className="createWalletPasswordGradientTextContainer">
                  <div className="createWalletPasswordGradientcontainer"></div>
                  <img
                    style={{ width: "16px", height: " 16px" }}
                    src={assetsImage.exclamatoryIcon}
                    alt="exclamatoryIcon"
                  />
                  <div className="createWalletPasswordGradientcontainerText">
                    Weak
                  </div>
                </div>
                <div>
                  <Field name="accessKey">
                    {({ field }) => (
                      <CustomInput
                        {...field}
                        placeholder="Re-enter Password"
                        style={{ ...styles.inputfield }}
                        password
                      />
                    )}
                  </Field>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="createWalletPassword-button"
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

        {/* <div>
          <button className="createWalletPassword-button">Continue</button>
        </div> */}
      </div>
      <div className="createWalletPassword-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default CreateWalletPassword;
