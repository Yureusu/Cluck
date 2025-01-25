
const mobileScreen = window.matchMedia('(max-width: 480px)');
const page = document.querySelector('body');
const sideNav = document.getElementById('open-side');
const navWrapper = document.getElementById('nav-wrapper');

if (mobileScreen.matches){
    function openNav(){
        sideNav.style.width = '150px';
        navWrapper.style.display = 'flex';
    }
    function closeNav(){
        sideNav.style.width = '0px';
        navWrapper.style.display = 'none';
    }
}
else{
    function openNav(){
        sideNav.style.width = '300px';
        navWrapper.style.display = 'flex';
        page.style.marginLeft = '300px';
    }
    function closeNav(){
        sideNav.style.width = '0px';
        navWrapper.style.display = 'none';
        page.style.marginLeft = '0px';
    }
}

function buyNow(){
    document.getElementById('buy-now').style.color = 'black';
    document.getElementById('buy-now').style.backgroundColor = '#FADA7A';
    document.getElementById('view-more').style.color = 'white';
    document.getElementById('view-more').style.backgroundColor = 'tomato';
}
function viewMore(){
    document.getElementById('buy-now').style.color = 'white';
    document.getElementById('buy-now').style.backgroundColor = 'tomato';
    document.getElementById('view-more').style.color = 'black';
    document.getElementById('view-more').style.backgroundColor = '#FADA7A';
}