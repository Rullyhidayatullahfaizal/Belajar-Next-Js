"use client"
import { useEffect, useState } from "react";

// Fungsi untuk mengambil data dari API
async function getData() {
  try {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data.data; // Mengambil array data dari JSON
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
}

export default function AboutPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData); // Menyimpan array data dari JSON ke state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <p>satu dua tiga</p>
        {data && data.length > 0 && data.map((item, index) => (
          <div key={index}>
            <p>judulnya adalah {item.title}</p> {/* Asumsi bahwa 'title' ada di dalam setiap objek 'data' */}
            <p>rank nya adalah {item.rank}</p>
            <p>timezone adalah {item.broadcast.string}</p>
          </div>
        ))}
      </div>
    </>
  );
}
