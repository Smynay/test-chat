import React, { FC, useCallback, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Field, Form } from "react-final-form";
import { required } from "../../common/utils";
import { useAppDispatch, useAppService } from "../../common/hooks";
import { setUserData } from "../../../store/features/user";
import { useNavigate } from "react-router-dom";
import { AppServiceNames } from "../../../services";
import { LocalStorageKeys } from "../../../services/storage/types";
import { getId } from "../../../services/utils";

export const Auth: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const localStorageService = useAppService(
    AppServiceNames.LOCAL_STORAGE_SERVICE
  );

  const onAuthorize = useCallback((): void => {
    navigate("chat", { replace: true });
  }, [navigate]);

  useEffect(() => {
    const userDataFromLocalStorage = localStorageService.getItem(
      LocalStorageKeys.USER_DATA
    );

    if (userDataFromLocalStorage) {
      dispatch(setUserData(userDataFromLocalStorage));
      onAuthorize();
    }
  }, [onAuthorize, dispatch, localStorageService]);

  const onSubmit = (values: any) => {
    const newUserData = {
      id: getId(),
      name: values.nickname,
    };

    dispatch(setUserData(newUserData));
    localStorageService.setItem(LocalStorageKeys.USER_DATA, newUserData);

    onAuthorize();
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            p={2}
          >
            <Field name="nickname" validate={required}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Nickname"
                  variant="outlined"
                  fullWidth
                  error={meta.invalid}
                  helperText={meta.error}
                />
              )}
            </Field>

            <Box mt={2}>
              <Button
                type="submit"
                disabled={submitting}
                variant="contained"
                fullWidth
              >
                Enter chat
              </Button>
            </Box>
          </Box>
        </form>
      )}
    />
  );
};
