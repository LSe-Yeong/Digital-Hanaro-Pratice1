function toggleSearchForm() {
    const wrap = document.getElementById('searchWrap');
    wrap.classList.toggle('active');
}

function closeSearchForm() {
    const wrap = document.getElementById('searchWrap');
    wrap.classList.remove('active');
}