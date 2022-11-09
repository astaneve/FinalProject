import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
<container className="Container">
<p className="Logo">Secret Santa events</p>

    <div className="nav-bar">
<button className="button">
<Link to="/members">Member List</Link>
      </button>

    <button className="button">
      <Link to="/Add">Add New Member</Link>
      </button>
    </div>
    </container>
    

  );
};

export default Navigation;