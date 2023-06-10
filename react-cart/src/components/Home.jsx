import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
  const img3 =
  "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000";
  const img4 =
  "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MjAyMjE5fGltYWdlL3BuZ3xoY2YvaDEyLzE0NzMwMTY4MDc0MjcwLnBuZ3w1NzFhNmVlYjQ0ODFmMDgxYzA3NWQ2YWQ5ZDZlOWQ2ODFmOTA5YTYxYTVjZGIyMTRmNzI2ZWI3MGMzOTNlZjE4";
  const img5 =
  "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MjAyMjE5fGltYWdlL3BuZ3xoY2YvaDEyLzE0NzMwMTY4MDc0MjcwLnBuZ3w1NzFhNmVlYjQ0ODFmMDgxYzA3NWQ2YWQ5ZDZlOWQ2ODFmOTA5YTYxYTVjZGIyMTRmNzI2ZWI3MGMzOTNlZjE4";
  const img6 =
  "https://in-media.apjonlinecdn.com/catalog/product/6/Q/6Q2M3PA-1_T1680319815.png";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "fdsfs",
      price: 300000,
      imgSrc: img3,
      id: "sdjfdlaajsdbhdfdfv",
    },    
    {
      name: "fsdfsf",
      price: 400000,
      imgSrc: img4,
      id: "sdjsdbhjabhsjdfdfv",
    },
    {
      name: "uubub",
      price: 500000,
      imgSrc: img5,
      id: "sdjfdlaajsdbdfdfv",
    },   
    {
      name: "fdsfsf",
      price: 3000000,
      imgSrc: img6,
      id: "sdjfdlahsjdfdfv",
    },  
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
