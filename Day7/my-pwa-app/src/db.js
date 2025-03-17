// This fill will handle local storage using IndexexDB.

import {openDB} from "idb";
const DB_NAME = "todoDB";
const STORE_NAME = "todos";

const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    }
  });
};

export const addTodo = async (todo) => {
  const db = await initDB();
  return db.add(STORE_NAME, todo);
};

export const getTodos = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const deleteTodo = async (id) => {
  const db = await initDB();
  return db.delete(STORE_NAME, id);
};