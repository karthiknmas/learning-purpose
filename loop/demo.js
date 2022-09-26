const tempDatas = ['Ajay', 'Data', 'Type', 'Const', 'Get'];
let j = tempDatas.length;
let text = '';
for (i = 0; i < j; i++) {
  text += tempDatas[i];
  // console.log(tempDatas[i]);
}
const dataSet = tempDatas.reduce((acc, data) => acc + data);
console.log(dataSet, 'reduce');
console.log(text);
document.getElementById('demo').innerHTML = text;

// Immediately Invoked Function Expression
const a = 10;

(function () {
  const a = 100;
  console.log(a);
})();
console.log(a);
function c() {
  let count = 0;
  document.getElementById('demo1').addEventListener('click', () => {
    console.log('Button clicked', ++count);
  });
}
c();
function x() {
  console.log('a');
}
x();

y = () => {
  console.log('b');
};
y();
(function () {
  console.log('c');
})();

setTimeout(function () {
  console.log('Timer');
}, 1000);

let start = new Date().getTime();
let end = start;

while (end < start + 5000) {
  end = new Date().getTime();
}
console.log('start');
// callback function

u = (name) => {
  return `Good morning ${name}`;
};
v = (name) => {
  return `Good night ${name}`;
};
l = (name, callback) => {
  const myName = 'Hareesh';
  console.log(`${callback(name)},This is: ${myName}`);
};
l('Kavin', u);
l('Kavi', v);
 
let global = 'hello world';

setGlobal=()=>{
  global = 'i am there';
}
// setGlobal(); 
console.log(global);


