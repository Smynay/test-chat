import { Badge, Typography } from "@mui/material";

export const OnlineStatus = () => {
  return (
    <Badge
      color={"secondary"}
      badgeContent={" "}
      variant={"dot"}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Typography variant={"caption"}>Online</Typography>
    </Badge>
  );
};
