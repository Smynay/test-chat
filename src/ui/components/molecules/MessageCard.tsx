import React, { FC } from "react";
import { Message } from "../../../store/features/chat/types";
import { Box, Card, Typography } from "@mui/material";

interface IProps {
  message: Message;
}

export const MessageCard: FC<IProps> = ({ message }) => {
  const { senderName, text, timestamp } = message;

  return (
    <Card elevation={2}>
      <Box p={2}>
        <Typography variant={"body2"} fontWeight={"bold"} gutterBottom>
          {senderName}
        </Typography>
        <Typography variant={"body2"}>{text}</Typography>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Typography variant={"caption"} color={"text.secondary"}>
            {new Date(timestamp).toLocaleTimeString()}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
