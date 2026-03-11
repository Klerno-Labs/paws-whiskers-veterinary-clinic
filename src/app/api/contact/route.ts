import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, _gotcha } = body

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Here you would typically:
    // 1. Validate the data more thoroughly
    // 2. Send an email via Resend, SendGrid, or Nodemailer
    // 3. Save to a database (Supabase, MongoDB, etc.)
    
    console.log("Received contact form submission:", { name, email, phone, subject })

    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}