// This function enables user to open trademe and preview environments when checkbox is on/off
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i ++) {
  buttons[i].onclick = function() {
    if (document.getElementById("previewCheckBox").checked) {
      window.open("http://preview.test" + this.textContent + ".trademe.co.nz/");
    }
    else {
        window.open("http://www.test" + this.textContent + ".trademe.co.nz/");
    }
  };
}


// dashboard button takes user to https://release.trademe.local/Dashboard/TradeMe.TradeMe
function dashClicker(){
  window.open("https://release.trademe.local/Dashboard/TradeMe.TradeMe");
};

document.getElementById('dashClick').addEventListener('click', dashClicker);

// deploy error dashboard button takes user to http://go/errors-dashboard/
function deployErrorsDashClicker(){
  window.open("http://go/errors-dashboard/");
};

document.getElementById('dashClick').addEventListener('click', dashClicker);


// release button takes user to https://release.trademe.local/
function releaseClicker(){
  window.open("https://release.trademe.local/");
};

document.getElementById('releaseClick').addEventListener('click', releaseClicker);


// takes user to team city http://teamcity.trademe.local/project.html?projectId=TradeMeTradeMe2&tab=projectOverview
function teamCityClicker(){
  window.open("http://teamcity.trademe.local/project.html?projectId=TradeMeTradeMe2&tab=projectOverview");
};

document.getElementById('teamCityClick').addEventListener('click', teamCityClicker);


// takes user to jenkins automation page https://jenkins.trademe.local
function jenkinsClicker(){
  window.open("https://jenkins.trademe.local");
};

document.getElementById('jenkinsClick').addEventListener('click', jenkinsClicker);


// takes user to preview dashboard
function previewDashboardClicker(){
  window.open("https://release.trademe.local/Dashboard/TradeMe.FrEnd");
};

document.getElementById('previewDashboardClick').addEventListener('click', previewDashboardClicker);
