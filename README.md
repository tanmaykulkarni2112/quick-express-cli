# quick-express-cli

A simple Node.js CLI tool to quickly generate boilerplate Express.js projects with optional router and controller structure.

## Features

- Generate a **Basic Express template**
- Generate an **Express template with Router**
- Generate an **Express template with Router and Controllers**

## Quick Start (No install required)

You can run the CLI directly using `npx`:

```bash
npx quick-express-cli
```

## Installation (Optional)

### Using npm

```bash
npm install -g quick-express-cli
```

### Using yarn

```bash
yarn global add quick-express-cli
```

### Using pnpm

```bash
pnpm add -g quick-express-cli
```

## Usage

Run the CLI:

```bash
quick-express-cli
```

You will be prompted to choose the template you want to generate. The tool will create the necessary files and folders in your current working directory.

## Templates

### 1. Basic Express Template

Creates a simple `server.template.js` with basic Express setup.

### 2. Express Template with Router

Creates:

- `server.template.js`
- `routes/router.js` folder with routing logic

### 3. Express Template with Router and Controllers

Creates:

- `server.template.js`
- `routes/router.js`
- `controllers/routeController.js`

Provides separation of route handlers and controllers for cleaner code structure.

## ⚠️**Note:**

If you rename the generated `server.template.js` file to a different name (like `server.js`), you need to update the `"start"` script in your `package.json` to match the new filename. Otherwise, running `npm start` won’t work correctly.

For example, if you rename to `server.js`, change:

```json
"scripts": {
  "start": "node server.template.js"
}
```

to

```json
"scripts": {
  "start": "node server.js"
}
```

This ensures that the command `npm start` runs the correct file.

# 🤝 Contributing

We welcome pull requests! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) guide before you start.

## License

MIT © Tanmay Kulkarni
