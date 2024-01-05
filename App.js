import React from 'react';
import './App.css';

function App() {
   let magA=()=>{
    let i = document.getElementById("i1").value;
    let j = document.getElementById("j1").value;
    let k = document.getElementById("k1").value;

    let mag = (Math.sqrt(((i**2)+(j**2)+(k**2))));
    console.log(mag);
   }

   let magB=()=>{
    let i = document.getElementById("i2").value;
    let j = document.getElementById("j2").value;
    let k = document.getElementById("k2").value;

    let mag = (Math.sqrt(((i**2)+(j**2)+(k**2))));
    console.log(mag);
   }

   let cross=()=>{
    let i1 = parseInt( document.getElementById("i1").value);
    let j1 = parseInt( document.getElementById("j1").value);
    let k1 = parseInt( document.getElementById("k1").value);

    let i2 = parseInt( document.getElementById("i2").value);
    let j2 = parseInt( document.getElementById("j2").value);
    let k2 = parseInt( document.getElementById("k2").value);

    const ic = i1*i2;
    const jc = j1*j2;
    const kc = k1*k2;

    const product = ic+jc+kc;

    console.log(product);

   }

   let add = ()=>{
    let i1 = parseInt( document.getElementById("i1").value);
    let j1 = parseInt( document.getElementById("j1").value);
    let k1 = parseInt( document.getElementById("k1").value);

    let i2 = parseInt( document.getElementById("i2").value);
    let j2 = parseInt( document.getElementById("j2").value);
    let k2 = parseInt( document.getElementById("k2").value);
   
    
    let i,j,k;

    i = i1+i2;
    j = j1+j2;
    k = k1+k2;
   let  vec = (i+"i ")+(j+"j ")+(k+"k ");
    console.log(vec)

   }
   let subtr = ()=>{
    let i1 = parseInt( document.getElementById("i1").value);
    let j1 = parseInt( document.getElementById("j1").value);
    let k1 = parseInt( document.getElementById("k1").value);

    let i2 = parseInt( document.getElementById("i2").value);
    let j2 = parseInt( document.getElementById("j2").value);
    let k2 = parseInt( document.getElementById("k2").value);
   
    let i,j,k;
    i = i1-i2;
    j = j1-j2;
    k = k1-k2;
    let vec = (i+"i ")+(j+"j ")+(k+"k ");
    console.log(vec)

   }

  return (
    <body>
      <header className='Header'>
    
      </header>
      <section className='sec1 sec'>
        <form name='f1' className='form'>

          <div className="cont">
            <label htmlFor="">Vector a :</label> <br />
            <div className="adiv">
              <div className="ijk"><input type="number" className='inputs' id='i1' />i</div>
              <div className="ijk"><input type="number" className='inputs' id='j1' />j</div>
              <div className="ijk"><input type="number" className='inputs' id='k1' />k</div>

            </div>
            </div>

            <div className="cont">
              <label htmlFor="">Vector b :</label> <br />
              <div className="adiv">
                <div className="ijk"><input type="number" className='inputs' id='i2' />i</div>
                <div className="ijk"><input type="number" className='inputs' id='j2' />j</div>
                <div className="ijk"><input type="number" className='inputs' id='k2' />k</div>
              </div>
            </div>
          
        </form>
        <div className="btncont">
          <div className="seperator">
            <button id='' className='btns'onClick={cross} >Dot Product</button>
            <button id='' className='btns'>Cross Product</button>
            <button id='' className='btns' onClick={magA} >Mag-A</button>
          </div>
          <div className="seperator">
            <button id='' className='btns'>Mag-B</button>
            <button id='' className='btns'onClick={add} >A+B</button>
            <button id='' className='btns' onClick={subtr}>A-B</button>
          </div>


         
        </div>
      </section>

      <footer>
      <p> Javascript</p>
      
      <p> © Devigned by 🖤 <a href="https://prathx.netlify.app" style={{color:"#6b6b6b"}}> Prathamesh karve!🤟🏻 </a></p>
    
    </footer>
    </body>
  );
}

export default App;
