let levels = Math.floor(Math.random()*100);
let levels1 = Math.floor(Math.random()*100);
console.log(
    'A trainer challenges you!'
);
 function setup(){
     createCanvas(600,600);
    background('lightblue');
    fill('gray');
    rect(70,70,150,10);
    fill('blue');
    ellipse(150,450,400,50);
    fill('cyan');
    circle(150,400,100);
    fill('grey');
    rect(60,50,180,40);
    fill('grey');
    rect(360,330,180,40);
    fill('red');
    ellipse(450,150,400,50);
    fill('pink');
    circle(450,100,100);
    fill('white');
    circle(195,390,20);
    circle(175,390,20);
    circle(405,100,20);
    circle(420,100,20);
    fill('black');
    circle(200,385,10);
    circle(180,385,10);
    circle(402,105,10);
    circle(418,105,10);
    fill('green');
    rect(70, 70, 160, 10);
 };


 function mouseClicked({clientX,clientY}){
    
 }
 
 let enemyHealth=0;
 let small = 20;
 let middle = 20;

function keyPressed({clientX,clientY}){
    if(enemyHealth <= 150){
    if(keyCode === LEFT_ARROW){
        console.log("Voltorb used Thunder Shock!"); 
        enemyHealth += small;
        fill('red');
        rect(70,70,enemyHealth,10);
    }
}

    if(keyCode === RIGHT_ARROW){
        if(enemyHealth <= 150){
        console.log("Voltorb used Thunderbolt!");
         enemyHealth += middle;
         fill('red');
        rect(70,70,enemyHealth,10);
        }
    }

    if(keyCode === UP_ARROW){
        if(enemyHealth <= 150){
        console.log('Voltorb used Charge!');
        }
    }

    if(keyCode === DOWN_ARROW){console.log('Voltorb used Glare! The enemy is scared!');
    if(enemyHealth <= 150){
    
    
    fill(0,70,65);//leveltorb used Rollout!');
        enemyHealth += small;
        fill('red');
        rect(70,70,enemyHealth,10);
    }
}
}



function draw(){
fill('green');
rect(370,350,160,10);//health of user
fill('black');
textSize(15);//text size
text('voltorb',65,65)//states character name
text('level',170,65);//level
text(levels,215,65);
text(levels1,510,345);
text('level',470,345);
text('*voltorb*',370,345);
fill('white');
rect(0, 500, 600, 100);//bottom box
fill(45);
textSize(15);//move 1 size
text('THUNDER SHOCK(left)', 45, 570);//move 1
fill('black');
textSize(15);//move 2 size
text('THUNDER BOLT(right)', 45, 620);//move 2
fill(45);
//text('level',70,65);//level
fill('white');
rect(0, 500, 600, 100);//bottom box
fill(45);
textSize(15);//move 1 size
text('THUNDER SHOCK(left)', 45, 545);//move 1
fill('black');
textSize(15);//move 2 size
text('THUNDER BOLT(right)', 45, 580);//move 2
!fill('black');
textSize(15);
text('CHARGE(up)', 400, 545);//move 3
fill('black');
textSize(15);
text('ROLLOUT(down)', 400, 580);//move 4


}
   
