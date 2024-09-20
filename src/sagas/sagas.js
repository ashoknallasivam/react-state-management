import {
  call,
  put,
  take,
  takeEvery,
  takeLatest,
  fork,
  cancel,
} from "redux-saga/effects";
import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_POSTS_FETCH,
  GET_POSTS_SUCCESS,
  GENERAL_FAILURE,
  EXIT_APP,
} from "../actions/actions";
import axios from "axios";

//Get Users
//Par1

function userFetch() {
  // In case you don't want  to use axios
  //return.fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}

//Part2
function* getUsersFetch() {
  try {
    const users = yield call(userFetch);
    //yield will wait for this call to finish before proceeding to the next line.
    yield put({ type: GET_USERS_SUCCESS, users });
  } catch (error) {
    yield put({ type: GET_USERS_FAILURE, error });
  }
}

//Get Posts

//Part 1

function getPosts() {
  console.log("Now calling getPosts API");
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}

// PART 2
function* getPostsSaga() {
  while (true) {
    try {
      console.log("getPosts action ready...");
      yield take(GET_POSTS_FETCH);
      console.log("getPosts action started...");
      const posts = yield call(getPosts);
      console.log("getPosts action fetched...");
      yield put({ type: GET_POSTS_SUCCESS, posts: posts });
      console.log("getPosts action finished...");
    } catch (error) {
      console.log("getPosts action failed...");
      yield put({ type: GENERAL_FAILURE, error: error });
      console.log("getPosts action error finished...");
    }
  }
}

// PART 3
export default function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, getUsersFetch);
  const posts = yield fork(getPostsSaga);
  console.log("Now waiting for action from user...");
  yield take(EXIT_APP);
  console.log("Exiting App...");
  yield cancel(posts);
  console.log("Exit Finished...");
}

//export default mySaga;
