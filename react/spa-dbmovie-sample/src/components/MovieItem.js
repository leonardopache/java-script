import { Link } from "react-router-dom";

export const MovieItem = ({ id, title }) => (
    <>
    {/* {console.log(title)}; */}
    <li>
        <Link to={`movie/${id}`}> { title } </Link>
    </li>
    </>
);