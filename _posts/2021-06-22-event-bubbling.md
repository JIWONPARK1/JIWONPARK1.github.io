---
title: "이벤트 버블링"
tags: javascript
categories: javascript
---

## 이벤트 버블링 (event bubbling)

모달(modal)에서 바깥을 누르면 꺼지고, 모달 내부를 눌렀을때는 아무런 동작을 하지않게 하고싶다.<br/>
하지만 내부를 눌러도 모달이 꺼지는 문제가 발생했다.
<br/> 이런 현상이 바로 이벤트 버블링(Event Bubbling) 때문이었다.

![bubbling ex](/assets/images/post/img-event-bubbling.png)

- dom의 요소에서 이벤트가 발생했을떄, 그 요소에 할당된 이벤트가 동작할 뿐만 아니라 부모 요소에 할당된 이벤트까지 발생한다. 그리고 최상위 요소를 만날떄까지 이 과정이 반복된다.
- 이벤트가 거슬러 올라가는 모습이 물속의 거품(bubble)과 닮았기 때문에 이름 붙여졌다.

### ! 이벤트 버블링을 중단하는법 : event.stopPropagation()

- mouseover나 mouseout과 같은 이벤트의 경우 이벤트 중단이 필요하다.
- 한 요소에 여러 이벤트가 할당되어 있을 경우 event.stopPropagation()를 사용하면 한 이벤트만 중단되므로, event.stopImmediatePropagation()를 사용한다.

```javascript
const handleStopBubbling = (event) => {
  event.stopPropagation(); // 번식 중단
  event.stopImmediatePropagation() // 모든 이벤트 버블링 중단
  ... // 이벤트 명시
};
```

### <a href="https://www.w3.org/TR/uievents/#event-types" target="_blank">이벤트 버블링 중단 가능 여부</a>

- Focus Event

| type  | bubble |
| ----- | ------ |
| blur  | No     |
| focus | No     |

- Mouse Event

| type       | bubble |
| ---------- | ------ |
| click      | Yes    |
| mousedown  | Yes    |
| mouseenter | No     |
| mouseleave | No     |
| mousemove  | Yes    |
| mouseout   | Yes    |
| mousemover | Yes    |
| mouseup    | Yes    |

- Wheel Event

| type   | bubble |
| ------ | ------ |
| wheel  | Yes    |
| scroll | Yes    |

- Keyboard Event

| type    | bubble |
| ------- | ------ |
| keydown | Yes    |
| keyup   | Yes    |

\*\* 참고 ( https://ko.javascript.info/bubbling-and-capturing)
