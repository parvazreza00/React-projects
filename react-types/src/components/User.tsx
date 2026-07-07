import React from "react";

type userDataType = {
  users: {
    id: number;
    name: string;
    age: number;
    isRegister: boolean;
    lang: string[];
  }[];
};

const User = ({ users }: userDataType) => {
  return (
    <div>

        {
            users.map((user)=>{
                const {id, name, age, isRegister} = user;
                return <div>
                    <h1>{id}</h1>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{isRegister == true ? <span>User is registered</span>: <span>Not Registered</span> }</p>

                </div>
            })
        }
     
    </div>
  );
};

export default User;
