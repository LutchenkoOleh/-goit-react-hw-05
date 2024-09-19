
import { useState, useEffect } from "react"
import { getMovieReviews } from "../../movies-api";
import { useParams } from "react-router-dom";



export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
      } catch (err) {
        setError('Failed to fetch movie reviews');
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (<ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </div>
  );
}