# 📄 Blazingly Fast README Generator CLI

Effortlessly generate high-quality **README.md** files for your projects using an interactive command-line interface — powered by **Bun**.

## 🚀 Features

- Interactive prompts powered by **Inquirer.js**
- Customizable sections (Description, Tech Stack, Usage, Contributing, License)
- Automatic project name detection
- Modern syntax with **TypeScript**
- Colorful terminal UI with **Kleur**
- Blazingly fast execution using **Bun**

## 📦 Installation

### Prerequisites

Make sure you have **Bun** installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Install CLI globally

```bash
bun install -g readme-gen-cli
```

## 🔥 Usage

To launch the interactive prompt:

```bash
readme-gen
```

Follow the guided questions to generate your README.md file automatically.

### Example Output

```bash
? Project Name: My Cool Project
? Description: A blazing fast CLI tool
? Tech Stack: TypeScript, Node.js, TailwindCSS
? License: MIT
✅ README.md generated successfully!
```

## 📄 Generated README.md Example

```markdown
# My Cool Project

## Description

A blazing fast CLI tool

## Tech Stack

- TypeScript
- Node.js

## License

This project is licensed under the MIT License.
```

## 🛠️ Development

Clone the repo:

```bash
git clone https://github.com/pooreffects/readme-gen-cli.git
cd readme-gen-cli
bun install
```

### Run Locally

```bash
bun run main.ts
```

### Build

```bash
bun build main.ts --outfile main.js
```

### Tests

```bash
bun test
```

## 🎯 Roadmap

- [ ] AI-powered README generation with OpenAI API
- [ ] Custom templates support
- [ ] Badge generators

## 🤝 Contributing

Feel free to open an issue or submit a pull request!

## License

This project is licensed under the **MIT License**.

---

Made with ❤️ by [Pooreffects](https://github.com/pooreffects)
