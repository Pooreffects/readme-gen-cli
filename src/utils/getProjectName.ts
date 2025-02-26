import { basename } from 'path';

export const getProjectName = (input: string) =>
  input.trim() === '.' ? basename(process.cwd()) : input.trim();
