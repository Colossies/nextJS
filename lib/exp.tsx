import { promises as fs } from 'fs';

export async function get_other_works() {
  const file = await fs.readFile(process.cwd() + '/public/data/other_works.json', 'utf8');
  const r = JSON.parse(file);
  return r;
}

export async function get_work_experience() {
    const file = await fs.readFile(process.cwd() + '/public/data/work_experience.json', 'utf8');
    const r = JSON.parse(file);
    return r;
}

export async function get_timeline() {
  const file = await fs.readFile(process.cwd() + '/public/data/timeline.json', 'utf8');
  const r = JSON.parse(file);
  return r;
}