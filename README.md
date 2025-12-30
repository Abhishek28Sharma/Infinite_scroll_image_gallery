# 📸 Infinite Scroll Image Gallery (React)

A modern **React image gallery** that fetches images from the **Picsum API** with  
✨ **Shimmer (Skeleton) Loading**  
🔁 **Infinite Scroll using Intersection Observer**  
⚛️ **Clean & Reusable Component Architecture**

This project demonstrates **real-world frontend patterns** used in production apps like Instagram, Pinterest, and Unsplash.

---

## 🚀 Features

- 🔄 Infinite scrolling (auto-load images on scroll)
- ✨ Shimmer / Skeleton loader while fetching data
- ⚡ Smooth user experience
- 🧩 Reusable React components
- 📦 API-based pagination
- 🎯 Clean and scalable code structure

---

## 🛠️ Tech Stack

- **React.js** (Functional Components + Hooks)
- **Axios** (API calls)
- **Intersection Observer API** (Infinite Scroll)
- **CSS Modules** (Scoped styling)
- **Picsum API** (Image source)

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Card.jsx
│   ├── CardContainer.jsx
│   ├── ShimmerCardList.jsx
│   └── Pagination.jsx   # UI only
│
│── styles/
│   ├── Card.module.css
│   ├── CardContainer.module.css
│   └── App.module.css
│
│── App.jsx
│── main.jsx
```

---

## 🔄 Infinite Scroll Logic (Overview)

1. Images are fetched page-by-page from the API
2. A **sentinel div** is observed using `IntersectionObserver`
3. When the user reaches the bottom:
   - Next page is triggered
   - Shimmer loader appears
   - New images are appended to existing data

---

## ✨ Shimmer Loading Strategy

- Uses a dedicated `loading` state
- Shimmer appears:
  - On initial load
  - While fetching next pages
- Shimmer disappears once data is loaded

---

## 📦 API Used

**Picsum Image API**

```
https://picsum.photos/v2/list?page=1&limit=10
```

---

## 🧪 Installation & Setup

```bash
git clone https://github.com/Abhishek28Sharma/Infinite_scroll_image_gallery
cd Infinite_scroll_image_gallery
npm install
npm run dev
```

---

