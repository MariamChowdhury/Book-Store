import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const OrderModal = ({ closeModal, modalIsOpen, name, price }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.name = name;
    data.price = price;
    const url = `https://agile-mountain-66366.herokuapp.com/addOrder`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Order placed successfully!");
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="purple-color px-5 mx-5 my-3">{name}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="my-2 form-control mb-3"
            placeholder="Enter Name"
            ref={register({ required: true })}
          />
          <input
            name="email"
            className="my-2 form-control mb-3"
            placeholder="Enter Email"
            ref={register({ required: true })}
          />
          <input
            name="number"
            className="my-2 form-control mb-3"
            placeholder="Enter Phone Number"
            ref={register({ required: true })}
          />
          <input
            name="address"
            className="my-2 form-control mb-3"
            placeholder="Enter Address"
            ref={register({ required: true })}
          />
          <input type="submit" className="btn purple-bg mb-3 fw-bold" />
        </form>
      </Modal>
    </div>
  );
};

export default OrderModal;
