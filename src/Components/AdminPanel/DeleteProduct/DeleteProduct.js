import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const DeleteProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  
  const handleDelete=(id) => {
    fetch(`http://localhost:5000/delete/${id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(result => {
      if(result){
        alert('Product deleted successfully! Please reload the page')
      }
    })
  }
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9 my-5">
          <h1 className="text-center my-4">Total Products: {product.length}</h1>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary text-left" scope="col">
                  Sr No
                </th>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Price
                </th>
                <th className="text-secondary" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {product.map((pd, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{pd.name}</td>
                  <td>{pd.price}</td>
                  <td>
                    <button className="btn purple-bg " onClick={() => handleDelete(pd._id)}>
                      <DeleteForeverIcon /> Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeleteProduct;
