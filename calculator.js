let screen=document.querySelector('#screen');
let output=document.createElement('h1');
output.classList.add('output');
output.textContent='0';
screen.appendChild(output);    
    function one(){
        if(output.textContent==='0'){output.textContent=''}
        output.textContent=output.textContent+'1';
        
    }
    function two(){
        if(output.textContent==='0'){output.textContent=''}
        output.textContent= output.textContent +'2';
        
    }
    function three(){
        if(output.textContent==='0'){output.textContent=''}
        output.textContent=output.textContent+'3';
    }
    function four(){
        if(output.textContent==='0'){output.textContent=''}
        output.textContent=output.textContent+'4';
        for (let i = 0; i < 3; i++) {
            array[i]='4';
        }
    }
    function five(){
        if(output.textContent==='0'){output.textContent=''}
        output.textContent=output.textContent+'5';
        
    }
    function six(){
        if(output.textContent==='0'){output.textContent=''}
        output.textContent=output.textContent+'6';
        
    }
    function seven(){
        if(output.textContent==='0'){output.textContent=''}
        output.textContent=output.textContent+'7';
        
    }
    function eight(){
        if(output.textContent==='0'){output.textContent=''}
        output.textContent=output.textContent+'8';
        
    }
    function nine(){
        if(output.textContent==='0'){output.textContent=''}
        output.textContent=output.textContent+'9';
        
    }
    function zero(){
        output.textContent=output.textContent+'0';

    }

function point(){
    output.textContent=output.textContent+'.';
}
function negative(){
    if(output.textContent==='0'){output.textContent=''}
    output.textContent=output.textContent+'-';
}
function AC(){
    output.textContent='0';
}

function equals(){
    try {
        output.textContent = eval(output.textContent);
    } catch (error) {
        output.textContent = 'Error';
    }
}

function plus(){
    if(output.textContent==='0'){output.textContent=''}
    output.textContent=output.textContent+'+';
}
function multiply(){
    if(output.textContent==='0'){output.textContent=''}
    output.textContent=output.textContent+'*';
}
function division(){
    if(output.textContent==='0'){output.textContent=''}
    output.textContent=output.textContent+'/';
}

function modulo(){
    if(output.textContent==='0'){output.textContent=''}
    output.textContent=output.textContent+'%';
}
function minus(){
    if(output.textContent==='0'){output.textContent=''}
    output.textContent=output.textContent+'-';
}