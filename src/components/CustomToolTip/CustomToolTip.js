import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";  // Import Fade from the correct path

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} TransitionComponent={Fade} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
    maxWidth: 50,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    maxWidth: 50,
    transition: "opacity 0.3s ease-in-out", // Add a smooth opacity transition
  },
}));

export default function CustomTooltip({ title, children }) {
  return (
    <BootstrapTooltip title={title} enterTouchDelay={0} leaveTouchDelay={100}>
      {children}
    </BootstrapTooltip>
  );
}
