import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footerContainer">
                <div>
                    <h1>Nossas Redes</h1>
                    <div className='social'>
                        <a href="https://www.instagram.com/marvel/" target='_blank'><img src="/social/instagram.svg" alt="" /></a>
                        <a href="https://x.com/Marvel?" target='_blank'><img src="/social/twitter.svg" alt="" /></a>
                        <a href="https://www.youtube.com/@marvelbr" target='_blank'><img src="/social/youtube.svg" alt="" /></a>
                        
                    </div>
                </div>
                <div className='developer'>
                    <h1>developed by <a href="https://github.com/eumatheusvieira" target='_blank'>Matheus Rocha</a></h1>
                </div>
            </div>
        </>
    )
}