import { ApiClient, ApiVersion } from "./ApiClient";
import { Chat, User } from "../../generated/prisma/interfaces";

export const API = {
  users: {
    id: (userId: string | "@me") => ({
      get: () => ApiClient.get<User>(ApiVersion.V1, `/users/${userId}`),
    }),
  },

  chats: {
    create: (prompt: string) =>
      ApiClient.post<Chat, { prompt: string }>(ApiVersion.V1, "/chats", {
        prompt,
      }),
    id: (chatId: string) => ({
      get: () => ApiClient.get<Chat>(ApiVersion.V1, `/chats/${chatId}`),

      messages: {
        id: (messageId: string) => ({
          stream: async () =>
            await ApiClient.sse(
              ApiVersion.V1,
              `/chats/${chatId}/messages/${messageId}/stream`,
            ),
        }),
      },
    }),
  },
};
