# Gong Organization Chart

A React application that displays an interactive organizational hierarchy tree.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Features

- Login Page
- Interactive org chart with expand/collapse
- Avatar fallback with initials
- Responsive design

## Environment Variables

The `.env` file is included in this repository for evaluation purposes. In production, this would be in `.gitignore`.

## Project Structure

```
src/
├── components/
│   └── UserAvatar.tsx
├── pages/
│   ├── HierarchyTreePage/
│   │   ├── HierarchyTreePage.tsx
│   │   ├── TreeRoot.tsx
│   │   └── UserNode.tsx
│   └── LoginPage/
│       ├── LoginPage.tsx
│       └── LoginPage.helpers.ts
├── hooks/
│   └── useFetchData.ts
└── utils/
    └── buildOrgTree.ts
```

---

Built for Gong technical assessment.
