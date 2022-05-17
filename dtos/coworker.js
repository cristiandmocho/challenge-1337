import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const dataRaw = readFileSync(join(process.cwd(), 'data', 'saved-data.json'), 'utf-8');
let data = JSON.parse(dataRaw);

export async function getCoworkersCount() {
  return data.length;
}

export async function getCoworkersList(start = 0, end = 0) {
  if (start === 0 && end === 0) return data;

  return data.filter((row, i) => {
    if (i >= start - 1 && i < end) return row;
  });
}

export async function getCoworkerById(id) {
  return data.filter(row => row.id === Number(id));
}

export async function getCoworkerByName(name) {
  return data.filter(row => new RegExp(name, 'gi').test(row.name));
}

export async function updateCoworker(coworker, id) {
  const cw = data.find(row => row.id === id);

  if (cw) {
    Object.assign(cw, coworker);
    writeFileSync(join(process.cwd(), 'data', 'saved-data.json'), JSON.stringify(data), 'utf-8');
  }
}
