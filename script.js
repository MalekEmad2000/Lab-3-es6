
const navButtons=document.querySelectorAll(".menu-items button");
const menuContainer=document.querySelector(".menu-container");


navButtons.forEach(button=>{
button.addEventListener('click',function(event){
 fetchSelectedCategory(this.textContent);
})
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
    items.forEach(element => {
        menuItem=`
    <div class="menu-item">
    <img src="${element.image_url}" alt="">
    <h3>${element.title}</h3>
    <p>${element.title}</p>
    <h4>${element.publisher}</h4>
    </div>`
    menu.innerHTML+=menuItem;

    });
    
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