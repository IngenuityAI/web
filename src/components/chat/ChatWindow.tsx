"use client";

import {
  Chat,
  Message as MessageModel,
  MessageRole,
} from "../../../generated/prisma/interfaces";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import { Message, MessageContent } from "@/components/ui/message";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { useEffect, useRef, useState } from "react";
import { API } from "@/classes/API";
import { queryClient } from "@/providers/ReactQueryProvider";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IChatWindowProps {
  messages: MessageModel[];
  chatId: string;
}

export function ChatWindow(props: IChatWindowProps) {
  const sseMessageId = useRef<string | null>(null);
  const [sseMessageContent, setSseMessageContent] = useState<string | null>(
    null,
  );
  const sse = useRef<any>(null);

  useEffect(() => {
    const lastMessage = props.messages[props.messages.length - 1];
    if (!lastMessage.isGenerating) return;

    if (sseMessageId.current === lastMessage.id) return;
    sseMessageId.current = lastMessage.id;
    setSseMessageContent(lastMessage.content);

    if (sse.current) sse.current.close();

    API.chats
      .id(lastMessage.chatId)
      .messages.id(lastMessage.id)
      .stream()
      .then((es) => {
        sse.current = es;

        es.on("token", (event) => {
          const { content, id } = JSON.parse(event.data);

          console.log(content);
          setSseMessageContent((prev) => (prev ?? "") + content.text);
        });
      });

    return () => {
      if (sse.current) sse.current.close();
    };
  }, [props.messages]);

  return (
    <MessageScrollerProvider autoScroll>
      <MessageScroller>
        <MessageScrollerViewport>
          <MessageScrollerContent className="mx-auto max-w-200 pt-24 pb-8">
            {props.messages.map((message) => (
              <MessageScrollerItem
                key={message.id}
                messageId={message.id}
                scrollAnchor={message.role == MessageRole.USER}
              >
                <Message
                  align={message.role == MessageRole.USER ? "end" : "start"}
                >
                  <MessageContent>
                    <Bubble
                      variant={
                        message.role == MessageRole.USER ? "default" : "ghost"
                      }
                    >
                      <BubbleContent
                        className={`text-base prose prose-sm ${message.role == MessageRole.USER ? "" : "prose-invert"}`}
                      >
                        <Markdown remarkPlugins={[remarkGfm]}>
                          {message.id == sseMessageId.current
                            ? sseMessageContent
                            : message.content}
                        </Markdown>
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
