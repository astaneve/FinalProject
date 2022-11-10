import "./Home.css";
import { Link } from "react-router-dom";



const Home = () => {
    return (
    <div>
        <div className="heading">
        <h1>Secret Santa events</h1>
        <br/>
        <br/>
        <h2>...HO HO HO Run As Fast As You Can</h2>
        </div>
       
        <div className="banner">
        <Link to="/add">
        <button className="join">Join the party</button>
        </Link>
        </div>
     
    </div>
    );
};

export default Home;