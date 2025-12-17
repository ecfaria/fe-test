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

## Notes

The solutions implemented are intentionally simple due to time constraints. In a production environment, I would make the following improvements:

### API Architecture

- **Separate endpoints**: Currently using a single endpoint for simplicity
  - Fetch only `secrets` object before login
  - Fetch only authenticated user's data after login
  - Implement proper REST endpoints (e.g., `GET /users/:id`) instead of array index access
  - Never return password fields in API responses

### Data Management

- Implement **React Query** for efficient data fetching and caching:

### Testing

- **Unit tests** for `buildOrgTree` utility and data transformation logic
- **Hook tests** for `useFetchData` (loading, error, and success states)
- **Component tests** for TreeNode expand/collapse interactions
- **E2E tests** for critical user paths (authentication flow, navigation)

### Performance Optimization

For large organizational hierarchies, I would implement one of these strategies:

- **Virtual scrolling** (e.g., `@tanstack/react-virtual`) if all data is fetched upfront - only renders visible nodes
- **Lazy loading**: Fetch employee reports on-demand when expanding a node - reduces initial payload and API calls

---

Built for Gong technical assessment.
