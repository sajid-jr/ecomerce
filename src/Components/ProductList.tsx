import RecommededProductBox from "./RecommededProductBox";

const ProductList = () => {

    const data: any = [{id:'1'}, {id:'2'}, {id:'3'}, {id:'4'}, {id:'5'}, {id:'6'}, {id:'7'}, {id:'8'}]


  return (
    <div className="row row-col-2">
      <div className="col-3">
        <div>
          <h4>Price</h4>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3V9.469L9 14.469V21.618L15 18.618V14.469L21 9.469V3H3ZM19 5V7H5V5H19ZM13 13.531V17.382L11 18.382V13.531L5.562 9H18.438L13 13.531Z"
              fill="#F86338"
            />
          </svg>
        </div>
        <h4>Categories</h4>
      </div>
      <div className="col-9">
      <div className="row "></div>
        {data.map(()=> {
            return (
                <div className="col-4">
                <RecommededProductBox />
                </div>
            )
        })}
        
      </div>
    </div>
  );
};

export default ProductList;
