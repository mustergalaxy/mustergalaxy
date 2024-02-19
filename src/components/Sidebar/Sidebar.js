import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
// import { useTheme } from '@mui/material/styles';
import { useNavigate, useLocation } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";

import VerticalStepper from "../Stepper/Stepper";
import { RiArrowDropDownLine } from "react-icons/ri";

import { SidebarContext } from "../../globalContext/SidebarContext/SidebarProvider";
import { SidebarListingContext } from "../../globalContext/SideBarListingContext/SidebarListingProvider";

const drawerWidth = 289;

const indexStyle = {
  display: "flex",
  width: "24px",
  height: "24px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "16px",
  borderRadius: "8px",
  border: "1px solid var(--Borders-01, #2D2D2D)",
  fontSize: "12px",
  fontWeight: "700",
};

function Sidebar(props) {
  const location = useLocation();

  // Extract the pathname from the location object
  const path = location.pathname;

  console.log("path==>", path);

  const [sidebarListingState, sidebarListingDispatch] = useContext(
    SidebarListingContext
  );

  const [sidebarState, sidebarDispatch] = useContext(SidebarContext);

  console.log("sidebarState===>", sidebarState);
  console.log("sidebarListingState===>", sidebarListingState.count);

  // const shouldIncludeUrbitChildren = (path) => !path.includes("signupUrbit");

  function shouldIncludeUrbitChildren(path) {
    if (path.includes("signupEmail")) {
      return [
        {
          index: 1,
          data: "Try Muster",
        },
      ];
    } else if (path.includes("provider")) {
      return [
        {
          index: 1,
          data: "Choose a provider",
        },
      ];
    } else {
      return null;
    }
  }

  //wallet setupchildren

  function getWalletSetupChildren(path) {
    if (
      path.includes("musterCreatewalletpassword") ||
      path.includes("backupseedphrase") ||
      path.includes("verifyseedphrase") ||
      path.includes("createwalletSuccessful")
    ) {
      return [
        // Define children for when path includes 'hi'
        {
          index: 1,
          data: "Create or import wallet?",
        },
        {
          index: 2,
          data: "Create password",
        },
        {
          index: 3,
          data: "Seed phrase backup",
        },
        {
          index: 4,
          data: "Verify seed phrase backup",
        },

        // Add more children as needed
      ];
    } else if (
      path.includes("importwalletseed") ||
      path.includes("createwalletpassword") ||
      path.includes("ImportwalletSuccessful")
    ) {
      return [
        // Define children for when path includes 'by'
        {
          index: 1,
          data: "Create or import wallet?",
        },
        {
          index: 2,
          data: "Import seed phrase ",
        },
        {
          index: 3,
          data: "Create password",
        },
        // Add more children as needed
      ];
    } else {
      return [
        // Define default children
        {
          index: 1,
          data: "Create or import wallet?",
        },
        // Add more default children as needed
      ];
    }
  }

  const drawerData = [
    {
      data: "Connect with Urbit",
      index: 1,
      to: "/loginpage",
      children: shouldIncludeUrbitChildren(path),
    },
    {
      data: "Set up wallet",
      index: 2,
      to: "/loginpage",
      children: getWalletSetupChildren(path),
    },
    {
      data: "Start using Muster",
      index: 3,
      to: "/loginpage",
      children: [
        {
          index: 1,
          data: "Make Muster default?",
        },
      ],
    },
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const signUpPage = () => {
    navigate("/signup"); // Replace '/path-to-redirect' with your desired path
  };

  const drawer = (
    <div>
      <div
        style={{
          color: "white",
          position: "absolute",
          top: "59px",
          left: "18px",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        // onClick={signUpPage}
      >
        <svg
          style={{ paddingRight: "4px" }}
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="13"
          viewBox="0 0 7 13"
          fill="none"
        >
          <path
            d="M0.379709 6.8605L5.95271 12.1705C6.0457 12.2591 6.16924 12.3086 6.29771 12.3086C6.42618 12.3086 6.54972 12.2591 6.64271 12.1705L6.64871 12.1645C6.69394 12.1215 6.72996 12.0698 6.75458 12.0125C6.77919 11.9551 6.79188 11.8934 6.79188 11.831C6.79188 11.7686 6.77919 11.7069 6.75458 11.6495C6.72996 11.5922 6.69394 11.5405 6.64871 11.4975L1.40071 6.4975L6.64871 1.4995C6.69394 1.45653 6.72996 1.4048 6.75458 1.34747C6.77919 1.29013 6.79188 1.22839 6.79188 1.166C6.79188 1.10361 6.77919 1.04187 6.75458 0.984532C6.72996 0.927199 6.69394 0.875472 6.64871 0.832499L6.64271 0.826499C6.54972 0.737854 6.42618 0.688403 6.29771 0.688403C6.16924 0.688403 6.0457 0.737854 5.95271 0.826499L0.379709 6.1365C0.330697 6.1832 0.291678 6.23936 0.265017 6.30159C0.238356 6.36381 0.224609 6.4308 0.224609 6.4985C0.224609 6.5662 0.238357 6.63319 0.265017 6.69541C0.291678 6.75764 0.330697 6.8138 0.379709 6.8605Z"
            fill="#FFFFF5"
          />
        </svg>
        Back
      </div>
      {mobileOpen && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: "49px",
            right: 8,
            color: "white",
            zIndex: 1301,
            // width:'100px',
            // Only display the close icon when the screen size is 900px or smaller
            display: { xs: "block", md: "none" },
          }}
        >
          <IoClose />
        </IconButton>
      )}
      <List sx={{ padding: "15px", marginTop: "95px" }}>
        {/* {drawerData.map((text, index) => (
          <ListItem
            key={text.index}
            sx={{
              border: "1px solid var(--Borders-01, #2D2D2D)",
              borderRadius: "10px",
              marginBottom: "5px",
              marginTop: "16px",
              color: "white",
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
            disablePadding
          >
            <ListItemButton onClick={() => console.log("clicked")}>
              <ListItemText
                primary={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={indexStyle}>{text.index}</span>
                    {text.data}
                  </div>
                }
              />
            </ListItemButton>
          </ListItem> */}
        {drawerData.map((item, index) => (
          <ListItem
            key={item.index}
            sx={{
              border: "1px solid var(--Borders-01, #2D2D2D)",
              borderRadius: "10px",
              marginBottom: "5px",
              marginTop: "16px",
              color: "white",
              padding: "18px 8px",

              backgroundColor: "black", // Set the background color to match the Drawer's
            }}
            disablePadding
          >
            <Box sx={{ width: "100%" }}>
              <ListItemButton
                sx={{
                  "&.MuiListItemButton-root": {
                    paddingBottom: 0,
                    paddingTop: 0, // Remove padding-bottom
                    display: "flex", // Ensure flex layout
                    justifyContent: "space-between",
                  },
                }}
                // onClick={() => navigate(item.to)}
              >
                <ListItemText
                  primary={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        style={{
                          ...indexStyle,
                          background:
                            sidebarListingState.count >= item.index
                              ? "linear-gradient(94deg, #F4F85A 24.67%, #CDCDCD 87.64%)"
                              : "transparent", // Call the function to get the background color
                          color:
                            sidebarListingState.count >= item.index
                              ? "black"
                              : "white",
                        }}
                      >
                        {item.index}
                      </span>
                      {item.data}
                    </div>
                  }
                />
                {item.children && sidebarListingState.count >= item.index && (
                  <RiArrowDropDownLine />
                )}
              </ListItemButton>
              {item.children && item.index === sidebarListingState.count && (
                <div style={{ paddingLeft: "50px" }}>
                  <VerticalStepper
                    steps={item.children}
                    labelStyles={{
                      color: "white !important",
                    }}
                  />
                </div>
              )}
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "inline", width: "20px" }}>
      {/* <CssBaseline /> */}
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          display="inline"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "block", md: "none" } }} // Adjust breakpoints if necessary
        >
          <IoMenu />
        </IconButton>
      </Toolbar>
      <Box
        component="nav"
        sx={{
          // width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          // width: '0px',
          color: "black",
          // '& css-hyum1k-MuiToolbar-root':{
          //   width: '0px',
          // }
        }}
        aria-label="mailbox folders"
      >
        {/* Temporary drawer for smaller screens */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" }, // Adjust display based on screen size
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Permanent drawer for larger screens */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" }, // Adjust display based on screen size
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
              borderRadius: "16px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
