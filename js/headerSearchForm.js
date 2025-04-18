// 검색창을 제어하는 함수
function toggleSearchForm() {
    const searchWrap = document.getElementById('searchWrap');
    if (searchWrap.style.display === 'none' || searchWrap.style.display === '') {
        searchWrap.style.display = 'block';
    } else {
        searchWrap.style.display = 'none';
    }
}

// 검색창 닫기 함수
function closeSearchForm() {
    const searchWrap = document.getElementById('searchWrap');
    searchWrap.style.display = 'none';
}

// 화면 바깥 클릭 시 검색창 닫기
document.addEventListener('click', function (event) {
    const searchWrap = document.getElementById('searchWrap');
    const searchButton = document.getElementById('searchButton'); // 검색 버튼이 있다면 제외

    // 클릭한 대상이 검색창이나 검색버튼이 아닌 경우
    if (searchWrap && !searchWrap.contains(event.target) && (!searchButton || !searchButton.contains(event.target))) {
        closeSearchForm();
    }
});