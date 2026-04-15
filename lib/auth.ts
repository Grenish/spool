import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { dash } from "@better-auth/infra";

const client = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(client, { provider: "postgresql" }),
  baseURL: "http://localhost:3000/",
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    twitter: {
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    },
  },
  plugins: [
    dash({
      apiKey: process.env.BETTER_AUTH_API_KEY,
    }),
  ],
});
