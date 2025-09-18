
// 언제 내가 선언했냐?

// 언제 내가 선언했냐? - 변수, 객체, 함수 등에다가 타입을 지정할 수 있다. 면 typescript ->  let function, struct, ,,, etc
// 그 이외에 javascript 와 다른 점은 무엇일까? 
//EX)   let value : String | number ;



// ts 실행 명령어 : npx ts-node --esm Day04.ts  OR node Day04.ts


// let a1: number = 1;
// let b1: string  = "2";

// let sum : number = 0;
// sum = a1+b1;

//  == java == String b1 = "2";  ?

/*
let a=1; -> 들어오는 값에 따라서 자동으로 타입 지정
let a :number =  1; -> 직접 타입 설정  
*/ 

//물론 any 를 써서 타입에 상관없이 설정할 수 있다. 자료 타입이 복잡할 때(img, mp4 ,,,etc) 사용
let js1:any;

js1 =1;
js1 = "dgfds";
js1 = {};
js1 = []








let array1 = [1,2,3];
// ==
let array11 :number[] = [1,2,3];
//array11 을 선언'let' 하고 그 타입은 배열(숫자)임을 명시':'  에 1,2,3 을 대입'=' 이런 식인가?

array1[0] = 5;
console.log(array1);

//오늘 맘스터치 먹어야지~~~~ hehehehehehehehkekekekekekekek

//객체  - ~= 파이썬 딕셔너리 =  키 : 밸류 , TS = 자료구조 = 키 : 자료형? 
let jsObject = {a : 1, b:2};
console.log(`jsObject : `,jsObject);
console.log(`jsObject a: `,jsObject.a);
console.log(`jsObject b: `,jsObject.b);


let 내쇼핑몰 = [{제품 : "멍멍이", 가격:200}, {제품 : "멍멍이2", 가격:400}]
console.log(`각 제품:`, 내쇼핑몰[0].제품,내쇼핑몰[0].가격);

let 가격목록 = 내쇼핑몰.map(제품 => 제품.가격);
console.log(가격목록);



