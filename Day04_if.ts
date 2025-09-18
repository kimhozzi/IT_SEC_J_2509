let user_input = 1234;
let door_pw = 1234;

// 일반 if
if (user_input == door_pw) {
    console.log(`(열리는 소리.mp3)`)
}
else {
    console.log(`(화면 깜빡이기)`)
}

// if 문 쉬운 형태

/*
if(false){
    console.log("true라면 실행");
}else {
    console.log(" not true라면 실행");
}
//이거 글자 꺼지는 기능 신박한디ㅇㅇ
*/

//다중 if
if (user_input == door_pw) {
    console.log(`(열리는 소리.mp3)`)
}
if(user_input != door_pw) {
    console.log(`(화면 깜빡이기)`)
}
else{
    console.log(`다시 입력`)
}

// elif 
if(false){
    console.log("true라면 실행");
}
else if(true) {
    console.log(" not true라면 실행");
}
else {console.log("if, else if 모두 아닐 때 실행")}

// 점수가 90점 이상이면 A(score>90) , 80점 이상이면 B , 70점 이상이면 C 60점 이상이면
// 그 밑이면 F


//b score>=80 && score <=89
//c score>=70 && score <=79
//d score>=60 && score <=69
//f score>=80 && score <=89

let score = 75.6;

if(score>=90){
    console.log("A!!")
}
else if(score>=80){
    console.log("B!!")
}
else if(score>=70){
    console.log("C!!")
}
else if(score>=60){
    console.log("D!!")
}
else{ console.log("땡!")}



if(score>=90){
    console.log("A!!")
}
if(score>=80 && score <=89){
    console.log("B!!")
}
if(score>=70 && score <=79){
    console.log("C!!")
}
else if(score>=60 && score <=69){
    console.log("D!!")
}
else{console.log("땡!")}


