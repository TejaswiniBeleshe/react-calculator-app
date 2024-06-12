import React from "react";
import styles from "./ButtonStyle.module.css";

function ButtonsComponent({handle}) {
  return (
    <div className="buttons">
      <div className="row">
        <div className="col col-3 mb-2" key='7'>
          <div><button  className={styles.btn}   value='7' onClick={(e)=>handle(e)}>7</button></div>
        </div>
        <div className="col col-3 mb-2"  key='8'>
          <div><button  className={styles.btn} value='8' onClick={(e)=>handle(e)}>8</button></div>
        </div>
        <div className="col col-3 mb-2" key='9'>
          <div ><button  className={styles.btn}  value='9' onClick={(e)=>handle(e)}>9</button></div>
        </div>
        <div className="col col-3 mb-2" key='DEL'>
          <div><button  className={`${styles.btn} ${styles.delete}`}  value='DEL' onClick={(e)=>handle(e)}>DEL</button></div>
        </div>
        <div className="col col-3 mb-2" key='4'>
          <div><button className={styles.btn}  value='4' onClick={(e)=>handle(e)}>4</button></div>
        </div>
        <div className="col col-3 mb-2"  key='5'>
          <div ><button className={styles.btn} value='5' onClick={(e)=>handle(e)}>5</button></div>
        </div>
        <div className="col col-3 mb-2" key='6'>
          <div><button className={styles.btn}  value='6' onClick={(e)=>handle(e)}>6</button></div>
        </div>
        <div className="col col-3 mb-2"  key='+'>
          <div><button className={styles.btn} value='+' onClick={(e)=>handle(e)}>+</button></div>
        </div>
        <div className="col col-3 mb-2" key='1'>
          <div ><button className={styles.btn}  value='1' onClick={(e)=>handle(e)}>1</button></div>
        </div>
        <div className="col col-3 mb-2"  key='2'>
          <div><button className={styles.btn} value='2' onClick={(e)=>handle(e)}>2</button></div>
        </div>
        <div className="col col-3 mb-2"  key='3'>
          <div><button className={styles.btn} value='3' onClick={(e)=>handle(e)}>3</button></div>
        </div>
        <div className="col col-3 mb-2" key='-'>
          <div >< button  className={styles.btn}  value='-' onClick={(e)=>handle(e)}>-</button></div>
        </div>
        <div className="col col-3 mb-2"  key='.'>
          <div><button  className={styles.btn} value='.' onClick={(e)=>handle(e)}>.</button></div>
        </div>
        <div className="col col-3 mb-2" key='0'>
          <div ><button className={styles.btn}  value='0' onClick={(e)=>handle(e)}>0</button></div>
        </div>
        <div className="col col-3 mb-2" key='/'>
          <div ><button className={styles.btn}  value='/' onClick={(e)=>handle(e)}>/</button></div>
        </div>
        <div className="col col-3 mb-2"  key='*'>
          <div ><button className={styles.btn} value='*' onClick={(e)=>handle(e)}>x</button></div>
        </div>
        <div className="col col-6 mb-2">
          <div><button className={`${styles.btn} ${styles.reset}`} key='RESET' value='RESET' onClick={(e)=>handle(e)}>RESET</button></div>
        </div>
        <div className="col col-6 mb-2">
          <div><button  className={`${styles.btn} ${styles.equal}`} key='=' value='=' onClick={(e)=>handle(e)}>=</button></div>
        </div>
      </div>
    </div>
  );
}
export default ButtonsComponent;
