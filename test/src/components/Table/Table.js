import "./Table.css";
const Table = (props) => {
  const orders = props.children;
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} onClick={props.createConfirmModal} id={order.id}>
            <td>{order.id}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



export default Table;