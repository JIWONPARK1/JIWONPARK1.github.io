---
layout: default
title: '[react] 커스텀 훅 만들기 예제'
tags: react
---

## Custom hook만들기

### 기존 코드

회원가입 / 로그인 등 폼작성시 onChange이벤트를 매번 설정해주어야한다.

```js
// login.js
const [id, setId] = useState('');
const [password, setPassword] = useState('');

const onChangeId = useCallback((e) => {
  setId(e.target.value);
}, []);

const onChangePassword = useCallback((e) => {
  setPassword(e.target.value);
}, []);
```

아래와 같이 custom hook을 만들 경우 중복되는 코드를 없앨 수 있다.

```js
// useInput.js

import { useState, useCallback } from 'react';

export default (intialValue = null) => {
  const [value, setValue] = useState(intialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

// login.js
//  두줄로 기존 코드가 간결해 진다.
const [id, onChangeId] = useInput('');
const [password, onChangePassword] = useInput('');
```
