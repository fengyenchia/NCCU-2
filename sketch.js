function preload() {
  font = loadFont('Cubic_11.ttf');
  font2 = loadFont('LINESeedTW_TTF_Th.ttf');
}

async function setup() {
  createCanvas(1920, 1920);
  background(0);
  // frameRate(100);
}

function draw() {
  colorMode(HSB);
  background(0, 0.01);

  push();
  let padding = 40;
  let colorA = color(0, 0, 100, 80);
  let colorB = color(0, 0, 80, 80);
  let rectWidth = width - 2 * padding;
  let rectHeight = height - 2 * padding;
  translate(padding, padding);
  MoMoRect(0, 0, rectWidth, rectHeight, colorA, colorB, 0.01);
  pop();

  push();
  translate(width / 2, height / 2);
  push();
  // 顏色 1
  scale(0.8);
  myItem1([180, random(95, 100), random(90, 100)], [-20, 5, 10])
  myItem1([180, random(95, 100), random(90, 100)], [-20, 5, 10])
  myItem1([180, random(95, 100), random(90, 100)], [-20, 5, 10])
  myItem1([180, random(95, 100), random(90, 100)], [-20, 5, 10])
  pop();
  myItem_1([180, random(95, 100), random(90, 100)], [-20, 5, 10])
  myItem_1([180, random(95, 100), random(90, 100)], [-20, 5, 10])
  myItem_1([180, random(95, 100), random(90, 100)], [-20, 5, 10])
  myItem_1([180, random(95, 100), random(90, 100)], [-20, 5, 10])

  // 顏色 2
  // myItem2([210, random(50, 200), 100], [-20, 50, 10])
  // myItem2([210, random(50, 200), 100], [-20, 50, 10])
  // myItem2([210, random(50, 200), 100], [-20, 50, 10])
  // myItem2([210, random(50, 200), 100], [-20, 50, 10])
  // 顏色 3
  // myItem2([220, random(120, 200), 120], [-20, 50, 10])
  // myItem2([220, random(120, 200), 120], [-20, 50, 10])
  // myItem2([220, random(120, 200), 120], [-20, 50, 10])
  // myItem2([220, random(120, 200), 120], [-20, 50, 10])
  pop();

  // push();
  // translate(width/2, height/2);
  // myCircle(0, 0, width, 10000);
  // pop();

  // --------- 大標 ----------
  colorMode(RGB);
  textFont(font2);
  strokeWeight(1.5);
  let points1 = font2.textToPoints('N', padding * 7, height / 2 + padding * 1.8, 220, { sampleFactor: 0.04 });
  let points2 = font2.textToPoints('{', padding * 11.5, height / 2 + padding * 1.8, 220, { sampleFactor: 0.04 });
  // let pointPositionX = [];
  // let pointPositionY = [];
  // for (let p of points) {
  //   pointPositionX.push(p.x);
  // }
  // for (let p of points) {
  //   pointPositionY.push(p.y);
  // }
  for (let i = 1; i < points1.length; i++) {
    if (random() < 0.2) {
      stroke(0);
      point(points1[i].x, points1[i].y);
    }
    else {
      stroke(255);
      line(points1[i].x + random(-15, 15), points1[i].y + random(-15, 15),
        points1[i - 1].x + random(-15, 15), points1[i - 1].y + random(-15, 15));
    }
  }
  for (let i = 1; i < points2.length; i++) {
    if (random() < 0.2) {
      stroke(0);
      point(points2[i].x, points2[i].y);
    }
    else {
      stroke(255);
      line(points2[i].x + random(-7, 7), points2[i].y + random(-7, 7),
        points2[i - 1].x + random(-7, 7), points2[i - 1].y + random(-7, 7));
    }
  }

  let _textBox = font2.textBounds('}', width - padding * 7, height / 2 + padding * 1.8, 220);
  let points3 = font2.textToPoints('}', width - padding * 11.5 - _textBox.w, height / 2 + padding * 1.8, 220, { sampleFactor: 0.04 });
  let UtextBox = font2.textBounds('U', width - padding * 7, height / 2 + padding * 1.8, 260);
  let points4 = font2.textToPoints('U', width - padding * 7 - UtextBox.w, height / 2 + padding * 1.8, 220, { sampleFactor: 0.04 });
  for (let i = 1; i < points3.length; i++) {
    if (random() < 0.2) {
      stroke(0);
      point(points3[i].x, points3[i].y);
    }
    else {
      stroke(255);
      line(points3[i].x + random(-7, 7), points3[i].y + random(-7, 7),
        points3[i - 1].x + random(-7, 7), points3[i - 1].y + random(-7, 7));
    }
  }
  for (let i = 1; i < points4.length; i++) {
    if (random() < 0.2) {
      stroke(0);
      point(points4[i].x, points4[i].y);
    }
    else {
      stroke(255);
      line(points4[i].x + random(-15, 15), points4[i].y + random(-15, 15),
        points4[i - 1].x + random(-15, 15), points4[i - 1].y + random(-15, 15));
    }
  }

  // ------- 內文 -------

//  展名：N{}U──政大區塊鏈應用課程期末成果展
//  副標題／展覽主題：Undefined一切尚在編譯中

// 展覽時間：12/20 - 12/25
// 展覽地點：超級浪：中山科藝所 Hyper Wave: ZITA Zhongshan Institute of Techno-Art （10491臺北市中山區南京東路一段8號4F）

// 主辦單位：政大區塊鏈應用課程期末成果展籌備小組、c2x3
  textFont(font);

  if (random() < 0.02) {
    fill(0);
    stroke(0);
  }
  else {
    fill(255);
    stroke(255);
  }

  textAlign(CENTER, TOP);
  strokeWeight(0.8);
  textSize(60);
  text('(12/20 - 25)', width / 2, padding * 2);
  strokeWeight(0);
  textSize(30);
  text('主辦單位 | 政大區塊鏈應用課程期末成果展籌備小組、c2x3', width / 2, height - padding * 3);
 
  
  // 超級浪：中山科藝所 Hyper Wave: ZITA Zhongshan Institute of Techno-Art
  textAlign(RIGHT, TOP);
  strokeWeight(0.3);
  textSize(50);
  text('中山科藝所', width - padding * 2, padding * 2);
  text('超級浪', width - padding * 2, padding * 3.5);
  
  textAlign(LEFT, TOP);
  strokeWeight(0.3);
  textSize(50);
  text('20', padding * 2, padding * 2);
  text('25', padding * 2, padding * 3.3);
  
  textSize(50);
  strokeWeight(0);
  stroke(255);
  fill(255);
  let word1 = ["政", "大", "區", "塊", "鏈", "應", "用"];
  for(let i=0; i<7; i++){
    text(word1[i], padding * 2.05, padding * 8 + i * 60);
  }
  textSize(50);
  strokeWeight(0);
  stroke(255);
  fill(255);
  let word2 = ["課", "程", "期", "末", "成", "果", "展"];
  for(let i=0; i<7; i++){
    text(word2[i], (width-padding)-(padding * 2.35), padding * 8 + i * 60);
  }
  
  stroke(255);
  fill(255);
  textSize(35);
  strokeWeight(1);
  let word3 = ["U", "n", "d", "e", "f", "i", "n", "e", "d"];
  for(let i=0; i<9; i++){
    text(word3[i], padding*7.5 + i * 75, height - padding * 20);
  }
  let word4 = ["一", "切", "尚", "在", "編", "譯", "中"];
  strokeWeight(1);
  for(let i=0; i<7; i++){
    text(word4[i], padding*13 +480+ i * 100, height - padding * 20);
  }

  strokeWeight(3);
  line(width / 11.5, padding * 2.3, width / 5.5, padding * 2.3);
  
  
  textAlign(RIGHT, CENTER);

  textSize(40);
  let textBox = font.textBounds('在代碼中尋找未定義的自己', width - padding * 7, height / 2 + padding * 10);
  
  fill(0, 120);
  stroke(255);
  strokeWeight(1.5);
  rect(textBox.x - 20, textBox.y - 20, textBox.w + 40, textBox.h + 40);
  
  stroke(255);
  fill(255);
  strokeWeight(0.3);
  text('在代碼中尋找未定義的自己', width - padding * 7, height / 2 + padding * 10);

  // ------ 邊框 ------
  strokeWeight(5);
  stroke(255);
  line(0, 0, width, 0);
  line(0, height, width, height);
  line(0, 0, 0, height);
  line(width, 0, width, height);
}

