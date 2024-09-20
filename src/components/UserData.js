//src/components/Counter.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USERS_FETCH, GET_POSTS_FETCH } from "../actions/actions";

function UserData() {
  const myDispatch = useDispatch();
  const retrivedData = useSelector((state) => {
    return state.myReducer;
  });
  return (
    <div className="App-header5">
      <h1>
        Fetch User from a Users API using Redux Saga, useDispatch, useSelector
      </h1>
      <button onClick={() => myDispatch(GET_USERS_FETCH())}>Call API</button>
      <hr />
      <button onClick={() => myDispatch(GET_POSTS_FETCH())}> Posts API </button>
      <hr />
      <div>
        {retrivedData?.users &&
          retrivedData.users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        {retrivedData?.error && <p>{retrivedData.error.message}</p>}
      </div>
    </div>
  );
}
export default UserData;
