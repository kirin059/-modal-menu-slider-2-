# modal-menu-slider 만들기 (2)
## javascript

---

1️⃣ `Toggle nav-bar` 기능 구현

toggle버튼에 event 기능 추가(click하면 "show_nav" 구현 / body를 클릭하면 closeNav 함수 실행)

```js
toggle.addEventListener("click", () => {
    document.body.classList.toggle("show_nav");
    document.body.addEventListener("click", closeNav); // body 아무데나 누르면 closeNav 실행
});
```
```css
.show_nav {
    transform: translateX(200px);  /* 화면에서 보이게 하기 */
}

#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    color: #fff;
    background-color: var(--main-color);
    border-right: 2px solid rgba(117, 116, 116, 0.1);
    z-index: 100;
    transform: translateX(-100%); /* 화면에서 감추어 놓기 */
}
```

2️⃣ nav-bar `close` 기능 구현


```js
function closeNav(e) {
    if (document.body.classList.contains("show_nav") && e.target !== toggle && !toggle.contains(e.target) && e.target !== navbar && !navbar.contains(e.target)) {
        document.body.classList.toggle("show_nav");
        document.body.removeEventListener("click", closeNav);
    } else if (!document.body.classList.contains("show_nav")) {
        document.body.removeEventListener("click", closeNav);
    }
}
```

