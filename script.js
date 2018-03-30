window.onload = function() {
  let $disp = $('#disp');
  let leftTerm = 0, rightTerm = null;
  let operator = null;

  $('button').on('click', function(event){
    const targetText = event.target.textContent;
    if("0" <= targetText && targetText <= "9"){
      if(operator == null){
        leftTerm = Number(leftTerm) * 10 + Number(targetText);
        $disp.text(leftTerm);
      }else{
        rightTerm = Number(rightTerm) * 10 + Number(targetText);
        $disp.text(rightTerm);
      }
    }else if(targetText === "AC"){
      leftTerm = 0;
      rightTerm = null;
      operator = null;
      $disp.text("0");
    }else if(targetText === "+/-"){
      if(operator == null){
        leftTerm = -Number(leftTerm);
        $disp.text(leftTerm);
      }else if(rightTerm != null){
        rightTerm = -rightTerm;
        $disp.text(rightTerm);
      }
    }else if(targetText === "%"){
      if(operator == null){
        leftTerm = Number(leftTerm) / 100;
        $disp.text(leftTerm);
      }else if(rightTerm != null){
        rightTerm /= 100;
        $disp.text(rightTerm);
      }
    }
    
    switch(targetText){
      case "+":
        if(rightTerm != null){
          leftTerm += rightTerm;
          rightTerm = null;
        }else{
          operator = "+";
        }
        break;
      case "-":
        if(rightTerm != null){
          leftTerm -= rightTerm;
          rightTerm = null;
        }else{
          operator = "-";
        }
        break;
      case "~":
        if(rightTerm != null){
          leftTerm *= rightTerm;
          rightTerm = null;
        }else{
          operator = "*";
        }
        break;
      case "€":
        if(rightTerm != null){
          leftTerm /= rightTerm;
          rightTerm = null;
        }else{
          operator = "/";
        }
        break;
      case "=":
        //(operate == null) NOP
        //(right == null) left op= left
        //(right != null) left op= right 
        if(operator != null && rightTerm == null){
          rightTerm = leftTerm;
        }
        leftTerm = eval(leftTerm + operator + rightTerm);
        $disp.text(leftTerm);
        break;        
    }
  });
  

}