const container = document.querySelector('#container');
//creating 16 * 16 div
for (let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.style.minWidth = '35px';
    console.log(div.style.minWidth);
    div.style.minHeight = '35px';
    div.classList.add('divs');
    // div.style.backgroundColor = 'red';
    container.appendChild(div);
}


const btn = document.querySelector('button');

btn.addEventListener('click', ()=> {
    const numGrids = prompt("please enter the number of grids you want");
    const sqrtNumGrids = numGrids * numGrids;

    divs.forEach((item)=>{container.removeChild(item)});
    // divs.length = 0;
    // console.log(divs.length);

    for (let i = 0; i < sqrtNumGrids; i++){
        const div = document.createElement('div');
        // div.textContent = 'hi';
        let minwidth = 560/+numGrids;
        let hei = 560/+numGrids;
        div.style.minWidth = `${minwidth}px`;
        div.style.minHeight = `${hei}px`;
        div.classList.add('divs');
        // div.style.backgroundColor = 'red';
        container.appendChild(div);
    }
    let divs2 = document.querySelectorAll('.divs');
    console.log(divs);
    divs2.forEach((item)=>{ item.addEventListener('mouseover', ()=>{ item.style.backgroundColor='red'; })
    })
    divs = divs2;
    
})

let divs = document.querySelectorAll('.divs');
console.log(divs);

divs.forEach((item)=>{ item.addEventListener('mouseover', ()=>{ item.style.backgroundColor='red'; })
})