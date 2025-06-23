🎓 Student Portal Web App

A responsive Student Portal web application built using **React**, **Tailwind CSS**, and **Vite**, designed for students to manage academic details in one place. It features a login system, user dashboard, API integration, dark/light mode toggle, and creative UI enhancements.

---

# ✅ Features Implemented

# 🔐 Authentication Pages
- Login with dummy validation (email: `student@portal.com`, password: `123456`)
- Signup form (non-functional, for demo)
- Forgot Password → Reset Password flow
- Auth state stored via `localStorage`

# 📌 Sticky Navbar
- Remains on top while scrolling
- Includes links: Home | Users | Dashboard | Logout
- Displays logged-in user name

# 🏠 Home Page
- Welcome text and intro to the portal

# 👤 Users Page
- Fetches data from: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- Shows user cards with Name, Email, Phone, Website
- Handles loading & error states

# 📊 Dashboard
- Summary cards for GPA, Attendance, Subjects
- Creative layout using Tailwind’s grid and flex utilities

# 🌗 Dark / Light Mode
- Default dark mode with toggle to light mode
- Light mode has custom theme (light blue + black text)
- Available on all pages

# ✨ UI Creative Enhancements
- Page transition animations
- Card hover glow effects
- Toast notifications (react-hot-toast)
- AOS (Animate On Scroll) for dashboard widgets
- Blurred glassmorphism card backgrounds
- Animated toggle switch
- Gradient background transitions
- Responsive cards
- Icons (react-icons)
- Glow-on-focus inputs
- Responsive to small screens

---

# 🌐 Live Site

[https://paridhi-student-portal-apps.netlify.app/
](https://paridhi-student-portal-apps.netlify.app/)---

# 🖼️ Screenshot
https://github.com/paridhi-sharmaaa/Student-Portal-App/tree/main/screenshots
---

# 🧠 What I Learned / Challenges Faced

# 🔍 Key Learnings:
- Managing dark/light theme toggle globally using Tailwind's `dark:` classes
- Working with `react-router-dom` to build protected routes & navigation
- Handling API loading/error states gracefully
- Structuring React apps with components & pages
- Using `react-hot-toast` and `AOS` for better UX

# ⚠️ Challenges:
- Making sure dark mode styling works consistently across all pages
- Styling Tailwind from Figma references
- Netlify deployment with correct build output (`dist/`)

---

# 🛠 Tech Stack

- React
- Tailwind CSS
- React Router DOM
- Axios
- Vite
- AOS (Animate On Scroll)
- React Hot Toast
- React Icons

---



