var button1=document.getElementById("one");
var button2=document.getElementById("two");
var button3=document.getElementById("three");
var button4=document.getElementById("four");
var divOne=document.getElementById("div1");
var divTwo=document.getElementById("div2");
var divThree=document.getElementById("div3");
var divFour=document.getElementById("div4");

document.querySelector("#one").addEventListener("click",function()
{
  // document.querySelector('#one').classList.replace('one','three')
  document.querySelector('#three').classList.remove('three')
  button1.style.backgroundColor = "#4dabff";
  button2.style.backgroundColor = "#fff";
  button3.style.backgroundColor = "#fff";
  button4.style.backgroundColor = "#fff";
})

document.querySelector("#two").addEventListener("click",function()
{
  // document.querySelector('#two').classList.replace('two','three')
  document.querySelector('#three').classList.remove('three')
  button2.style.backgroundColor = "#4dabff";
  button1.style.backgroundColor = "#fff";
  button3.style.backgroundColor = "#fff";
  button4.style.backgroundColor = "#fff";
})
document.querySelector("#three").addEventListener("click",function()
{
  button3.style.backgroundColor = "#4dabff";
  button1.style.backgroundColors="#fff";
  button2.style.backgroundColors="#fff";
  button4.style.backgroundColors="#fff";
})
document.querySelector("#four").addEventListener("click",function()
{
  // document.querySelector('#four').classList.replace('four','three')
  document.querySelector('#three').classList.remove('three')
  button4.style.backgroundColor = "#4dabff";
  button1.style.backgroundColor = "#fff";
  button2.style.backgroundColor = "#fff";
  button3.style.backgroundColor = "#fff";
})


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


