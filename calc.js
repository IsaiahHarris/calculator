var answer ;

function calculator(type, num1, num2){
  if (type == "add"){
    answer = num1 + num2;
  }
  else if (type == "subtract"){
    answer = num1 - num2;
  }
  else if (type == "divide"){
    answer = num1 / num2;
  }
  else if (type == "multiplication"){
    answer = num1 * num2;
  }
  else{
    console.log("i love math");
  }
  console.log(answer);
}
calculator(add, 1, 3)