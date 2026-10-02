/* ---------- Theme Switcher Helper ---------- */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    /* storage might be disabled */
  }
}

function initTheme() {
  const themeBtn = document.getElementById("themeBtn");
  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {}
  applyTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme;
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme);
} else {
  initTheme();
}
