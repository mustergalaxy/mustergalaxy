import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import clsx from 'clsx';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: '#FFFFF5', // Text color
    padding: theme.spacing(1), // Default padding
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#2D2D2D', // Border color
      borderWidth: 1, // Border width
      borderRadius:'16px'
    },
    '&:hover fieldset': {
      borderColor: '#2D2D2D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2D2D2D',
    },
    // backgroundColor: 'lightgray', // Background color

  },
  '& .MuiInputBase-input::placeholder': {
    color: 'white', // Style for placeholder text
    fontSize:'16px'
  },
}));

const CustomInput = ({ label,zIndex, placeholder,style, classes: customClasses, ...props }) => {
  const combinedClasses = clsx(customClasses);

  // const inputStyle = {
  //   ...(padding ? { padding: padding } : {}),
  //   ...(width ? { width: width } : {}),
  // };

  const inputStyle = {
    ...(style || {}),
    zIndex: zIndex || 'auto',
  }

  return (
    <CustomTextField
    autoComplete='off'
      label={label}
      variant="outlined"
      className={combinedClasses}
      placeholder={placeholder}
      inputProps={{ style:  inputStyle  }}
      {...props}
    />
  );
};

export default CustomInput;
