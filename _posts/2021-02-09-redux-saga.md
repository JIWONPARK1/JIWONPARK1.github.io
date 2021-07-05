---
title: "redux saga"
tags: react
---

# Redux Saga의 effect들

## all

- 배열을 받고 배열안의 함수를 한번에 실행한다

## delay

- settimeout과 같은 역할

## take

- 해당 ACTION이 실행될때까지 기다린다.
- 한번만 사용 가능하다.(일회성)

## takeEvery

- while문 대신 반복적으로 action을 실행할수 있다.
- 사용자가 action을 반복적으로 실행할 경우, 모두 다 실행한다

## takeLatest

- 사용자가 action을 반복적으로 실행할 경우, 마지막에 실행된 action만 실행시켜준다.
- 실수로 두번씩 누르는 것을 방지한다.
- 이미 완료된경우는 실행 후 또 실행하고, 로딩중일 경우에는 앞의 action은 취소한다.
- 요청인 경우에는 취소가 불가능하므로 그런 경우에느 throttle를 사용한다.

## throttle

- 마지막 인자로 시간을 설정해두면 그 시간안에 딱 한번만 해당 action을 실행한다.

```js
function* watchAddPost() {
  yield throttle("ADD_POST_REQUEST", addPost, 1000);
}
```

## fork

- generator 함수를 (동시에) 실행한다.
- 비동기 함수 호출이다.

## call

- generator 함수를 (동시에) 실행한다.
- 동기 함수 호출이다. (api요청시에 사용한다.)
- 함수명(...매개변수들) > call(함수명, ...매개변수들)

```js
login({ id: "jiwon", password: "1234" });

// call사용시
call(login, { id: "jiwon", password: "1234" });
```

## put

- dispatch라고 보면 된다. (action 객체를 dispatch함)

<br/>
<br/>
<br/>
# example

```JS

function addPostAPI(){
    return axios.post('/api/post ')
}

function* addPost(action){
    // action안에는 type과 데이터가 있다.
    try{
        const result = yield call(addPostAPI , action.data);
        yield put({
            type : 'ADD_POST_SUCCESS',
            data : result.data
       });

    } catch(err){

        yield put({
            type : 'ADD_POST_FAILURE',
            data : err.response.data
        });
    }
}

function* watchAddPost(){
    yield take('ADD_POST_REQUEST', addPost)
}

yield all({
    fork(watchAddPost)
    fork(/** 함수**/ )
    fork(/** 함수**/ )
})

```
