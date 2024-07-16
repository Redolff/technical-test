import { CAT_ENDPOINT_FACT } from "./constants"

export const getRamdomFact = async() => {
    try{
        const response = await fetch(CAT_ENDPOINT_FACT)
        const data = await response.json()
        const { fact } = data
        return fact
    }
    catch(error){
        console.log("Data error: "+ error)
    }
}