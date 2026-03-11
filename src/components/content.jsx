import { useState, useEffect } from "react";
import axios from "axios";
import "./Content.css";

function Content() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const url = "https://backend-app-z2t4.onrender.com/store";
    const res = await axios.get(url);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="box" key={product._id}>
            <img
              src={`https://backend-app-z2t4.onrender.com/${product.imageUrl}`}
              width="300px"
              alt=""
            />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;