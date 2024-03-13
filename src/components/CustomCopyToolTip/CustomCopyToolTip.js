import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade"; // Import Fade from the correct path

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    arrow
    classes={{ popper: className }}
    TransitionComponent={Fade}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "var(--fill-2, #2D2D2D)",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--fill-2, #2D2D2D)", // Set the background color
    padding: "16px 24px", // Set padding for the container
    justifyContent: "center", // This will not have any effect as it's not a flex container by default
    borderRadius: "16px", // Set border-radius for the container
    maxWidth: 220, // Adjust the max-width as needed or remove this line if not needed
    color: "var(--text-01, #FFFFF5)", // Set the text color
    textAlign: "center",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px", // Use a string with 'px' to specify line height
    transition: "opacity 0.3s ease-in-out",
  },
}));

export default function CustomCopyTooltip({ title, children, open }) {
  console.log("title--->", title);
  return (
    <BootstrapTooltip title={title} placement="top" open={open}>
      {children}
    </BootstrapTooltip>
  );
}
