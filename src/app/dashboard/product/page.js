"use client"
import { useRouter } from "next/navigation";
export default function AdminProductPage() {
  const router = useRouter()
  const revProducts = async () => {
    await fetch("http://localhost:3000/api/revalidate?tag=data", {
      method: "POST",
    });
  };


    return (
      <div>
        
        <button className="bg-red-700 px-2 py-3 rounded-md mt-4" onClick={() =>{ 
          revProducts();
          router.push('/product');
          }}>
          Panggil data product
        </button>
      </div>
    );
}
