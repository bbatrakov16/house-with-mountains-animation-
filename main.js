// HTML Canvas

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;

// Global Variables
let countNum = 0;

// Birds img Variables
let birdsX = 275;
let birdsY = 0;


// Sun Variables
let sunY = 40;

// Moon Variables
let moonY = 260;

// Sky Variables
let gColorEl = 178;
let bColorEl = 255;

// Cloud Variables
let cloud1X = 120;
let cloud1Y = 20;

let cloud2X = 80;
let cloud2Y = 5;

// Window Variables
let windowFill = "rgba(171, 230, 255, 1)";

requestAnimationFrame(draw);
function draw() {
  // Sky
  ctx.fillStyle = `rgba(0, ${gColorEl}, ${bColorEl}, 1)`;
  ctx.fillRect(0, 0, 500, 236);

  // Moon
  ctx.fillStyle = "rgba(200, 215, 255, 1)";
  ctx.strokeStyle = "rgba(0, 38, 135, 1) ";
  ctx.beginPath();
  ctx.arc(40, moonY, 29.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  // Clearing
  ctx.fillStyle = "rgba(0, 190, 87, 1)";
  ctx.fillRect(0, 236, 500, 164);

  // Sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(380, sunY, 29.5, 0, 2 * Math.PI);
  ctx.fill();

  // Sun and moon animation + changing sky
  countNum++;
  if (countNum >= 0 && countNum <= 200) {
    sunY++;
    gColorEl = gColorEl - 1;
    bColorEl = bColorEl - 1;
  } else if (countNum > 200 && countNum <= 400) {
    moonY--;
    gColorEl = gColorEl + 0.3;
    bColorEl = bColorEl + 0.3;
  } else if (countNum > 400 && countNum <= 600) {
    moonY++;
    gColorEl = gColorEl - 0.3;
    bColorEl = bColorEl - 0.3;
  } else if (countNum > 600 && countNum < 800) {
    sunY--;
    gColorEl = gColorEl + 1;
    bColorEl = bColorEl + 1;
  } else if (countNum == 800) {
    countNum = 0;
  }

  // Window light Animation
  if (countNum >= 150 && countNum <= 680) {
    windowFill = "rgba(255, 233, 157, 1)";
  } else if (countNum > 680 && countNum < 800) {
    windowFill = "rgba(171, 230, 255, 1)";
  }

  // House (square)
  ctx.fillStyle = "rgba(148, 92, 61, 1)";
  ctx.fillRect(350, 200, 100, 100);

  // House (triangle)
  ctx.fillStyle = "rgba(137, 77, 44, 1)";
  ctx.beginPath();
  ctx.moveTo(320, 200);
  ctx.lineTo(400, 120);
  ctx.lineTo(480, 200);
  ctx.lineTo(320, 200);
  ctx.fill();

  // House window
  ctx.fillStyle = windowFill;
  ctx.fillRect(383, 230, 35, 35);

  ctx.strokeStyle = "black";
  ctx.strokeRect(383, 230, 36, 36);

  // Window framers
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(401, 230);
  ctx.lineTo(401, 265);
  ctx.stroke();

  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(383, 248);
  ctx.lineTo(419, 248);
  ctx.stroke();

  // Mountain (left)
  ctx.fillStyle = "rgba(204, 204, 204, 1)";
  ctx.beginPath();
  ctx.moveTo(0, 236);
  ctx.lineTo(230, 236);
  ctx.lineTo(115, 60);
  ctx.lineTo(0, 236);
  ctx.fill();

  // Mountain (right)
  ctx.fillStyle = "rgba(154, 154, 154, 1)";
  ctx.beginPath();
  ctx.moveTo(90, 236);
  ctx.lineTo(300, 236);
  ctx.lineTo(195, 10);
  ctx.lineTo(90, 236);
  ctx.fill();

  // Mountain snow (left)
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(70, 130);
  ctx.lineTo(115, 60);
  ctx.lineTo(143, 105);
  ctx.lineTo(122, 100);
  ctx.lineTo(115, 132);
  ctx.lineTo(102, 115);
  ctx.lineTo(70, 130);
  ctx.fill();
  ctx.stroke();

  // Mountain snow (right)
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(158, 90);
  ctx.lineTo(195, 10);
  ctx.lineTo(234, 95);
  ctx.lineTo(200, 70);
  ctx.lineTo(185, 115);
  ctx.lineTo(177, 90);
  ctx.lineTo(158, 90);
  ctx.fill();
  ctx.stroke();

  // Clouds
  let cloudImg = document.getElementById("cloud-img");
  ctx.drawImage(cloudImg, cloud1X, cloud1Y, 75, 60);

  ctx.drawImage(cloudImg, cloud2X, cloud2Y, 75, 60);

  // Cristmas tree
  ctx.fillStyle = "rgba(137, 77, 44, 1)";
  ctx.fillRect(98, 300, 4, 25);

  ctx.fillStyle = "rgba(0, 144, 66, 1)";
  ctx.beginPath();
  ctx.moveTo(40, 300);
  ctx.lineTo(156, 300);
  ctx.lineTo(98, 200);
  ctx.lineTo(40, 300);
  ctx.fill();

  ctx.fillStyle = "rgba(0, 144, 66, 1)";
  ctx.beginPath();
  ctx.moveTo(50, 260);
  ctx.lineTo(145, 260);
  ctx.lineTo(97.5, 190);
  ctx.lineTo(50, 260);
  ctx.fill();

  ctx.fillStyle = "rgba(0, 144, 66, 1)";
  ctx.beginPath();
  ctx.moveTo(60, 230);
  ctx.lineTo(134, 230);
  ctx.lineTo(97, 170);
  ctx.lineTo(60, 230);
  ctx.fill();

  ctx.fillStyle = "rgba(0, 144, 66, 1)";
  ctx.beginPath();

  // tree
  ctx.fillStyle = "rgba(137, 77, 44, 1)";
  ctx.fillRect(300, 325, 4, 55);

  ctx.fillStyle = "rgba(0, 229, 105, 1)";
  ctx.strokeStyle = "rgba(0, 144, 66, 1)";
  ctx.beginPath();
  ctx.arc(301, 290, 29.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(0, 229, 105, 1)";
  ctx.strokeStyle = "rgba(0, 144, 66, 1)";
  ctx.beginPath();
  ctx.arc(325, 320, 29.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(0, 229, 105, 1)";
  ctx.strokeStyle = "rgba(0, 144, 66, 1)";
  ctx.beginPath();
  ctx.arc(277, 320, 29.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  // Birds (image)
  let birdsImg = document.getElementById("birds-img");
  ctx.drawImage(birdsImg, birdsX, birdsY, 141, 142);

  // Birds Animation
  birdsX += 2.5;

  if (birdsX >= 500) {
    birdsX = -141;
    birdsY = birdsY + Math.random() * 50;
    if (birdsY >= 236 - 142) {
      birdsY = 0;
    }
  }

  // Clouds Animation
  cloud1X += 1;
  cloud2X += 1;

  if (cloud1X >= 500 && cloud2X >= 500) {
    cloud1X = -120;
    cloud2X = -80;

    let randYDirection = Math.random() * 50;
    cloud1Y = cloud1Y + randYDirection;
    cloud2Y = cloud2Y + randYDirection;

    if (cloud1Y >= 150 && cloud2Y >= 150 - 15) {
      cloud1Y = 20;
      cloud2Y = 5;
    }
  }

  // Title
  ctx.fillStyle = "rgba(171, 230, 255, 1)";
  ctx.font = "15px Inter";
  ctx.fillText("Figma & Java Script Canvas", 20, 385);

  requestAnimationFrame(draw);
}
