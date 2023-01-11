document.querySelector("#add_item").addEventListener("click", () => {
  const input = document.querySelector("#input");
  addItem(input.value);
});

addItem = (input) => {
  const item = document.createElement("div");
  item.className = "item";
  const div = document.createElement("div");
  div.className = "checkbutton";
  // const text = document.createElement("p");
  // text.className = "text-content";
  // text.textContent = input;

  const text = document.createElement("label");
  text.setAttribute("for", "check");
  text.textContent = input;
  text.className = "text-content";

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("name", "check");
  
  const del = document.createElement("button");
  del.innerHTML = "Delete";
  del.className = "delButton";
  del.addEventListener("click", () => {
    item.remove();
  });

  div.appendChild(checkBox);
  div.appendChild(del);
  item.appendChild(text);
  item.appendChild(div);

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
};
