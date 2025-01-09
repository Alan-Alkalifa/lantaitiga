import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: 'mail.lantaitiga.dev',
      to: 'business.lantaitiga@gmail.com',
      subject: 'New Email from Lantai Tiga Contact Form',
      html: '<p>This is a test email from Lantai Tiga contact form.</p>'
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
