export interface ReadmeOptions {
  name: string;
  description?: string;
  github?: string;
  license: 'MIT' | 'Apache-2.0' | 'GPL-3.0' | 'BSD-3-Clause';
  techStack?: string[];
  features?: string[];
  usage?: string;
  contributing?: string;
  acknowledgments?: string;
}
