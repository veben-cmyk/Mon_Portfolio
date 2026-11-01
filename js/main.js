// ===================== AUTRES PROJETS =====================

// 1. LES DONNÉES : un objet par projet.
//    "tags" est un tableau : un projet peut avoir autant de technos qu'on veut.
const projets = [
  {
    titre: "Clone de YouTube",
    description: "Reproduction fidèle de l'interface de YouTube, responsive.",
    image: "images/youtube-clone.png",
    tags: ["HTML", "Tailwind CSS"],
    site: "https://veben-cmyk.github.io/youtube_clone/",
    github: "https://github.com/veben-cmyk/youtube_clone",
  },
  {
    titre: "Coffee Shop",
    description: "Site vitrine pour un café, au design élégant et responsive.",
    image: "images/projet café.png",
    tags: ["HTML", "CSS"],
    site: "https://veben-cmyk.github.io/coffee-shop/",
    github: "https://github.com/veben-cmyk/coffee-shop",
  },
];

// 2. UN PETIT COMPOSANT : une pastille pour une techno
function tag(nom) {
    return `<span class="rounded-full bg-page px-3 py-1.5 text-sm text-ink/80">${nom}</span>`;
}

// 3. LE COMPOSANT CARTE : reçoit un projet, renvoie le HTML d'une carte
  function carteProjet(projet, index) {
  return `
    <article class="reveal flex flex-col gap-5 rounded-3xl bg-surface p-8"
             style="transition-delay: ${index * 120}ms">
      <img src="${projet.image}" alt="Capture du projet ${projet.titre}" loading="lazy"
           class="aspect-[16/10] w-full rounded-2xl object-cover object-top" />
      <div>
        <h3 class="font-display text-2xl font-bold tracking-tight">${projet.titre}</h3>
        <p class="mt-2 text-lg leading-relaxed text-muted">${projet.description}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        ${projet.tags.map(tag).join("")}
      </div>
      <div class="mt-auto flex flex-wrap gap-x-6 text-lg">
        <a href="${projet.site}" target="_blank" rel="noopener noreferrer"
           class="py-2 text-accent hover:underline">Voir le site ›</a>
        <a href="${projet.github}" target="_blank" rel="noopener noreferrer"
           class="py-2 text-accent hover:underline">Voir le code ›</a>
      </div>
    </article>`;
}

// 4. L'AFFICHAGE : une carte par projet, insérées dans le conteneur
document.getElementById("liste-projets").innerHTML = projets.map(carteProjet).join("");

// ===================== BOÎTE À OUTILS =====================

// 1. LES DONNÉES : un objet par groupe, et chaque groupe contient
//    sa propre liste d'outils (un tableau dans un objet, dans un tableau).
const competences = [
  {
    groupe: "Front-end",
    outils: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    groupe: "Back-end",
    outils: ["Node.js", "AdonisJS", "PostgreSQL"],
  },
  {
    groupe: "Outils et design",
    outils: ["Git", "GitHub", "Figma", "Canva", "VS Code"],
  },
];

// 2. UNE PASTILLE pour un outil
function pastille(nom) {
    return `<li class="survol-bleu cursor-default rounded-full bg-surface px-3.5 py-2">${nom}</li>`;
}

// 3. UN GROUPE : son titre, puis toutes ses pastilles
function groupeCompetences(competence) {
  return `
    <div>
      <h3 class="text-sm font-bold uppercase tracking-wider text-muted">${competence.groupe}</h3>
      <ul class="mt-4 flex flex-wrap gap-2">
        ${competence.outils.map(pastille).join("")}
      </ul>
    </div>`;
}

// 4. L'AFFICHAGE
document.getElementById("liste-competences").innerHTML =
  competences.map(groupeCompetences).join("");

  // ===================== PARCOURS =====================

// Du plus récent au plus ancien : c'est l'ordre qu'un recruteur attend.
const parcours = [
  {
    periode: "Janv. – oct. 2026",
    titre: "Développement web fullstack",
    details: "Kadea Academy, Kinshasa. Front-end, back-end, bases de données et projet final déployé.",
  },
  {
    periode: "2023 – 2025",
    titre: "Vendeur et installateur en décoration d'intérieur",
    details: "Entreprise familiale. Conseil client, prise de mesures, pose de rideaux et de papier peint.",
  },
  {
    periode: "Depuis 2020",
    titre: "Artiste freelance, portraits au crayon",
    details: "Portraits sur commande, du brief client à la livraison, en gérant les retours et les délais.",
  },
  {
    periode: "2013 – 2019",
    titre: "Diplôme d'État, Math-Physique",
    details: "Collège Saint Joseph, Kinshasa.",
  },
];

