import { getProducts } from '../src/api/products.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getProducts(req, res);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}