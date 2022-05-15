import { getDBConnection } from './db.js';

export async function getCoworkersCount() {
  const conn = await getDBConnection();

  try {
    const [rows, _fields] = await conn.execute('select * from coworkers');
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await conn.end();
  }
}

export async function getCoworkersList() {
  const conn = await getDBConnection();

  try {
    const [rows, _fields] = await conn.execute('select * from coworkers');
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await conn.end();
  }
}

export async function getCoworkerById(id) {
  const conn = await getDBConnection();

  try {
    const [rows, _fields] = await conn.execute('select * from coworkers where id = ?', [id]);
    return rows[0];
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await conn.end();
  }
}

export async function getCoworkerByName(name) {
  const conn = await getDBConnection();

  try {
    const [rows, _fields] = await conn.execute('select * from coworkers where name regexp(?)', [name]);
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await conn.end();
  }
}

export async function saveCoworker(coworker) {
  const conn = await getDBConnection();

  try {
    const [rows, _fields] = await conn.execute('insert into coworkers set ?', coworker);
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await conn.end();
  }
}

export async function saveManyCoworkers(list) {
  const conn = await getDBConnection();
  const results = [];

  for (coworker of list) {
    try {
      const [rows, _fields] = await conn.execute('insert into coworkers set ?', coworker);
      results.push(rows);
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      await conn.end();
    }
  }
}

export async function updateCoworker(data, filter) {
  const conn = await getDBConnection();

  try {
    const [rows, _fields] = await conn.execute('update coworkers set ? where ?', [data, filter]);
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await conn.end();
  }
}
