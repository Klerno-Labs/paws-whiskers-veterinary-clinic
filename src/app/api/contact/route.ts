import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Validate and process data here
  return NextResponse.json({ message: "Form submitted successfully!" });
}