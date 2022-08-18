// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");
  
//     menuBtnRef.addEventListener("click", () => {
//       const expanded =
//         menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
//       menuBtnRef.classList.toggle("is-open");
//       menuBtnRef.setAttribute("aria-expanded", !expanded);
  
//       mobileMenuRef.classList.toggle("is-open");
//     });
//   })();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-mobile-open]"),
    closeModalBtn: document.querySelector("[menu-mobile-close]"),
    modal: document.querySelector("[menu-mobile]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();