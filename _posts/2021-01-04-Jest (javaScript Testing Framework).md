---
layout: post
title: Jest 란
subtitle: This post explains how you can use jest.js.
tags: [javascript, tdd, jest]
---

# Jest (javaScript Testing Framework)

## 1. Jest란?

: 페이스북에서 만든 test framework이다.

## 2. Matcher

(https://jestjs.io/docs/en/using-matchers)

[자주 사용되는 Matcher]

1. **toBe()** <br/>
   - 기본형(primitive) 값을 비교할 때 사용한다.
   ```javascript
   test("two plus two is four", () => {
     expect(2 + 2).toBe(4);
   });
   ```
2. **toEqual()**: 주로 참조형(complex)과 같은 값을 비교할 때 사용한다.
3. **.not**앞에 붙이면 반대케이스도 체크할 수 있다. ex) .not.toBe();

4. null/undefined/false 값을 체크하는 함수.

- **toBeNull()** : null인지
- **toBeUndefined()** : undefined인지
- **toBeDefined()** : toBeUndefined 아닌지
- **toBeTruthy()** : 조건문이 true 인지
- **toBeFalsy()** : 조건문이 false인지

  ```javascript
  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    // 아래 두 함수는 느슨한 타입기반 언어인 자바스크립트에서 타입체크하기위해서 많이사용한다.
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
  ```

5. 숫자 비교

- **.toBeGreaterThan(n)** : **>**
- **.toBeGreaterThanOrEqual(n)** : **>=**

- **.toBeLessThan(n)** : **<**
- **.toBeLessThanOrEqual(n)** : **<=**
- **.toBeCloseTo(n)** : 소수점이 들어 가는 경우

  ```javascript
  test("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
  ```

6. 문자 비교

-**.toMatch(정규식)** : 정규식 일치여부 체크

```javascript
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});
```

7. 배열 / 반복문

- **.toContain()** : 특정 원소 포함여부 체크
- **.toHaveLength()** : 배열 길이 체크

  ```javascript
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "beer",
  ];

  test("the shopping list has beer on it", () => {
    expect(shoppingList).toContain("beer");
    expect(shoppingList).toHaveLength(5);
  });
  ```

8. 예외

- **.toThrow()** : 특정 함수에서 에러를 내는 케이스 체크

  ```java
  function getUser(id) {
    if (id <= 0) throw new Error("Invalid ID")
    return {
      id,
      email: `user${id}@test.com`,
    }
  }
  test("throw when id is non negative", () => {
  expect(getUser(-1)).toThrow()
  expect(getUser(-1)).toThrow("Invalid ID")
  })
  ```

\*모든 Matcher는 아래의 링크에서 확인할 수 있습니다. <br/>
(https://jestjs.io/docs/en/expect)

## 3. 코드 커버리지 (code coverage)

: 코드의 수행 결과를 수치로 나타낸 것.

```javascript
//명령어

npm test -- -- coverage

//결과

----------------------------|----------|----------|----------|----------|-------------------|
File                        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------------|----------|----------|----------|----------|-------------------|
All files                   |    92.34 |     82.8 |    92.91 |    94.32 |                   |
src                        |      100 |       90 |      100 |      100 |                   |

                                      .
                                      .
                                      .

//파일명                      //구문      // 결정     //함수      //줄 수  // 테스트 되지 않은 코드

```

- 구문 (Statement Coverage) : 전체에서 명령문이 몇개이며, 얼마나 수행되었는가?
- 결정 (Branch Coverage) : 전체에서 분기문의 몇개이며, 얼마나 수행되었는가?

  ```javascript
  function add(a, b) {
    if (a === null) {
      a = 0;
    }

    return a + b;
  }
  // 위의 함수에서 a가 null이 아니라면, Branch는 50%일 것이다.
  ```

- 함수 (Function) : 전체에서 함수가 몇개이며, 얼마나 수행되었는가?
- 줄 수(Lines) : 전체 코드라인이 몇개이며, 얼마나 실행되었는가?

---

## 4. 단위 테스트 규칙

1. 테스트간에 독립적이어야 한다.
2. 격리 <br/>
   **테스트 더블** <br />
   테스트 시 의존성부분(LocalStorage / 결제시스템 ...) 을 대체하는 것
   javascript의 sinon.js 사용한다.
3. given, when, then 단계에 따라 테스트 코드를 작성한다.

## 5. 단위 테스트 순서

1단계 : test 시나리오 작성.
