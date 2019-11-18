//Note_11 Array+Push,Pull,Splice

document.querySelector('button').onclick = () => { }
document.querySelector('button').onclick = myFunc;
function myFunc() {
}
/*
const a = [4, 4, 4, 12, 66, 19, 5, 1, 56];
const b = ['f', 'z', 'f', 'g', 't', 'y', 'u'];
console.log(a.length);
console.log(a.push(10));
console.log(a.length);
console.log(a);
let c = a.push(10, 877);
console.log(c);
console.log(a.push(10, 55, 44, 33, 88, 77));
console.log(a);

b.push('e', 'rr', 'yt');
console.log(b);
console.log(b.pop());
console.log(b);
//b.pop();//аналог 24str
console.log(b.pop());
console.log(b);

//удалить элемент внутри массива
delete a[3];
console.log(a);
a.splice(3, 4, 'hi');
console.log(a);

*/
let inp1 = document.querySelector('.inp1');
let out1 = document.querySelector('#out1');
let but1 = document.querySelector('.but1');

//let inp2 = document.querySelector('.inp2');
//let but2 = document.querySelector('.but2');

let a = [];
/*
but1.onclick = () => {
    let temp1 = inp1.value;
    a.push = temp1;
    console.log(temp1);
    console.log(a);
    let an = a;
    //out1.innerHTML = temp1;
    out1.innerHTML = an;
}
//out1.innerHTML = a.length;
*/
//fork
//Task#2
const arr = [];
isInputEmpty = () => inp1.value.trim().length === 0;
but1.onclick = () => {
    isInputEmpty() ? alert('input is empty') : arr.push(inp1.value);

    out1.textContent = arr;
};


