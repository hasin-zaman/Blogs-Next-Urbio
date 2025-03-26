# Blogs Urbio

## Overview
Blogs Urbio is a Next.js-powered blog application that fetches and displays blog posts from jsonPlaceholder APIs. It is deployed at [blogs-urbio.vercel.app](https://blogs-urbio.vercel.app/).

## Features
- API calls and data caching with RTK Query.
- Optimized API calls to fetch and store transformed data in Redux.
- Responsive design with a simple and clean UI.

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v22.14.0 recommended)
- npm or yarn

### Installation & Setup
```bash
# Clone the repository
git clone https://github.com/hasin-zaman/Blogs-Next-Urbio
cd Blogs-Next-Urbio

# Install dependencies
npm install  # or yarn install

# Run the development server
npm run dev  # or yarn dev

# Open the project in your browser
http://localhost:3000
```

---

## 🛠 Design Decisions & Challenges

### 1️⃣ Handling Missing Author Names
The API only provided author IDs instead of names, so an additional request was needed to fetch user details. To optimize performance:
- **Transformed API response**: Combined posts and user data before storing them.
- **Stored transformed data in Redux**: Eliminated redundant API calls for each blog page.

### 2️⃣ Optimizing API Calls
Since each blog page required an author's name but calling the API repeatedly would be inefficient:
- Stored processed blog posts in Redux.
- This eliminated API calls when navigating between blog pages.

---

## 🏗 Tech Stack
- **TypeScript** – Language
- **Next.js** – Framework
- **Redux Toolkit & RTK Query** – State & API management
- **MUI** – Styling
