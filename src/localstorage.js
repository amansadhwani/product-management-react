export const saveState = (state)  =>{
    try{
        const s = JSON.stringify(state)
        localStorage.setItem('state',s)
    } catch(err){
        
    }
}