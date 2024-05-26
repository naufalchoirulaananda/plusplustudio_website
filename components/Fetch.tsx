"use client";
import { supabase } from "@/app/utils/supabaseClient";
import React, { useEffect, useState } from "react";

export default function Fetch() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("orderin").select("*");
      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    };
    getData();
  }, []); // Tambahkan array dependensi kosong untuk menjalankan sekali saja

  return (
    <div className="relative overflow-x-auto mx-8 my-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {/* Ganti 'kolom1', 'kolom2', dst. dengan nama kolom sebenarnya dari data Anda */}
            <th scope="col" className="px-6 py-3">
              Order Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Package
            </th>
            <th scope="col" className="px-6 py-3">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b">
              {/* Ganti 'kolom1', 'kolom2', dst. dengan nama properti sebenarnya dari item data Anda */}
              <td className="px-6 py-4">{item.name}</td>
              <td>
                <a
                  href={`mailto:${item.email}?subject=Pesan dari PlusPlustudio&body=Halo ${item.name},`}
                >
                  {item.email}
                </a>
              </td>

              <td className="px-6 py-4">
                <a href={`https://wa.me/${item.phone}`}>{item.phone}</a>
              </td>
              <td className="px-6 py-4">{item.selectedPackage}</td>
              <td className="px-6 py-4">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
