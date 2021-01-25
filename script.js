const scrollBtn = document.querySelectorAll('a[href^="#"]');
const btnHire = document.querySelectorAll('[data-hire]');
const hire = document.querySelector('.hire');
const close = document.querySelectorAll('.close');
const btnProject = document.querySelectorAll('[data-project]');
const project = document.querySelector('.project');
const container = document.querySelector('.container');

const filter = document.querySelectorAll('[data-filter]');
const cat = document.querySelectorAll('[data-cat]');



scrollBtn.forEach(function(item) { 
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const id = item.hasAttribute('href') ? item.getAttribute('href') : 'body'

        document.querySelector(id).scrollIntoView ({
            behavior: "smooth",
            block: "start"
        });
    });
 });

btnHire.forEach(function(item) { 
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        hire.classList.add('active');
        container.classList.add('blur');
        
        
    });
    
 });


 cat.forEach(function(item) { 
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        project.classList.add('active');
        container.classList.add('blur');
    });
    
 });

 close.forEach(function(item) { 
    item.addEventListener('click', ()=>{
        hire.classList.remove('active');
        project.classList.remove('active');
        container.classList.remove('blur'); 
        
    });
    
 });



 





 
 


