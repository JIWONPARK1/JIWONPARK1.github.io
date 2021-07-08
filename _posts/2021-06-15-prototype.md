---
title: "prototype의 개념"
tags: javascript
categories: javascript
---

객체지향 프로그래밍을 하기 위해서는 class가 필요하다.<br/>
하지만 자바스크립트에는 class가 없어(es6는 있다) protptype을 활용하여, 객체지향 프로그래밍을 할 수 있다.

### 사용법

함수와 new를 활용하여 구현한다.

```javascript
function Person() {
  this.eyes = 1;
  this.nose = 2;
}

var kim = new Person();
var park = new Person();

console.log(kim.eyes); // => 1
console.log(kim.nose); // => 2
```

> 위와 같은 방식으로 하면 객체한개당 2개의 변수가 만들어지므로,
> 100개의 객체를 만들 경우 200개의 변수가 생성된다.<br/>
> 아래는 이러한 문제를 해결하기 위한 방법이다.

```javascript
function Person() {}
Person.prototype.eye = 1;
Person.prototype.nose = 2;
var kim  = new Person();
var park = new Person():

console.log(kim.eye); // => 1
...
```

### 특징

1.  함수는 생성되는 동시에 생성자(constructure)자격이 부여된다.
    - 생성자(constructure)자격이 있는 함수만 new를 통해 객체를 만들어 낼 수 있다.

![prototype constructure](/assets/images/post/img-prototype-constructure.png)

2. 함수는 생성될떄, Prototype Object도 함께 생성된다.

   - prototype을 통해 object에 접근 할 수 있으며,Prototype Object는 알반 객체와 동일하다.

   ![prototype object](/assets/images/post/img-prototype-object.png)

- 기본 속성으로 constructure와 \_\_proto\_\_를 가지고 있습니다.
  ![prototype object-02](/assets/images/post/img-prototype-object-02.png)

> ex. 위의 예제로 설명하면 아래와 같다.

> ![prototype ex](/assets/images/post/img-prototype-ex.png)

3. \_\_proto\_\_ 는 객체가 생성될때 조상이었던 함수의 Prototype Object을 가르킨다.
   ![prototype 상속](/assets/images/post/img-prototype-props.png)

- 후에 만들어진 객체에서 찾고자하는 속성이 없을 경우 상위 프로토타입을 탐색하여, 해당 속성을 가져올 수 있다.
- 상위 프로토타입을 탐색했음에도 찾지 못했을 경우 , undefined를 리턴한다.
- 이렇게 \_\_proto\_\_속성을 통해 상위 프로토타입과 연결되있는 것을 <b>프로토타입 체인(Chain)</b>이라고 한다.

  ![prototype chain](/assets/images/post/img-prototype-chain.png)

  - 이러한 체인구조로 인해 모든 객체는 Object의 자식이라고 불리고, Object의 모든 속성을 사용할 수 있다.

* 참고(https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
