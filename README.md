# quick-express-cli

A simple Node.js CLI tool to quickly generate boilerplate Express.js projects with optional router and controller structure.

npx vs. global installation :

`npx quick-response-cli` : *npx* is a package runner. It checks whether `quick-express-cli` is in your system or not. It downloads the latest version from _npm registry_,runs it and afterwards delete itself.
You will always have up-to-date version,keeps your system clean and is ideally used for *one time run only*

`npm install -g quick-express-cli` : *global installation*
It permanently install a specific version of `quick-express-cli` in your system.
It will always be availble in you system,i.e can run your project without internet connection.
It will not update itself so it has to be manually updated regurlarly


## Features

- Generate a **Basic Express template**
- Generate an **Express template with Router**
- Generate an **Express template with Router and Controllers**
- **TypeScript support** - Generate all templates in TypeScript with proper type annotations

## Quick Start (No install required)

You can run the CLI directly using `npx`:

### Recommended: Using `npx`

This is the simplest way to run the generator. `npx` will download and run the latest version of `quick-express-cli` without installing it globally on your system.

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
