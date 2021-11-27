const first = document.getElementById("side");

const calculate = document.getElementById("calculate");
const output = document.getElementById("output-answer");


function reloadpage()
{
  location.reload();
}
function calcarea(e) 
{
  e.preventDefault();
  const firstvalue = Number(first.value);
 
  if(firstvalue<0)
  {
    reloadpage();
    alert("Enter positive value");
    
  }
  else if (firstvalue>0)
  {
    
    output.innerText = `Area of a Square is ${firstvalue*firstvalue} units`;
  } else
   {
    output.innerText = "Enter valid side lengths ";
  }
}

calculate.addEventListener("submit", calcarea);
