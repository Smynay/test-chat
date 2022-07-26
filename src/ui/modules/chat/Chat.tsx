import React, { FC } from "react";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { MessageForm, MessageRoll } from "../../components/organisms";
import { send } from "../../../store/features/chat";

export const Chat: FC = () => {
  const chat = useAppSelector((state) => state.chat);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleSend = (text: string) => {
    if (user.userData) {
      dispatch(
        send({
          senderId: user.userData.id,
          senderName: user.userData.name,
          text,
          timestamp: new Date().toISOString(),
        })
      );
    }
  };

  return (
    <Box minHeight={"300px"} height={"100%"}>
      <MessageRoll messages={chat.messages} />
      <MessageForm onSend={handleSend} />
    </Box>
  );
};
