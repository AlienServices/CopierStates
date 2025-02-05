import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  // Create transporter using your domain's SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.copiersutah.com', // Your SMTP server
    port: 587,  // Usually 587 for TLS
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'info@copiersutah.com',
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: 'info@copiersutah.com',
      to: 'info@copiersutah.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 