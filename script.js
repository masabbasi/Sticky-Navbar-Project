const $ = document;
const myVar = {
    header: $.querySelector('.header'),
    aMenu: $.querySelectorAll('.a-menu')
}

document.addEventListener('scroll',function(){
    if (document.documentElement.scrollTop > 0) {
        myVar.header.style.position='fixed'
        myVar.header.style.backgroundColor='black';
        myVar.aMenu.forEach(function(item){
        item.classList.remove('a-menu')
        item.classList.add('scroll')
        })
        }   else {
            myVar.header.style.position=''
            myVar.header.style.backgroundColor='white';
            myVar.aMenu.forEach(function(item){
                item.classList.remove('scroll')
                item.classList.add('a-menu')
                })
        }
})

