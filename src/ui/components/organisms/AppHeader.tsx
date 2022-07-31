import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import React, { FC } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useAppService,
} from "../../common/hooks";
import { resetUserData } from "../../../store/features/user";
import { AppServiceNames } from "../../../services";
import { LocalStorageKeys } from "../../../services/storage/types";
import { resetSlice } from "../../../store/features/chat";

export const AppHeader: FC = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector((state) => state.user.isAuthorized);
  const localStorageService = useAppService(
    AppServiceNames.LOCAL_STORAGE_SERVICE
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorageService.removeItem(LocalStorageKeys.USER_DATA);

    dispatch(resetUserData());
    dispatch(resetSlice());

    handleClose();
  };

  return (
    <AppBar position={"sticky"}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bacer`s chatik pet project
        </Typography>
        {isAuthorized && (
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
