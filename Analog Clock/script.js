const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

setInterval( () => {
    const d = new Date();
// console.log(d);

htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
// console.log(htime,mtime,stime);

hrotation = 30*htime + mtime/2;  // 360/12 = 30
mrotation = 6*mtime; // 360/60 = 6
srotation = 6*stime; // 360/60 = 6

hour.style.transform = `rotate(${hrotation}deg)`;
minute.style.transform = `rotate(${mrotation}deg)`;
second.style.transform = `rotate(${srotation}deg)`;

}, 1000);
