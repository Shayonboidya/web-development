# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.




# 🚀 Dev Stack Builder

### Build Your Developer Stack, One Technology at a Time!

Dev Stack Builder is a React-based web application that helps developers create and manage their personal technology stacks. Users can explore different technologies, select their preferred tools, and build a stack that matches their development interests.

## 🛠️ Technologies Used

- **React** – Building reusable UI components
- **TypeScript** – Writing type-safe code
- **Tailwind CSS** – Styling and responsive design
- **Vite** – Fast development and build tool
- **JSON** – Storing and loading technology data

## ✨ Key Features

- **🔍 Explore Technologies:** Browse different technologies and tools for development.
- **➕ Build Your Stack:** Select technologies and create your own personalized developer stack.
- **📱 Responsive Design:** Enjoy a clean and user-friendly interface on different screen sizes.

## 📸 Project Preview

<!-- Add your project screenshot here -->
<!-- Example: ![Dev Stack Builder](./screenshots/homepage.png) -->

## 🚀 Getting Started

Follow these steps to run the project locally.

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project folder:

   ```bash
   cd YOUR_PROJECT_FOLDER
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## 📚 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook stores and updates data in a React component. I used it to manage the selected technologies in my developer stack and update the UI when the selection changes.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects in a component. I used it to load technology data from a JSON file when the component first renders.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each list item. It allows React to update the correct items efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying UI elements based on a condition. I used it to show an empty stack message when no technologies have been selected.

Example:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty. Add some technologies!</p>
) : (
  stack.map((technology) => (
    <TechnologyCard
      key={technology.id}
      technology={technology}
    />
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. To send information back, the parent passes a callback function as a prop, and the child calls that function with the required data.

Example:

```tsx
// Parent component
<TechnologyCard
  technology={technology}
  onSelect={handleSelect}
/>

// Child component
<button onClick={() => onSelect(technology)}>
  Add to Stack
</button>
```

## 👨‍💻 Author

**Shayon Boidya**

- GitHub: [@Shayonboidya](https://github.com/Shayonboidya)

---

⭐ If you like this project, consider giving it a star!
