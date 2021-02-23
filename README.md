# modal-menu-slider 만들기 (2)
## javascript

---

1️⃣ `Toggle nav-bar` 함수 기능 구현

closeNavbar 함수를 통해 if조건에 해당하면 navbar가 닫히고/열리도록 기능 구현

```js
function closeNavbar(e) {
    // console.log("click:", e.target);  >>>  e.target 은 내가 클릭한 요소 하나
    
    if (document.body.classList.contains("show-nav") && e.target !== toggle && !toggle.contains(e.target) && e.target !== navbar && !navbar.contains(e.target)) {
        // document.body.classList.contains("show-nav")  >>>  body안에 "show-nav"가 contains되어 있는 경우  >>>  toggle버튼이 show되어있는 경우
        // e.target !== toggle  >>>  e.target(클릭한 요소)가 toggle 버튼이 아닌 경우
        // !toggle.contains(e.target)  >>>  toggle버튼에 포함(contains)되어있는 e.target(toggle의 자식요소들)이 아닌 경우
        // e.target !== navbar  >>>  e.target(클릭한 요소)가 navbar 영역이 아닌 경우
        // !navbar.contains(e.target)  >>>   navbar 영역에 포함(contains)되어있는 e.target(navbar의 자식요소들)이 아닌 경우

        // 위 모든 경우가 true일 때, 아래와 같은 로직이 구현된다
        document.body.classList.toggle("show-nav"); // toggle버튼이 show되어있는 경우에 'toggle'되기 때문에 close를 의미
        document.body.removeEventListener("click", closeNavbar); // body 아무곳이나 눌러도 event가 적용되지 않는다
    } 
    else if (!document.body.classList.contains("show-nav")) {    // close되어있을때
        document.body.removeEventListener("click", closeNavbar); // body 아무곳이나 눌러도 event가 적용되지 않는다
    }
}
```

2️⃣ nav-bar `toggle` 기능 구현

toggle 버튼 누르면 navbar가 show 되고, close되는 기능 구현
```js
toggle.addEventListener("click", () => {
    document.body.classList.toggle("show-nav");
    document.body.addEventListener("click", closeNavbar);
});
```

