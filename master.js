// Modal

//Created elements are enclosed in a function to call them at a later time.
function showModal() {
// Modal "Wrapper"
var modalBox = document.createElement('div');
modalBox.style.width = "500px";
modalBox.style.height = "600px";
modalBox.style.backgroundColor = "white";
modalBox.style.marginLeft = "auto";
modalBox.style.marginRight = "auto";
modalBox.style.borderTop = "5px solid #192249"
// modalBox.style.border = "1px solid black";
modalBox.style.borderRadius = "1%";
modalBox.style.textAlign = "center";
modalBox.style.position = "absolute";
modalBox.style.left = "0";
modalBox.style.right = "0";
modalBox.style.top = "17.5vh";

document.body.appendChild(modalBox);

// 'X' button
var xButton = document.createElement('div');
xButton.innerText = "X";
xButton.style.color = "#192249";
xButton.style.font = "17px Gotham";
xButton.style.width = "20px";
xButton.style.height = "20px";
xButton.style.border = "1px solid #192249";
xButton.style.borderRadius = "9%";
xButton.style.marginTop = "10px";
xButton.style.marginRight = "10px";
xButton.style.float = "right";
xButton.addEventListener('click', function() {
  modalBox.style.display = "none";
});
xButton.style.cursor = "pointer";

modalBox.appendChild(xButton);

// 'SIGN IN' text
var h1text = document.createElement('h1');
h1text.innerText = "SIGN IN";
h1text.style.color = "#192249";
h1text.style.font = "40px Gotham";
h1text.style.fontWeight = "600";
h1text.style.marginTop = "125px";
h1text.style.letterSpacing = "1px";

modalBox.appendChild(h1text);

// USERNAME BOX
var username = document.createElement('input');
username.setAttribute("type", "text");
username.style.height = "40px";
username.style.width = "330px";
username.style.font = "13px Gotham";
username.style.marginTop = "65px";

modalBox.appendChild(username);

// PASSWORD BOX
var password = document.createElement('input');
password.setAttribute("type", "password");
password.style.height = "40px";
password.style.width = "325px";
password.style.font = "13px Gotham";
password.style.marginTop = "40px";

modalBox.appendChild(password);

// SUBMIT BUTTON - link to clock
var submitButton = document.createElement('div');
submitButton.style.width = "325px";
submitButton.style.backgroundColor = "#192249";
submitButton.innerText = "SUBMIT";
submitButton.style.textAlign = "center";
submitButton.style.verticalAlign = "center";
submitButton.style.font = "20px Gotham";
submitButton.style.fontWeight = "300";
submitButton.style.color = "#FDF8F5";
submitButton.style.borderRadius = "5px";
submitButton.style.paddingTop = "20px";
submitButton.style.paddingBottom = "20px";
submitButton.style.marginTop = "40px";
submitButton.style.marginLeft = "auto";
submitButton.style.marginRight = "auto";
submitButton.style.letterSpacing = "5px";
submitButton.style.cursor = "pointer";

modalBox.appendChild(submitButton);
}

// Calls showModal after 2 seconds (brings up the "popup").
function start() {
  setTimeout(showModal, 1500);
}

// Runs start function upon load.
window.addEventListener('load', start);
