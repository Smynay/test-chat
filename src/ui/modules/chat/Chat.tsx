import React, { FC, useState } from "react";
import { Box, Card, IconButton, Typography } from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
  useRefWithScrollToBottom,
  useSocketSubscriptions,
} from "../../common/hooks";
import { MessageForm, MessageRoll } from "../../components/organisms";
import { send } from "../../../store/features/chat";
import { Navigate } from "react-router-dom";
import { Group as GroupIcon } from "@mui/icons-material";
import { UserRoll } from "../../components/organisms/UserRoll";

export const Chat: FC = () => {
  const chat = useAppSelector((state) => state.chat);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const rollRef = useRefWithScrollToBottom();
  const [isActiveUsersListOpen, setIsActiveUsersListOpen] = useState(false);

  useSocketSubscriptions();

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

  const handleUsersListToggle = () => {
    setIsActiveUsersListOpen((prev) => !prev);
  };

  if (!user.isAuthorized) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Card
      elevation={3}
      sx={(theme) => ({ bgcolor: theme.palette.primary.main })}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        height={"50px"}
        p={2}
        sx={(theme) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          color: theme.palette.common.white,
        })}
      >
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          Global chat
        </Typography>

        <IconButton
          size="small"
          aria-label="list of active users"
          color="inherit"
          onClick={handleUsersListToggle}
        >
          <GroupIcon />
        </IconButton>
      </Box>

      <Box height={"800px"} display={"flex"} flexDirection={"column"}>
        {!isActiveUsersListOpen && (
          <Box
            flexGrow={1}
            py={1}
            position={"relative"}
            maxHeight={"100%"}
            overflow={"auto"}
            ref={rollRef}
          >
            <MessageRoll
              currentUserId={user.userData?.id}
              messages={chat.messages}
            />
          </Box>
        )}
        {isActiveUsersListOpen && (
          <Box
            flexGrow={1}
            py={1}
            position={"relative"}
            maxHeight={"100%"}
            overflow={"auto"}
          >
            <Box
              width={"100%"}
              minHeight={"100%"}
              position={"absolute"}
              top={0}
              left={0}
              sx={(theme) => ({ bgcolor: theme.palette.primary.main })}
            >
              <UserRoll
                currentUserId={user.userData?.id}
                users={chat.activeUsers}
              />
            </Box>
          </Box>
        )}
        <Box
          sx={(theme) => ({
            borderTop: `1px solid ${theme.palette.divider}`,
          })}
        >
          <MessageForm onSend={handleSend} />
        </Box>
      </Box>
    </Card>
  );
};
