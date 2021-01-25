import 'reflect-metadata';
import { createConnection } from 'typeorm';

export const establishConnection = async () => {
  const connection = await createConnection();

  return connection;
};
