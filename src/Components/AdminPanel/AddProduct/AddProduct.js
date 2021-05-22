//code for uploading an image from a form using imagebb and react hook forms

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import SideBar from "../SideBar/SideBar";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
const AddProduct = () => {
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL,
    };
console.log(formData);
    const url = `http://localhost:5000/addProduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => alert("Product added successfully!"));
  };
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "fcc1a0bf90a04b096cc420be501cf558");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  return (
    <div>
      <Navigation></Navigation>
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9 my-5">
          <h4 className="purple-color">Upload a new product</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              className="my-2 form-control mb-3"
              placeholder="Product Name"
              type="text"
              ref={register({ required: true })}
            />
            <input
              name="price"
              type="number"
              className="my-2 form-control mb-3"
              placeholder="Product Price"
              ref={register({ required: true })}
            />
            <input
              name="file"
              type="file"
              onChange={handleImageUpload}
              className="my-2 form-control mb-3"
              placeholder="Upload product"
              ref={register({ required: true })}
            />
            <input type="submit" className="btn purple-bg mb-3 fw-bold" />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProduct;
