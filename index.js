"use strict";

// Jon's Stats
let jonSnowAttack = 25;
let jonSnowHealth = 100;
let jonSnowDefense = 0;

// Jamie's Stats
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon Snow has better attack than Jame Lannister");
} else if (jonSnowAttack === jamieLannisterAttack) {
  console.log("Jon Snow and Jamie Lannister have the same attack");
} else {
  console.log("Jamie Lannister has better attack than Jon Snow");
}

// Jamie makes his first attack
if (jonSnowHealth <= jamieLannisterAttack) {
  console.log("Jon Snow has been slain");
} else {
  // jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
  jonSnowHealth -= jamieLannisterAttack;

  console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}

// Jon pick's up a shield
jonSnowDefense += 25;

// Jamie attacks again
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
  console.log("Jon Snow has been slain");
} else {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}
