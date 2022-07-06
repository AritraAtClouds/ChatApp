socket = io();

const $joinExistingRooms = document.querySelector(
  "#join-existing-rooms"
).innerHTML;

const joinForm = document.querySelector("#join-form");
const roomInput = joinForm.querySelector("#room-input");
// console.log(joinForm, roomInput);
socket.on("roomlist", (rooms) => {
  console.log(rooms);
  const html = Mustache.render($joinExistingRooms, { rooms });
  joinForm.insertAdjacentHTML("beforeend", html);
  //   console.log("happend");
});
