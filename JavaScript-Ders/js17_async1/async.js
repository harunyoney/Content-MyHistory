

const getNews=async ()=>{
const BASE_URL="https://newsapi.org/v2/"
const API_KEY="d2dfb2d04fd74bfa947adc83ad5e5085"
const queryString="top-headlines?country=us"

const URL=`${BASE_URL}${queryString}&apiKey=${API_KEY}`

console.log(URL);
// const res =await fetch(URL)
// const data =await res.json()
// console.log(data);


try {
    const res =await fetch(URL)
    if(!res.ok){
        throw new Error(`${res.status}`)
    }
    
    const data =await res.json()
   
     displayNews(data.articles)
    
} catch (error) {
    console.log(error);
    }
}

const displayNews=(news)=>{
const newsArticle=document.querySelector("#news-article")

news.forEach(item => {

    console.log(item);
    

    newsArticle.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${item.urlToImage ||"https://picsum.photos/id/684/600/400" }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `
    
});


}









getNews()
