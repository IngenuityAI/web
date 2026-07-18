"use client";

import {
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

interface IChatWindowProps {
  messages: MessageModel[];
}

export function ChatWindow(props: IChatWindowProps) {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="max-w-200">
        <MessageScrollerViewport>
          <MessageScrollerContent>
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
                      <BubbleContent className="text-base">
                        {message.content}
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
