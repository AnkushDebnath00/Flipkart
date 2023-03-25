import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";

function ProductDetail() {
  // const dispatch = useDispatch();

  // let { id } = useParams();

  // useEffect(() => {
  //   dispatch(getProductDetails(id));
  // }, [dispatch, id]);

  return <div>ProductDetail</div>;
}

export default ProductDetail;
