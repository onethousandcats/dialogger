import { Pencil } from "lucide-react";
import Row from "./Row";
import { useState } from "react";

export default () => {
    const [name, setName] = useState('new_dialogue');

    const [index, setindex] = useState(0);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <Row><input value={name} onChange={handleNameChange} /><Pencil /></Row>
            <div className="dialogger">
                <Row>
                    <label>{ index + 1 }</label>
                    <input className="line" value={'start dialogue entry'} />
                </Row>
            </div>
        </div>
    );
}