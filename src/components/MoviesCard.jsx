import { Link } from "react-router-dom"
import styles from "./MoviesCard.module.css"
import { getMovieImg } from "../utils/getMovieImg"

export function MoviesCard({ movie }) {
    const imgURL = getMovieImg(movie.poster_path, 300)
    
    return (
        <li className={styles.moviesCard}>
            <Link to={"/movies/" + movie.id}>
                <img
                    width={230} height={345}
                    className={styles.moviesImage}
                    src={imgURL}
                    alt={movie.title}
                />
                <div>{movie.title}</div>
            </Link>
        </li>
    )
}