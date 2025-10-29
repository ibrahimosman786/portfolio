# Contact Form Setup Guide

Your contact form is now set up to use a backend API route. Here's how to make it work:

## Option 1: Quick Setup with Resend (Recommended)

Resend is free for up to 3,000 emails/month and easy to set up.

### Steps:

1. **Sign up for Resend**:
   - Go to https://resend.com
   - Sign up for free
   - Verify your email

2. **Get your API key**:
   - Go to API Keys in your Resend dashboard
   - Create a new API key
   - Copy the key

3. **Add domain (optional for development)**:
   - For production, add and verify your domain
   - For testing, you can use the default Resend domain

4. **Install Resend package**:
   ```bash
   npm install resend
   ```

5. **Update the API route** (`pages/api/contact.js`):
   - Uncomment the Resend code
   - Replace `process.env.RESEND_API_KEY` with your actual key

6. **Create `.env.local` file** in the root directory:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

比你 **Test it**:
   - Run `npm run dev`
   - Submit the contact form
   - Check your email inbox!

---

## Option 2: Use EmailJS (Current Setup)

If you prefer to keep EmailJS:

1. **Sign up** at https://www.emailjs.com (free tier available)
2. **Create a service** (Gmail, Outlook, etc.)
3. **Create an email template** with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key

5. **Create `.env.local` file**:
   ```env
   NEXT_PUBLIC_SERVICE_ID=your_service_id
   NEXT_PUBLIC_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_KEY=your_emailjs_key
   ```

6. **Update Contact.jsx** to use EmailJS (currently using API route)

---

## Option 3: Use SendGrid

1. Sign up at https://sendgrid.com
2. Get API key
3. Install: `npm install @sendgrid/mail`
4. Update API route with SendGrid code

---

## Option 4: Use Nodemailer with SMTP

For using your own SMTP server (Gmail, Outlook, etc.):

1. Install: `npm install nodemailer`
2. Update API route to use Nodemailer
3. Add SMTP credentials to `.env.local`

---

## Current Setup

Right now, the form sends data to `/api/contact` which logs the submission. You need to add an email service to actually send emails.

**Your email**: ibrahi10@ualberta.ca

---

## After Setup

1. **Test locally**: Submit the form and check your email
2. **Deploy**: When deploying to Vercel, add your environment variables in the Vercel dashboard
3. **Monitor**: Check email delivery and form submissions

---

## Troubleshooting

- **Form not submitting?** Check browser console for errors
- **No email received?** Check spam folder, verify API keys
- **API route error?** Check server logs in terminal/vercel logs

