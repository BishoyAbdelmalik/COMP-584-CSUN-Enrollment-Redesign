import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const GECategory = ({ classes }) => {
  return (
    <ListGroup variant="flush">
      {classes.map((course, index) => (
        <ListGroup.Item key={index}>
          <Link to={"/class/" + course.id.toUpperCase()}>
            {course.id.toUpperCase()}-{course.name}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
