const navi=document.querySelector('.nav-toggle');
const naviLinks=document.querySelectorAll(".nav__link")


navi.addEventListener('click',()=>{
    document.body.classList.toggle('newnav');
});

naviLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('newnav');
    })
});