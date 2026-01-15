const items = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

items.forEach(item => observer.observe(item));

function setLang(lang){
  if(lang === 'sq'){
    subtitle.innerText = "Zgjidhje premium për web & automatizim";
    desc.innerText = "Webfaqe profesionale dhe zgjidhje të zgjuara automatizimi për biznese moderne.";

    servicesTitle.innerText = "Shërbimet";
    s1t.innerText = "Webfaqe për Biznese";
    s1d.innerText = "Webfaqe premium për besueshmëri dhe rritje.";
    s2t.innerText = "Webfaqe Personale & Portfolio";
    s2d.innerText = "Brendim personal minimal dhe profesional.";
    s3t.innerText = "Mirëmbajtje Website";
    s3d.innerText = "Siguri, përditësime dhe mbështetje afatgjate.";
    s4t.innerText = "Automatizime me Python";
    s4d.innerText = "Zgjidhje të zgjuara për eliminimin e punëve të përsëritura.";
    s5t.innerText = "Landing Pages";
    s5d.innerText = "Faqe marketingu të fokusuara në konvertim.";

    aboutTitle.innerText = "Rreth Meje";
    aboutText.innerText = "Unë jam Albion Gashi, zhvillues web i specializuar në webfaqe moderne dhe automatizime praktike. Me bazë në Podujevë, fokusimi im është cilësia, efikasiteti dhe vlera afatgjate.";

    contactTitle.innerText = "Kontakt";
  } else {
    location.reload();
  }
}
