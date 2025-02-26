import type { ReadmeOptions } from './interfaces/readme-options';

export function generateReadme({
  name,
  description = '',
  github = '',
  license,
  techStack = [],
  features = [],
  usage = '',
  contributing = '',
  acknowledgments = '',
}: ReadmeOptions): string {
  return `# 🚀 **${name}**

${description ? `_${description}_\n` : ''}

---

## 📖 **Table of Contents**
- [🏷 **Badges**](#-badges)
- [🚀 **Installation**](#-installation)
${features.length > 0 ? '- [🛠 **Features**](#-features)\n' : ''}
${techStack.length > 0 ? '- [🛠 **Tech Stack**](#-tech-stack)\n' : ''}
${github ? '- [🔗 **GitHub Repository**](#-github-repository)\n' : ''}
${usage ? '- [📌 **Usage**](#-usage)\n' : ''}
${contributing ? '- [🤝 **Contributing**](#-contributing)\n' : ''}
${acknowledgments ? '- [💡 **Acknowledgments**](#-acknowledgments)\n' : ''}
- [📜 **License**](#-license)

---

## 🏷 **Badges**
![License](https://img.shields.io/badge/license-${license}-blue.svg)
${
  github
    ? `![GitHub stars](https://img.shields.io/github/stars/${github}?style=flat-square)\n`
    : ''
}

---

## 🚀 **Installation**
### **1️⃣ Install dependencies:**
\`\`\`sh
npm install
\`\`\`
### **2️⃣ Run the project:**
\`\`\`sh
npm start
\`\`\`

---

${features.length > 0 ? `## 🛠 **Features**\n` : ''}
${
  features.length > 0
    ? features.map((feature) => `- ✅ ${feature}`).join('\n') + '\n\n---\n'
    : ''
}

${techStack.length > 0 ? `## 🛠 **Tech Stack**\n` : ''}
${
  techStack.length > 0
    ? techStack.map((tech) => `- 🛠 ${tech}`).join('\n') + '\n\n---\n'
    : ''
}

${
  github
    ? `## 🔗 **GitHub Repository**\n🔗 [**View on GitHub**](https://github.com/${github})\n\n---\n`
    : ''
}

${usage ? `## 📌 **Usage**\n📖 ${usage}\n\n---\n` : ''}

${contributing ? `## 🤝 **Contributing**\n💡 ${contributing}\n\n---\n` : ''}

${
  acknowledgments
    ? `## 💡 **Acknowledgments**\n🙌 ${acknowledgments}\n\n---\n`
    : ''
}

## 📜 **License**
📝 This project is licensed under the **${license}** License.
`;
}
