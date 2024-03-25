import Name from "./Name"
 const Cat=({img,color="gray",name,eye})=>{
    return(
        <div>
            <Name name={name} />
            <img src={img} alt="s" />
            <h3 style={{backgroundColor:color}}>color:{color}</h3>
            <p>This Cat Have Blue Eyed? <button>{eye?"yes":"no"}</button></p>

            <hr />
        </div>
    )

}
export default Cat


