let dateContents
let matchDate = ["일","월","화","수","목","금","토"]
let selected
let currentIndex1;
let slide 
let cards 
let cardWidth
let leftArrow
let rightArrow
let indicators 
let intervalId
let baseGotoUrl = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&s=tab.nx.all&query="
let baseSearchUrl = "https://map.naver.com/p/search/"

const holeFestivals = [
    {
        title: "이월드 튤립 트레블",
        location: "대구 달서구",
        dateStart: new Date(2025, 3, 5),
        dateEnd: new Date(2025, 3, 17),
        address: "대구광역시 달서구 두류공원로 200",
        image: "img/fes-1.jpg"
    },
    {
        title: "진해군항제",
        location: "경남 창원시",
        dateStart: new Date(2025, 3, 10),
        dateEnd: new Date(2025, 3, 19),
        address: "경상남도 창원시 진해구",
        image: "img/fes-2.jpg"
    },
    {
        title: "서울 봄꽃축제",
        location: "서울 영등포구",
        dateStart: new Date(2025, 3, 13),
        dateEnd: new Date(2025, 3, 24),
        address: "서울특별시 영등포구 여의도동",
        image: "img/fes-3.jpg"
    },
    {
        title: "부산 다대포 해변 버스킹",
        location: "부산 사하구",
        dateStart: new Date(2025, 3, 12),
        dateEnd: new Date(2025, 3, 25),
        address: "부산광역시 사하구 다대동",
        image: "img/fes-4.jpg"
    },
    {
        title: "경주 벚꽃 마라톤",
        location: "경북 경주시",
        dateStart: new Date(2025, 3, 10),
        dateEnd: new Date(2025, 3, 16),
        address: "경상북도 경주시 보문로",
        image: "img/fes-5.jpg"
    },
    {
        title: "제주 유채꽃 축제",
        location: "제주 서귀포시",
        dateStart: new Date(2025, 3, 8),
        dateEnd: new Date(2025, 3, 20),
        address: "제주특별자치도 서귀포시 표선면",
        image: "img/fes-6.jpg"
    },
    {
        title: "인천 개항장 문화재 야행",
        location: "인천 중구",
        dateStart: new Date(2025, 3, 18),
        dateEnd: new Date(2025, 3, 27),
        address: "인천광역시 중구 중앙동",
        image: "img/fes-7.jpg"
    },
    {
        title: "춘천 레고랜드 벚꽃축제",
        location: "강원 춘천시",
        dateStart: new Date(2025, 3, 14),
        dateEnd: new Date(2025, 3, 21),
        address: "강원특별자치도 춘천시 하중도",
        image: "img/fes-8.jpg"
    }
];


let festivals;

window.onload = () => {
    dateContents = document.querySelectorAll(".date-set div span")
    let todayYear = new Date().getFullYear()
    let todayMonth = new Date().getMonth()+1
    document.querySelector(".marker").textContent = todayYear+"."+todayMonth
    let todayDay = new Date().getDay()
    let todayDate = new Date().getDate()
    dateContents[0].textContent = todayDate
    selected = [dateContents[0],dateContents[1]]

    changeSelectedStyle(selected)
    festivals = getPossibleFestival(selected[0].textContent)

    for(let i=2;i<dateContents.length;i=i+2){
        dateContents[i].textContent=todayDate+1
        todayDate=(todayDate+1)%getLastDayOfMonth(todayYear,todayMonth)

        const dayName = numToDate((todayDay + 1) % 7)
        dateContents[i+1].textContent = dayName

        if (dayName === "토") {
            dateContents[i].classList.add("blue")
            dateContents[i+1].classList.add("blue")
        }
        if (dayName === "일") {
            dateContents[i].classList.add("red")
            dateContents[i+1].classList.add("red")
        }
        todayDay=(todayDay+1)%7
    }

    for(let i=0; i<dateContents.length;i=i+2){
        dateContents[i].addEventListener("click",function(){
            selected = [dateContents[i],dateContents[i+1]]
            changeSelectedStyle(selected)
            festivals = getPossibleFestival(selected[0].textContent)
            loadCards()

            indicators[currentIndex].classList.remove("selected")

            currentIndex = 0;
            slide = document.querySelector(".carousel-slide");
            cards = document.querySelectorAll(".card");
            cardWidth = cards[0].offsetWidth + 20; // 카드 + margin-right
            leftArrow = document.querySelector(".arrow-left")
            rightArrow = document.querySelector(".arrow-right")

            loadButtons()

            updateArrow()
            updateActiveCard()
            moveToCenter(currentIndex + 1); // 가운데 카드 기준으로 이동

            indicators[currentIndex].classList.add("selected") 

            moveAuto()
        })
    }

    loadCards()
    
    currentIndex = 0;
    slide = document.querySelector(".carousel-slide");
    cards = document.querySelectorAll(".card");
    cardWidth = cards[0].offsetWidth + 20; // 카드 + margin-right
    leftArrow = document.querySelector(".arrow-left")
    rightArrow = document.querySelector(".arrow-right")

    loadButtons()

    updateArrow()
    updateActiveCard()
    moveToCenter(currentIndex + 1); // 가운데 카드 기준으로 이동

    moveAuto()
}

