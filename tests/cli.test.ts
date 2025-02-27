import { beforeEach, describe, expect, it, vi } from 'vitest';
import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';
import { runCLI } from '../src/cli';
import { generateReadme } from '../src/generator';

// 🔹 Mock dependencies
vi.mock('inquirer', () => ({
  default: { prompt: vi.fn() },
}));

vi.mock('fs/promises', () => ({
  writeFile: vi.fn(),
}));

vi.mock('../src/generator', () => ({
  generateReadme: vi.fn(),
}));

describe('CLI', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should generate README and save it when confirmed', async () => {
    const mockAnswers = {
      name: 'Test Project',
      description: 'A sample project',
      github: 'user/repo',
      license: 'MIT',
      techStack: ['JavaScript', 'Node.js'],
      features: ['Authentication'],
      usage: 'Run npm start',
      contributing: 'Open PRs welcome',
      acknowledgments: 'Special thanks to contributors',
    };

    // 🔹 Mock Inquirer responses
    (inquirer.prompt as any).mockResolvedValueOnce(mockAnswers);
    (inquirer.prompt as any).mockResolvedValueOnce({ confirmSave: true });

    // 🔹 Mock README generation
    (generateReadme as any).mockReturnValue('# Test Project\nA sample project');

    await runCLI();

    // 🔹 Ensure README is generated and written to file
    expect(generateReadme).toHaveBeenCalledWith(
      expect.objectContaining(mockAnswers)
    );
    expect(writeFile).toHaveBeenCalledWith(
      'README.md',
      '# Test Project\nA sample project',
      'utf-8'
    );
  });
});
