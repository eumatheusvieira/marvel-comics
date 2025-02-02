import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'
import SwiperComponent from '../../components/Swiper.tsx';
import './Home.css';
import axios from 'axios';
import md5 from 'md5'
import Loader from '../Loader/Loader.tsx';
import Footer from '../../components/Footer.tsx';
const publicKey = import.meta.env.VITE_PUBLICKEY
const privateKey = import.meta.env.VITE_PRIVATEKEY
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey)

export default function Home() {
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

  return (
    <>
      {loading ? <Loader /> : 
        <div>
          <Navbar />
          <SwiperComponent />

          <h1 className='title'>Mais populares</h1>
          <div className='comicsContainer'>
            <div className='comics'>
              {comics.map((comic) =>
                  <div key={comic.id} className='comicCard'>
                      <a href={`http://marvel.com/comics/issue/${comic.id}`} target='_blank' className='link'>
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
                        <div>
                          <h2>{comic.title}</h2>
                        </div>
                      </a>
                  </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      }
    </>
  )
}


