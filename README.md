

## 배포🚀
배포 링크 https://codewise-ten.vercel.app/

## 조건
- 필수 조건
  - UI 및 화면 동작(화면 구성) ✅
  - 페이징 구현 ✅
  - 미리보기 기능 ✅
  - 라이브러리 분석 능력(메일 템플릿 적용 및 동작 여부) ✅
- 추가 조건
  - 테이블 컬럼 Resizing 여부 ✅
  - 검색 화면 및 검색 기능 구현 ✅
  - 엑셀저장 기능 여부(라이브러리 분석 능력) ✅
  - 유효성 검사 ✅
  - 모달 ✅
  
### 깃허브 템플릿으로 보기
[컨텐츠 설정 조건 📑](https://github.com/Sim0321/codewise/issues/7)
[컨텐츠 목록 조건 📑](https://github.com/Sim0321/codewise/issues/2)

## 사용 기술 및 라이브러리

- 라이브러리
<div style="display:flex; gap:5px; "> 
<img src="https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react&logoColor=#343533"> 
<img src="https://img.shields.io/badge/recoil-fff?style=for-the-badge&logo=recoil&logoColor=#3578E5">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> 
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>

- 기능을 위한 라이브러리
  - React Quill Editor(editor 템플릿)
  - react-icons(icon)
  - react-csv(엑셀)

> **왜 Recoil 🤷‍♂️** redux 및 redux toolKit은 초기세팅이 복잡하고 보일러 플레이트 많다고 판단. 빠르게 작업하기 위해 비교적 간단한 Recoil 채택

> **왜 styled-components 🤷‍♂️** props를 이용한 동적 스타일링을 위해 채택



## 트러블 슈팅📢
### 페이징이슈
- **원인 : ** MockApi의 `get`에서 `mailType`, `mailTitle`, `ismailIUse`는 `filter()`로 response가 잘 나왔지만, `limit`, `currentPage`에 대한 처리가 따로 없어 페이징을 구현하지 못하는 이슈
- **해결 :** `tempPageDto`에서 `limit`과 `currentPage` 값을 추출하고, `limit * currentPage`를 계산하여 현재 페이지의 `endIndex`를 찾음. 그 후, `tempDB`에서 해당 페이지의 아이템을 `slice` 메서드를 이용해 추출하고, 전체 아이템 수를 한 페이지에 보여줄 아이템 수로 나누어 `totalPage`를 계산. 이때, `Math.ceil` 메서드를 사용하여 소수점을 고려하여 올림한 후, 클라이언트 측에서는 페이지네이션을 위한 limit 값을 1, 5, 10, 20 등으로 제한함으로써 페이징 구현.


### 체크 이슈
- **원인 :** 전체선택, 전체해제, 개별선택시 전체선택 해제는 구현했지만 개별선택을 다 했을 때 전체선택이 되지 않는 이슈
- **해결 :** 기존에는 check의 상태를 CheckBox 컴포넌트에서 개별로 관리했지만, 개별 선택으로 전체를 선택해도 상태를 알지 못해 전체 체크란에 체크가 안된다고 판단해서, 부모 컴포넌트에서 id들을 배열로 상태관리하고, 자식 컴포넌트에서 `includes`, `filter` 메서드들을 이용해 id 배열 관리. check의 상태는 `input`의 checked 프로퍼티로 판별했고, CheckBox 컴포넌트에선 checked 값으로 svg를 분기처리 해서 구현.

### Editor 이슈
- **원인 :** 피그마에 나온대로 회색`div`처럼 기본 템플릿을 만들어야하는데 만들어지지가 않는 이슈
- **해결 :** 공식문서를 통해 default 값을 넣을 수 있는 것을 확인. `html태그`를 문자열로 state관리. 하지만 라이브러리는 `ops`라는 배열로 data들을 반환. Mockapi를 보니 content 타입은 `string`임으로 ops를 `JSON.stringify`로 post 요청, get해서 렌더링 할때는 `JSON.parse`로 object로 만들어서 반환. 
또한, db.json에 있는 것과, default의 양식이 달라 `spilt`메서드로 구별 후 값에 따라 상태관리 진행.




## 고민한 부분🤔
- **react-query의 도입**
기존에는 api폴더에 비즈니스 로직을 분리하기 위해 통신 로직을 모듈화시켰었다. 매개변수로는 method, requestData로 받아서 data, error, isLoading, fetchData를 반환하는 useApi hook을 만들었다.
하지만 인터렉션이 일어나면 `useEffect`로 데이터를 다시 한번 동기화 시켜야했고, 성능적으로 비효율적이라고 판단해 과제 중간에 react-query를 도입했다. 과제가 react-query까지 쓸 정도의 규모가 있는 프로젝트는 아니지만 확장성까지 고려한다면 도입하는 것이 더 효율적이라고 판단했다.

- **recoil Atom과 Selector에 대해**
프론트에서 전역적으로 필요한 데이터는 recoil로 관리했다.
data는 Atom이 아닌 Selector로 값을 불러왔다. 이유는 Atom으로 불러오면 다른 컴포넌트에서도 해당 Atom을 추적하고 있어 의도치 않게 Atom 값이 바뀔 수 있기에 Selector로 상태관리를 진행했다.

- **공통 컴포넌트**
공통 컴포넌트 재사용성과 유지보수성을 높이기 위해 재사용되는 컴포넌트들이 별도로 모듈화를 시켰다. 스타일링과 조건부 렌더링은 props를 활용하여 구현했다.

- **비즈니스 로직과 UI 로직을 분리하기 위한 CustomHook**
최근에 비즈니스 로직이란 것을 알게되면서 비즈니스 로직과 UI 로직을 명확하게 분리하면 코드의 가독성을 향상 시킬 수 있다는 것을 알게되었다. 나는 그 전까지 customHook은 재사용성만을 위해 존재한다고 알고 있었지만, 재사용성만을 위한 것이 아니라는 것을 알게되었고 실제로 분리해서 코드의 가독성이 많이 향상된 것을 체감했다.

- **가독성이 뛰어난 폴더 구조란**
폴더구조에는 답이 없다고 하지만 최근에 Next.js(app router)를 공부하면서 폴더 안에 폴더를 만드는 구조를 보고 이번 과제에서는 Next.js와 비슷하게 폴더구조를 잡아봤다.
직접 사용해보고 느낀 장점으로는 코드의 추적이 쉬웠으며, 로직의 흐름을 이해하기 매우 편했다. 하지만 컴포넌트가 점점 많아지면 더 복잡하고 어려울 것 같다고 생각이 든다.


## 폴더 구조💻
```
src
   ├─ api
   │  ├─ delete.js
   │  ├─ get.js
   │  ├─ post.js
   │  └─ put.js
   ├─ App.js
   ├─ assets
   │  └─ icon
   │     ├─ checked.svg
   │     ├─ close.svg
   │     ├─ downArrow.svg
   │     ├─ download.svg
   │     ├─ firstArrow.svg
   │     ├─ lastArrow.svg
   │     ├─ leftArrow.svg
   │     ├─ list.svg
   │     ├─ preview.svg
   │     ├─ radioChecked.svg
   │     └─ rightArrow.svg
   ├─ components
   │  ├─ common
   │  │  ├─ button
   │  │  │  ├─ Button.jsx
   │  │  │  └─ Button.style.jsx
   │  │  ├─ checkbox
   │  │  │  ├─ CheckBox.jsx
   │  │  │  └─ CheckBox.style.jsx
   │  │  ├─ header
   │  │  │  ├─ Header.jsx
   │  │  │  └─ Header.style.jsx
   │  │  ├─ input
   │  │  │  ├─ InputText.jsx
   │  │  │  └─ InputText.style.jsx
   │  │  ├─ loading
   │  │  │  ├─ Loading.jsx
   │  │  │  └─ Loading.style.jsx
   │  │  └─ modal
   │  │     ├─ children
   │  │     │  ├─ ModalPreview.jsx
   │  │     │  ├─ ModalPreview.style.jsx
   │  │     │  ├─ ModalSearch.jsx
   │  │     │  └─ ModalSearch.style.jsx
   │  │     ├─ Modal.jsx
   │  │     └─ Modal.style.jsx
   │  ├─ contents-config
   │  │  ├─ Config.jsx
   │  │  ├─ Config.style.jsx
   │  │  └─ form
   │  │     ├─ create
   │  │     │  ├─ Form.jsx
   │  │     │  └─ Form.style.jsx
   │  │     ├─ edit
   │  │     │  ├─ EditForm.jsx
   │  │     │  └─ EditForm.style.jsx
   │  │     └─ editor
   │  │        ├─ Editor.jsx
   │  │        └─ Editor.style.jsx
   │  └─ contents-list
   │     ├─ List.jsx
   │     ├─ List.style.jsx
   │     └─ table
   │        ├─ bottom
   │        │  ├─ SelectItem.jsx
   │        │  ├─ SelectItem.style.jsx
   │        │  ├─ TableBottom.jsx
   │        │  └─ TableBottom.style.jsx
   │        ├─ content
   │        │  ├─ Content.jsx
   │        │  └─ Content.style.jsx
   │        ├─ header
   │        │  ├─ TableHeader.jsx
   │        │  └─ TableHeader.style.jsx
   │        ├─ list
   │        │  ├─ TableList.jsx
   │        │  └─ TableList.style.jsx
   │        ├─ Table.jsx
   │        ├─ Table.style.jsx
   │        └─ top
   │           ├─ Top.jsx
   │           └─ Top.style.jsx
   ├─ hooks
   │  ├─ useDateFormat.js
   │  ├─ useEmail.js
   │  └─ usePagination.js
   ├─ index.css
   ├─ index.js
   ├─ pages
   │  ├─ ContentPage.jsx
   │  └─ ContentPage.style.jsx
   ├─ store
   │  ├─ checkAtom.js
   │  ├─ contentDetailAtom.js
   │  ├─ purposeAtome.js
   │  ├─ request.js
   │  └─ searchStatusAtom.js
   ├─ styles
   │  ├─ GlobalStyle.jsx
   │  └─ theme.js
   └─ utils
      ├─ db.json
      └─ mockApi.js
```
