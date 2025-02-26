import inquirer from 'inquirer';
import kleur from 'kleur';
import { writeFile } from 'fs/promises';
import { generateReadme } from './generator.ts';
import { showBanner } from './banner.ts';
import { getProjectName } from './utils/getProjectName.ts';

export async function runCLI() {
  showBanner();
  // User input prompts with simple validation
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: kleur.green("Project Name (use '.' for current folder):"),
      default: 'my-project',
      filter: getProjectName,
      validate: (input) =>
        input.trim() ? true : 'Project name cannot be empty!',
    },
    {
      type: 'input',
      name: 'description',
      message: kleur.green('Project Description (leave empty to skip):'),
      default: '',
    },
    {
      type: 'input',
      name: 'github',
      message: kleur.green(
        'GitHub Repo (username/repo) (leave empty to skip):'
      ),
      default: '',
      validate: (input) => {
        if (!input) return true; // Allow empty input
        return /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+$/.test(input)
          ? true
          : 'GitHub repo must be in the format "username/repo".';
      },
    },
    {
      type: 'list',
      name: 'license',
      message: kleur.green('Choose a License:'),
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause'],
      default: 'MIT',
    },
    {
      type: 'checkbox',
      name: 'techStack',
      message: kleur.green('Select the Tech Stack (press space to select):'),
      choices: [
        'JavaScript',
        'TypeScript',
        'React',
        'Vue',
        'Node.js',
        'Express',
        'Next.js',
        'Astro',
        'TailwindCSS',
        'MongoDB',
        'PostgreSQL',
      ],
      validate: (input) =>
        input.length ? true : 'You must select at least one technology!',
    },
    {
      type: 'checkbox',
      name: 'features',
      message: kleur.green('Select Features (press space to select):'),
      choices: [
        'Authentication',
        'Database Integration',
        'Dark Mode',
        'REST API',
        'GraphQL Support',
        'File Uploads',
        'Live Chat',
      ],
    },
    {
      type: 'input',
      name: 'usage',
      message: kleur.green('Usage Instructions (leave empty to skip):'),
      default: '',
    },
    {
      type: 'input',
      name: 'contributing',
      message: kleur.green('Contributing Guidelines (leave empty to skip):'),
      default: '',
    },
    {
      type: 'input',
      name: 'acknowledgments',
      message: kleur.green('Acknowledgments (leave empty to skip):'),
      default: '',
    },
  ]);

  const markdown = generateReadme(userInput);

  // Preview of the generated README
  console.log(kleur.bold().underline('\n📜 README Preview:\n'));
  console.log(kleur.cyan(markdown));

  // Confirmation before saving
  const { confirmSave } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmSave',
      message: kleur.yellow('Do you want to save this README to README.md?'),
      default: true,
    },
  ]);

  if (confirmSave) {
    await writeFile('README.md', markdown, 'utf-8');
    console.log(kleur.green('✅ README.md generated successfully!'));
  } else {
    console.log(kleur.yellow('❌ README.md was not saved.'));
  }
}
