export const  displaycoin=(coins)=>{
    console.log(coins);
    const {price,change,iconUrl,name,symbol}=coins[0]
    const coinli=document.createElement("li")
    const ul=document.querySelector("ul")
    coinli.className="coin"
    ul.append(coinli)
    coinli.innerHTML=`
    <div class="remove-icon">
  <i class="fas fa-window-close"></i>
</div>
    <h2 class="coin-name">
    <sup>${symbol}</sup>
    <span>${name}</span>
    </h2>
    <div class="coin-temp">${Number(price).toFixed(4)}</div>
    <figure>
  <img class="coin-icon" src="${iconUrl}">
  <figcaption style="color:green">
    <i class="fa-solid fa-chart-line"></i>
    <span>${change}</span>
  </figcaption>
</figure>
    
    
    `
    


}