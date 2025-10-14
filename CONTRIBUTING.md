# Contributing to quick-express-cli 🚀

Thank you for your interest in contributing to **quick-express-cli**, a CLI tool that helps developers quickly generate boilerplate Express.js projects with router and controller options.

We welcome contributions from everyone — whether you’re fixing a typo, improving code structure, or adding new features. This guide will help you get started smoothly.

📦 **NPM Package:** [quick-express-cli on npm](https://www.npmjs.com/package/quick-express-cli?activeTab=readme)

You can explore the published package, verify the latest version, and test the CLI directly using:

```bash
npx quick-express-cli
```

---

## 🧭 How to Contribute

### 1. Fork the Repository

Click the **Fork** button (top-right) to create your copy of the repo under your GitHub account.

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/quick-express-cli.git
cd quick-express-cli
```

### 3. Set Up the Project

Install dependencies:

```bash
npm install
```

Run the CLI locally (for testing):

```bash
node bin/index.js
```

---

## 🧩 Making Changes

### 1. Create a New Branch

Always create a new branch for your changes:

```bash
git checkout -b feature/add-router-option
```

Use a clear and descriptive branch name:

- `fix/typo-in-readme`
- `feature/add-controller-support`
- `chore/update-dependencies`

### 2. Write Clean, Readable Code

Follow standard **JavaScript (ES6+)** practices:

- Use meaningful variable and function names.
- Prefer `const` and `let` over `var`.
- Keep functions small and focused.
- Use consistent indentation (2 spaces).

### 3. Add Helpful Comments

If logic is non-trivial, add short, meaningful comments.

---

## 🧪 Testing Your Changes

After making modifications, test the CLI locally:

```bash
npm link
quick-express-cli
```

or simply:

```bash
node bin/index.js
```

Make sure your change works as expected across all three templates:

- Basic Express
- Express with Router
- Express with Router & Controllers

---

## 🧱 Commit Guidelines

Write **meaningful and consistent** commit messages:

```
feat: add controller generation support
fix: correct router folder path
docs: improve usage examples
```

Prefix your commits with:

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `refactor:` — code refactoring (no feature/bug change)
- `chore:` — maintenance tasks (build, deps, etc.)

---

## 🔁 Submitting Your Pull Request

1. Push your branch:

   ```bash
   git push origin feature/add-controller-option
   ```

2. Go to your fork on GitHub and click **New Pull Request**.
3. Fill in:

   - **Title** — Short, descriptive summary of your change.
   - **Description** — Explain what, why, and how.

4. Link to any related issue(s) if applicable.

Maintainer will review your PR. Please be patient — we value thoughtful code reviews.

---

# 💡 Suggestions for New Contributors

If you’re new to open source, check out issues labeled:

- `good first issue` — beginner-friendly
- `help wanted` — needs more hands

Don’t hesitate to ask for clarification in the issue comments!

---

## 🧾 Code of Conduct

Be kind, respectful, and constructive. We're all here to learn and grow together.

---

## 🏷️ License

By contributing, you agree that your contributions will be licensed under the **MIT License** of this repository.

---

## ❤️ Hacktoberfest Note

If you’re participating in **Hacktoberfest**, your pull request will count as long as:

- It follows this contributing guide.
- It improves the project meaningfully (not spam or duplicate work).
- It’s accepted and merged.

We encourage contributors to open quality PRs that genuinely improve the developer experience of quick-express-cli!

---

Happy Coding!
**— Tanmay Kulkarni (Maintainer and Owner)**
