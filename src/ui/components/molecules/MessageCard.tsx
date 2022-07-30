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
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={1}
        >
          <Typography variant={"body2"} fontWeight={"bold"}>
            {senderName}
          </Typography>
          <Typography variant={"caption"} color={"text.secondary"}>
            {new Date(timestamp).toLocaleTimeString()}
          </Typography>
        </Box>

        <Typography variant={"body2"}>{text}</Typography>
      </Box>
    </Card>
  );
};
