import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { ChatUser } from "../../../store/features/chat/types";
import { OnlineStatus } from "../atoms";

interface IProps {
  user: ChatUser;
  isCurrentUser: boolean;
}

export const UserCard: FC<IProps> = ({ user, isCurrentUser }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant={"body1"}>{user.senderName}</Typography>

        {isCurrentUser && (
          <Box ml={1}>
            <Typography variant={"caption"}>(current user)</Typography>
          </Box>
        )}
      </Box>
      <OnlineStatus />
    </Box>
  );
};
