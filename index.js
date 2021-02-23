const navbar = document.getElementById("navbar");
const toggle = document.getElementById("toggle"); // nav-bar 버튼

const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// This function closes navbar if user clicks anywhere outside of navbar once it's opened
// Does not leave unused event listeners on

function closeNavbar(e) {
    console.log("click:", e.target); // e.target 은 내가 클릭한 요소 하나
    if (document.body.classList.contains("show-nav") && e.target !== toggle && !toggle.contains(e.target) && e.target !== navbar && !navbar.contains(e.target)) {
        // document.body.classList.contains("show-nav")  >>>  body안에 "show-nav"가 contains되어 있는 경우  >>>  toggle버튼이 show되어있는 경우
        // e.target !== toggle  >>>  e.target(클릭한 요소)가 toggle 버튼이 아닌 경우
        // !toggle.contains(e.target)  >>>  toggle버튼에 포함(contains)되어있는 e.target(toggle의 자식요소들)이 아닌 경우
        // e.target !== navbar  >>>  e.target(클릭한 요소)가 navbar 영역이 아닌 경우
        // !navbar.contains(e.target)  >>>   navbar 영역에 포함(contains)되어있는 e.target(navbar의 자식요소들)이 아닌 경우

        // 위 모든 경우가 true일 때, 아래와 같은 로직이 구현된다
        document.body.classList.toggle("show-nav"); // toggle버튼이 show되어있는 경우에 'toggle'되기 때문에 close를 의미
        document.body.removeEventListener("click", closeNavbar); // body 아무곳이나 눌러도 event가 적용되지 않는다
    } else if (!document.body.classList.contains("show-nav")) {
        // close되어있을때
        document.body.removeEventListener("click", closeNavbar); // body 아무곳이나 눌러도 event가 적용되지 않는다
    }
}

// Toggle nav
toggle.addEventListener("click", () => {
    document.body.classList.toggle("show-nav");
    document.body.addEventListener("click", closeNavbar);
});

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) => (e.target == modal ? modal.classList.remove("show-modal") : false));
