# Portfolio Setup Guide

This portfolio has been customized for Ibrahim Osman based on the 3D Portfolio template.

## Personalization Summary

### Updated Information:
- **Name:** Ibrahim Osman
- **Email:** ibrahi10@ualberta.ca
- **GitHub:** @ibrahimosman786
- **LinkedIn:** @ibrahimo1
- **University:** University of Alberta - Honours BSc in Computing Science (AI Major)

### Experience:
1. **Founder & CTO at HOMI** (Jan 2024 - Present)
   - Fintech + AI Real Estate platform
   - Led 30+ person engineering team
   - Built underwriting/ROI models reducing analysis time by 78%
   
2. **AI/ML Intern at NGCC Software Technologies** (2021-2022)
   - Prototyped robotics and ML projects
   - Built training/evaluation pipelines
   
3. **Lead Developer (Freelance)** (Apr 2018 - Sep 2021)
   - Built and scaled freelancing collective ($70k+ revenue)
   - Led 4-8 person team

### Projects:
1. **StudySpark AI** - RAG-based study platform with spaced repetition
2. **QuantumNeuron** - Multi-agent system with CUDA/Triton kernels
3. **HOMI** - Fintech real estate platform

### Technologies Updated:
- Languages: Python, TypeScript, JavaScript, Go, Rust, Java, C/C++, CUDA C++, SQL, Solidity
- Frameworks: PyTorch, Next.js, React, FastAPI, Node.js, Ray, Three.js
- Libraries: scikit-learn, NumPy, Pandas, OpenCV, Faiss, PGVector, Redis, Docker, Kubernetes

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env.local` file with your EmailJS credentials:

```env
NEXT_PUBLIC_SERVICE_ID=your_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_KEY=your_emailjs_key
```

To set up EmailJS:
1. Sign up at https://www.emailjs.com
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your public key
5. Add the credentials to `.env.local`

### 3. Add Your Resume

Place your resume PDF at:
```
public/document/Ibrahim_Osman_Resume.pdf
```

### 4. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 to see the portfolio.

### 5. Build for Production

```bash
npm run build
npm start
```

## Customization Notes

### To Add Real Project Images:
Replace the placeholder SVG images in `public/assets/projects/` with actual screenshots:
- `study-spark.png`
- `quantum-neuron.png`
- `homi.png`

### To Update Company Logos:
Replace the SVG logos in `public/assets/company/`:
- `homi-logo.svg`
- `ngcc-logo.svg`
- `freelance-logo.svg`

### To Add More Technologies:
Update `constants/index.js` in the appropriate category (languages, frameworks, libraries, tools, environments, databases).

### Contact Form:
The contact form uses EmailJS. Make sure to:
1. Set up your EmailJS account
2. Add the environment variables
3. Test the contact form before deploying

## Deployment

### Deploy to Vercel:
1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel settings
4. Deploy!

The portfolio is optimized for Vercel deployment and includes analytics.

## Features

- ✅ 3D animations using Three.js and React Three Fiber
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ Contact form with EmailJS
- ✅ Timeline for work experience
- ✅ Technology stack showcase
- ✅ Project showcase with links
- ✅ Smooth scroll animations

Enjoy your new 3D portfolio!

