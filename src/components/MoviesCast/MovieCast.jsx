import { useState, useEffect } from "react";
import { getMovieCast } from "../../movies-api";
import { useParams } from "react-router-dom";


export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const cast = await getMovieCast(movieId);
        setCast(cast);
      } catch (err) {
        setError('Failed to fetch movie cast');
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
}