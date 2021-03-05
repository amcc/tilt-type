let motion = false;
let variable;
let weight;
let slant;
let size;
let casual;

if (typeof DeviceMotionEvent.requestPermission === 'function') {
  document.body.addEventListener('click', function() {
    DeviceMotionEvent.requestPermission()
      .then(function() {
        console.log('DeviceMotionEvent enabled');

        motion = true;
      })
      .catch(function(error) {
        console.warn('DeviceMotionEvent not enabled', error);
      })
  })
} else {
  // motion = true;
}

function setup() {
  variable = select('#variable');
  weight = select('#weight');
  slant = select('#slant');
  // size = select('#size');
  casual = select('#casual')
}

function draw() {

  // let zMotion = round(1 * abs(radians(rotationZ) - PI), 2)
  // let casualVal = round(map(abs(radians(rotationZ) - PI), 0, PI, 0, 1), 2)
  let casl = round(map(abs(radians(rotationY)), 0, PI/2, 0, 1), 2)
  // let crsv = round(map(abs(radians(rotationY)), 0, PI/2, 0, 1), 1)
  let fontweight = round(map(abs(radians(rotationX)), 0, PI/2, 300, 1000));
  // let fontslant = round(map(abs(radians(rotationY)), 0, PI/2, 0, -15));
  let fontslant = round(map(abs(radians(rotationZ) - PI), 0, PI, -15, 0))

  // variable.style('font-size', zMotion + 'em');
  variable.style('font-weight', fontweight);
  variable.style('font-variation-settings', "'slnt' " + fontslant + ", 'CASL' " + casl);

  weight.html(fontweight);
  // size.html(zMotion + 'em');
  casual.html(casl)
  slant.html(fontslant);
}

// Recursive variable settings
// axis   default   min     max     step

// slnt	  0	        -15	    0	    1
// wght	  400	    300	    1000	1
// CASL	  0	        0	    1	    0.01
// CRSV	  0.5	    0	    1	    0.1
// MONO	  0	        0	    1	    0.01