// ------------------------------------

function myItem1(colorList, colorChange) {
  let changeColor = colorChange[floor(random(3))];
  let listColor = colorList[0];
  let myColor = changeColor + listColor;
  for (let i = -width / 2; i < width / 2; i += 0.8) {
    let posX = i;
    // let posY = -height/2;
    posY = 0;

    let noiseValue = frameCount % 200 * noise(i * 0.01, frameCount / 20);
    let sinValue = frameCount % 50 * sin(i * 0.008);

    posY += noiseValue + sinValue;

    stroke(myColor, colorList[1], colorList[2]);
    strokeWeight(1.8);
    rotate(PI / frameCount / 2);
    point(posX, posY);
  }
}

function myItem_1(colorList, colorChange) {
  push();
  // scale(0.3);
  let changeColor = colorChange[floor(random(3))];
  let listColor = colorList[0];
  let myColor = changeColor + listColor;
  for (let i = -(width*1.78)/2; i < (width*1.78)/2; i += 2) {
    let posX = i;
    let posY = height / 2;

    let noiseValue = frameCount % 400 * noise(i * 0.01, frameCount / 20);
    let sinValue = frameCount % 80 * sin(i * 0.008);

    posY += noiseValue + sinValue;

    stroke(myColor, colorList[1], colorList[2]);
    strokeWeight(1.8);
    rotate(PI); // 也可以 /2
    point(posX, posY);
  }
  pop();
  rotate(PI/2);
}

