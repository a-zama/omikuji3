'use strict'

{
    const box = document.getElementById('box');
    const p = document.getElementById('p');


    const reset = document.getElementById('reset');
    const btn = document.createElement('button');
    
    reset.appendChild(btn);
    btn.textContent = 'もう一回く';

    btn.addEventListener( 'click' , () => {
        document.getElementById('result').src ="image/omikuji.png";
        p.textContent = 'クリックして運試し';
        
    })

    box.addEventListener('click' , () => {
        // p.textContent = null;
        const n = Math.random();

        if (n < 0.1) {
            document.getElementById('result').src ="image/omikuji_daikichi.png";
            p.textContent = 'やったね！大吉！！';
        } else if (n < 0.2) {
            document.getElementById('result').src ="image/omikuji_chuukichi.png";
            p.textContent = 'いい感じ！';
        } else if (n < 0.4) {
            document.getElementById('result').src ="image/omikuji_syoukichi.png";
            p.textContent = 'ちょっとだけハッピー！';
        } else if (n < 0.6) {
            document.getElementById('result').src ="image/omikuji_kichi.png";
            p.textContent = 'まずまず！';
        } else if (n < 0.8) {
            document.getElementById('result').src ="image/omikuji_suekichi.png";
            p.textContent = '謙虚にね！';
        } else if (n < 0.9) {
            document.getElementById('result').src ="image/omikuji_kyou.png";
            p.textContent = '残念！もう一回引いちゃう？';
        } else {
            document.getElementById('result').src ="image/omikuji_daikyou.png";
            p.textContent = 'むしろレアかも？';
        }
      
    });
    
    
   


}