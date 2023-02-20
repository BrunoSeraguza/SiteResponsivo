
window.onload = function btnAbrir(){
    document.querySelector('.MenuMobile').addEventListener('click', ()=>{
        if(document.querySelector(".menu nav ul").style.display === 'flex')
        {
            document.querySelector(".menu nav ul").style.display = 'none';
        }else{
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    })
}