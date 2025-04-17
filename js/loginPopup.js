function toggleLoginPopup() {
    const popup = document.getElementById("loginMask");

    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "flex";
    } else {
        popup.style.display = "none";
        clearLoginForm(); // 닫힐 때 입력값 초기화
    }
}

function closeLoginPopup(event) {
    if (event.target.id === "loginMask") {
        document.getElementById("loginMask").style.display = "none";
        clearLoginForm(); // 닫힐 때 입력값 초기화
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        const popup = document.getElementById("loginMask");
        if (popup.style.display === "flex") {
            popup.style.display = "none";
            clearLoginForm(); // 닫힐 때 입력값 초기화
        }
    }
});

// 로그인 폼 초기화 함수
function clearLoginForm() {
    const popup = document.querySelector(".login-popup");
    if (popup) {
        const inputs = popup.querySelectorAll("input");
        inputs.forEach(input => input.value = "");
    }
}

document.getElementById("btn-login").addEventListener("click", () => {
    alert("로그인 버튼이 눌렸습니다!");
});