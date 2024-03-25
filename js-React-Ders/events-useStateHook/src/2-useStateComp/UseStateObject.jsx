import { useState } from "react"

const UseStateObject = () => {
  //? State tanımlamaları
  //   const [ad, setAd] = useState("Mehmet")
  //   const [soyad, setSoyad] = useState("Yılmaz")
  //   const [meslek, setMeslek] = useState("Tester")
  //   const [salary, setSalary] = useState(50000)

  //   let toggle = true
  const [kisi, setKisi] = useState({
    ad: "Mehmet",
    soyad: "Yılmaz",
    meslek: "Tester",
    salary: 50000,
    mood: "Happy",
  })

  const [toggle, setToggle] = useState(true)

  //   const adDegistir = () => {
  //     setAd("Ahmet")
  //   }

  console.log(kisi)

  const handleMood = () => {
    setKisi({ ...kisi, mood: toggle ? "Sad" : "Happy" })
    setToggle(!toggle)
    // toggle = !toggle
  }

  console.log(toggle)
  return (
    <>
      <h1>UseState Object Example</h1>

      <h2>AD:{kisi.ad}</h2>
      <h2>SOYAD:{kisi.soyad}</h2>
      <h2>MESLEK:{kisi.meslek}</h2>
      <h2>MAAS:{kisi.salary}</h2>
      <h3>Mood:{kisi.mood} </h3>

      <button onClick={() => setKisi({ ...kisi, ad: "Ahmet" })}>
        ad degistir
      </button>
      <button onClick={() => setKisi({ ...kisi, soyad: "Ozturk" })}>
        soyad degistir
      </button>
      <button onClick={() => setKisi({ ...kisi, meslek: "Developer" })}>
        meslek degistir
      </button>
      <button onClick={() => setKisi({ ...kisi, salary: kisi.salary + 5000 })}>
        maaas artir
      </button>
      <button onClick={() => setKisi({ ...kisi, salary: kisi.salary - 1000 })}>
        maaas azalt
      </button>

      <button onClick={handleMood}>Happy/Sad</button>
    </>
  )
}

export default UseStateObject
