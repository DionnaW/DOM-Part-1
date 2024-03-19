// Menu data structure: provided from assignment
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//iterate over menuLinks array and for each 'link' object
// for (var i = 0; i < menuLinks.length; i++) {
    // var link = menuLinks[i];                   
    
// create an <a> element
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

//Part 2 of Lab

//cache 'sub-menu to variable names to subMenuEl
const subMenuEl = document.getElementById('sub-menu');
console.log(subMenuEl);
// 
//changing 'sub-menu height b.ground color, css property
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = '#3da4ab';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';



//cache all <a> elements in the subMenuEl in a var named topMenuLinks
const topMenuLinks = topMenuEl.querySelectorAll('a');

//modifications for submenu
// const topMenuEl = document.querySelector('#topMenu');
// const subMenuEl = topMenuEl.querySelector('#sub-menu');

//attach 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();

//first interactions for top menu
  if (evt.target === topMenuEl) {  //argument 1
    console.log('not a link')
  } else {
    console.log(evt.target);
  }

  const clicked = evt.target;              //argument 2
  clicked.classList.toggle('active');

  topMenuLinks.forEach(link => {
    if (link !== evt.target) {             //argument 3
      link.classList.remove('active')
    }
  })
});

function subMenu(subMenuLinks) {
  subMenuEl.innerHTML = '';
  subMenuLinks.forEach((link) => {
    const subMenuAnchor = document.createElement('a');
    subMenuAnchor.setAttribute('href', link.href);
    subMenuAnchor.textContent = link.text;
    subMenuEl.appendChild(subMenuAnchor);
  });
}
topMenuEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;

  const clickedLink = menuLinks.find(
    (link) => link.text === e.target.textContent
  );
  topMenuLinks.forEach((link) => link.classList.remove('active'));
  e.target.classList.toggle('active');

  if (clickedLink && clickedLink.subLinks) {
    subMenu(clickedLink.subLinks);

    subMenuEl.style.top = e.target.classList.contains('active') ? '100%' : '0';
  } else {
    subMenuEl.style.top = '0';
  }
});