function doLogin() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
  
    if (user === "admin" && pass === "123456") {
      document.getElementById("loginScreen").style.display = "none";
      document.getElementById("appSidebar").style.display = "block";
      document.getElementById("appMain").style.display = "block";
    } else {
      document.getElementById("loginErr").innerText = "Sai tài khoản";
    }
  }
  
  function go(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page-" + page).classList.add("active");
  }