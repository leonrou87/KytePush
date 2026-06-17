"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "kp_ops";

export type AuthState = { error: string | null };

export async function authenticate(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const pw = String(formData.get("password") ?? "");
  const expected = process.env.ANALYTICS_PASSWORD || "leon";
  if (pw === expected) {
    const jar = await cookies();
    jar.set(COOKIE, "granted", {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    redirect("/analytics");
  }
  return { error: "Access code rejected. Try again." };
}

export async function signOut(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
  redirect("/analytics");
}

export async function isAuthed(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(COOKIE)?.value === "granted";
}
