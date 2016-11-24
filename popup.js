//var test1a = document.getElementById('t1a');
  //  test1a.addEventListener('click', function() {
    //    window.open("http://www.w3schools.com");
  //  });


//var userInp = prompt("what test environment would you like to use?");
//window.open("http://www." + userInp + ".trademe.co.nz/");

/*
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i ++) {
  buttons[i].onclick = function() {
    window.open("http://www." + this.textContent.replace(" ", "") + ".trademe.co.nz/");
  };
}
*/

// This function enables user to open trademe and preview environments when checkbox is on/off
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


// dashboard button takes user to https://release.trademe.local/Dashboard/TradeMe.TradeMe
function dashClicker(){
  window.open("https://release.trademe.local/Dashboard/TradeMe.TradeMe");
};

document.getElementById('dashClick').addEventListener('click', dashClicker);


// release button takes user to https://release.trademe.local/
function releaseClicker(){
  window.open("https://release.trademe.local/");
};

document.getElementById('releaseClick').addEventListener('click', releaseClicker);
