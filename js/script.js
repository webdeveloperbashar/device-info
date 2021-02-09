const detectionDetails = document.querySelector(".app-container");
const createDiv = document.createElement("div");

fetch(`https://api64.ipify.org/?format=json`)
  .then((res) => res.json())
  .then((data) => {
    createDiv.innerHTML = `
    <h2 class="text-center p-2 shadow bg-white rounded m-2">Your Device Info</h2>
    <div class="text-center p-2 shadow bg-white rounded m-2"><span>Operating System:</span><span> ${platform.os}</span></div>
    <div class="text-center p-2 shadow bg-white rounded m-2"><span>IP:</span><span> ${data.ip}</span></div>
    <div class="text-center p-2 shadow bg-white rounded m-2"><span>Browser:</span><span> ${platform.name}</span></div>
    <div class="text-center p-2 shadow bg-white rounded m-2"><span>Browser Version:</span><span> ${platform.version}</span></div>
    <div class="text-center p-2 shadow bg-white rounded m-2"><span>Layout:</span><span> ${platform.layout}</span></div>
    `;
  });

detectionDetails.appendChild(createDiv);