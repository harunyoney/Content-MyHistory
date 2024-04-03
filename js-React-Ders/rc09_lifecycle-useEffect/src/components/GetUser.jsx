
const GetUser = () => {
    const user = async()=>{
        const res=await fetch("https://randomuser.me/api/")
        const data= await res.json()
        console.log(data.results[0]);

    }


user()

  return (
    <div>
        <img src="" alt="" />
        <p>Hi my name is </p>
        <h2>TwQ Komutan</h2>
        <h4>email</h4>
        <h4>date</h4>
        <h4>city</h4>

        <button className="btn"></button>      
        </div>
  )
}

export default GetUser