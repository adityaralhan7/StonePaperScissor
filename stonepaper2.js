function randomNumber(){
    let arr=["stone","paper","scissor"];
    let a=Math.floor(Math.random()*arr.length);
    return arr[a];
}
let score={
    win:0,
    lose:0,
    tie:0,
};
function showscore(){
    alert(`Win:${score.win} Lost:${score.lose} Tie:${score.tie}`);
}
