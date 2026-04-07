const patents = [
  {
    image: "1b7f4f7720643b890312a97ed827193e26f82f56.png",
    title: "Real-Time Fog Removal System And Its Method Thereof",
    desc: "This patent focuses on fog removal and image enhancement using visible and near-infrared band techniques."
  },
  {
    image: "1b7f4f7720643b890312a97ed827193e26f82f56.png",
    title: "Research Innovation Patent",
    desc: "This is sample patent text for your slider. Replace it with your real patent content from the design."
  },
  {
    image: "1b7f4f7720643b890312a97ed827193e26f82f56.png",
    title: "Advanced Imaging System",
    desc: "Another sample slide to demonstrate previous/next patent interaction with timer support."
  }
];

let patentIndex = 0;

const patentImage = document.getElementById("patentImage");
const patentTitle = document.getElementById("patentTitle");
const patentDesc = document.getElementById("patentDesc");
const prevPatent = document.getElementById("prevPatent");
const nextPatent = document.getElementById("nextPatent");

function showPatent(index) {
  patentImage.src = patents[index].image;
  patentTitle.textContent = patents[index].title;
  patentDesc.textContent = patents[index].desc;
}

if (prevPatent && nextPatent) {
  prevPatent.addEventListener("click", () => {
    patentIndex = (patentIndex - 1 + patents.length) % patents.length;
    showPatent(patentIndex);
  });

  nextPatent.addEventListener("click", () => {
    patentIndex = (patentIndex + 1) % patents.length;
    showPatent(patentIndex);
  });

  setInterval(() => {
    patentIndex = (patentIndex + 1) % patents.length;
    showPatent(patentIndex);
  }, 3000);
}

const achievementTrack = document.getElementById("achievementTrack");
const prevAchievement = document.getElementById("prevAchievement");
const nextAchievement = document.getElementById("nextAchievement");

if (achievementTrack && prevAchievement && nextAchievement) {
  const cards = Array.from(document.querySelectorAll(".achievement-card"));
  let currentIndex = 0;

  function cardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }

  function updateAchievementSlider() {
    const oneCard = cards[0].offsetWidth + 20;
    achievementTrack.scrollTo({
      left: currentIndex * oneCard,
      behavior: "smooth"
    });
  }

  nextAchievement.addEventListener("click", () => {
    const maxIndex = Math.max(0, cards.length - cardsPerView());
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateAchievementSlider();
  });

  prevAchievement.addEventListener("click", () => {
    const maxIndex = Math.max(0, cards.length - cardsPerView());
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    updateAchievementSlider();
  });

  window.addEventListener("resize", updateAchievementSlider);

  setInterval(() => {
    const maxIndex = Math.max(0, cards.length - cardsPerView());
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateAchievementSlider();
  }, 3500);
}