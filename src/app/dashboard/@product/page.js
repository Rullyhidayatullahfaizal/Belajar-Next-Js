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
      <div className="bg-slate-500 w-3/6 flex justify-center items-center">
        
        <button className="bg-red-700 px-10 py-5 rounded-md  " onClick={() =>{ 
          revProducts();
          router.push('/product');
          }}>
          Panggil data product
        </button>
      </div>
    );
}
