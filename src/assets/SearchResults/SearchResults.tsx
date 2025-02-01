import { useLocation } from "react-router-dom"
import md5 from 'md5'
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import Navbar from "../../components/Navbar";

export default function Search() {
    const publicKey = import.meta.env.VITE_PUBLICKEY
    const privateKey = import.meta.env.VITE_PRIVATEKEY
    const time = Number(new Date());
    const hash = md5(time + privateKey + publicKey)
    const [ comics, setComics ] = useState<{ id: number; title: string; thumbnail: { path: string; extension: string }; urls: { url: string }[] }[]>([])
    const [ loading, setLoading] = useState(true)


    useEffect(() => {
        getComics()
      }, [])
    
      const getComics = () => {
        axios({
          method: 'get',
          url: 'http://gateway.marvel.com/v1/public/comics?',
          params: {
            ts: time,
            apikey: publicKey,
            hash: hash,
          }
        }).then(response => {
            setLoading(false)
          setComics(response.data.data.results)
        })
      }
    const location = useLocation()
    const searchItem = location.state
    console.log(searchItem)

    const searchValue = comics.filter((comic) => comic.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()))
    return (
        <>
            {loading ? <Loader /> : 
                    <div>
                    <Navbar />
                    <h1 className='title'>Resultado para pesquisa {searchItem}</h1>
                    <div className='comicsContainer'>
                        <div className='comics'>
                        {searchValue.length > 0 ? (
                            searchValue.map((comic) =>
                                <div key={comic.id} className='comicCard'>
                                    <a href={`http://marvel.com/comics/issue/${comic.id}`} target='_blank' className='link'>
                                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
                                        <div>
                                            <h2>{comic.title}</h2>
                                        </div>
                                    </a>
                                </div>
                            )
                        ) : (
                            <p>No results found for "{searchItem}".</p>
                        )}
                        </div>
                    </div>
            </div>}
        </>
    )
}