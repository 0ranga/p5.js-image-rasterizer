var img;
var cnv;

function preload(){
    img = loadImage('venus.jpg');
}

function setup(){
    cnv = createCanvas(600, 600);
    background(255);
    img.resize(width,0);
    // image(img, 0, 0);
}

function draw(){
    background(246);
    fill(0);
    noStroke();
    var tiles = floor(dist(0, 0, mouseX, mouseY)/10);
    var tileSize = width / tiles;

    translate(tileSize/2, tileSize/2);

    for (let x = 0; x < tiles; x++) {
        for (let y = 0; y < tiles; y++) {

            var c = img.get(x * tileSize, y * tileSize);
            var size = map(brightness(c), 0, 100, tileSize+2, 0);
            ellipse(x*tileSize, y*tileSize, size, size);
        }
        
    }
}

// function mousePressed() {
//     //declared the canvas above, so I can access it here
//     // exp = createImage(width, height);
//     // save(exp, 'myImage.jpg');
//     saveCanvas(cnv, 'myCanvas', 'png');
//   }