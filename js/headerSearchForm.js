function toggleSearchForm() {
    const searchWrap = document.getElementById('searchWrap');
    if (searchWrap.style.display === 'none' || searchWrap.style.display === '') {
        searchWrap.style.display = 'block';
    } else {
        searchWrap.style.display = 'none';
    }
}

function closeSearchForm() {
    const searchWrap = document.getElementById('searchWrap');
    searchWrap.style.display = 'none';
}