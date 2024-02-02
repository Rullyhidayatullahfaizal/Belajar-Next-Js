import Image from "next/image";

async function getData() {
    const res = await fetch("http://localhost:3000/api/product", {
        cache: "force-cache",
        next:{
            // revalidate:10
            tags:["data"]
    }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const productPage = async() => {
    try {
        const products = await getData();
        console.log(products)
        return (
            <>
                <div className="flex">
                    {products.data.length > 0 && products.data.map((product) => (
                        <div key={product.id}>
                            <p>Nama: {product.name}</p>
                            <p>Harga: {product.price}</p>
                            <Image
                            width={500}
                            height={500} 
                            src={product.Image} alt={product.name} />
                        </div>
                    ))}
                </div>
            </>
        );
    } catch (error) {
        console.error(error);
        return (
            <>
                <div>
                    <p>Error: {error.message}</p>
                </div>
            </>
        );
    }
};

export default productPage