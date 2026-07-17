import { ApplicationConfig } from "@/config";
import { NextResponse } from "next/server";

export async function GET() {
  // IMPORTANT: Make sure not to leak anything sensitive!
  return NextResponse.json({ ...ApplicationConfig.addresses });
}
