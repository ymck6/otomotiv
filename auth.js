document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // SAYFA YENİLENMESİN DİYE ÇOK ÖNEMLİ

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // ADMIN
    if (username === "admin" && password === "1234") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("role", "admin");
      localStorage.setItem("username", "admin");
    }

    // USER
    else if (username === "user" && password === "1234") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("role", "user");
      localStorage.setItem("username", "user");
      alert("Hoşgeldin");
    }

    // HATALI GİRİŞ
    else {
      alert("Kullanıcı adı veya şifre hatalı!");
    }
  });
});