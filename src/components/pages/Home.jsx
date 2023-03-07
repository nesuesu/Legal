import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const Home = () => {

    const {loggedInUser} = useContext(UserContext);

    return (
        <>
        { loggedInUser ?
            <>
            <img style={{opacity:'0.25', display:'block', margin:'auto'}} src="https://www.deardrmooney.com/wp-content/uploads/2019/05/Depositphotos_15193351_l-2015-1038x564.jpg" alt="welcome" />
            </>
        :
            <h1 style={{marginTop:'10%'}}>Please Log In</h1>
        }
        </>       
    )
}

export default Home;