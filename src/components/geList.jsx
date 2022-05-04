import { Accordion} from "react-bootstrap";
import { GESection } from "./geSection";

const GEList = ({ ges }) => {
    console.log(ges);
    
    return (
        <Accordion>
            {ges.map((element, index) => (
                <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>{element.name}</Accordion.Header>
                    <Accordion.Body>
                        <GESection classes={element.courses}/>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
export default GEList;
