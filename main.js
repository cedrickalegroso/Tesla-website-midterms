function gotoHome() {
  location.replace("index.html");
}

function custModelX() {
  location.replace("customize.html");
}

function custModel3() {
  location.replace("customize3.html");
}

function changeColor(model, carVar) {
  if (model == "x") {
    if (carVar == "1") {
      document.getElementById("carDisplay").src = "custModelX1.png";
      document.getElementById("ModelXColorRed").classList.remove("active");
      document.getElementById("ModelXColorWhite").classList.add("active");
    } else {
      document.getElementById("carDisplay").src = "custModelX2.png";
      document.getElementById("ModelXColorWhite").classList.remove("active");
      document.getElementById("ModelXColorRed").classList.add("active");
    }
  } else if (model == "3") {
    if (carVar == "1") {
      document.getElementById("carDisplay").src = "custModel31.png";
      document.getElementById("ModelXColorRed").classList.remove("active");
      document.getElementById("ModelXColorWhite").classList.add("active");
    } else {
      document.getElementById("carDisplay").src = "custModel32.png";
      document.getElementById("ModelXColorWhite").classList.remove("active");
      document.getElementById("ModelXColorRed").classList.add("active");
    }
  }
}

function clickVar(model, carVar) {
  if (model == "x") {
    if (carVar == "1") {
      document.getElementById("eta").innerHTML =
        "<p>Est. delivery time: January 26, 2022</p>";
      document.getElementById("price").innerHTML = "<h1>$98,000</h1>";
      document.getElementById("rangeval").innerHTML = "<h3>331 mi</h3>";
      document.getElementById("peakval").innerHTML = "<h3>1,021 hp</h3>";
      document.getElementById("modelXvar2").classList.remove("active");
      document.getElementById("modelXvar1").classList.add("active");
    } else {
      document.getElementById("rangeval").innerHTML = "<h3>430 mi</h3>";
      document.getElementById("peakval").innerHTML = "<h3>1,200 hp</h3>";
      document.getElementById("eta").innerHTML =
        "<p>Est. delivery time: February 15, 2022</p>";
      document.getElementById("price").innerHTML = "<h1>$124,000</h1>";
      document.getElementById("modelXvar1").classList.remove("active");
      document.getElementById("modelXvar2").classList.add("active");
    }
  } else if (model == "3") {
    if (carVar == "1") {
    document.getElementById("eta").innerHTML =
      "<p>Est. delivery time: January 26, 2022</p>";
    document.getElementById("price").innerHTML = "<h1>$45,940</h1>";
    document.getElementById("rangeval").innerHTML = "<h3>331 mi</h3>";
    document.getElementById("peakval").innerHTML = "<h3>1,021 hp</h3>";
    document.getElementById("modelXvar2").classList.remove("active");
    document.getElementById("modelXvar1").classList.add("active");
  } else {
    document.getElementById("rangeval").innerHTML = "<h3>430 mi</h3>";
    document.getElementById("peakval").innerHTML = "<h3>1,200 hp</h3>";
    document.getElementById("eta").innerHTML =
      "<p>Est. delivery time: March 02, 2022</p>";
    document.getElementById("price").innerHTML = "<h1>$53,940</h1>";
    document.getElementById("modelXvar1").classList.remove("active");
    document.getElementById("modelXvar2").classList.add("active");
  }
}
}

function onWebLoad() {
  gsap.fromTo(
    ".jumbotronContent",
    { y: 2000, opacity: 0 },
    { y: 0, duration: 1, opacity: 1 }
  );
  gsap.fromTo(
    ".car",
    { x: 2000, opacity: 0 },
    { x: 0, duration: 1, opacity: 1 }
  );
}

function onCustOpen() {


    if (window.location.pathname == "/customize.html") {
        document.getElementById("price").innerHTML = "<h1>$98,000</h1>";

    } else if (window.location.pathname == "/customize3.html") {
        document.getElementById("price").innerHTML = "<h1>$45,940</h1>";

    }

  // let trans1 = gsap.timeline({})
  // trans1.fromTo("html", {opacity: 0}, {duration: 1, opacity: 1});
  gsap.fromTo(
    ".footerDetails",
    { y: 2000, opacity: 0 },
    { y: 0, duration: 1, opacity: 1 }
  );
  gsap.fromTo(
    ".imgPlceholder",
    {  opacity: 0 },
    {  duration: 2, opacity: 1 }
  );
  gsap.fromTo(
    ".section2",
    { y: 2000, opacity: 0 },
    { y: 0, duration: 1, opacity: 1 }
  );
}

onCustOpen();
onWebLoad();
