function rpsGame(yourChoice){
    var humanChoice, computerChoice;
    humanChoice=yourChoice.id;
    console.log(humanChoice)
    let choice = ["rock","paper","scissors"];
    computerChoice=choice[Math.floor(Math.random()*3)];
    console.log(humanChoice);
    console.log(computerChoice);
    let result = rps(humanChoice, computerChoice);
    console.log(result);
    displayRes(result,computerChoice,humanChoice)
    //document.getElementById("Result").innerHTML=result
}

function rps(humanChoice, computerChoice){
    let hc;
    let cc;
    if(humanChoice=="rock")hc = 0;
    if(computerChoice == "rock") cc = 0;
    if(humanChoice=="paper")hc = 1;
    if(computerChoice == "paper")cc = 1;
    if(humanChoice=="scissors")hc = 2;
    if(computerChoice == "scissors")cc = 2;    

    if(hc-cc==0)return ([0.5,0.5]);
    if(hc-cc==1 || hc-cc==-2)return ([1,0]);
    if(hc-cc==2 || hc-cc==-1)return ([0,1]);
}

function displayRes(result,computerChoice,humanChoice){

    let imgDatabase = {
        "rock": document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    }
    let FinalMessage = {}
    if(result[0]===0){
        FinalMessage['message'] = 'You Loss';
    }
    else if(result[0]===1){
        FinalMessage['message'] = 'You Won';
    }
    else 
    {
         FinalMessage['message'] = 'Draw';
    }

    FinalMessage['color'] = 'greenyellow';

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    let humanDiv = document.createElement("div")
    humanDiv.innerHTML = "<img src='" + imgDatabase[humanChoice] + "'height=250px width=250px style ='box-shadow: 0px 10px 50px aqua; border:1px solid black; border-radius:10px';>"
   
    let ComputerDiv = document.createElement("div")
    ComputerDiv.innerHTML = "<img src='" + imgDatabase[computerChoice] + "'height=250px width=250px style ='box-shadow: 0px 10px 50px aqua;border:1px solid black; border-radius:10px'>"
  
    let FinalMessageDiv = document.createElement("div")
    FinalMessageDiv.innerHTML = "<h1 style='color: " + FinalMessage['color'] + ";font-size:60px; padding:30px;'>" + FinalMessage['message'] + "</h1> "   
     
    document.getElementById("imgContainer").appendChild(humanDiv);
    document.getElementById("imgContainer").appendChild(FinalMessageDiv);
    document.getElementById("imgContainer").appendChild(ComputerDiv);

}

function Reset(){
    location.reload()
}

function Theme(){
    var x = document.getElementsByTagName("BODY")
}