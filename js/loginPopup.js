function toggleLoginPopup() {
    const mask = document.getElementById("loginMask");
    const popup = document.getElementById("loginPopup");
    const isVisible = mask.style.display === "flex";

    if (isVisible) {
        mask.style.display = "none";
    } else {
        mask.style.display = "flex";
    }
}

function closeLoginPopup(event) {
    const popup = document.getElementById("loginPopup");
    // 외부 클릭 시 닫기
    if (!popup.contains(event.target)) {
        document.getElementById("loginMask").style.display = "none";
    }
}

// ESC 키 눌렀을 때 팝업 닫기
document.addEventListener("keydown", function (event) {
    const mask = document.getElementById("loginMask");
    if (event.key === "Escape" && mask.style.display === "flex") {
        mask.style.display = "none";
    }
});