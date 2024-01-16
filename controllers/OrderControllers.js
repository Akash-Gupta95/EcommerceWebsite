import OrderRecModel from "../models/OrderRecModel.js";

export const createOrderController = async (req, res) => {
  try {
    const { name, email, phone, address, id } = req.body;
    const data = {
      name,
      email,
      phone,
      address,
    };

    //Validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      //   case phone.length >= 9:
      //     return res
      //       .status(500)
      //       .send({ error: "valid 10 digit number is Required" });
      case !email:
        return res.status(500).send({ error: "email is Required" });
      case !phone:
        return res.status(500).send({ error: "phone is Required" });
      case !address:
        return res.status(500).send({ error: "address is Required" });
    }
    const Order = new OrderRecModel({ ...data });

    await Order.save();
    res.status(201).send({
      success: true,
      message: "Order Created Successfully",
      Order,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get All order in Admin Dashboard
export const getOrderDetailsController = async (req, res) => {
  try {
    const orders = await OrderRecModel.find({});
    res.status(200).send({
      success: true,
      counTotal: orders.length,
      message: "ALL Orders ",
      orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting Orders",
      error: error.message,
    });
  }
};

// Delete Single  order in Admin Dashboard

export const DeleteSingleOrder = async (req, res) => {
  try {
    const { id } = req.params;

    await OrderRecModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,

      message: "Order Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in Deleteing Orders",
      error: error.message,
    });
  }
};
