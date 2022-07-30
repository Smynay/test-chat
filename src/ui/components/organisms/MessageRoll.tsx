import React, { FC } from "react";
import { Message } from "../../../store/features/chat/types";
import { MessageCard } from "../molecules";
import { Box } from "@mui/material";
import { ID } from "../../../store";

interface IProps {
  messages: Message[];
  currentUserId?: ID;
}

export const MessageRoll: FC<IProps> = ({ messages, currentUserId }) => {
  return (
    <>
      {messages.map((message, index) => {
        const isCurrentUserMessage = message.senderId === currentUserId;

        return (
          <Box
            py={1}
            pl={isCurrentUserMessage ? 6 : 2}
            pr={isCurrentUserMessage ? 2 : 6}
            key={index}
          >
            <MessageCard message={message} />
          </Box>
        );
      })}
    </>
  );
};
