import { Layout } from "antd";
import React, { useEffect, useState, useReducer } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";

const AdminUserOrder = () => {
  const [userData, setUserData] = useState([]);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  let count = 1;
  //get all Orders
  const AllOrder = async () => {
    try {
      const { data } = await axios.get("/api/v1/order/get-orderDetails");
      if (data?.success) {
        setUserData(data?.orders);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting Orders");
    }
    forceUpdate();
  };

  useEffect(() => {
    AllOrder();
    // eslint-disable-next-line
  }, [reducerValue]);

  const HandleBookingStatus = async (e) => {
    const id = e.target.id;

    if (window.confirm("Press a button!") === true) {
      const deleteOrder = await axios.delete(
        `/api/v1/order/delete-product/${id}`
      );
      toast.message(deleteOrder);
    } else {
    }
  };

  return (
    <Layout title={"Dashboard - All Orders"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="col-md-9 ">
              <h1 className="text-center">ORDERS</h1>
              <div className="d-flex flex-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Row</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  {userData?.map((c) => (
                    <>
                      <tbody>
                        <tr>
                          <th scope="row">{count++}</th>
                          <td> {c.name}</td>
                          <td>{c.email}</td>
                          <td>{c.phone}</td>
                          <td> {c.address}</td>
                          <td>
                            <button
                              key={c._id}
                              id={c._id}
                              onClick={HandleBookingStatus}
                              className="btn btn-success"
                            >
                              Book
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminUserOrder;
