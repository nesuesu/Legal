import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import data from '../../data/flowers.json'


const Home = () => {

    const {loggedInUser} = useContext(UserContext);

    return (
        <>
        { loggedInUser ?
            <>
            <img style={{opacity:'0.25', display:'block', margin:'auto'}} src="https://www.deardrmooney.com/wp-content/uploads/2019/05/Depositphotos_15193351_l-2015-1038x564.jpg" alt="welcome" />
            </>
        :
        <div className="flowers">
            {data.flowers.map((flower,index) =>
                <div key={index}>
                    <h3 style={{textAlign:'center', color:'black'}}>{flower.name}</h3>
                    <img src={flower.image} alt="flower" />
                    <p style={{textAlign:'center'}}>color: {flower.color}</p>
                </div>
            )}
        </div>
        }
        </>       
    )
}

export default Home;