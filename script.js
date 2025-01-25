
function openNav(){
    document.getElementById('open-side').style.width = '300px';
    document.getElementById('nav-wrapper').style.display = 'flex';
}
function closeNav(){
    document.getElementById('open-side').style.width = '0px';
    document.getElementById('nav-wrapper').style.display = 'none';
}

function buyNow(){
    document.getElementById('buy-now').style.color = 'black';
    document.getElementById('buy-now').style.backgroundColor = 'transparent';
    document.getElementById('view-more').style.color = 'white';
    document.getElementById('view-more').style.backgroundColor = 'tomato';
}
function viewMore(){
    document.getElementById('buy-now').style.color = 'white';
    document.getElementById('buy-now').style.backgroundColor = 'tomato';
    document.getElementById('view-more').style.color = 'black';
    document.getElementById('view-more').style.backgroundColor = 'transparent';
}