```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Validate the data here (e.g., check for required fields)
  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Simulate sending an email or saving to a database
  // In a real application, you would integrate with an email service or database here

  return NextResponse.json({ message: "Thank you! We'll be in touch within 24 hours." }, { status: 200 });
}
```