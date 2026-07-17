import { ApiClient, ApiVersion } from "./ApiClient";

export const API = {
  users: {
    id: (userId: string | "@me") =>
      ApiClient.get<any>(ApiVersion.V1, `/users/${userId}`),
  },
};
