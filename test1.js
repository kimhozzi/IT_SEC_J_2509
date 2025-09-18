//html이랑 까먹었는디..


let a =1; 

//let = js에서 선언하는 키워드
let a_2 = 1;

let b =3; 

let c = a+b;
console.log(c);
console.log(`c`);

console.log(`a+b =`, c);


console.log(`a+b =`, c);


console.log(`a(${a}) + b(${b}) = c(${c})`)
// 문자열 포매팅 
/* 문자열 포매팅 방식 -js, py
js = `${}` ex) 위 참고 let a =1; let b =3;   console.log(`a(${a}) + b(${b}) = c(${c})`)
py = f스트링 ex) name = "정호"  print(f"안녕, {name}!") -> 이게 ㅈ사기임

*/
console.log ( `a:${a} `);
a = a+3;
console.log ( `a:${a} `);

a = 1  ; 
a++;
console.log ( `a:${a} `);



const con1 = 3; 
// con1=1;
// py : CON1;   이번 주말에 react 쭉 해볼까? 

console.log(`con1 : ${con1}`)


a=1;
b="2";
c=a+b;
//typescript 는 안써봤는데 아주 기대가 된다 이말이야

/*
num1 선언 , 3 값 초기화
num2 선언 , 2 값 초기화
result 변수 선언 후 , num1/num2 값 대입
*/

let num1;
num1= 3;
let num2;
num2= 2;

let result = num1/num2;

console.log(`result : ${result}`)