
const navContainer=document.querySelector(".menu-items");
const menuContainer=document.querySelector(".menu-container");

// used event delegation
navContainer.addEventListener('click',(event)=>{

   if(event.target.tagName === 'BUTTON') {
     fetchSelectedCategory(event.target.innerText);
  }
});



async function fetchSelectedCategory(selectedCategory) {
    
  try{
    
    showLoading();
    const response= await fetch("https://forkify-api.herokuapp.com/api/search?q="+selectedCategory);
    const data=await response.json();
    hideLoading();
    loadMenu(data.recipes);
    console.log(data.recipes);
    

  }catch(e){
      
    console.log(e);
  }
}

function loadMenu(items){

    const menu =document.querySelector(".menu-container");
    menu.innerHTML="";
    let menuContent="";
    items.forEach(element => {
        menuItem=`
    <div class="menu-item">
    <img src="${element.image_url}" alt="">
    <h3>${element.title}</h3>
    <p>${element.title}</p>
    <h4>${element.publisher}</h4>
    </div>`
    menuContent+=menuItem;

    });
    menu.innerHTML=menuContent;
    
}

const loadingElement = document.createElement('div');
loadingElement.className = 'loading';
loadingElement.innerHTML = `
    <div class="loader"></div>
    <p>Loading delicious items...</p>
`;
function showLoading() {
    menuContainer.innerHTML = '';
    menuContainer.appendChild(loadingElement);
}
function hideLoading() {
    const loader = document.querySelector('.loading');
    if (loader) loader.remove();
}

fetchSelectedCategory("pizza");