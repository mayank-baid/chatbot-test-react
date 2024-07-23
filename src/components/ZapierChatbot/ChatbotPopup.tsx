import CloseIcon from "@mui/icons-material/Close";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Box, Fab, Fade, Popper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

import styles from "./ChatbotPopup.module.scss";
import { ZapierChatbotInterface } from "./ZapierChatbotInterface";

const CustomFab = styled(Fab)({
  position: "fixed",
  right: "1rem",
  bottom: "1rem",
  backgroundColor: "#67bce0",
  "&.MuiFab-root": {
    "&:hover": {
      backgroundColor: "#67bce0",
      filter: " brightness(85%)",
    },
  },
});

export function ChatbotPopup() {
  // For Popper
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleFloatingButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <CustomFab
      size="large"
      color="primary"
      aria-label="assistant"
      onClick={handleFloatingButtonClick}
    >
      {open ? <CloseIcon /> : <QuestionAnswerIcon />}
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="top-end"
        transition
        keepMounted={true}
        className={styles["popper"]}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box className={styles.popupContent}>
              <ZapierChatbotInterface />
            </Box>
          </Fade>
        )}
      </Popper>
    </CustomFab>
  );
}
