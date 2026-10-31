document.addEventListener("DOMContentLoaded", function () {
        // =====================================================================
        // COMPOSANTS : on sépare LES DONNÉES (tableaux) de L'AFFICHAGE (fonctions).
        // - Ajouter un projet ou une compétence = ajouter un objet dans un tableau.
        // - Changer le style de toutes les cartes = modifier une seule fonction.
        // Ce code est placé AVANT feather.replace() : si un jour une carte contient
        // une icône Feather, elle doit exister dans la page avant que Feather la cherche.
        // =====================================================================

        // --- PROJETS : les données ---
        // Un projet = un objet. Chaque "clé: valeur" est une information du projet.
        // Le 1er du tableau s'affiche en 1er.
        const projets = [
          {
            titre: "Kadea Chat",
            categorie: "Application fullstack",
            description:
              "Messagerie en temps réel : inscription avec confirmation par e-mail, connexion, profil et conversations en direct. AdonisJS, PostgreSQL, Tailwind CSS, déployée sur Render.",
            image: "images/accueil.png",
            site: "https://two6-01-kd-dev-web-matin-c-mon-thu-kin-nfr5.onrender.com",
            github: "https://github.com/veben-cmyk/kadea-chat_fullstack",
          },
          {
            titre: "YouTube Clone",
            categorie: "Intégration",
            description: "Reproduction de l'interface de YouTube avec HTML et Tailwind CSS.",
            image: "images/youtube-clone.png",
            site: "https://veben-cmyk.github.io/youtube_clone/",
            github: "https://github.com/veben-cmyk/youtube_clone",
          },
          {
            titre: "Coffee Shop",
            categorie: "Site vitrine",
            description: "Site moderne pour un café, au design élégant et responsive, réalisé avec HTML et CSS.",
            image: "images/projet café.png",
            site: "https://veben-cmyk.github.io/coffee-shop/",
            github: "https://github.com/veben-cmyk/coffee-shop",
          },
        ];

        // --- PROJETS : le composant ---
        // Reçoit UN projet, renvoie le HTML d'UNE carte (sous forme de texte).
        // Les backticks ` ` créent un "template literal" : un texte sur plusieurs
        // lignes dans lequel ${...} insère la valeur d'une variable.
        function carteProjet(projet) {
          return `
            <div class="bg-blue-100 dark:bg-slate-900 shadow rounded overflow-hidden hover:scale-105 transition border border-transparent dark:border-slate-800">
              <img src="${projet.image}" alt="Aperçu de ${projet.titre}" loading="lazy"
                class="w-full h-48 object-cover hover:scale-105 transition dark:opacity-80" />
              <div class="p-4">
                <h3 class="font-bold text-lg dark:text-blue-300">${projet.titre}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">${projet.categorie}</p>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">${projet.description}</p>
                <div class="flex gap-3">
                  <a href="${projet.site}" target="_blank" rel="noopener noreferrer"
                    class="text-sm bg-black dark:bg-blue-600 text-white px-3 py-1 rounded">Voir</a>
                  <a href="${projet.github}" target="_blank" rel="noopener noreferrer"
                    class="bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700 text-sm border px-3 py-1 rounded">GitHub</a>
                </div>
              </div>
            </div>`;
        }

        // --- PROJETS : l'affichage ---
        // map()  : appelle carteProjet() sur chaque projet -> tableau de morceaux de HTML
        // join() : colle ces morceaux en un seul texte ("" = sans séparateur)
        // innerHTML : met ce texte dans le conteneur, le navigateur le transforme en vraies balises
        document.getElementById("liste-projets").innerHTML =
          projets.map(carteProjet).join("");

        // --- COMPÉTENCES : les données ---
        // Même principe, avec seulement 2 informations : la classe de l'icône Devicon et le nom.
    const competences = [
        { icone: "devicon-html5-plain colored", nom: "HTML5" },
        { icone: "devicon-css3-plain colored", nom: "CSS3" },
        { icone: "devicon-tailwindcss-original colored", nom: "Tailwind" },
        { icone: "devicon-javascript-plain colored", nom: "JavaScript" },
        { icone: "devicon-typescript-plain colored", nom: "TypeScript" },
        { icone: "devicon-nodejs-plain colored", nom: "Node.js" },
        { icone: "devicon-adonisjs-original colored", nom: "AdonisJS" },
        { icone: "devicon-postgresql-plain colored", nom: "PostgreSQL" },
        { icone: "devicon-git-plain colored", nom: "Git" },
        { icone: "devicon-github-original dark:text-white", nom: "GitHub" },
        { icone: "devicon-vscode-plain colored", nom: "VS Code" },
        { icone: "devicon-figma-plain colored", nom: "Figma" },
        { icone: "devicon-canva-original colored", nom: "Canva" },
    ];

        // --- COMPÉTENCES : le composant ---
        function tuileCompetence(competence) {
            return `
                <div class="min-h-[84px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex flex-col items-center justify-center gap-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
                    <i class="${competence.icone} text-4xl"></i>
                    <p class="text-xs text-slate-500 dark:text-slate-400">${competence.nom}</p>
                </div>`;
            }

        // --- COMPÉTENCES : l'affichage ---
        document.getElementById("liste-competences").innerHTML =
        competences.map(tuileCompetence).join("");

        // --- ICÔNES FEATHER : remplace chaque <i data-feather="..."> par un SVG ---
        feather.replace();

        // --- MENU MOBILE ---
        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        // NOUVEAU : en one-page, cliquer sur un lien ne recharge pas la page,
        // donc le menu mobile resterait ouvert par-dessus le contenu.
        // On récupère tous les liens du menu et, au clic, on le referme.
        mobileMenu.querySelectorAll("a").forEach((lien) => {
            lien.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });

        // --- DARK MODE ---
        const html = document.documentElement;
        const themeBtns = [
            document.getElementById("theme-toggle"),
            document.getElementById("theme-toggle-mobile"),
        ];
        const themeIcons = [
            document.getElementById("theme-toggle-icon"),
            document.getElementById("theme-toggle-icon-mobile"),
        ];

        // Au chargement : on regarde le thème mémorisé (ou la préférence du système)
        if (
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          html.classList.add("dark");
          themeIcons.forEach((icon) => (icon.innerText = "☀️"));
        }

        // Au clic : on bascule le thème et on le mémorise
        themeBtns.forEach((themeBtn) => {
          themeBtn.addEventListener("click", () => {
            html.classList.toggle("dark");

            if (html.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                themeIcons.forEach((icon) => (icon.innerText = "☀️"));
            } else {
                localStorage.setItem("theme", "light");
                themeIcons.forEach((icon) => (icon.innerText = "🌙"));
            }
          });
        });
    });