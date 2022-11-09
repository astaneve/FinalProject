import "./Members.css";
import Navigation from "../../components/Navigation/Navigation";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";
import { ThreeDots } from "react-loader-spinner";
import { useState, useEffect } from "react";

const Members = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalClass, setModalClass] = useState("hidden");
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/v1/members/")
      .then((resp) => resp.json())
      .then((response) => {
        setOrders(response)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [orders]);

  const createConfirmModal = (e) => {
    setModalClass("active");
    setCurrentId(e.target.parentElement.id);
  };

  const handleExit = (e) => {
    setModalClass("hidden");
    setCurrentId("");
  };

  const handleDeleteOrder = () => {
    fetch("http://localhost:3001/v1/members/" + currentId, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
    setModalClass("hidden");
    setCurrentId("");
  };

  return (
    <div>
      <Navigation />
      <h1 className="List">Member List</h1>
      <div className="table-container">
        {loading && (
          <div>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ddd"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
        <Table createConfirmModal={(e) => createConfirmModal(e)}>
          {orders}
        </Table>
        <Modal
          funcDelete={(e) => handleDeleteOrder(e)}
          funcExit={handleExit}
          className={modalClass}
          id={currentId}
        />
      </div>
   
    </div>
  );
};

export default Members;