# Ron Fabrics B2B Website

A responsive, static B2B platform designed to showcase premium sheep wool collections and generate wholesale leads from clothing brands in Metro Manila. 

## Tech Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Fonts:** Google Fonts (Poppins)

## Features
* **Static Site Generation (SSG):** Optimized for speed and basic hosting environments.
* **Fully Responsive:** Adapts seamlessly across desktop, tablet, and mobile devices.
* **Interactive Navigation:** Sticky, frosted-glass navbar with a custom mobile burger menu overlay.
* **Optimized Assets:** Utilizes Next.js `<Image>` component for performant rendering of high-quality fabric and hero images.

## Getting Started

First, clone the repository and navigate into the project directory:
```bash
cd ron-fabrics
```

Install the dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
* `app/page.tsx` - The main landing page featuring the hero section, wool collections grid, and value propositions.
* `app/contact/page.tsx` - The secondary page containing contact information, company background, and FAQs.
* `app/Navbar.tsx` - The client-side navigation component with mobile state handling.
* `app/layout.tsx` - The root layout wrapping all pages with global fonts and styles.
* `public/images/` - Directory storing all static image assets (hero background, fabric swatches).