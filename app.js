// Question 1
document.querySelector("#ques1").addEventListener("click", () => {
let engNum = +prompt("Enter your obtained marks in English");
let mathsNum = +prompt("Enter your obtained marks in Maths");
let physNum = +prompt("Enter your obtained marks in Physics");
let islNum = +prompt("Enter your obtained marks in Islamiat");
let subSum = engNum + mathsNum + physNum + islNum;
let totalNum = +prompt("Enter total marks of all subjects");
let totalPercentage = (subSum / totalNum) * 100;
document.querySelector("#ans1").innerHTML = Math.round(totalPercentage) + "%";
});

// Question 2
document.querySelector("#ques2").addEventListener("click", (checkType) => {
    let checkType1 = 324352;
    let checkType2 = "Hello";
    let checkType3 = function(){};
    let checkType4 = ["Hello", 213];
    let checkType5 = NaN;
    let checkType6 = {name:'Atif', age:23};
    let checkType7 = null;
document.querySelector("#ans2").innerHTML = typeof checkType1 +" "+ typeof checkType2 +" "+ typeof checkType3 +" "+ typeof checkType4 +" "+ typeof checkType5 +" "+ typeof checkType6 +" "+ typeof checkType7;
});

// Question 3
document.querySelector("#ques3a").addEventListener("click", (val1, val2) => {
    val1 = +prompt("Enter first number");
    val2 = +prompt("Enter second number");
    alert(val1-val2);
});
document.querySelector("#ques3b").addEventListener("click", (val1, val2) => {
    val1 = +prompt("Enter first number");
    val2 = +prompt("Enter second number");
    alert(val1*val2);
});
document.querySelector("#ques3c").addEventListener("click", (val1, val2) => {
    val1 = +prompt("Enter first number");
    val2 = +prompt("Enter second number");
    alert(val1/val2);
});
document.querySelector("#ques3d").addEventListener("click", (val1, val2) => {
    val1 = +prompt("Enter first number");
    val2 = +prompt("Enter second number");
    alert(val1%val2);
});

// Question 4
function info (){
    let crickterInfo = {
        name: prompt("Enter Name of Crickter"), 
        age: +prompt("Enter Age of Crickter"), 
        team: prompt("Enter Team of Crickter"), 
        country: prompt("Enter country of Crickter"), 
        gender: prompt("Enter Gender of Crickter"), 
        under13: prompt("Enter yes if you are in Under 13"), 
        under19: prompt("Enter yes if you are in under 19"), 
        t20Team: prompt("Enter yes if you are in T20 team"), 
        odiTeam: prompt("Enter yes if you are in ODI Team"), 
        testTeam: prompt("Enter yes if you are in Test Team"), 
        totalTest: prompt("Enter total test mactches you played"), 
        testInnings: prompt("Enter total test innings you played"),
    }
    console.log(crickterInfo);
}
document.querySelector("#ques4").addEventListener("click", () => {
    info ();
});

// Question 5
document.querySelector("#ques5").addEventListener("click", () => {
    let val = document.querySelector("#inpVal").value;
    let li = document.createElement("li");
    li.innerHTML = val;
    document.querySelector("#todoList").appendChild(li)
});
document.querySelector("#delTodo").addEventListener("click", () => {
    document.querySelector("#todoList").innerHTML = "";
});

// Question 6
document.querySelector("#ques6").addEventListener("click", () => {
    let inpVal = document.querySelector("#inpValPalindrom").value;
    let toSmall = inpVal.toLowerCase();
    let splVal = toSmall.split('').reverse().join('');
    if(toSmall === splVal){
        alert(inpVal + " is Palindrome");
    }else{
        alert(inpVal + " is not Palindrome");
    }
});

// Question 7



