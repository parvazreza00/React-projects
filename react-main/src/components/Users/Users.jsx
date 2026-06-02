import User from "./User";
import { useUsersContext } from "../Hooks/useUsersContext";


const Users = () => {

  // const {users, setUsers} = useContext(UsersContext);
  const {users} = useUsersContext();
    
  return (
    <div className="container mt-4">      
      <div className="row g-3">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
