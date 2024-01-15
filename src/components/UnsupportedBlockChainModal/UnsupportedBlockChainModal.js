import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import assetsImage from "../../assets";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 550,
  background: "var(--background, #121212)",
  // Changed to the correct CSS property
  border: "2px solid #000",
  boxShadow: 24, // Changed to a more reasonable value (240 is quite large)
  padding: "31px 55px", // If you are using a styling system that recognizes 'p' as padding, this is fine
  display: "flex",
  justifyContent: "center", // Corrected to camelCase
  alignItems: "center",
  flexDirection: "column", // Corrected typo
  borderRadius: "24px",
};

export default function UnsupportedBlockChainModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleRedirect = () => {
    handleClose(); // Close the modal
    navigate("/loginpage"); // Redirect to the target path
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <img src={assetsImage.modalWarning} alt="warning" />
          </div>
          <div
            style={{
              color: "var(--fonts-icons-01, var(--text-01, #FFFFF5))",
              fontSize: "24px",
              textAlign: "center",
              padding: "8px 0px",
            }}
          >
            Unsupported Blockchain
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "var(--fonts-icons-02, var(--text-02, #A3A393))",
              textAlign: "center",
              maxWidth: "440px",
              paddingBottom: "32px",
            }}
          >
            It seems the seed phrase you’ve provided corresponds to a blockchain
            that isn’t supported by Muster yet. Please ensure that you’ve
            entered the correct seed phrase.
          </div>
          <Button
            sx={{
              color: "var(--fonts-icons-inverse, var(--background, #121212))",
              p: "12px 24px",
              background: "var(--Primary, #F4F85A)",
              borderRadius: "16px",
              fontSize: "16px",
              fontWeight: "700",
              textAlign: "center",
            }}
            onClick={handleRedirect}
          >
            Accept and try again
          </Button>
          <div
            style={{
              fontSize: "12px",
              color: "var(--fonts-icons-01, var(--text-01, #FFFFF5))",
              textDecoration: "underline",
              paddingTop: "16px",
            }}
          >
            Dismiss, I’ll create a Muster wallet
          </div>
        </Box>
      </Modal>
    </div>
  );
}
