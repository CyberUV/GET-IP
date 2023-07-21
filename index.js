import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://myprofile-2ccc5-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const indb = ref(database, "ip");


const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    console.log("IP Address:", ipAddress);
    console.log("Your data",data);

    push(indb, "your IP Add : "+ JSON.stringify(data) +" "+ipAddress);

    // display(ipAddress);
    var dat = data
    
    display(dat);
})



// Check if the browser supports the DeviceOrientation API
if (true) {
    window.addEventListener('deviceorientation', function(event) {
      const alpha = event.alpha; // Z-axis rotation (in degrees)
      const beta = event.beta; // X-axis rotation (in degrees)
      const gamma = event.gamma; // Y-axis rotation (in degrees)
  
      console.log('Phone Orientation:');
      console.log('Alpha:', alpha);
      console.log('Beta:', beta);
      console.log('Gamma:', gamma);

      push(indb, 'Phone Orientation: '+ "Alpha  : "+alpha+" "+"beta : "+beta+" "+"gama : "+gamma);

      console.log('Phone Orientation: '+ "Alpha  : "+alpha+" "+"beta : "+beta+" "+"gama : "+gamma);
    });
  } else {
    console.log('DeviceOrientation API is not supported by this browser.');
  }


const userInfo = "userInfo :" ;


function display(dataa){
  const disData = JSON.stringify(dataa)

  document.getElementById('showData').innerHTML = disData;
  console.log(dataa)

}


// push(indb, userInfo);
console.log("send Data");


})
