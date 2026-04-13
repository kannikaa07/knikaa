const patents = [
  {
    image: "1b7f4f7720643b890312a97ed827193e26f82f56.png",
    title: "REAL-TIME FOG REMOVAL SYSTEM AND ITS METHOD THEREOF",
    desc: "The present invention provides a visible and near-infrared band's deep learning and pixel sharing-based system and method for image and video dehazing. It successfully restores hazy/foggy images with a wide range of haze/fog conditions. Unlike the prior art; the proposed invention utilized a wide electromagnetic spectrum for imaging from 400nm to 1400nm wavelength and performed dehazing/ defogging in the entire range (visible and NIR bands). For this task, a data-driven approach is developed to learn appropriate features from the input image sequences. The spatial multiscale features are extracted using completely separable ID layers that allow pipeline stage insertion to enhance..."
  },
  {
    image: "https://www.researchgate.net/publication/376399694/figure/fig4/AS:11431281464502204@1748246784760/Schematic-of-our-designed-high-directivity-CP-reflectarray-antenna-with-low-SLL-and-CPL.png",
    title: "ADVANCED IMAGING AND DETECTION SYSTEMA Low-RCS Circularly Polarized Reflectarray Antenna With a Linearly Polarized Feed",
    desc: "A low-radar cross Section (RCS) circularly polarized (CP) reflectarray antenna with a linearly polarized (LP) feed is designed. The out-of-band RCS of the reflectarray for both the TE and TM polarized incident waves is reduced by replacing its ground with an absorptive frequency selective reflector (AFSR). A systematic methodology based on the synthesis of the equivalent circuit model (ECM) is presented to expedite the design of the AFSR. The unit phasing element of the reflectarray is designed in such a way that it exhibits minimum coupling between the two orthogonal reflected LP-field components. Moreover, during the reflectarray construction, a novel phase synthesis is used which takes into account the possible lowest of the existing mutual coupling while providing quadrature phase difference between the orthogonal LP components with minimum phase error. The proposed design is fabricated using 14×14 phasing elements to experimentally validate the numerically simulated results. The performance of the reflectarray is compared with a conventional reflectarray without the AFSR. It is observed that when the reflectarray is integrated with the AFSR, its gain is reduced only by 1.16 dB. However, its out-of-band RCS is reduced significantly. The 8-dB RCS reduction bandwidth can be observed from 3.55 to 7.2 GHz (67.9%) and from 11.85 to 14.21 GHz (18.11%). Moreover, it provides peak co-pol CP gain of 21.62 dBi, aperture efficiency (AE) of 41%, and 1-dB gain bandwidth from 8.68 to 8.95 GHz."
  },
];

let patentIndex = 0;

const patentImage = document.getElementById("patentImage");
const patentTitle = document.getElementById("patentTitle");
const patentDesc = document.getElementById("patentDesc");
const prevPatent = document.getElementById("prevPatent");
const nextPatent = document.getElementById("nextPatent");

function showPatent(index) {
  let currentPatent = patents[index];

  patentImage.src = currentPatent.image;
  patentTitle.textContent = currentPatent.title;
  patentDesc.textContent = currentPatent.desc;
}

showPatent(patentIndex);

prevPatent.addEventListener("click", function () {
  patentIndex--;

  if (patentIndex < 0) {
    patentIndex = patents.length - 1;
  }

  showPatent(patentIndex);
});

nextPatent.addEventListener("click", function () {
  patentIndex++;

  if (patentIndex >= patents.length) {
    patentIndex = 0;
  }

  showPatent(patentIndex);
});

setInterval(function () {
  patentIndex++;

  if (patentIndex >= patents.length) {
    patentIndex = 0;
  }

  showPatent(patentIndex);
}, 3500);

const achievementTrack = document.getElementById("achievementTrack");
const prevAchievement = document.getElementById("prevAchievement");
const nextAchievement = document.getElementById("nextAchievement");
const cards = document.querySelectorAll(".achievement-card");

let currentIndex = 0;

function showAchievement() {
  let cardWidth = cards[0].offsetWidth + 18;
  achievementTrack.scrollTo({
    left: currentIndex * cardWidth,
    behavior: "smooth"
  });
}

nextAchievement.addEventListener("click", function () {
  currentIndex++;

  if (window.innerWidth <= 768) {
    if (currentIndex > cards.length - 1) {
      currentIndex = 0;
    }
  } else if (window.innerWidth <= 992) {
    if (currentIndex > cards.length - 2) {
      currentIndex = 0;
    }
  } else {
    if (currentIndex > cards.length - 3) {
      currentIndex = 0;
    }
  }

  showAchievement();
});

prevAchievement.addEventListener("click", function () {
  currentIndex--;

  if (currentIndex < 0) {
    if (window.innerWidth <= 768) {
      currentIndex = cards.length - 1;
    } else if (window.innerWidth <= 992) {
      currentIndex = cards.length - 2;
    } else {
      currentIndex = cards.length - 3;
    }
  }

  showAchievement();
});

setInterval(function () {
  currentIndex++;

  if (window.innerWidth <= 768) {
    if (currentIndex > cards.length - 1) {
      currentIndex = 0;
    }
  } else if (window.innerWidth <= 992) {
    if (currentIndex > cards.length - 2) {
      currentIndex = 0;
    }
  } else {
    if (currentIndex > cards.length - 3) {
      currentIndex = 0;
    }
  }

  showAchievement();
}, 4000);