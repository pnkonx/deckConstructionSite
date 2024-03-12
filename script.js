const liElements = document.querySelectorAll(".navigation ul li");

liElements.forEach(liElement => {
    liElement.addEventListener('click', () => {
     document.querySelector('.active')?.classList.remove('active');
        
       liElement.classList.add('active');
       
        

       
        

    })
})

