import {displaycoin} from "./displayCoins";
export const getCoins = async(inputValue) => {
  const API_KEY = "coinranking63792a846ecd96746582f988c32e7843c5029f424193c602";
  const URL=`https://api.coinranking.com/v2/coins?search=${inputValue}`

  const options = {
    headers: {
      "Content-Type": "application/json",
      'x-access-token': API_KEY,
    },
  };
try {
    
    const res =await fetch(URL, options)
 
   const data =await res.json()
console.log(data);
   if (!data.status) {
    throw new error("bulunamadı")
}
   console.log();
    
   displaycoin(data.data.coins)

  


} catch (err) {
    console.log(err);
}
  
};