function myItem2(colorList, colorChange) {
  let colors = colorChange[floor(random(3))];
  colorList = colorList.map(x => x + colors);
  for (let i = -width / 2; i < width / 2; i += 0.8) {
    let posX = i;
    // let posY = -height/2;
    let posY = 0;

    let noiseValue = frameCount % 200 * noise(i * 0.01, frameCount / 20);
    let sinValue = frameCount % 50 * sin(i * 0.008);

    posY += noiseValue + sinValue;

    stroke(colorList[floor(random(colorList.length))], random(90, 100), 100);
    strokeWeight(1.8);
    rotate(PI / frameCount / 2);
    point(posX, posY);
  }
}

// function myCircle(posX, posY, diameter, pointCount) {
//   let radius = diameter/2;
//   for (let i = 0; i < pointCount; i++) {
//     let angle = random(PI*2);
//     let r = 1-(random(random(random(1))));
//     let x = posX + r*radius*cos(angle);
//     let y = posY + r*radius*sin(angle);
// 	 stroke(20);
//     point(x, y);
//   }	
// }

function MoMoRect(x, y, rectWidth, rectHeight, colorFrom, colorTo, density = 0.15) {
  let xcount = rectWidth * density;
  let ycount = rectHeight * density;

  let xDist = rectWidth / xcount;
  let yDist = rectHeight / ycount;

  let xstart = x;
  let ystart = y;

  let colorA = colorFrom;
  let colorB = colorTo;

  for (let y = 0; y < ycount; y += 0.2) {
    for (let x = 0; x < xcount; x += 0.2) {
      let posX = xstart + xDist * x;
      let posY = ystart + yDist * y;
      let nowColor;
      nowColor = lerpColor(colorA, colorB, 0.1);


      fill(nowColor);

      noStroke();
      let noiseSize = noise(posX * 0.06, posY * 0.1);
      let circleSize = lerp(0.01, 1, noiseSize);

      circle(posX, posY, circleSize);
    }
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function keyPressed(){
	if(key == " "){
		saveCanvas("N{}U", "png");
  }
}