"use client";

import { useEffect, useState } from "react";

interface Product {
  productName: string;
  price: string;
  rating: string;
  discount: string;
  availability: string;
}

export default function Home() {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState("Phone");
  const [companies, setCompanies] = useState("AMZ");

  const newComapnies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
  const newCategories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ];

  useEffect(() => {}, []);

  return (
    <>
      <div className="bg-gray-50 w-screen h-screen flex flex-col gap-3">
        <div>Companies</div>
        <div className="flex flex-row gap-4">
          {newComapnies.map((e) => (
            <button
              className="px-4 py-2 bg-slate-900 text-white rounded-full"
              key={e}
              onClick={() => {
                setCompanies(e);
              }}
            >
              {e}
            </button>
          ))}
        </div>
        <div>Categories</div>
        <div className="flex flex-row gap-4 w-full flex-wrap">
          {newCategories.map((e) => (
            <button
              className="px-4 py-2 bg-slate-900 text-white rounded-full flex-wrap"
              key={e}
              onClick={() => {
                setCategory(e);
              }}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
