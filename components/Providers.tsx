"use client";

import { SessionProvider } from "next-auth/react";
import { DefaultSession } from "next-auth";

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: DefaultSession;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
