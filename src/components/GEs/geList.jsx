import { Accordion} from "react-bootstrap";
import { GECategory } from "./geCategory";

const GEList = ({ ges }) => {
    
    return (
        <Accordion>
            {ges.map((element, index) => (
                <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>{element.name}</Accordion.Header>
                    <Accordion.Body>
                        <GECategory classes={element.courses}/>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
export default GEList;
