// Menu data structure: provided from assignment
var menuLinks = [
    { text: 'ABOUT', href: '/about' },
    { text: 'CATALOG', href: '/catalog' },
    { text: 'ORDERS', href: '/orders' },
    { text: 'ACCOUNT', href: '/account' },
  ];

//iterate over menuLinks array and for each 'link' object
// for (var i = 0; i < menuLinks.length; i++) {
    // var link = menuLinks[i];
    
//create an <a> element
// var aEl = document.createElement('a');

//add href attribute w/it's value of the href property of the 'link' object
// aEl.href = link.href;

//set new element content to the value of the text property of the 'link' object
// aEl.textContent = link.text;

//append new element to the topMenuEl
// document.body.appendChild(aEl);
// }


//cache <main> element to mainEl
let mainEl = document.querySelector('main');
console.log(mainEl);

//add name, change b.ground color, & position to flex ctr
mainEl.style.backgroundColor = '#4a4e4d';
mainEl.innerHTML = "<h1> DOM Manipulation </h1>";
mainEl.style.textAlign = "center";
mainEl.classList.add("flex-ctr");

//cache <nav id ="top-menu"> element to topMenuEl
const topMenuEl = document.getElementById('top-menu');  //had to use getElementById; wouldn't wrk w/querySelect
console.log(topMenuEl);

//change height, b.ground color, & flex-around
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = '#0e9aa7';
topMenuEl.classList.add('flex-around');

//iterate over menuLinks array and for each 'link' object
for (var i = 0; i < menuLinks.length; i++) {
    var link = menuLinks[i];
    
//create an <a> element
var aEl = document.createElement('a');

//add href attribute w/it's value of the href property of the 'link' object
aEl.href = link.href;

//set new element content to the value of the text property of the 'link' object
aEl.textContent = link.text;

//append new element to the topMenuEl
topMenuEl.prepend(aEl);  //had to google/append put the array to the side of pg/'PREPEND' puts at top
}







