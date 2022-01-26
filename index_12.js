console.log('project 12')
let input = document.getElementById('in')
let btn = document.getElementById('btns')
// let yr = document.getElementById('yr')
// let my = document.getElementById('my')
let dy = document.getElementById('dy')
let hy = document.getElementById('hy')
let miny = document.getElementById('miny')
let sy = document.getElementById('sy')
let cons = document.getElementById('cons')
let con = document.getElementById('con');
let cnd = document.getElementById('cnd');
let arr = document.getElementById('arr');

con.style.display = 'none';
cnd.style.display = 'none';

// let currentDate = new Date();



btn.addEventListener('click',()=>{

   cons.style.display = 'none';
   con.style.display = 'flex';
   cnd.style.display = 'block';

   // let currentDate = new Date();
   // currentDate.setTime(1645813800000);
   // currentDate.setHours(0,0,0);
   // let currentDate3 = new Date(2022 , 01 , 26 , 00 ,00 ,00);
   // console.log(currentDate3.getTime())
   // console.log(currentDate.toLocaleTimeString())
   // console.log(new Date(input.value).toLocaleTimeString())
   // console.log(new Date(input.value).getTime())
   // console.log(new Date(input.value).setHours(0, 0, 0))
   // console.log(new Date(2022-01-26-12-00-00).toLocaleTimeString("hi-IN"))
 
 function funct(){
   let tp = new Date(input.value);
   tp.setHours(0,0,0);


   let currentDate = new Date();

let tnow = currentDate.getTime()
let tprev = tp.getTime();
// let tprev = new Date(input.value).getTime();
 duet = tprev -tnow
// console.log(duet)


let oneDay = 24*60*60*1000;
   dyy =  Math.floor(duet/oneDay)
   dy.innerText = dyy;
  

   let oneHour = 60*60*1000;
  
   hyy = Math.floor((duet%oneDay)/oneHour)
   hy.innerText = hyy;

   let oneMin = 60*1000;
  
   myyy = Math.floor((duet%oneHour)/oneMin)
  
   miny.innerText = myyy;

   let oneSec = 1000;
  
   syyy = Math.floor((duet%oneMin)/oneSec)
   sy.innerText = syyy;

 }

 setInterval(() => {
    funct();
 }, 1000);


})

arr.addEventListener('click',()=>{
   cons.style.display = 'flex';
   con.style.display = 'none';
   cnd.style.display = 'none';

})