
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerSanta = styled.div`
background-image: url("https://static.winamax.fr/img/content/tournaments/xmas_party_post_facebook_1200x630.png");
align-item: center;
justify-content: center;
position: relative;
width: 80%;
height: 500px;
padding: 45px;
margin: 90px;
border-radius: 15px;
backgroudn: cover;
`;

const ButtonB = styled.div`
color: black;
background-color: white;
width: 350px;
height: 50px;
border-radius: 40px;
font-family: 'Bradley Hand';
font-size: 28px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
cursor: pointer; 
margin-top: 5px;
`;

const Heading = styled.div`
font-family: 'Bradley Hand';
color: red;
text-align: center;
padding-top: 30px;
`;

const Home = () => {
    return (
    <div>
        <Heading>
        <h1>Secret Santa events</h1>
        <h2>HO HO HO Run As Fast As You Can</h2>
        </Heading>
       
        <ContainerSanta>
        <Link to="/add">
        <ButtonB>Join the party</ButtonB>
        </Link>
        </ContainerSanta>
     
    </div>
    );
};

export default Home;