$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(200, 650 ,50, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(350, 600 ,600, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(1070, 550 ,50, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(850, 450 ,50, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    
    createPlatform(10, 320 ,40, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(100, 200 ,30, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(10, 100 ,10, 15);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(250, 180 ,350, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(700, 180 ,300, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(1100, 100 ,50, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(500, 550 ,10, 60);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(700, 550 ,10, 60);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(600, 400 ,50, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(400, 400 ,50, 20);

   
    createPlatform(700, 330 ,20, 20);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(850, 120 ,7, 60);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    createPlatform(400, 120 ,7, 60);// short but wide platforms located 500from the left of the screen and 300 pixel from the top of the screen
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)



    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("right", 550, 2000, 40, 40)
    createCannon("right", 200, 2000, 40, 40)


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
