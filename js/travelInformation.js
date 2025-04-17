const data = [ // 위에서 주신 10개 샘플 데이터
    {
        id: 1,
        name: "남원 아담원",
        location: "전북 남원시",
        description: "자연과 따뜻한 차 한잔으로 조용한 휴식처를 제공",
        category: ["#역사", "해"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=e492a38e-2ecc-4835-bba7-39ee75dbb53f&mode=raw",
        popularity: 90
    },
    {
        id: 2,
        name: "서산 개심사",
        location: "충남 서산시",
        description: "겹벚꽃이 유명한 고즈넉한 사찰",
        category: ["#자연", "허"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=27993154-6699-4c0e-b052-f360e68d21be&mode=raw",
        popularity: 87
    },
    {
        id: 3,
        name: "전주 한옥마을",
        location: "전북 전주시",
        description: "전통과 현대가 공존하는 명소",
        category: ["#문화유산", "히"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=ff853943-ded1-4d6e-9818-8e9f22b48d19&mode=raw",
        popularity: 95
    },
    {
        id: 4,
        name: "담양 메타세쿼이아 길",
        location: "전남 담양군",
        description: "산책하기 좋은 인스타 명소",
        category: ["#인스타명소", "호"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=ca33c81c-25ad-45b2-a043-c670c6685d97&mode=raw",
        popularity: 88
    },
    {
        id: 5,
        name: "서울 북촌 한옥마을",
        location: "서울 종로구",
        description: "전통 가옥과 골목길의 매력",
        category: ["#문화유산", "하하하하하"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=10c85992-af05-470c-934c-0711cb43bb81&mode=raw",
        popularity: 93
    },
    {
        id: 6,
        name: "부산 감천문화마을",
        location: "부산 사하구",
        description: "알록달록한 골목의 예술마을",
        category: ["#인스타명소"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=12cad1c4-1077-4dc0-aab7-02387b82ad27&mode=raw",
        popularity: 91
    },
    {
        id: 7,
        name: "광주 양림동 펭귄마을",
        location: "광주 남구",
        description: "골목마다 펭귄이 가득한 동네",
        category: ["#체험여행", "하하하하하"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=c4149c25-19a5-41e6-a7b9-9f0b52960edc&mode=raw",
        popularity: 85
    },
    {
        id: 8,
        name: "춘천 낭만시장",
        location: "강원 춘천시",
        description: "먹거리와 볼거리가 가득한 전통시장",
        category: ["#전통시장", "하하"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=75ec7ae4-96f0-46e8-b197-823d2827b2df&mode=raw",
        popularity: 80
    },
    {
        id: 9,
        name: "제주 오설록 티뮤지엄",
        location: "제주 서귀포시",
        description: "녹차밭과 티컬쳐가 어우러진 공간",
        category: ["#힐링", "하"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=1318ea8e-7d7c-4054-a436-144806c434cf&mode=raw",
        popularity: 94
    },
    {
        id: 10,
        name: "경주 황리단길",
        location: "경북 경주시",
        description: "역사와 트렌디한 감성이 공존",
        category: ["#역사", "하"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=c40a532b-8c88-42e0-8f0d-335f0cb175d2&mode=raw",
        popularity: 89
    },
    {
        id: 11,
        name: "남원 아담원",
        location: "전북 남원시",
        description: "자연과 따뜻한 차 한잔으로 조용한 휴식처를 제공",
        category: ["#역사", "해"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=e492a38e-2ecc-4835-bba7-39ee75dbb53f&mode=raw",
        popularity: 90
    },
    {
        id: 12,
        name: "서산 개심사",
        location: "충남 서산시",
        description: "겹벚꽃이 유명한 고즈넉한 사찰",
        category: ["#자연", "허"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=27993154-6699-4c0e-b052-f360e68d21be&mode=raw",
        popularity: 87
    },
    {
        id: 13,
        name: "전주 한옥마을",
        location: "전북 전주시",
        description: "전통과 현대가 공존하는 명소",
        category: ["#문화유산", "히"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=ff853943-ded1-4d6e-9818-8e9f22b48d19&mode=raw",
        popularity: 95
    },
    {
        id: 14,
        name: "담양 메타세쿼이아 길",
        location: "전남 담양군",
        description: "산책하기 좋은 인스타 명소",
        category: ["#인스타명소", "호"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=ca33c81c-25ad-45b2-a043-c670c6685d97&mode=raw",
        popularity: 88
    },
    {
        id: 15,
        name: "서울 북촌 한옥마을",
        location: "서울 종로구",
        description: "전통 가옥과 골목길의 매력",
        category: ["#문화유산", "하하하하하"],
        image: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=10c85992-af05-470c-934c-0711cb43bb81&mode=raw",
        popularity: 93
    }
];

let currentPage = 1;
const itemsPerPage = 10;
let selectedCategories = []; // 선택된 카테고리 배열
let currentSort = "latest";

const allCategories = [...new Set(data.flatMap(item => item.category))];
const categoryContainer = document.getElementById("category-container");

allCategories.forEach(cat => {
    const btn = document.createElement("button");
    btn.innerText = cat;
    btn.dataset.category = cat;
    btn.onclick = () => {
        if (selectedCategories.includes(cat)) {
            selectedCategories = selectedCategories.filter(c => c !== cat);
        } else {
            selectedCategories.push(cat);
        }
        currentPage = 1;
        renderList();
    };
    categoryContainer.appendChild(btn);
});

function renderList() {
    let filtered = data.filter(item => {
        if (selectedCategories.length === 0) return true;
        return selectedCategories.some(cat => item.category.includes(cat));
    });

    if (currentSort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "popularity") {
        filtered.sort((a, b) => b.popularity - a.popularity);
    }

    document.getElementById("total-count").textContent = `총 ${filtered.length}건`;

    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    filtered.slice(start, end).forEach(item => {
        const el = document.createElement("div");
        el.className = "item";
        el.onclick = () => alert(`${item.name} 클릭됨!`);
        el.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="info">
                  <h4>${item.name}</h4>
                  <p>${item.location}</p>
                  <p>${item.description}</p>
                  <p>${item.category.join(', ')}</p>
                </div>
            `;
        listContainer.appendChild(el);
    });

    // 카테고리 버튼 스타일 업데이트
    document.querySelectorAll(".sidebar .category button").forEach(btn => {
        const cat = btn.dataset.category;
        btn.classList.toggle("active", selectedCategories.includes(cat));
    });

    renderPagination(filtered.length);
}

function renderPagination(total) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const pages = Math.ceil(total / itemsPerPage);
    for (let i = 1; i <= pages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        if (i === currentPage) btn.classList.add("active");
        btn.onclick = () => {
            currentPage = i;
            renderList();
        };
        pagination.appendChild(btn);
    }
}

document.querySelectorAll(".sort-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".sort-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentSort = btn.dataset.sort;
        renderList();
    });
});

// 초기 렌더링
renderList();