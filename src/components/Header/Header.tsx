import styles from "./header.module.scss"
import { Movie } from '../../types/CommonTypes'


function Header({popularMovie, IMAGE_URL_API}:{popularMovie:Movie,      IMAGE_URL_API:string}) 
{
  return (
    <header>
        {popularMovie && <div className={styles.background_image} style={{backgroundImage:`url(${IMAGE_URL_API}/${popularMovie.backdrop_path})`}}>
                <div className={styles.content}>
                    <p className={styles.title}>{popularMovie.title}</p>
                    <p className={styles.overview}>{popularMovie.overview}</p>
                </div>
            </div>}

    </header>
  )
}

export default Header