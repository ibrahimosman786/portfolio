export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Here you can integrate with:
    // 1. EmailJS (client-side alternative)
    // 2. Resend API (recommended for production)
    // 3. SendGrid
    // 4. Nodemailer with SMTP
    // 5. AWS SES

    // Using Resend to send emails
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: 'Email service not configured' });
    }
    
    const emailContent = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ibrahi10@ualberta.ca'],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        This message was sent from your portfolio contact form.
      `,
    };

    // Send email to Ibrahim (notification)
    await resend.emails.send(emailContent);
    
    // Send thank you email to the person who submitted the form
    const thankYouEmail = {
      from: 'Ibrahim Osman <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #804dee;">Thank you for contacting me!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
          <p>Your message:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p>I typically respond within 24-48 hours.</p>
          <p>Best regards,<br><strong>Ibrahim Osman</strong><br>Founder of HOMI | AI & Space Engineer</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">This is an automated confirmation email. If you have any urgent inquiries, please contact me directly at ibrahi10@ualberta.ca</p>
        </div>
      `,
      text: `
Thank you for contacting me!

Hi ${name},

Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.

Your message:
${message}

I typically respond within 24-48 hours.

Best regards,
Ibrahim Osman
Founder of HOMI | AI & Space Engineer

---
This is an automated confirmation email. If you have any urgent inquiries, please contact me directly at ibrahi10@ualberta.ca
      `,
    };

    await resend.emails.send(thankYouEmail);
    
    console.log('Contact form submission sent:', {
      name,
      email,
      timestamp: new Date().toISOString(),
    });

    // Send success response
    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}

