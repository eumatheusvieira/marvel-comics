import Navbar from '../../components/Navbar'
import SwiperComponent from '../../components/Swiper.tsx';
import './Home.css';
const secret_key = import.meta.env.VITE_APIKEY

export default function Home() {
  console.log(secret_key)
  return (
    <>
      
      <Navbar />
      <SwiperComponent />

      <h1 className='title'>Mais populares</h1>
    </>
  )
}


