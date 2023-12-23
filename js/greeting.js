const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  loginInput.value = "";
  printGreetings(username);
}

function logout(e) {
  const username = e.target.parentElement;
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.value = "";
  localStorage.removeItem(USERNAME_KEY, username);
  greeting.classList.add(HIDDEN_CLASSNAME);
}
function printGreetings(username) {
  const button = document.createElement("button");
  button.innerText = "Log Out";
  button.addEventListener("click", logout);
  greeting.innerHTML = `${username} 님, 안녕하세요 😀!`;
  greeting.appendChild(button);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername !== null) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  printGreetings(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
