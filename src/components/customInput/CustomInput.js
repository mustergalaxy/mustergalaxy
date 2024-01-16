import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import assetsImage from "../../assets";

const CustomTextField = styled(TextField)(({ theme, selected }) => ({
  "& .MuiInputBase-input": {
    color: "white",
    // backgroundColor: "pink",
    padding: "0px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#2D2D2D",
      borderWidth: 1,
      borderRadius: "16px",
      // background: selected ? "var(--Card-fills-02, #1E1E1E)" : "pink",
    },
    "&:hover fieldset": {
      borderColor: "#2D2D2D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2D2D2D", // Keep the border color the same or change it if you like
      // backgroundColor: "pink", // Background color for the focused state
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "white", // Style for placeholder text
    fontSize: "16px",
  },
}));

const CustomInput = ({
  index, // New prop for the index
  label,
  zIndex,
  placeholder,
  selected,
  password,
  type = "text",
  style,
  classes: customClasses,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const combinedClasses = clsx(customClasses);

  const inputStyle = {
    ...(style || {}),
    zIndex: zIndex || "auto",
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log("selected insed custom input==>", selected);

  return (
    <CustomTextField
      autoComplete="off"
      label={label}
      variant="outlined"
      selected={selected}
      className={combinedClasses}
      placeholder={placeholder}
      type={password ? (showPassword ? "text" : "password") : type}
      InputProps={{
        style: inputStyle,
        startAdornment: index !== undefined && (
          <InputAdornment position="start">
            <span style={{ color: "white" }}>{`${index}. `}</span>{" "}
            {/* Display the index here */}
          </InputAdornment>
        ),
        endAdornment: password ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              <img
                src={showPassword ? assetsImage.closeEye : assetsImage.openEye}
                alt="Toggle password visibility"
                style={{ width: "24px", height: "24px" }}
              />
            </IconButton>
          </InputAdornment>
        ) : null,
        ...props.InputProps,
      }}
      {...props}
    />
  );
};

export default CustomInput;
