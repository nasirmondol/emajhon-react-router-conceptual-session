import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className="flex justify-center items-center mt-5">
            <div>
                <img src={product.images[0]} alt="" />
                <h2 className="font-bold">{product.title}</h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;