var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i ++) {
  buttons[i].onclick = function() {
    if (document.getElementById("previewCheckBox").checked) {
      window.open("http://preview." + this.textContent.replace(" ", "") + ".trademe.co.nz/");
    }
    else {
        window.open("http://www." + this.textContent.replace(" ", "") + ".trademe.co.nz/");
    }
  };
}
