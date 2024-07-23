import { AccountCircle } from "@mui/icons-material";
import { AppBar, Badge, styled, Toolbar, Typography } from "@mui/material";

import styles from "./ZapierChatbotInterface.module.scss";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export function ChatbotHeader() {
  return (
    <AppBar position="static" className={styles.chatbotHeader}>
      <Toolbar className={styles.chatbotHeader}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <AccountCircle />
        </StyledBadge>

        <Typography variant="h6" component="div" sx={{ pl: 2 }}>
          Ask Me
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
