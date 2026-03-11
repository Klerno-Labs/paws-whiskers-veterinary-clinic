import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, _gotcha } = body

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // In a real static export, you can't use server-side email sending logic 
    // unless you deploy the API routes separately (e.g., Vercel Functions).
    // Since this is a static showcase, we will simulate success.
    
    console.log("Received Contact Form Submission:", { name, email, phone, subject, message })

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}