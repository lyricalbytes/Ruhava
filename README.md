# Ruhava

This is the frontend codebase for **Ruhava**, a modern, responsive e-commerce platform built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).  
The project is designed for scalability, maintainability, and a seamless user experience across devices.

---

## ✨ Features

- **Responsive Design:**  
  Separate desktop and mobile headers for optimal navigation on all devices.
- **Custom Theming:**  
  Uses CSS variables and Tailwind’s `@theme inline` for easy color and font management.
- **Hero & Section Images:**  
  Visually rich hero and secondary sections with background images and overlay text.
- **Modern Stack:**  
  Built with Next.js App Router, React, and Tailwind CSS.
- **Component-Based:**  
  Clean separation of Desktop and Mobile headers, Footer, and page sections.

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🗂️ Project Structure

```
src/
  app/
    page.tsx         # Main page layout and sections
    globals.css      # Global styles and Tailwind config
    ...
  components/
    DesktopHeader.tsx
    MobileHeader.tsx
    Footer.tsx
    ...
  fonts/
  ...
public/
  assets/
  ...            # Images (hero, backgrounds, etc.)
```

---

## 🛠️ Customization

- **Theming:**  
  Edit `globals.css` to change colors or fonts using CSS variables.
- **Images:**  
  Place new images in `public/assets/` and update section backgrounds in `page.tsx`.
- **Navigation:**  
  Update navigation items in `DesktopHeader.tsx` and `MobileHeader.tsx`.

---

## 📦 Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

---

## 🤝 Contributing

Pull requests and suggestions are welcome!  
Please create a new branch for your changes and submit a clear pull request.

---

## 📄 License

This project is proprietary and developed exclusively for the parent organization of Ruhava. 
Contact the project owner for usage or licensing questions.

---

## 👤 Contact

For questions or support, please reach out to the project maintainer.

---