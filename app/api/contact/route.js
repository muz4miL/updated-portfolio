import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY || 're_GxFieH3q_CX79DwS5eExnpF3cwJe3LpJf');

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),
});

export async function POST(req) {
    try {
        const body = await req.json();

        // Validate input
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            console.error('Validation Error:', result.error.flatten());
            return NextResponse.json(
                { success: false, error: result.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { name, email, message } = result.data;

        console.log('Attempting to send email to:', process.env.CONTACT_EMAIL);
        console.log('From:', 'Portfolio Contact <onboarding@resend.dev>');

        // Send email
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL || 'shirazmuzamil2@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            html: `
        <div style="font-family: sans-serif; color: #333;">
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
        </div>
      `,
        });

        console.log('Resend API Response:', data);

        if (data.error) {
            console.error('Resend Error:', data.error);
            return NextResponse.json({
                success: false,
                error: data.error.message || 'Failed to send email. Please verify your email in Resend dashboard.'
            }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Contact API Error:', error);
        console.error('Error Details:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Internal Server Error'
            },
            { status: 500 }
        );
    }
}
