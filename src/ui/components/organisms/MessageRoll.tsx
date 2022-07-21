import React, { FC } from "react";
import { Message } from "../../../store/features/chat/types";
import { MessageCard } from "../molecules";
import { Box } from "@mui/material";

interface IProps {
  messages: Message[];
}

export const MessageRoll: FC<IProps> = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) => (
        <Box mt={2} key={index}>
          <MessageCard message={message} />
        </Box>
      ))}
    </>
  );
};
