---
<<<<<<< HEAD
layout: post
title: 'generator'
tags: javascript
=======
title: "generator"
tags: javascript
categories: javascript
>>>>>>> 8fd801fe9c62c4a250ce1255a2af2afa6a3111b5
---

# generator 함수

- 중단점 (yield)이 있는 함수
- next()로 중단점까지 호출한다.

# Redux Saga

- generator /while문을 활용하여,중단점 (yield)이 있는 무한 반복함수이다.

```js
const gen = function* () {
  const i = 0;
  while (true) {
    yield i++;
  }
};
```