function etapeParcours(etape) {
  return `
    <li class="grid gap-1 border-t border-line py-7 last:border-b sm:grid-cols-[11rem_1fr] sm:gap-8">
      <p class="pt-0.5 text-muted">${etape.periode}</p>
      <div>
        <h3 class="text-xl font-bold">${etape.titre}</h3>
        <p class="mt-1.5 text-lg leading-relaxed text-muted">${etape.details}</p>
      </div>
    </li>`;
}

document.getElementById("liste-parcours").innerHTML = parcours.map(etapeParcours).join("");

// ===================== RÉSEAUX SOCIAUX =====================

// 1. LES DONNÉES : chaque réseau a un identifiant, un nom, un lien et le tracé de son logo (SVG)
const reseaux = [
  {
    id: "github",
    nom: "GitHub",
    lien: "https://github.com/veben-cmyk",
    icone: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    id: "linkedin",
    nom: "LinkedIn",
    lien: "https://www.linkedin.com/in/isaac-veben-6ab4093a9/",
    icone: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    id: "whatsapp",
    nom: "WhatsApp",
    lien: "https://wa.me/243823440672",
    icone: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  },
];

// 2. LE COMPOSANT : un bouton rond avec le logo
function boutonReseau(reseau) {
  return `
    <li>
      <a href="${reseau.lien}" target="_blank" rel="noopener noreferrer" aria-label="${reseau.nom}"
         class="survol-bleu flex size-11 items-center justify-center rounded-full bg-surface text-ink/70 active:scale-95">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-5">
          <path d="${reseau.icone}" />
        </svg>
      </a>
    </li>`;
}

// 3. L'AFFICHAGE : on cherche TOUS les éléments qui ont l'attribut data-reseaux
document.querySelectorAll("[data-reseaux]").forEach((conteneur) => {
  // On lit la liste demandée, par exemple "github,linkedin" -> ["github", "linkedin"]
  const choisis = conteneur.dataset.reseaux.split(",");

  // On garde seulement les réseaux demandés, puis on les transforme en boutons
  conteneur.innerHTML = reseaux
    .filter((reseau) => choisis.includes(reseau.id))
    .map(boutonReseau)
    .join("");
});

// ===================== DESSINS =====================

// Du plus récent au plus ancien, avec les dates écrites sur tes dessins
const dessins = [
  {
    image: "images/aaeonP.jpeg",
    date: "Janvier 2025",
    description: "Portrait au crayon d'un homme, le poing contre la joue, une montre au poignet",
  },
  {
    image: "images/visageblessé.jpeg",
    date: "Juillet 2024",
    description: "Portrait au crayon d'une femme qui crie, le visage couvert d'un liquide qui coule",
  },
  {
    image: "images/lifeyear.jpeg",
    date: "Juillet 2024",
    description: "Gros plan au crayon d'un visage de femme derrière ses mains, une bague au doigt",
  },
];

function carteDessin(dessin, index) {
  return `
    <li class="reveal" style="transition-delay: ${index * 120}ms">
      <figure>
        <div class="overflow-hidden rounded-2xl">
          <img src="${dessin.image}" alt="${dessin.description}" loading="lazy"
               class="h-auto w-full transition duration-500 hover:scale-105" />
        </div>
        <figcaption class="mt-3 text-sm text-white/65">${dessin.date}</figcaption>
      </figure>
    </li>`;
}

document.getElementById("liste-dessins").innerHTML = dessins.map(carteDessin).join("");

// ===================== MODE SOMBRE =====================
document.getElementById("bouton-theme").addEventListener("click", () => {
  // toggle ajoute la classe si elle est absente, la retire si elle est présente,
  // et renvoie true si elle est présente APRÈS l'opération
  const estSombre = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", estSombre ? "dark" : "light");
});

// ===================== APPARITIONS AU SCROLL =====================
// L'observateur surveille les éléments et nous prévient quand ils entrent à l'écran.
const observateur = new IntersectionObserver(
  (entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        entree.target.classList.add("visible");
        observateur.unobserve(entree.target); // l'animation ne se joue qu'une fois
      }
    });
  },
  { threshold: 0.15 } // déclenché quand 15 % de l'élément est visible
);

document.querySelectorAll(".reveal").forEach((element) => observateur.observe(element));

// ===================== MENU MOBILE =====================
const boutonMenu = document.getElementById("bouton-menu");
const menuMobile = document.getElementById("menu-mobile");

function basculerMenu(ouvrir) {
  boutonMenu.setAttribute("aria-expanded", ouvrir);
  boutonMenu.setAttribute("aria-label", ouvrir ? "Fermer le menu" : "Ouvrir le menu");
  // toggle avec un 2e argument : retire "hidden" si ouvrir est true, l'ajoute sinon
  menuMobile.classList.toggle("hidden", !ouvrir);
}

boutonMenu.addEventListener("click", () => {
  const estOuvert = boutonMenu.getAttribute("aria-expanded") === "true";
  basculerMenu(!estOuvert);
});

menuMobile.querySelectorAll("a").forEach((lien) => {
  lien.addEventListener("click", () => basculerMenu(false));
});