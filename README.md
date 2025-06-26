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

You can follow the guided questions to generate your README.md file automatically.

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
## 🚧 Upcoming Improvements & TODOs

### 🏗️ Core Features
- [ ] **Template system** (`--template=react|python|go`)  
- [ ] **GitHub integration** (auto-fetch license/languages)  
- [ ] **Custom output paths** (`--output=docs/README.md`)  
- [ ] AI-powered README generation with OpenAI API
- [ ] Custom templates support
- [ ] Badge generators

### 🩹 Health Checks
- [ ] **Input validation** (required fields, format checks)  
- [ ] **File system safety** (write permissions, fallbacks)  
- [ ] **Unit tests** (Jest + mocked I/O)  

### ✨ Quality of Life
- [ ] **Better `--help`** (list all options)  
- [ ] **Version flag** (`--version`)  
- [ ] **Demo GIF** in docs  

## 🤝 Contributing

Feel free to open an issue or submit a pull request!

## License

This project is licensed under the **MIT License**.

---

Made with ❤️ by [Pooreffects](https://github.com/pooreffects)
