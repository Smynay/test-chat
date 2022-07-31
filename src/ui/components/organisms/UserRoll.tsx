import { FC } from "react";
import { ChatUser } from "../../../store/features/chat/types";
import { Box, Typography } from "@mui/material";
import { UserCard } from "../molecules/UserCard";
import { ID } from "../../../store";

interface IProps {
  users: ChatUser[];
  currentUserId?: ID;
}

export const UserRoll: FC<IProps> = ({ users, currentUserId }) => {
  return (
    <Box
      py={2}
      px={2}
      sx={(theme) => ({ color: theme.palette.primary.contrastText })}
    >
      {users.map((user) => (
        <Box key={user.senderId} mb={2}>
          <UserCard
            isCurrentUser={user.senderId === currentUserId}
            user={user}
          />
        </Box>
      ))}
      <Box display={"flex"} justifyContent={"center"}>
        <Typography variant={"caption"}>
          Total users count {users.length}
        </Typography>
      </Box>
    </Box>
  );
};
