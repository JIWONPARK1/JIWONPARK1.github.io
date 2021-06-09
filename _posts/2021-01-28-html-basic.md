---
layout: default
title: '[html] 웹표준과 웹접근성'
subtitle:
tags: html
---

## 웹표준이란?

웹에서 사용되는 표준 기술이나 규칙
W3C의 권고안에서 나온 기술들이다.

### 크로스 브라우징

다양한 브라우저에서 동일한 사용자 경험을 줄 수 있도록 제작하는 기술 / 방법

### 웹표준 검사하기

W3C validator(https://validator.w3.org/)

## 웹접근성이란?

신체적, 환경적 조건에 제한이 있는 사용자를 포함한 모든사용자들이
동등하게 웹콘텐츠에 접근할 수 있도록 제작하는 방법

### IR(Image Replacement)

- 이미지를 배경으로 처리하고, 그에 대응하는 내용을 text로 기입하는 방법

1. display:none는 센스리더, Jaws, NVDA에서 모두 내용을 읽지 못함

2. visibility: hidden는 센스리더에서는 내용을 읽을 수 있었으나 Jaws, NVDA는 모두 내용을 읽지 못함
3. overflow:hidden의 경우 센스, Jaws, NVDA 모두 내용을 읽을 수 있음

```css
위치/ 크기를 조절하여 화면에서 안보이도록 처리해야한다.
.hidden {
    position：absolute;
    left:-10000px;
    top:auto;
    height:1px;
    overflow:hidden;
 }

.hidden {
    display: block;
    width: 0;
    text-indent: -9000px;
    overflow: hidden;
}
```

### longdesc

- 이미지 태그를 사용시 alt태그에 적기에 많은 컨텐츠의 경우 longdesc를 사용한다.<br/>
  (이 경우에도 alt는 명시해주어야한다.)
- 아래의 예시에서 스크린 리더기로 읽을때 longdesc의 아이디를 찾아서 읽어준다.

```html
<img
  src="../images/img_contents01.gif"
  alt="이미지 제목"
  longdesc="#msg_contents01"
/>
<p id="msg_contents01" class="hide">... 이미지 안에 있는 글 내용 ...</p>
```
