import React, { useState } from "react";
import styles from "./InputStyle.module.css";
import ButtonsComponent from "./Button";
function InputComponent() {
  //const [val,setVal] = useState('');
  const [input, setInput] = useState("0");
  
  function handler2(e){
    let a = ['+','-','*','/'];
    //console.log(e.target.textContent)
    let arr=Array.from(input);
    switch(e.target.value){
      case '=':
        let n = arr[arr.length-1];
        if(!a.includes(n)){
          setInput(eval(input));
        }else{
          alert('enter opearand before = ');
          //return;
        }
        return;
      case 'DEL':
        console.log(arr)
        arr.pop();
        setInput(arr.join(''));
        //console.log(arr)
        if(input.length==1) setInput('0')
        return;
      case 'RESET':
        setInput('0');
        return;
      default:
        if((input==='0' && e.target.value === '0') || (a.includes(input[input.length-2])) && (input[input.length-1] ==='0')){
          let str = Array.from(input);
          str[str.length-1] = e.target.value;
          let res = str.join('')
          setInput(res);
          return;
        }
        if((input==='0' && a.includes(e.target.value)) || (a.includes(input[input.length-1])) && a.includes(e.target.value)){
          setInput(pre=>pre);
          return;
        } 

        input == '0'?setInput(e.target.value):setInput(prev=>prev+e.target.value)
        //setInput()
    }
    // if(e.target.textContent === '='){
    //   let arr = Array.from(input);
    //   console.log(arr)
    //   let n = arr[arr.length-1];
    //   let a = ['+','-','*','/']
    //   //console.log(typeof n)
    //   // setInput(eval(input));
    //   if(!a.includes(n)){
    //     setInput(eval(input))
    //   }else{
    //     alert('enter operand before getting result')
    //   }   
    // }else{
    //   setInput(pre=>pre+e.target.textContent)
    //   console.log('hi')
    // }
  }
  return (
    <div className={styles.inputfld}>
   
      <input
        type="text"
        id={styles.ip}
        value={input}
        readOnly
        //onChange={(e) => setInput(val)}
      />
       <ButtonsComponent handle={handler2}/>
       {/* <br />
       <br /> */}
       {/* {input} */}
    </div>
  );
}
export default InputComponent;
