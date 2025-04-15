const data = [
    {
        title: "남산서울타워",
        desc: "서울을 한눈에 볼 수 있는 대표 관광명소",
        location: "서울특별시 용산구",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=dd6daf06-28ff-48ae-b90e-472b6ecfa1db",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=ad931739-fca3-4135-a878-cc7fb82920ba&big_category=A02&mid_category=A0205&big_area=1"
    },
    {
        title: "부산 해운대",
        desc: "부산을 대표하는 해변으로 매년 수많은 관광객이 방문",
        location: "부산광역시 해운대구",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=12cad1c4-1077-4dc0-aab7-02387b82ad27&mode=raw",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=36f54304-e9a8-4615-9226-eb749bf6ce75&big_category=A01&mid_category=A0101&big_area=6"
    },
    {
        title: "경주 불국사",
        desc: "신라시대의 찬란한 불교문화를 느낄 수 있는 사찰",
        location: "경상북도 경주시",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=dea68f50-8ca8-4b2c-a074-c0caf99bf41d",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=a43fa503-b8db-42a8-817e-04f2e353fa42&big_category=A02&mid_category=A0201&big_area=35"
    },
    {
        title: "제주 성산일출봉",
        desc: "아름다운 일출을 볼 수 있는 제주도의 명소",
        location: "제주특별자치도 서귀포시",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d7fe94c9-ab0e-4070-b632-110a73d5e7c1",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=f5da2334-1c8c-4049-8e06-4db38333a57f&big_category=A01&mid_category=A0101&big_area=39"
    },
    {
        title: "강릉 경포대",
        desc: "아름다운 바다와 호수가 어우러진 강릉의 명소",
        location: "강원도 강릉시",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=9c8fd481-a0fb-4bfb-bfe0-06000ee53965",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=babcea7b-a8e6-4a30-9e33-f783ad33fe79&big_category=A02&mid_category=A0201&big_area=32"
    },
    {
        title: "전주 한옥마을",
        desc: "전통과 현대가 공존하는 문화 관광지",
        location: "전라북도 전주시",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=1a802bf2-2628-4d77-bfe5-19bef8d0ece2",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=66dba60b-a623-4753-a3b4-76a62fcbbe05&big_category=A02&mid_category=A0201&big_area=37"
    },
    {
        title: "속초 설악산",
        desc: "대한민국을 대표하는 명산 중 하나",
        location: "강원도 속초시",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=6ee05e85-80c3-473f-a527-44c53068d4d2",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=4db10875-c210-476a-9873-dc307faccf47&big_category=A01&mid_category=A0101&big_area=32"
    },
    {
        title: "인천 차이나타운",
        desc: "중국 문화와 음식이 공존하는 독특한 거리",
        location: "인천광역시 중구",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=44b8d4b9-2abf-413d-bc8e-35ca3a3014e9",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=7f9d2672-2325-4d0f-8d3b-b104f47555cb&big_category=A02&mid_category=A0203&big_area=2"
    },
    {
        title: "담양 죽녹원",
        desc: "대나무 숲이 인상적인 자연 힐링 공간",
        location: "전라남도 담양군",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5538cfac-e58d-4d48-8677-64225d60e440",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=1424238b-7957-4660-8cd7-ef5742808ded&big_category=A01&mid_category=A0101&big_area=38"
    },
    {
        title: "청주 상당산성",
        desc: "역사와 풍경이 공존하는 명소",
        location: "충청북도 청주시",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=233cf30e-d9dd-44a9-9cdd-20b4ea67b3f9",
        link: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=967820c7-0969-41c4-b1ae-0d515f054458&big_category=A02&mid_category=A0201&big_area=33"
    }
];

let currentIndex = 0;
const pageSize = 8;
const container = document.getElementById("card-container");

function loadMore() {
    const nextItems = data.slice(currentIndex, currentIndex + pageSize);
    nextItems.forEach(item => {
        const card = document.createElement("a");
        card.className = "card";
        card.href = item.link;
        card.target = "_blank";
        card.innerHTML = `
          <img src="${item.img}" alt="${item.title}">
          <div class="card-body">
            <h3 class="title">${item.title}</h3>
            <p class="desc">${item.desc}</p>
            <span class="location">${item.location}</span>
          </div>
        `;
        container.appendChild(card);
    });
    currentIndex += pageSize;
    if (currentIndex >= data.length) {
        document.querySelector(".load-more").style.display = "none";
    }
}

window.onload = loadMore;