let alphabet = ["snake","water","gun"]
let random = alphabet[Math.floor(Math.random() * alphabet.length)]
let Value; 
let cons = true;
while(cons){

    Value = prompt("Snake,Water Or Gun");
    
    if(Value == "snake" && random == "snake"){
        alert("there is a tie")
        
    }
    else if(Value == "sanke" && random == "gun"){
        alert("Computer Wins")
        
    }
    else if(Value == "snake" && random == "water"){
        alert("You win")
        
    }
    else if(Value == "water" && random == "gun"){
        alert("You win");
        
    }
    else if(Value == "water" && random == "water")
    {
        alert("there is a tie")
        
    }
    else if(Value == "water" && random == "snake"){

        alert("Computer win")
        
    }
    else if(Value == "gun" && random == "gun")
    {
        alert("there is a tie")
        
    }
    else if(Value == "gun" && random == "snake")
    {
        alert("You win")
        
    }
    else if(Value == "gun" && random == "water")
    {
        alert("Computer wins")
        
    }

    cons = confirm("Do you Wan't to continue");
}