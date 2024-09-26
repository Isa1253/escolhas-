
let suaidade;
let terror;
let RPG;
let aventura;
let título;
let corpo;
let jogos = {
  menor10: {
    ação: "Zombie Tsunami",
    aventura: "Subway Surfer",
    RPG: "Minecraft"
  },
  entre10e14:{
    RPG: "The sims",
    aventura: "Pokemon GO",
    ação: "Misfortune" 
},
  entre14e16:{
    terror: "Five Nights At Freddys",
    suspense: "Evil Nun",
    luta: "League of Legends"
  },
  entre16e18:{
    terror: "Resident Evil: Village",
    ação: "Cyberpunk 2077",
    suspense: "Outlast"
  },
  maior18:{
    ação: "GTA San Andreas",
    luta: "Mortal Kombat X",
    terror: "Resident Evil"
  }   
};

let button;




function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(655,530).addClass("hidden");
  suaidade= createInput("").position(630,585).addClass("hidden")
  terror = createCheckbox("Gosta de jogos de ação? 🌩").position(100,600).addClass("hidden");
  RPG = createCheckbox("Gosta de jogos de RPG? 🎐").position(100,650).addClass("hidden");
  aventura = createCheckbox("Gosta de jogos de aventura? 🎎").position(100,700).addClass("hidden");
título = "Matemasie"
corpo = "Protest Guerrilla";
  button = createButton("APERTA📢").position(width/2,560);
  button.mousePressed(bota);
  button.addClass("botão");
}
 function bota(){
   selectAll(".hidden").forEach((el) => el.removeClass("hidden"));
   button.hide();
 }





function draw() {
  background("#6FE9DF");
 
  
  
  let idade = parseInt(suaidade.value());
  let checkação = terror.checked();
   let checkRPG = RPG.checked();
   let checkaventura = aventura.checked();
  let jogo = "insira suas preferências";
  if (suaidade.value() !== ""){
  jogo = mostrajogo(idade, checkação, checkRPG, checkaventura);
  }
 
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
  textFont(título);
  
 fill("rgb(42,121,124)")
  textAlign(CENTER,CENTER);
  textSize(40);
  text("Melhor indicador de jogos", width/2, 30);
  textFont(corpo);
}


function mostrajogo(idade, checkação, checkRPG, checkaventura){
  if (isNaN(idade)){
    return "Idade Inválida";
  } else
  if (idade < 5){
    return "Sai daqui,inferno"
   } else  
   if (idade > 120){   
     return "Eu trago o caixão⚰"
  }
  if (idade >=5 && idade < 10){
  if (checkação){
    return jogos["menor10"]["ação"];
  }
   if (checkRPG){
    return jogos["menor10"]["RPG"];
  }
   if (checkaventura){
    return jogos["menor10"]["aventura"];
    }
  }
 else if (idade >=10 && idade < 14){
  if (checkação){
    return jogos["entre10e14"]["RPG"];
  }
   if (checkRPG){
    return jogos["entre10e14"]["aventura"];
  }
   if (checkaventura){
    return jogos["entre10e14"]["ação"];
    }
  }
  else if (idade >=14 && idade < 16){
  if (checkação){
    return jogos["entre14e16"]["terror"];
  }
   if (checkRPG){
    return jogos["entre14e16"]["suspense"];
  }
   if (checkaventura){
    return jogos["entre14e16"]["luta"];
    }
  }
 else if (idade >=16 && idade < 18){
  if (checkação){
    return jogos["entre16e18"]["terror"];
  }
   if (checkRPG){
    return jogos["entre16e18"]["ação"];
  }
   if (checkaventura){
    return jogos["entre16e18"]["suspense"];
    }
  }
 else if (idade >=18){
  if (checkação){
    return jogos["maior18"]["ação"];
  }
   if (checkRPG){
    return jogos["maior18"]["luta"];
  }
   if (checkaventura){
    return jogos["maior18"]["terror"];
    }
  }
}
