
/* ── ROOM DATA ── */
const roomsData = [
    {
        name: "Single Room",
        badge: "Standard",
        price: 3500,
        img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
        desc: "A cozy, clean room for one person. Good for solo travelers or short stays. Includes a comfortable bed, desk, and attached bathroom.",
        size: "18 m²", bed: "1 Single", guests: "1",
        features: ["Single Bed", "Wi-Fi", "Hot Water"]
    },
    {
        name: "Standard Double Room",
        badge: "Standard",
        price: 4800,
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
        desc: "A comfortable room for two with a double bed. Great for couples or two friends traveling together. Quiet and well-maintained.",
        size: "22 m²", bed: "1 Double", guests: "2",
        features: ["Double Bed", "Wi-Fi", "TV"]
    },
    {
        name: "Twin Room",
        badge: "Standard",
        price: 5200,
        img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
        desc: "Two separate single beds in one room — ideal for two friends or colleagues who want their own sleeping space.",
        size: "24 m²", bed: "2 Single Beds", guests: "2",
        features: ["2 Single Beds", "Wi-Fi", "Wardrobe"]
    },
    {
        name: "Deluxe Double Room",
        badge: "Deluxe",
        price: 7500,
        img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
        desc: "A larger, better-furnished room with a king-size bed, nicer decor, and a small sitting area. Includes complimentary breakfast.",
        size: "32 m²", bed: "1 King", guests: "2",
        features: ["King Bed", "Breakfast Included", "Balcony"]
    },
    {
        name: "Deluxe Twin Room",
        badge: "Deluxe",
        price: 7800,
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        desc: "Same size and comfort as the Deluxe Double but with two separate beds. Great for families with kids or two travelers who want their own bed.",
        size: "32 m²", bed: "2 Single Beds", guests: "3",
        features: ["2 Single Beds", "Breakfast Included", "Rainfall Shower"]
    },
    {
        name: "Family Room",
        badge: "Family",
        price: 9500,
        img: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?auto=format&fit=crop&w=600&q=80",
        desc: "A spacious room made for families. Has one large bed and two single beds, plus extra floor space and storage for luggage.",
        size: "46 m²", bed: "1 King + 2 Single", guests: "4",
        features: ["Large Room", "4 Guests", "Kids Welcome Kit"]
    },
    {
        name: "Junior Suite",
        badge: "Suite",
        price: 14500,
        img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80",
        desc: "A step up from a deluxe room — includes a separate sitting room, better views, and a bigger bathroom with a bathtub.",
        size: "52 m²", bed: "1 King", guests: "2",
        features: ["Separate Sitting Area", "Bathtub", "24hr Butler"]
    },
    {
        name: "Executive Suite",
        badge: "Suite",
        price: 19500,
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        desc: "Our top single-bedroom option. Large suite with a private balcony, a proper living room, and all meals included in the price.",
        size: "65 m²", bed: "1 King", guests: "2",
        features: ["All Meals Included", "Private Balcony", "Panoramic View"]
    },
    {
        name: "Connecting Rooms",
        badge: "Family",
        price: 13000,
        img: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=600&q=80",
        desc: "Two rooms connected by a shared door — great for larger families or two couples who want separate spaces but easy access to each other.",
        size: "2 × 26 m²", bed: "2 Double Beds", guests: "4",
        features: ["2 Connected Rooms", "Private Entrance", "Kids Friendly"]
    },
    {
        name: "Penthouse Suite",
        badge: "Penthouse",
        price: 32000,
        img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
        desc: "Our best room. Located on the top floor with a full 360-degree view of Kathmandu and the surrounding hills. Includes a private terrace and personal host.",
        size: "95 m²", bed: "2 King Bedrooms", guests: "4",
        features: ["Private Terrace", "Personal Host", "All Meals + Bar"]
    }
];

/* ── BUILD DROPDOWNS ── */
const formRoomSelect = document.getElementById("room");
const widgetRoomSelect = document.getElementById("widgetRoomSelect");
const liveSelectionText = document.getElementById("liveSelectionText");
const footerRoomList = document.getElementById("footerRoomList");

roomsData.forEach(room => {
    const opt1 = document.createElement("option");
    opt1.value = room.name;
    opt1.textContent = `${room.name} — Rs. ${room.price.toLocaleString()}`;
    formRoomSelect.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = room.name;
    opt2.textContent = room.name;
    widgetRoomSelect.appendChild(opt2);

    const li = document.createElement("li");
    li.innerHTML = `<a data-target="our-rooms">${room.name}</a>`;
    footerRoomList.appendChild(li);
});

/* ── CARD BUILDER ── */
function buildCard(room) {
    const card = document.createElement("div");
    card.className = "room-card";
    card.innerHTML = `
        <div class="room-img-container">
            <img src="${room.img}" alt="${room.name}" loading="lazy">
            <span class="room-badge">${room.badge}</span>
        </div>
        <div class="room-info-block">
            <div class="room-name-row">
                <h3>${room.name}</h3>
                <div class="stars">★★★★★</div>
            </div>
            <div class="room-features">
                ${room.features.map(f => `<span class="room-feat"><i class="fa-solid fa-check"></i>${f}</span>`).join("")}
            </div>
            <p>${room.desc}</p>
            <div class="room-action-row">
                <div class="card-price-tag">
                    Rs. ${room.price.toLocaleString()}
                    <span>/ per night</span>
                </div>
                <button class="card-book-btn" type="button">Book This</button>
            </div>
        </div>
    `;
    card.querySelector(".card-book-btn").addEventListener("click", () => selectRoom(room));
    return card;
}

