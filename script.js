// API
const url = "https://api-thirukkural.vercel.app/api?num=";

// COUNTER TO FETCH THIRUKKURAL
let num = 1;

// DOM NODE
const section = document.getElementById("section");
const subheading = document.getElementById("sub-heading");
const subtitle = document.getElementById("sub-title")
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const discription = document.getElementById("tam_exp");

const section2 = document.getElementById("section2");
const subheading2 = document.getElementById("sub-heading2");
const subtitle2 = document.getElementById("sub-title2")
const line = document.getElementById("line");
const discription2 = document.getElementById("eng_exp");

// FUNCTION TO GET DATA FROM SERVER
async function IOOperation(id = 1, cb = () => {}) {
  const response = await fetch(url + id);
  const data = await response.json();

  if (data) {
    cb(data);
  }
}

// CALLER FUNCTION
function fetchKural(id) {
  if (id) {
    IOOperation(id, updateApp);
  } else {
    IOOperation(num, updateApp);
  }
}

fetchKural();

// HELPS TO UPDATE THE UI WITH THIRUKKURAL
function updateApp(data = {}) {
  section.innerText = data["sect_tam"] || "NA";
  subheading.innerHTML = data["number"] || "NA";
  subtitle.innerText = data["chap_tam"] || "NA";
  line1.innerText = data["line1"] || "NA";
  line2.innerText = data["line2"] || "NA";
  discription.innerText = data["tam_exp"] || "NA"

  section2.innerText = data["sect_eng"] || "NA";
  subheading2.innerHTML = data["number"] || "NA";
  subtitle2.innerText = data["chap_eng"] || "NA";
  line.innerText = data["eng"] || "NA";
  discription2.innerText = data["eng_exp"] || "NA";
  num++;
}