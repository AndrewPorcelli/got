"use strict";

// Jon's Stats
let jonSnowAttack = 25;
let jonSnowHealth = 100;
let jonSnowDefense = 0;

// Jamie's Stats
let jamieLannisterAttack = 107;

if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon Snow has better attack than Jame Lannister");
} else if (jonSnowAttack === jamieLannisterAttack) {
  console.log("Jon Snow and Jamie Lannister have the same attack");
} else {
  console.log("Jamie Lannister has better attack than Jon Snow");
}

if (jonSnowHealth <= jamieLannisterAttack) {
  console.log("Jon Snow has been slain");
} else {
  // jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
  jonSnowHealth -= jamieLannisterAttack;

  console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}
