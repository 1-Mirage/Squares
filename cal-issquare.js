const first = document.getElementById("firstside");
const second = document.getElementById("secondside");
const calculate = document.getElementById("calculate");
const output = document.getElementById("output-answer");
const third = document.getElementById("thirdside");
const fourth = document.getElementById("fourthside");

function reloadpage()
{
  location.reload();
}
function calcarea(e) 
{
  e.preventDefault();
  const firstvalue = Number(first.value);
  const secondvalue = Number(second.value);
  const thirdvalue = Number(third.value);
  const fourthvalue=Number(fourth.value);
  if(firstvalue<=0||secondvalue<=0||thirdvalue<=0||fourthvalue<=0)
  {
    reloadpage();
    alert("Enter positive value");
    
  }

  else if (firstvalue===secondvalue&&thirdvalue===fourthvalue&&firstvalue===fourthvalue) 
  {
    output.innerText = `Its a Square`;
  } else
   {
    output.innerText = "Not a Square";
  }
}

calculate.addEventListener("submit", calcarea);
