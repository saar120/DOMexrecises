"use strict";

console.log("hello");

const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

function set() {
  const list = document.createElement("ol");
  document.body.appendChild(list);
  list.style.listStyleType = "none";
  console.log(list);

  users.forEach((user) => {
    let li = document.createElement("li");
    li.setAttribute("data-id", user.id);
    li.textContent = user.firstName + " " + user.lastName;
    console.log(li);
    list.appendChild(li);
  });
  console.log("working");
}

set();
