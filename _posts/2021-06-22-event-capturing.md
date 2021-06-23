---
layout: post
title: '이벤트 캡쳐링'
tags: javascript
---

## 이벤트 캡쳐링 (event capturing)

![capture ex](../assets/images/img-event-capturing.png)

- 이벤트가 발생했을때, 최상위 요소인 document에 먼저 이벤트가 발생하며, 순차적으로 이벤트 타겟 태그까지 내려가며 이벤트를 발생시킨다.

### 사용방법

- addEventListener의 세번쨰 인자가 capturing여부를 결정한다.
- true는 {capture : true}라는 뜻이다.
- default값은 false이다.

```
target.addEventListener(type, listener[, useCapture]);
```

ex.

```javascript
const eventButton = document.getElementById('eventButton');
eventButton.addEventListener('click', handleCapturing, true);

const handleCapturing = () => {
  //
};
```

### <a href="https://www.w3.org/TR/uievents/#event-types" target="_blank">이벤트 버블링 중단 가능 여부</a>

- Focus Event

| type  | capture |
| ----- | ------- |
| blur  | No      |
| focus | No      |

- Mouse Event

| type       | capture |
| ---------- | ------- |
| click      | Yes     |
| mousedown  | Yes     |
| mouseenter | No      |
| mouseleave | No      |
| mousemove  | Yes     |
| mouseout   | Yes     |
| mousemover | Yes     |
| mouseup    | Yes     |

- Wheel Event

| type   | capture |
| ------ | ------- |
| wheel  | Yes     |
| scroll | No      |

- Keyboard Event

| type    | capture |
| ------- | ------- |
| keydown | Yes     |
| keyup   | Yes     |

\*\*\* 참고 (https://ko.javascript.info/bubbling-and-capturing)
