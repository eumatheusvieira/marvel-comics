import './Loader.css'

export default function Loader() {
    return (
        <>
            <div className='loadingContainer'>
                <img src="/loading.svg" alt="" />
                <h1>Loading...</h1>
            </div>
        </>
    )
}