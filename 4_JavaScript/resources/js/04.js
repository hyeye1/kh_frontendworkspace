
// wondow : 브라우저 창에 대한 정보를 담고있는 객체 (모든 객체들의 최상위 객체)

str = "전역변수";  // 자동으로 window객체의 필드로 잡힘

var str2 = "var 전역변수";

window.onload = function(){
    
    var str = "지역변수";      // 전역변수명과 중복됨
    var str3 = "새로운 지역변수"; 

    str4 = "난 뭘까요?";

    console.log("=== str 출력 ===");
    console.log(str); // 해당 영역 내에 지역변수명과 전역변수명이 동일한 변수 호출시 지역변수 
    // 전역변수에 접근하고자 할때는 window.또는 this.
    console.log(window.str);
    console.log(this.str);

    console.log("=== str2 출력 ===");
    console.log(str2);
    console.log(window.str2);
    console.log(this.str2);

    console.log("=== str3 출력 ===");
    console.log(str3);
    console.log(window.str3); // undefined (정의되어있지않다는 소리)
    console.log(this.str3);   // undefined (정의되어있지않다는 소리)

    console.log("=== str4 출력 ===");
    console.log(str4);
    console.log(window.str4);
    console.log(this.str4);


};

function test(){
    alert(str4)
}

function typeTest(){
    
    //var name ="홍길동";
    var name = '홍길동';
    var age = 20;
    var check = true;

    var hobby = ["영화", '음악', '낮잠']; // object
    var user = {
        name:"홍길동",
        age:20,
        id:"user01"
    }; // object
    
    var fn = function(){
        alert("ㅋㅋㅋ");
    };

    var noVal;

    console.log(name);
    console.log(age);
    console.log(check);
    console.log(hobby);
    console.log(user);
    console.log(fn);
    console.log(noVal);


    // 자료형 확인하고자 할 때 사용되는 함수 : typeof(변수명)
    var divEl = document.getElementById("area");

    divEl.innerHTML = name + "의 자료형 : " + typeof(name) + "<br>";
    divEl.innerHTML += age + "의 자료형 : " + typeof(age) + "<br>";
    divEl.innerHTML += check + "의 자료형 : " + typeof(check) + "<br>";
    divEl.innerHTML += hobby + "의 자료형 : " + typeof(hobby) + "<br>";
    divEl.innerHTML += user + "의 자료형 : " + typeof(user) + "<br>";
    divEl.innerHTML += fn + "의 자료형 : " + typeof(fn) + "<br>";
    divEl.innerHTML += noVal + "의 자료형 : " + typeof(noVal) + "<br>";
    
    // 객체 내부의 속성에 접근 => .속성명 으로 접근
    console.log(user.name);
    console.log(user.age);
    console.log(user.id);
    
    

}