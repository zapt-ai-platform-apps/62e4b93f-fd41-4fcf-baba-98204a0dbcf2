import { initializeZapt } from '@zapt/zapt-js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { eq } from 'drizzle-orm';
import { products } from '../drizzle/schema.js';
import { authenticateUser } from './_apiUtils.js';

const { supabase } = initializeZapt(process.env.VITE_PUBLIC_APP_ID);

const client = postgres(process.env.COCKROACH_DB_URL);
const db = drizzle(client);

export async function getProducts(req, res) {
  try {
    const productList = await db.select().from(products).limit(100);
    res.status(200).json(productList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}