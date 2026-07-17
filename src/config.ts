export class ApplicationConfig {
  public static readonly keycloak = {
    clientId: process.env.KEYCLOAK_CLIENT_ID!,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
    issuer: process.env.KEYCLOAK_ISSUER!,
  };

  public static readonly addresses = {
    web: process.env.ADDR_WEB!,
    api: process.env.ADDR_API!,
  };
}

export interface IApplicationConfig {
  keycloak: {
    clientId: string;
    clientSecret: string;
    issuer: string;
  };

  addresses: {
    web: string;
    api: string;
  };
}
