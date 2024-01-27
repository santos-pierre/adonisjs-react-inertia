# AdonisJS/Inertia Implementation

## Issue

I've been working on integrating Inertia with React in my project and have encountered several issues. However, there's one particular problem I'm struggling with. When I navigate to my page, it just displays a blank screen, and I receive the following error in my console:

```
Home.jsx:1 Uncaught Error: @vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201
    at Home.jsx:1:26
```

I attempted to apply a solution from [this discussion](https://github.com/vitejs/vite/issues/1984#issuecomment-778289660 ), but unfortunately, it didn't solve the problem. At this point, I'm quite unsure about the next steps to take. If anyone has any insights or suggestions on how to address this issue, I would be eager to explore further and try to resolve it.


## Installation

1. Install  [@adonisjs/inertia](https://www.npmjs.com/package/@adonisjs/inertia)

```bash
pnpm i @adonisjs/inertia
```

2. Configure Package

```bash
node ace configure @adonisjs/inertia
```

3. React Packages Installation

```bash
pnpm add -D @vitejs/plugin-react @types/react @types/react-dom
pnpm add @inertiajs/react react react-dom
```
