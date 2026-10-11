# 🛒 বাজার দর (BazarDor) — Daily Market Price Tracker

**BazarDor** is a full-stack web application designed for people in Bangladesh to check, track, and compare daily market prices for essential commodities like rice, lentils, oil, vegetables, fish, meat, eggs, and spices. It provides real-time insights into price trends, division-wise market breakdowns, and minimum-maximum price ranges across various local markets.

---

## ✨ What It Does

- **Real-Time Price Tracking:** Displays products that have experienced price increases (▲) or decreases (▼) compared to yesterday.
- **Category-Based Filtering:** Organizes items cleanly by categories (Rice, Dal, Oil, Vegetables, Fish, Meat, etc.) with dedicated dynamic pages.
- **Division & Market Breakdown:** Offers deep insight into specific item prices across different divisions (Dhaka, Chattogram, Rajshahi, Khulna, Sylhet, Mymensingh, etc.).
- **Secure Authentication:** Built-in modern auth supporting Email/Password sign-in/sign-up alongside Social Providers (Google & GitHub).
- **User Profiles:** Authenticated users can view their profile details and securely update their account info.
- **Advanced Sorting & Formatting:** Native conversion utilities mapping English/Bengali numerals, custom currency formatting, and dynamic sorting by price.

---

## 🛠️ Skills & Technologies Used

This project showcases full-stack development proficiency using a modern, industry-standard technology stack:

- **Frontend & Routing:** Next.js 16 (App Router, Server & Client Components, Dynamic Routes)
- **Language:** TypeScript (Strict type safety, custom interfaces for Products and Categories)
- **Styling & UI:** Tailwind CSS v4 & DaisyUI (Responsive design, sleek layout, custom animations)
- **Authentication:** BetterAuth with `@better-auth/mongo-adapter` (Secure session management and OAuth handlers)
- **Database:** MongoDB Atlas (NoSQL cloud database configuration)
- **Notifications & Utilities:** React Hot Toast (Interactive feedback alerts), Native fetch APIs with ISR (Incremental Static Regeneration)
- **Deployment & Version Control:** Vercel & Git (Modular component structuring and multi-commit history workflow)

---

## 🚀 How It Works

The application operates by fetching live market datasets dynamically from the Programming Hero open API. Utilizing Next.js Server-Side Rendering and Incremental Static Regeneration, the home and product details pages fetch data server-side with built-in revalidation windows to guarantee lightning-fast loading speeds and fresh updates. Meanwhile, custom middleware constantly intercepts incoming requests to private routes like user profiles, seamlessly checking BetterAuth session tokens and routing unauthenticated visitors to the sign-in portal. Client-side interactivity seamlessly manages category filtering, dynamic price sorting, and profile modifications using native React hooks and feedback toasts.

---

## 📦 Local Installation & Setup

Running this project locally involves cloning the repository to your machine, installing all necessary node packages via your terminal, and creating a `.env.local` configuration file in the root folder containing your MongoDB Atlas connection string, BetterAuth secrets, and OAuth credentials. Once your environment variables are properly mapped, you simply boot up the development server using the local dev script, allowing you to view and test the fully functional web application instantly in your browser.

---

## 🌐 Live Demo

🔗 [Check out the live deployment here](# 🛒 বাজার দর (BazarDor) — Daily Market Price Tracker

**BazarDor** is a full-stack web application designed for people in Bangladesh to check, track, and compare daily market prices for essential commodities like rice, lentils, oil, vegetables, fish, meat, eggs, and spices. It provides real-time insights into price trends, division-wise market breakdowns, and minimum-maximum price ranges across various local markets.

---

## ✨ What It Does

- **Real-Time Price Tracking:** Displays products that have experienced price increases (▲) or decreases (▼) compared to yesterday.
- **Category-Based Filtering:** Organizes items cleanly by categories (Rice, Dal, Oil, Vegetables, Fish, Meat, etc.) with dedicated dynamic pages.
- **Division & Market Breakdown:** Offers deep insight into specific item prices across different divisions (Dhaka, Chattogram, Rajshahi, Khulna, Sylhet, Mymensingh, etc.).
- **Secure Authentication:** Built-in modern auth supporting Email/Password sign-in/sign-up alongside Social Providers (Google & GitHub).
- **User Profiles:** Authenticated users can view their profile details and securely update their account info.
- **Advanced Sorting & Formatting:** Native conversion utilities mapping English/Bengali numerals, custom currency formatting, and dynamic sorting by price.

---

## 🛠️ Skills & Technologies Used

This project showcases full-stack development proficiency using a modern, industry-standard technology stack:

- **Frontend & Routing:** Next.js 16 (App Router, Server & Client Components, Dynamic Routes)
- **Language:** TypeScript (Strict type safety, custom interfaces for Products and Categories)
- **Styling & UI:** Tailwind CSS v4 & DaisyUI (Responsive design, sleek layout, custom animations)
- **Authentication:** BetterAuth with `@better-auth/mongo-adapter` (Secure session management and OAuth handlers)
- **Database:** MongoDB Atlas (NoSQL cloud database configuration)
- **Notifications & Utilities:** React Hot Toast (Interactive feedback alerts), Native fetch APIs with ISR (Incremental Static Regeneration)
- **Deployment & Version Control:** Vercel & Git (Modular component structuring and multi-commit history workflow)

---

## 🚀 How It Works

The application operates by fetching live market datasets dynamically from the Programming Hero open API. Utilizing Next.js Server-Side Rendering and Incremental Static Regeneration, the home and product details pages fetch data server-side with built-in revalidation windows to guarantee lightning-fast loading speeds and fresh updates. Meanwhile, custom middleware constantly intercepts incoming requests to private routes like user profiles, seamlessly checking BetterAuth session tokens and routing unauthenticated visitors to the sign-in portal. Client-side interactivity seamlessly manages category filtering, dynamic price sorting, and profile modifications using native React hooks and feedback toasts.

---

## 📦 Local Installation & Setup

Running this project locally involves cloning the repository to your machine, installing all necessary node packages via your terminal, and creating a `.env.local` configuration file in the root folder containing your MongoDB Atlas connection string, BetterAuth secrets, and OAuth credentials. Once your environment variables are properly mapped, you simply boot up the development server using the local dev script, allowing you to view and test the fully functional web application instantly in your browser.

---

## 🌐 Live Demo

🔗 [Check out the live deployment here](https://assignment-7-v2-alpha.vercel.app/)

---



---

