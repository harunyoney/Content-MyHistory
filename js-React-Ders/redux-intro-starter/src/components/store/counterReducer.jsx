const initialState={
    count:0
}


export const counterReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "ARTTIR":
            return ({count:state.count +1})
            
    
        default:
            break;
    }

}