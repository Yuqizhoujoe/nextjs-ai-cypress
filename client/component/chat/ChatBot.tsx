import React, { useEffect, useRef, useState } from "react";

// react query
import { useMutation } from "@tanstack/react-query";

// utility
import { isEmpty } from "lodash";

// MUI
import {
  Avatar,
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import DirectionsIcon from "@mui/icons-material/Directions";
import { grey } from "@mui/material/colors";
import {
  handleOpenAIAsyncGenrator,
  openAIAPIEnum,
} from "../../../shared/openai/openAI";

const ChatBoxItem = styled(Paper)(({ theme }) => {
  return {
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.subtitle1,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    // color: theme.palette.text.disabled,
    borderRadius: theme.spacing(1),
  };
});

const userTypes = {
  USER: "user",
  CHAT_BOT: "chat_bot",
};

interface Conversation {
  content: string;
  id: string | number;
  date: Date;
  type: (typeof userTypes)[keyof typeof userTypes];
  loading?: boolean;
}

export default function ChatBot() {
  const [userInput, setUserInput] = useState("");
  const [conversations, setConversations] = useState<Conversation[]>([]);

  // chat box ref
  const chatBoxRef = useRef<HTMLDivElement>(null);

  // react query
  const chatBotMutation = useMutation({
    mutationFn: async (userInput: string) => {
      console.log("chatBotMutation mutationFn");
      return handleOpenAIAsyncGenrator({
        type: openAIAPIEnum.CHAT_COMPLETION,
        data: userInput,
      });
      /*// const chatResponseGenerator = await handleCreateChatCompletion(userInput);
                              // // create chat bot conversation
                              // setConversations((prevState) => {
                              //   return [
                              //     ...prevState,
                              //     {
                              //       content: "",
                              //       id: prevState.length + 1,
                              //       type: userTypes.CHAT_BOT,
                              //       date: new Date(),
                              //     },
                              //   ];
                              // });
                              // /!* setInterval with async yield generator  *!/
                              // const delay = 100;
                              // const interval = setInterval(async () => {
                              //   const { done, value } = await chatResponseGenerator.next();
                              //
                              //   if (done) {
                              //     clearInterval(interval);
                              //     return;
                              //   }
                              //
                              //   if (value) {
                              //     setLoading(false);
                              //     setConversations((prevState) => {
                              //       const lastConversation = prevState[prevState.length - 1];
                              //       prevState[prevState.length - 1] = {
                              //         ...lastConversation,
                              //         content: `${lastConversation.content}${value}`,
                              //       };
                              //       // don't return prevState
                              //       // return [...prevState]
                              //       return [...prevState];
                              //     });
                              //   }
                              // }, delay);
                              /!* while loop with async yield generator *!/
                              // let finish = false;
                              // while (!finish) {
                              //   const { value: content, done } = await chatResponseGenerator.next();
                              //
                              //   if (done) {
                              //     finish = true;
                              //     break;
                              //   }
                              //
                              //   setConversations((prevState) => {
                              //     const lastConversation = prevState[prevState.length - 1];
                              //     const updatedConversation = {
                              //       ...lastConversation,
                              //       content: `${lastConversation.content}${content}`,
                              //     };
                              //     prevState[prevState.length - 1] = updatedConversation;
                              //     return prevState;
                              //   });
                              // }
                              /!* For loop with async yield generator  *!/
                              // for await (const content of chatResponseGenerator) {
                              //   console.log(content);
                              //
                              //   setConversations((prevState) => {
                              //     const lastConversation = prevState[prevState.length - 1];
                              //     const updatedConversation = {
                              //       ...lastConversation,
                              //       content: `${lastConversation.content}${content}`,
                              //     };
                              //     prevState[prevState.length - 1] = updatedConversation;
                              //     return prevState;
                              //   });
                              // }*/
    },
    onSuccess: async (chatResponseGenerator, userInput, context) => {
      console.log("chatBotMutation onSuccess");
      // create chat bot conversation
      setConversations((prevState) => {
        return [
          ...prevState,
          {
            content: "",
            id: prevState.length + 1,
            type: userTypes.CHAT_BOT,
            date: new Date(),
            loading: true,
          },
        ];
      });
      /* setInterval with async yield generator  */
      const delay = 100;
      const interval = setInterval(async () => {
        const { done, value } = await chatResponseGenerator.next();

        if (done) {
          clearInterval(interval);
          return;
        }

        if (value) {
          setConversations((prevState) => {
            const lastConversation = prevState[prevState.length - 1];
            prevState[prevState.length - 1] = {
              ...lastConversation,
              content: `${lastConversation.content}${value}`,
              loading: false,
            };
            // don't return prevState
            // return [...prevState]
            return [...prevState];
          });
        }
      }, delay);
    },
    onError: (error) => {
      console.log("chatBotMutation onError");
      console.error(error);
    },
  });

  useEffect(() => {
    if (!isEmpty(conversations)) {
      handleChatBoxScroll();
    }
  }, [conversations]);

  const handleChatBoxScroll = () => {
    chatBoxRef.current.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const renderAvatar = (conversation: Conversation) => {
    switch (conversation.type) {
      case userTypes.CHAT_BOT:
        return (
          <Avatar variant="circular" alt="My logo" src="/robot.png">
            {conversation.id}
          </Avatar>
        );
      case userTypes.USER:
      default:
        return (
          <Avatar variant="circular" alt="My logo" src="/my_logo.jpeg">
            {conversation.id}
          </Avatar>
        );
    }
  };

  const renderLoading = (conversation: Conversation) => {
    if (conversation.loading && conversation.type === userTypes.CHAT_BOT) {
      return (
        <div className="ml-2">
          <CircularProgress size={20} />
        </div>
      );
    }
    return null;
  };

  const renderChatBox = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          height: "58vh",
          overflow: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        data-testid="chat_bot_chat_box"
        ref={chatBoxRef}
      >
        {conversations.map((conversation, index) => (
          <ChatBoxItem
            key={index}
            sx={{
              backgroundColor:
                conversation.type === userTypes.CHAT_BOT
                  ? "#ada3ad"
                  : "#8ca1b4",
            }}
          >
            <Typography color={grey[200]}>
              {conversation.date.toLocaleTimeString()}
            </Typography>
            <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
              {renderAvatar(conversation)}
              {renderLoading(conversation)}
              <Typography>{conversation.content}</Typography>
            </Stack>
          </ChatBoxItem>
        ))}
      </Box>
    );
  };

  const handleInput = (e: any) => {
    e.preventDefault();
    const input = e.target.value;
    setUserInput(input);
  };

  const handleSubmitInput = async (e: any) => {
    e.preventDefault();
    if (isEmpty(userInput)) return;
    // user input conversation
    setConversations((prevState) => {
      return [
        ...prevState,
        {
          content: userInput,
          date: new Date(),
          id: prevState.length + 1,
          type: userTypes.USER,
          loading: false,
        },
      ];
    });
    setUserInput("");
    await chatBotMutation.mutate(userInput);
  };

  const handleKeyDown = async (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSubmitInput(e);
    } else if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setUserInput((input) => input + "\n");
    }
  };

  const renderUserInputBox = () => {
    return (
      <FormControl
        data-testid="user_input_box_form_control"
        sx={{ width: "100%", marginY: 2, position: "sticky", bottom: 0 }}
      >
        {/*<InputLabel htmlFor="chat-box">JoJo Chatbot</InputLabel>*/}
        <TextField
          id="chat-box"
          data-testid="chat_bot_chat_box"
          multiline={true}
          rows={3}
          label="JoJo Chatbot"
          value={userInput}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <IconButton
                color="primary"
                aria-label="directions"
                sx={{ position: "absolute", right: 2, bottom: 4 }}
                onClick={handleSubmitInput}
              >
                <DirectionsIcon />
              </IconButton>
            ),
          }}
        />
      </FormControl>
    );
  };

  return (
    <Box
      data-testid="chat-window-component"
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {renderChatBox()}
      {renderUserInputBox()}
    </Box>
  );
}
