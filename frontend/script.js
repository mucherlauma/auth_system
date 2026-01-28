const API = "http://localhost:5000/api/auth";

async function register() {
  await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: rname.value,
      email: remail.value,
      password: rpassword.value
    })
  });
  alert("Registered successfully");
}

async function login() {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: lemail.value,
      password: lpassword.value
    })
  });
  const data = await res.json();
  localStorage.setItem("token", data.token);
  window.location.href = "dashboard.html";
}

async function loadProfile() {
  const token = localStorage.getItem("token");
  if (!token) return window.location.href = "index.html";

  const res = await fetch(`${API}/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  profile.innerText = `Welcome ${data.name} (${data.email})`;
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

if (window.location.pathname.includes("dashboard")) {
  loadProfile();
}