function moveAuto(){
    clearInterval(intervalId)
    intervalId = setInterval(()=>{
        if(currentIndex == festivals.length-1){
            moveSlide(-festivals.length)
        }
        else{
            moveSlide(1)
        }
    },5000)
}

function moveSlide(direction) {
        indicators[currentIndex].classList.remove("selected")

        const maxIndex = cards.length - 3; // 3개씩 보이도록 제한
        currentIndex += direction;

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        slide.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        updateArrow()
        updateActiveCard()

        indicators[currentIndex].classList.add("selected")
}

function moveToCenter(centerCardIndex) {
    const trackWidth = document.querySelector(".carousel-track").offsetWidth;
    const card = cards[centerCardIndex];
    const cardOffsetLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;

    const targetX = cardOffsetLeft - (trackWidth / 2 - cardWidth / 2);

    slide.style.transform = `translateX(-${targetX}px)`;
}


function updateArrow() {
    if (cards.length<=3){
        leftArrow.style.visibility = "hidden"
        rightArrow.style.visibility = "hidden"
    }
    else if (currentIndex==0) {
        leftArrow.style.visibility = "hidden"
        rightArrow.style.visibility = "visible"
    }
    else if(currentIndex==cards.length-3) {
        leftArrow.style.visibility = "visible"
        rightArrow.style.visibility = "hidden"
    }
    else {
        leftArrow.style.visibility = "visible"
        rightArrow.style.visibility = "visible"
    }
}

function updateActiveCard() {
    updateFakeCard()
    cards.forEach((card, idx) => {
        if (idx === currentIndex + 1) {
        card.classList.add("active"); // 가운데 카드
        } else {
        card.classList.remove("active");
        }
    });
    moveToCenter(currentIndex + 1); // 가운데 카드 기준으로 이동
}

function updateFakeCard() {
    cards.forEach((card, idx) => {
        card.classList.remove("fake");
    });
    cards[0].classList.add("fake")
    cards[cards.length-1].classList.add("fake")
}

function numToDate(n) {
    return matchDate[n]
}

function getLastDayOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function changeSelectedStyle(selected){
    resetStyle()
    selected[0].classList.add("selected")
}

function resetStyle() {
    for(let i=0;i<dateContents.length;i=i+2){
        dateContents[i].classList.remove("selected")
    }
}

function createCard(festival) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="half-circle1"></div>
        <div class="half-circle2"></div>
        <img src="${festival.image}" width="200px" height="360px">
        <div class="vertical-line"></div>
        <div class="info">
            <div class="title">
                <h2>${festival.title}</h2>
                <span>${festival.location}</span>
            </div>
            <div class="day-place">
                <div class="day">
                    <h2 style="font-size: 14px; font-weight: 400;">기간</h2>
                    <span style="font-size:16px; font-weight: 500;">${festival.dateStart.toLocaleDateString()} ~</span><br>
                    <span style="font-size:16px; font-weight: 500;">${festival.dateEnd.toLocaleDateString()}</span>
                </div>
                <div class="place">
                    <h2 style="font-size: 14px; font-weight: 400;">장소</h2>
                    <span style="font-size:16px; font-weight: 500;">${festival.address}</span>
                </div>
            </div>
            <div class="button">
                <a href="${baseGotoUrl+festival.title}"><button class="goto">바로가기</button></a>
                <a href="${baseSearchUrl+festival.title}"><button class="search-path">길찾기</button></a>
            </div>
        </div>
    `;

    return card;
}

function loadButtons() {
    if(festivals.length==0){
        const buttonIndicators = document.querySelector(".indicators")
        buttonIndicators.innerHTML =""
        return
    }

    const buttonIndicators = document.querySelector(".indicators")
    buttonIndicators.innerHTML =""

    console.log(buttonIndicators) 
    
    let button = document.createElement("button")
    button.classList.add("selected")
    buttonIndicators.appendChild(button)

    for(let i=1;i<festivals.length;i++) {
        button = document.createElement("button")
        buttonIndicators.appendChild(button)
    }

    indicators = document.querySelectorAll(".indicators button")
    for(let i=0;i<indicators.length;i++) {
        indicators[i].addEventListener("click",function(){
            moveSlide(i-currentIndex)    
        })
    }
    indicators[currentIndex].classList.add("selected")

    return
}

function loadCards() {
    const slide = document.querySelector(".carousel-slide");

    // 기존 카드 제거
    slide.innerHTML = "";

    // 가짜 카드 추가 (양쪽에)
    const fakeCardStart = document.createElement("div");
    fakeCardStart.classList.add("card", "fake");
    slide.appendChild(fakeCardStart);

    festivals.forEach(festival => {
        const card = createCard(festival);
        slide.appendChild(card);
    });

    const fakeCardEnd = document.createElement("div");
    fakeCardEnd.classList.add("card", "fake");
    slide.appendChild(fakeCardEnd);
    
}

const getPossibleFestival = (day) => {
            const possibleFestivals = []
            const today = new Date()
            const newDate = new Date(today.getFullYear(),today.getMonth(),day)
            for(let i=0;i<holeFestivals.length;i++) {
                const fest = holeFestivals[i]
                if(fest.dateStart<=newDate && newDate<=fest.dateEnd) {
                    possibleFestivals.push(fest)
                }
            }
            return possibleFestivals
        }