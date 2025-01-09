import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, service } = body;

    const data = await resend.emails.send({
      from: 'Lantai Tiga Contact Form <contact@lantaitiga.com>',
      to: [process.env.CONTACT_FORM_TO_EMAIL || 'business.lantaitiga@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({
        name,
        email,
        company,
        phone,
        message,
        service
      })
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
