# Movie app clone coding

- React js 기본 개념을 익히기 위해 수강한 클론 코딩 강의 내용을 기록한 레포지토리입니다.
- [클론코딩](https://nomadcoders.co/react-fundamentals)

# 기본개념

## 1. Component

- HTML을 반환하는 함수
- JSX:

```javascript
<component name />
```

- import React from "react"를 작성하지 않으면 component를 인식하지 못함

## 2. Props

-Component에 부여할 수 있는 속성

```javascript
import React from "react";

function Food({ fav }) {
  return <h1>{fav}</h1>;
}
function App() {
  return (
    <div className="App">
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
```

- Food에 argument를 {} 없이 넘겨버리면 Component에 부여된 모든 Props을 객체의 형태로 반환함.
  - 이땐 예를 들어 괄호에 props라고 작성했으면 출력시엔 props.fav 이런 식으로 작성해야함.
- Props 중에서 특정한 것만 출력하고 싶은 경우 {}를 사용해 직접 추출
- 정적 데이터 관리

## 3. Dynamic Component Generation

```javascript
function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food name={dish.name} id={dish.id} />
      ))}
    </div>
  );
}
```

- map: array의 각 item에서 function을 실행하고 그 function의 result를 array로 반환해줌.

## 4. PropTypes

```javascript
import PropTypes from "prop-types";

Food.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
```

props의 데이터형과 필수인지를 설정할 수 있음

## 5. State

- 동적 데이터 관리
- react는 자동적으로 class component의 render method를 실행
- class <-> state

```javascript
add = () => {
  this.setState({ count: 1 }); // state를 refresh
};
minus = () => {
  this.setState({ count: -1 });
};
```

- state는 object
- react는 render를 refresh 하지 않음
- 그래서 setState 사용, 여기엔 새로운 object(state)를 넘겨줘야함.

```javascript
add = () => {
  this.setState((current) => ({ count: current.count + 1 }));
};
minus = () => {
  this.setState((current) => ({ count: current.count - 1 }));
};
```

- current는 현재 state를 가리킴.
- this.state.count 같은 방식보단 위와 같은 방식을 쓰는 게 좋음

## 6. Life Cycle method

- react가 component를 생성 / 없애는 방법
- constructor => render => componentDidMount
- setState 호출시: component => render => componentDidUpdate
