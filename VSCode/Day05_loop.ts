// 반 복 문

// for(let idx=0; idx<3; idx++){
//     console.log(`idx :${idx}`);
// }
// // 더벤티 맛없다.. 메가가 낫네..."금요일!""


 let array1 = ["고양이","맷돼지", "코끼리","기린","음.."];
// // 아니 ㅅㅂ 다른 파일에 있는 변수까지 가져와서 선언할 수 없다고 나오는건 무슨경우냐?
// // 뭐여 돼잖아

for(let item of array1){
    console.log(`item : ${item}`);
}
// typescript 에서는 for of 를 자주 쓴다고 한다

array1.forEach((item)=>{
    console.log(`item: ${item}`);
});
// react에서는 .forEach 많이 쓴다...


// for(let idx=2; idx<=9; idx++){
//     for(let idx1=1; idx1<=9; idx1++){
//     console.log(`idx :${idx} * \t idx1: ${idx1} = ${idx * idx1}`);
// }       
// }

// {지역변수 : scope},  javas는 오류나지 않았나 for (int i){  for(int j)}
// 그러게 지역변수인데 되어야 하는거 아닌가 java도 되겠는데..? 퉤

/*
함수 = 모듈, 기계, 블랙박스&화이트박스 실행해서 bb & wb 검사방법 
~> 결과를 보는게 블랙박스, 코드만 점검하면 화ㅣ트박스일걸
bb : 함수에는 사용법이 있다. 배가 고파졌어

*/

// sum() 함수 호출하기
function sum() {
    console.log("1+1 = 3");
}
// 사실 컨솔.로그() 도 함수거든요
// 함수를 브라켓 없이 만든다고? 그러면 어떻게 적용되는거지? dk '=>'

/*
subtract 함수 선언, 2-1=1 이라는 내용 채워주세요
*/

function subtract() { 
    console.log("2-1=1")
}
subtract();

/** 
 * 
 * 함수 설명이다? 오....
 *@param a  +
 *@returns   -> 를 통해 함수 변수들, 리턴 방식을 표기할 수도 있다 이거 js에서도 되나?
 * */ 
function sum2( a:number, b:number){
    return a+b;
}
console.log(sum2(2,4));
// 또는 보통은 변수값에 담아서...
let data = sum2(1, 3);
console.log(data)


//1960 유행 알고리즘...  .
//제어 + 논리 + 함수()
let array3 = [1,3,11,5,2,35,23,55,5,64,4,8888,634,12,4]
/**
 * 정렬함수 "temp"  니가 컴퓨터라 생각을 하라고야 ㅇㅇ
 * @param array3 // : 숫자 배열
 * @returns // : 정렬이 된 숫자 배열
 */
function number_sort (array3 : number[]){
    for(let i=0;i<array3.length;i++){
    for(let j=i+1;j<array3.length;j++){
        try {
            if(array3[i]>array3[j]){
                let temp = array3[j]
                array3[j] = array3[i]
                array3[i] = temp  
            }
        } catch (error : any) {
            
        }
    }
}
    return array3

}
array3 = number_sort(array3)
console.log(array3)

// j--  ~ -> j[-1]  ...? 해서 배열로 미는 거 아닐까?

function iS(arr: number[]):number[] {
    const result = [...arr];

    for(let i =1 ; i< result.length ; i++ ) {
        const current = result[i];
        let j = i-1;

        while (j >=0 && result[j] > current){
            result[j+1] = result[j];
            j--   /// 이거 배열 [-1] 이렇게 해가지고 이용하는게 아닐까? 
        }
        result[j+1] = current;
    }
    return result;
}

let array34 = [1,3,11,5,2,35,23,55,5,64,4,8888,634,12,4]
array34 = iS(array34);
console.log(array34);