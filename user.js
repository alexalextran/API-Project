
const postsListEl = document.querySelector('.post-list')
const searchbarEl = document.querySelector('.post__search--container')
const id = localStorage.getItem("id")


async function onSearchChange(event){
    const id = event.target.value
    renderPosts(id)
    searchbarEl.innerHTML =  
   
    `
    <label class="post__search--label">
    Search by Id
  </label>
    
    <input class="searchbar" type="number" placeholder="${id}" onchange="onSearchChange(event)"></input>`
}


async function renderPosts(id){
  
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json()
   postsListEl.innerHTML = postsData.map(post => postHTML(post)).join('')
   searchbarEl.innerHTML =  
   
   `
   <label class="post__search--label">
   Search by Id
 </label>
   
   <input class="searchbar" type="number" placeholder="${id}" onchange="onSearchChange(event)"></input>`
}

function postHTML(post){
    return `
    <div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>
  `
}

renderPosts(id)