"user server";

import { currentUser } from "@clerk/nextjs/server";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("USer is not logged in");
  if (!apiKey) throw new Error("No API Key");
  if (!apiSecret) throw new Error("No API secret");
};
