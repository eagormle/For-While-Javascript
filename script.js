var wrapper=document.body.querySelector(".wrapper");
dragon_health=0
user_health=0
while(dragon_health<10 && user_health<5){
var damage = Number(prompt("How many times are you going to hit the dragon? (1-5)"));
 if(damage<6) {
  var rdamage = Math.floor(Math.random() * damage) + 1;
dragon_health=dragon_health+rdamage;
  var ddamage = Math.floor(Math.random() * 2) + 1;
user_health=user_health+ddamage;
 }else if(damage<6){
   var rdamage = 1;
dragon_health=dragon_health+rdamage;
  var ddamage = Math.floor(Math.random() * 2) + 1;
   user_health=user_health+ddamage;
 }
}
if(user_health>=5){
wrapper.innerHTML="The dragon won " + user_health + " to " + dragon_health + "!"
}else if(dragon_health>=10){
  wrapper.innerHTML="The user won " + user_health + " to " + dragon_health + "!"
}