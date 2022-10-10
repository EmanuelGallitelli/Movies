import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "../components/Spinner"
import { getMovieImg } from "../utils/getMovieImg"
import { get } from "../utils/httpClients"
import styles from "./MoviesDetails.module.css"

export function MoviesDetails() {

    const { movieId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)

   

    useEffect(() => {
        setIsLoading(true)

        get("/movie/" + movieId).then(data => {
            setMovie(data)
            setIsLoading(false)
        });
    }, [movieId])

    if (isLoading) {
        return <Spinner />
    }

    const imgURL = getMovieImg(movie.poster_path, 500)

    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imgURL} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title: </strong>{movie.title}</p>
                <p><strong>Description: </strong>{movie.overview}</p>
                <p>
                    <strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p><strong>Release Date: </strong>{movie.release_date.split("-").reverse().join("-")}</p>
                <p><ion-icon name="star-half-outline" /> {movie.vote_average.toString().slice(0, 3)}</p>
            </div>
        </div>
    )
}