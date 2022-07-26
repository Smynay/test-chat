import React, { FC } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Field, Form } from "react-final-form";
import { required } from "../../common/utils";
import { useAppDispatch } from "../../common/hooks";
import { setUserData } from "../../../store/features/user";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export const Auth: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch(setUserData({ id: uuid(), name: values.nickname }));
    navigate("chat", { replace: true });
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
