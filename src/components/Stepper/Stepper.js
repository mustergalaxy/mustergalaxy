import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";
import { SidebarContext } from "../../globalContext/SidebarContext/SidebarProvider";

import { styled } from "@mui/material/styles";
import assetsImage from "../../assets";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  "& .MuiStepConnector-line": {
    display: "none", // Hide the connector lines
  },
}));

const CustomStepIcon = (props) => {
  const { active, completed, icon } = props;

  if (completed) {
    return (
      <div>
        <img
          width={12}
          height={12}
          src={assetsImage.sidebarSelectedIcon}
          alt="icon"
        />
      </div>
    ); // Replace with your completed icon
  }

  if (active) {
    return (
      <div>
        <img
          width={12}
          height={12}
          src={assetsImage.sidebarSelectedIcon}
          alt="icon"
        />
      </div>
    ); // Replace with your active icon
  }

  return (
    <div>
      <img
        width={12}
        height={12}
        src={assetsImage.sidebarUncheckedBox}
        alt="icon"
      />
    </div>
  ); // Replace with your default icon
};

export default function VerticalStepper({ steps }) {
  const [sidebarState, sidebarDispatch] = React.useContext(SidebarContext);

  console.log("sidebarState.count inside stepper", sidebarState.count);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={sidebarState.count}
        orientation="vertical"
        connector={<ColorlibConnector />}
      >
        {Object.keys(steps).map((stepNumber) => (
          <Step
            key={stepNumber}
            sx={{
              "& .MuiStepLabel-root": {
                py: 0, // Remove padding top and bottom
              },
              // "& .MuiStepLabel-root .Mui-completed": {
              //   color: "red", // circle color (COMPLETED)
              // },
              "& .MuiStepLabel-label.Mui-completed": {
                color: "#FFFFF5", // text label (COMPLETED)
              },
              // "& .MuiStepLabel-root .Mui-active": {
              //   color: "pink", // circle color (ACTIVE)
              // },
              "& .MuiStepLabel-label.Mui-active": {
                color: "#FFFFF5", // text label (ACTIVE)
              },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "black", // circle's number (ACTIVE)
              },
              "& .MuiStepLabel-label": {
                color: "#A3A393", // Default text label color
              },
            }}
          >
            <StepLabel
              StepIconComponent={CustomStepIcon}
              iconContainerProps={{
                sx: {
                  flexDirection: "row", // Align icon and text horizontally
                  alignItems: "center", // Align items on the same line
                  mr: 1, // Right margin for spacing between icon and text
                },
              }}
            >
              {steps[stepNumber].data}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
