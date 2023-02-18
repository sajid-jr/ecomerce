import React from "react";
import "./index.css";
import Box from '@mui/material/Box'
import image from '../assets/Images/image.png'
import RecommededProductBox from "../Components/RecommededProductBox";
import ProductList from "../Components/ProductList";

const ProductListing = () => {
    const data: any = [{id:'1'}, {id:'2'}, {id:'3'}, {id:'4'}, {id:'5'}, {id:'6'}, {id:'7'}, {id:'8'}]
  return (
    <>
    <div className="headingAndBannerContainer">
      <div className="row gx-0">
        <div className="col-md-4 headingContainer gap-1">
          <h3>Home {`>`} Shop</h3>
          <h1>Shop</h1>
        </div>
        <div className="col-8 imageContainer">
          <img width={'100%'} height={'100%'} src={image} />
        </div>
      </div>
    </div>
    <ProductList />
    <div className="recommenedProductList">
    <h1>Recommended for you</h1>
    <div className="row row-col-4 gx-3 row-col-sm-1">
        {data.map(() => {
            return (
                <RecommededProductBox />
            )
        })}
        
    </div>
    </div>
    </>
  );
};

export default ProductListing;
