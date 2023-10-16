import { useEffect, useState } from "react"
import { instance } from '../axios/fetchInstance'
import { Movie } from "../types/CommonTypes"
import { ResponseItems } from "../types/CommonTypes"

function useFetchMoviesOnLoad(value:string) {
    const [data, setData] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const grabItems =async () => {
            const {data:items}:{data:ResponseItems} = await instance.get(value)
            const results = items.results
            console.log(results)
            setData(results)
            setIsLoading(false)    
        }
        grabItems()
        
        
    }, [])
    return {data, isLoading}
}

export default useFetchMoviesOnLoad