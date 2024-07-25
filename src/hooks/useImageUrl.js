import { useEffect, useState } from "react"
import { CAT_IMAGE_URL } from "../services/constants"

export const useImageUrl = ({ fact }) => {
    const [imageUrl, setImageUrl] = useState()
    const [ error, setError ] = useState()

    useEffect(() => {
        const getImgUrl = async() => {
            if(fact === '') {
                setError('Fact is not valid')
                return;
            }

            try{
                const firstWord = fact.split(' ')[0] // Primera palabra del Hecho aleatorio
                const response = await fetch(`${CAT_IMAGE_URL}/${firstWord}`)

                if(!response.ok){
                    throw new Error(`Error fetching image: ${response.statusText}`)
                }

                const { url } = response
                setImageUrl(url)
                setError(null)  
            }
            catch(e){
                setError('Error fetching the image url')
            }
        }
        getImgUrl()
    }, [fact])

    return { imageUrl, error }
}