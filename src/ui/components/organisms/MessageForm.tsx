import { Box, Button, Grid, TextareaAutosize } from "@mui/material";
import React, { ChangeEventHandler, FC, useRef, useState } from "react";

interface IProps {
  onSend: (text: string) => void;
}

export const MessageForm: FC<IProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const preparedMessage = message.trim();

    if (preparedMessage) {
      onSend(preparedMessage);
    }

    inputRef.current!.focus();
    setMessage("");
  };

  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setMessage(event.target.value);
  };

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={9} sm={10} position={"relative"}>
          <TextareaAutosize
            ref={inputRef}
            minRows={2}
            maxRows={6}
            placeholder={"Enter your message here..."}
            style={{
              width: "100%",
              maxWidth: "100%",
              minHeight: "36px",
              height: "36px",
              maxHeight: "80px",
              borderRadius: "4px",
            }}
            value={message}
            onChange={handleMessageChange}
          ></TextareaAutosize>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Button
            variant={"contained"}
            color={"warning"}
            onClick={handleSend}
            fullWidth={true}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
