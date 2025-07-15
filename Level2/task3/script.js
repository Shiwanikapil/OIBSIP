document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const desc = document.getElementById("description").value.trim();

  if (title === "" || desc === "") {
    alert("Please fill out all fields.");
    return;
  }

  const tbody = document.getElementById("task-list");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${desc}</td>
    <td><button class="delete">X</button></td>
  `;

  row.querySelector(".delete").addEventListener("click", () => {
    row.remove();
  });

  tbody.appendChild(row);

  document.getElementById("todo-form").reset();
});