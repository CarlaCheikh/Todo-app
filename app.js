let createTodo = document.querySelector("#todo");
let add = document.querySelector(".submit");

let smallText = document.querySelector(".second-todo");

//add todo list
let all = document.querySelector(".all");
const todoList = document.querySelector(".change-text-todo");
const list = document.querySelector(".list-todo ul");
let addedTodo = document.querySelectorAll(".value-todo");

function createNewTodoItem(text) {
  let li = document.createElement("li");
  li.classList.add("change-text-todo", "todo-text");

  li.innerHTML = `<label>
  <input type="checkbox" name="icon-check"class="check-icon unactive-check-icon">
  <span class="checkmark"></span>
  <span class="value-todo">${text}</span>
  </label>
  <span class="remove"></span>`;
  list.append(li);
  updateItemCount(1);
  all.style.color = "hsl(220, 98%, 61%)";
}

//add button

add.addEventListener("click", (e) => {
  e.preventDefault();
  if (createTodo.value.length > 0) {
    createNewTodoItem(createTodo.value);
    updateItemCount(0);

    // todoList.classList.remove("hidden");
    smallText.classList.remove("hidden");
    createTodo.value = "";
  } else {
    alert("error");
  }
});

createTodo.addEventListener("keypress", (e) => {
  if (e.charCode === 13 && createTodo.value.length > 0) {
    createNewTodoItem(createTodo.value);
    createTodo.value = "";
  }
});

// items left

let numberOfItems = document.querySelector(".number-of-items");

function updateItemCount(number) {
  numberOfItems.innerText = +numberOfItems.innerText + number;
}

//remove todo

function removeTodoElement(element) {
  element.remove();
  updateItemCount(-1);
}

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    removeTodoElement(event.target.parentElement);
  }
});

//clear completed
let clearCompleted = document.querySelector(".clear-completed");

clearCompleted.addEventListener("click", () => {
  document
    .querySelectorAll('label input[type="checkbox"]:checked')
    .forEach((item) => {
      removeTodoElement(item.closest("li"));
    });
});

// select items

let active = document.querySelector(".active");

// Sort To Do List

all.addEventListener("click", function () {
  let listElements = document.getElementsByTagName("li");

  for (let listElement of listElements) {
    listElement.classList.remove("hidden");
  }
});

//switch theme
let storedTheme = localStorage.getItem("data-theme");

const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
  sun.classList.remove("hidden");
  moon.classList.add("hidden");
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
  sun.classList.add("hidden");
  moon.classList.remove("hidden");
};

let toggle = document.querySelector(".toggle");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

toggle.addEventListener("click", () => {
  let theme = localStorage.getItem("data-theme");

  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});
