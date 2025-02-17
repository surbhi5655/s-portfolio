const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activelink = 0;

link.foreach((link,i) => {
    link.addEventListener('click', () => {
        if(activelink !=i){
            links[activelink].classList.remove('active');
            link.classList.add('active');
            sections[activelink].classList.remove('active');

            setTimeout(() => {
                activelink = i;
                sections[i].classList.add('active');
                
            },1000)
        }
    })git init
    
})

