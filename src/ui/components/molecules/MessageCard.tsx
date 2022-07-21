import React, { FC } from "react";
import { Message } from "../../../store/features/chat/types";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface IProps {
  message: Message;
}

export const MessageCard: FC<IProps> = ({ message }) => {
  const { senderName, text, timestamp } = message;

  return (
    <Card>
      <CardContent>
        <Typography variant={"body1"} gutterBottom>
          {senderName}
        </Typography>
        <Typography>{text}</Typography>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Typography variant={"caption"} color={"text.secondary"}>
            {timestamp}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
