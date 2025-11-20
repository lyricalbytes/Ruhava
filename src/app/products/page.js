// /app/products/page.js
import React from 'react';
import ProductCard from '../../components/ProductCard';

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/products`, { cache: "no-store" });
  // on Vercel during dev, you can call relative path: "/api/products"
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Ruhava Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </main>
  );
}
