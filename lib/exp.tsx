import { promises as fs } from 'fs';

export async function get_other_works() {
  const file = await fs.readFile(process.cwd() + '/public/data/other_works.json', 'utf8');
  const works = JSON.parse(file);
  
  return works;
}

export async function get_work_experience() {
    const file = await fs.readFile(process.cwd() + '/public/data/work_experience.json', 'utf8');
    const jobs = JSON.parse(file);
    
    return jobs;
}