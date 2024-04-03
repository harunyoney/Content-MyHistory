import { useState, useEffect } from "react"

const User = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dob: "",
    picture: "",
    city: "",
    cell: "",
  })

  const getUser = async () => {
    const res = await fetch("https://randomuser.me/api/")
    const data = await res.json()
    setUserData(data.results[0])
  }

  //? componentDidMount + componentWillUnmount
  useEffect(() => {
    //* bu kısım ilk render sonrasi bir kere calisir.
    const timerID = setInterval(getUser, 5000)
    getUser()

    //? componentWillUnmount
    return () => {
      //?* bu kısım da component DOM'Dan kaldırıldıgında bir kere calirsir.
      console.log("Timer iptal edildi.")
      clearInterval(timerID)
    }
  }, []) //? depedency array

  return (
    <div className="">
      <img className="rounded-circle m-4" src={userData.picture.large} alt="" />
      <p>Hi, My Name is</p>
      <h2>{userData.name.first + " " + userData.name.last}</h2>
      <h4>{userData.email}</h4>
      <h5>{userData.dob.date}</h5>
      <h4>{userData.city}</h4>
      <h6>{userData.cell}</h6>

      <button className="btn btn-warning" onClick={getUser}>
        new user
      </button>
    </div>
  )
}

export default User
