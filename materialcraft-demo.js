function swapStyleSheet(sheet) {
  document.getElementById("themestyle").setAttribute("href", sheet);
}

function initiate() {
  var standard = document.getElementById("standard");
  var blue = document.getElementById("blue");
  var dark = document.getElementById("dark");
  var purple = document.getElementById("purple");
  var red = document.getElementById("red");

  standard.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/dist/materialcraft.css") };
  blue.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/dist/materialcraft-blue.css"); };
  dark.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/dist/materialcraft-dark.css"); };
  purple.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/dist/materialcraft-purple.css"); };
  red.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/dist/materialcraft-red.css"); };
}

window.onload = initiate;
