import './App.css'
import { useImageUrl } from "./hooks/useImageUrl"
import { useCatFact } from "./hooks/useCatFact"

export const App = () => {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl, error } = useImageUrl({ fact })

    const handleClick = () => {
        refreshFact()
    }

    return (
        <main>
            <h1> Fact - Prueba tecnica </h1>
            <button onClick={handleClick}> Get new fact </button>
            { fact 
                ? <p> {fact} </p>
                : <p> {error} </p>
            }
            {imageUrl &&
                <img 
                    src={imageUrl} 
                    alt="imagen de un gato saludando" 
                    width={300}
                    height={300}
                />
            }
        </main>
    )
}