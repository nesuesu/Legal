import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const Users = () => {

    const {users} = useContext(UserContext);

    return (
        <>
        <h1>Users</h1>
        {users &&
            users.map( (user) => (
                <>
                <img style={{height:'30px'}} src={user.avatar} alt="avatar" />
                <span> username: {user.username} - password: {user.password} - id: {user.id}</span>
                <hr />
                </>
        ))
        }
        </>
    )
}

export default Users;