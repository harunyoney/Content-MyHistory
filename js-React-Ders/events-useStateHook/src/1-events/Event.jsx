const Event = () => {
  let mesaj= "MESAJA"
  const handleTikla=(e)=>{
    console.log(e);
    alert("tikla")
  }
  function handleMesajDegistir(e) {
    console.log(mesaj);
    
    
  }

  const silme=()=>{
    console.log(mesaj+ "asd");
  }








  return (
    <div>

      <h1>Events</h1>
      <button onClick={handleTikla} onCanPlay={()=>{alert("enter")}}>Tıkla</button>

      <button onClick={(e)=>{silme(silme)}}>Silme</button>
    <button onClick={()=>{handleMesajDegistir()}}>değiştir</button>



    </div>
  )
}

export default Event
