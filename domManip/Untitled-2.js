// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
//my code
const para = document.createElement('p');
para.textContent="Hey i'm red!"
para.style.color = 'red';
container.appendChild(para);

const head3 = document.createElement('h3');
head3.style.color = 'blue';
head3.textContent = "I'm a blue h3";
container.appendChild(head3)

const newdiv = document.createElement('div')
newdiv.classList.add('newdiv');
newdiv.style.cssText = "border: solid black"
newdiv.style.backgroundColor = 'pink'
container.appendChild(newdiv)


const head1 = document.createElement('h1')
head1.classList.add('head1')
head1.textContent = "I'm in a div"
newdiv.appendChild(head1)

const para1 = document.createElement('p')
para1.classList.add('para1');
para1.textContent = 'ME TOO!'
newdiv.appendChild(para1);



