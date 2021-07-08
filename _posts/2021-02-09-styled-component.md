---
title: "global styled-component"
tags: html
categories: html
---

## createGlobalStyle

- 전역으로 사용하고싶은 스타일이 있을 경우에 사용한다.
- 사용하고 싶은 페이지의 상위에서 렌더링 시켜주면 된다.

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Example = () => {
    return
    (
        <>
        <GlobalStyle />
        <div>createGlobalStyle 예제입니다.<div>
        </>
    )
}

export default Example;
```
