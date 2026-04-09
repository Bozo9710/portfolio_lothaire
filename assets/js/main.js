/* ============================================================
   PORTFOLIO - LOTHAIRE | main.js
   BTS SIO SISR

   Ce fichier gère :
   - La navigation entre les pages (SPA)
   - L'animation des barres de compétences
   - Le menu burger (mobile)
   - Le téléchargement du CV
   - L'ouverture du site de veille
   - La mise à jour de l'année dans le footer
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {


  /* ──────────────────────────────────────────────────────────
     SÉLECTION DES ÉLÉMENTS DU DOM
     ────────────────────────────────────────────────────────── */

  // Toutes les sections de page
  const pages = document.querySelectorAll('.page');

  // Tous les liens de navigation (desktop + mobile + logo)
  const navItems = document.querySelectorAll(
    '.nav-item[data-page], .mobile-item[data-page], .nav-logo[data-page]'
  );

  // Boutons "Précédent / Suivant" en bas de chaque page
  const pageNavBtns = document.querySelectorAll('.page-nav-btn[data-target]');

  // Bouton burger et menu mobile
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  // Barre de progression en bas de la navbar
  const navProgress = document.getElementById('nav-progress');


  /* ──────────────────────────────────────────────────────────
     ORDRE DES PAGES (pour la barre de progression)
     ✏️ Si tu ajoutes une page, ajoute son id ici dans l'ordre
     ────────────────────────────────────────────────────────── */
  const pageOrder = [
    'page-accueil',
    'page-realisations',
    'page-procedures',
    'page-experiences',
    'page-competences',
    'page-certifications',
    'page-veille',
    'page-contact'
  ];


  /* ──────────────────────────────────────────────────────────
     FONCTION : showPage(pageId)
     Affiche la page demandée et met à jour la navigation
     ────────────────────────────────────────────────────────── */
  function showPage(pageId) {

    // 1. Masquer toutes les pages et désactiver tous les liens
    pages.forEach(p    => p.classList.remove('active'));
    navItems.forEach(n => n.classList.remove('active'));

    // 2. Afficher la page cible
    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add('active');
    }

    // 3. Mettre en surbrillance le lien actif (desktop + mobile)
    document.querySelectorAll(`[data-page="${pageId}"]`)
      .forEach(el => el.classList.add('active'));

    // 4. Remonter en haut de page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 5. Mettre à jour la barre de progression
    const idx = pageOrder.indexOf(pageId);
    if (navProgress && idx >= 0) {
      navProgress.style.width = ((idx + 1) / pageOrder.length * 100) + '%';
    }

    // 6. Animer les barres de compétences si on est sur cette page
    if (pageId === 'page-competences') {
      animateSkillBars();
    }

    // 7. Fermer le menu mobile s'il est ouvert
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
    }
  }


  /* ──────────────────────────────────────────────────────────
     ÉCOUTEURS D'ÉVÉNEMENTS — Navigation
     ────────────────────────────────────────────────────────── */

  // Liens de la navbar (desktop + mobile + logo)
  navItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const page = item.getAttribute('data-page');
      if (page) showPage(page);
    });
  });

  // Boutons "Précédent / Suivant"
  pageNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (target) showPage(target);
    });
  });

  // Bouton burger — ouvre/ferme le menu mobile
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.toggle('open');
      }
    });
  }

  // Bouton "Me contacter" sur la page d'accueil
  const btnContact = document.getElementById('btn-contact');
  if (btnContact) {
    btnContact.addEventListener('click', () => showPage('page-contact'));
  }

  // Initialisation : afficher la page d'accueil au chargement
  showPage('page-accueil');


  /* ──────────────────────────────────────────────────────────
     ANIMATION — Barres de compétences
     Déclenché automatiquement à l'ouverture de la page compétences
     ────────────────────────────────────────────────────────── */
  function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');

    bars.forEach(bar => {
      // Lire le niveau cible depuis data-width (ex : data-width="65")
      const target = bar.getAttribute('data-width') || '0';

      // Remettre à 0 pour relancer l'animation à chaque visite
      bar.style.width = '0';

      // Déclencher la transition après un court délai
      setTimeout(() => {
        bar.style.width = target + '%';
      }, 100);
    });
  }


  /* ──────────────────────────────────────────────────────────
     FOOTER — Année dynamique
     Met à jour automatiquement l'année dans le footer
     ────────────────────────────────────────────────────────── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ──────────────────────────────────────────────────────────
     VEILLE — Lien vers le site de veille
     ✏️ Remplace l'URL ci-dessous par ton vrai site de veille
     ────────────────────────────────────────────────────────── */
  const veilleBtn = document.getElementById('veille-link');
  if (veilleBtn) {
    veilleBtn.addEventListener('click', () => {
      window.open('https://ton-site-de-veille.fr', '_blank'); // ✏️ Modifie ici
    });
  }


  /* ──────────────────────────────────────────────────────────
     CV — Téléchargement
     ✏️ Vérifie que le fichier existe bien dans assets/cv-lothaire.pdf
     ────────────────────────────────────────────────────────── */
  function downloadCV() {
    const link = document.createElement('a');
    link.href     = 'assets/cv-lothaire.pdf'; // ✏️ Modifie le chemin si besoin
    link.download = 'cv-lothaire.pdf';
    link.click();
  }

  // Bouton CV sur la page d'accueil
  const cvDownload = document.getElementById('cv-download');
  if (cvDownload) {
    cvDownload.addEventListener('click', downloadCV);
  }

  // Bouton CV sur la page contact
  const cvDownloadContact = document.getElementById('cv-download-contact');
  if (cvDownloadContact) {
    cvDownloadContact.addEventListener('click', downloadCV);
  }

  document.getElementById('btn-procedurerip').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'assets/pdf/ripv2.pdf';
    link.download = 'ripv2.pdf';
    link.click();
});

}); // fin DOMContentLoaded