function selectRoom(room) {
    formRoomSelect.value = room.name;
    widgetRoomSelect.value = room.name;
    liveSelectionText.textContent = `${room.name} — Rs. ${room.price.toLocaleString()} / night`;
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* ── INFINITE CAROUSEL ── */
const track = document.getElementById("carouselTrack");
const dotsContainer = document.getElementById("carouselDots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let perView = 3;
let currentIndex = 0;

function updatePerView() {
    if (window.innerWidth <= 700) perView = 1;
    else if (window.innerWidth <= 1050) perView = 2;
    else perView = 3;
}

function initCarousel() {
    track.innerHTML = "";
    const prefix = roomsData.slice(-perView);
    const suffix = roomsData.slice(0, perView);
    [...prefix, ...roomsData, ...suffix].forEach(room => track.appendChild(buildCard(room)));
    currentIndex = perView;
    track.style.transition = "none";
    resizeCards();
    buildDots();
}

function resizeCards() {
    const vp = document.querySelector(".carousel-viewport");
    const gap = 26;
    const w = (vp.clientWidth - gap * (perView - 1)) / perView;
    track.querySelectorAll(".room-card").forEach(c => c.style.width = w + "px");
    moveInstant();
}

function moveSmooth() {
    const gap = 26;
    const w = parseFloat(track.querySelector(".room-card").style.width);
    track.style.transition = "transform 0.42s cubic-bezier(0.25, 1, 0.5, 1)";
    track.style.transform = `translateX(-${currentIndex * (w + gap)}px)`;
}

function moveInstant() {
    const gap = 26;
    const w = parseFloat(track.querySelector(".room-card").style.width);
    track.style.transition = "none";
    track.style.transform = `translateX(-${currentIndex * (w + gap)}px)`;
}

function buildDots() {
    dotsContainer.innerHTML = "";
    roomsData.forEach((_, i) => {
        const d = document.createElement("button");
        d.className = "carousel-dot" + (i === 0 ? " active" : "");
        d.addEventListener("click", () => { currentIndex = i + perView; moveSmooth(); syncDots(); });
        dotsContainer.appendChild(d);
    });
}

function syncDots() {
    let ai = currentIndex - perView;
    if (ai >= roomsData.length) ai = 0;
    if (ai < 0) ai = roomsData.length - 1;
    dotsContainer.querySelectorAll(".carousel-dot").forEach((d, i) => d.classList.toggle("active", i === ai));
}

track.addEventListener("transitionend", () => {
    if (currentIndex >= roomsData.length + perView) { currentIndex = perView; moveInstant(); }
    if (currentIndex < perView) { currentIndex = roomsData.length + perView - 1; moveInstant(); }
    syncDots();
});

prevBtn.addEventListener("click", () => { currentIndex--; moveSmooth(); });
nextBtn.addEventListener("click", () => { currentIndex++; moveSmooth(); });

/* ── SYNC FORM / WIDGET ── */
formRoomSelect.addEventListener("change", e => {
    const found = roomsData.find(r => r.name === e.target.value);
    if (found) {
        liveSelectionText.textContent = `${found.name} — Rs. ${found.price.toLocaleString()} / night`;
        widgetRoomSelect.value = found.name;
    } else {
        liveSelectionText.textContent = "No room selected yet";
    }
});

document.getElementById("widgetSearchSubmit").addEventListener("click", () => {
    const r = widgetRoomSelect.value;
    const ci = document.getElementById("widgetCheckin").value;
    const co = document.getElementById("widgetCheckout").value;
    if (r) { formRoomSelect.value = r; const m = roomsData.find(x => x.name === r); if (m) liveSelectionText.textContent = `${m.name} — Rs. ${m.price.toLocaleString()} / night`; }
    if (ci) document.getElementById("checkin").value = ci;
    if (co) document.getElementById("checkout").value = co;
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

/* ── NAV ── */
document.getElementById("navToggle").addEventListener("click", () => document.getElementById("navLinks").classList.toggle("open"));

document.querySelectorAll("[data-target]").forEach(el => {
    el.addEventListener("click", () => {
        const t = document.getElementById(el.getAttribute("data-target"));
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
        document.getElementById("navLinks").classList.remove("open");
    });
});

/* ── FORM SUBMIT ── */
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const overlay = document.getElementById("successOverlay");
    overlay.classList.add("show");
    this.reset();
    liveSelectionText.textContent = "No room selected yet";
    overlay.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => overlay.classList.remove("show"), 7000);
});

/* ── INIT ── */
updatePerView();
initCarousel();
window.addEventListener("resize", () => { const old = perView; updatePerView(); if (perView !== old) initCarousel(); else resizeCards(); });
