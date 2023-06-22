// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/example.js
import { useEffect } from 'react';
import data from './hello.JSON'
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

