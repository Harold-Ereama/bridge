function createSoftCapitalWidget(comp, id, options) {
  var head = document.getElementsByTagName("head")[0];
  var url = "https://softcapital.com/widget/";
  if(comp === 'VerticalTicker' ||comp === 'TickerTape' || comp === 'Ticker' || comp === 'Grid' || comp === 'TaCharts' ) {

    var style = document.createElement("link");
    style.href = url + comp.toLowerCase() + "/bundle.css";
    style.type = "text/css";
    style.rel = "stylesheet";
    head.append(style);
  }

  var fileref = document.createElement("script");
  fileref.setAttribute("type", "text/javascript");
  fileref.setAttribute(
    "src",
    url + comp.toLowerCase() + "/bundle.js"
  );
  fileref.onload = function() {
    window["sc" + comp](document.getElementById(id), options);
  };
  document.body.appendChild(fileref);
}
