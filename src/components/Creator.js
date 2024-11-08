import { Pencil } from "lucide-react";
import Row from "./Row";
import { useState } from "react";
import { useStore } from "@nanostores/react";
import { $entries } from "../stores/entries";
import { $name, defaultName } from "../stores/name";

export default () => {
    const entries = useStore($entries);
    const name = useStore($name);

    const placeholderText = 'start dialogue entry';

    const [entry, setEntry] = useState(placeholderText);
    const [index, setIndex] = useState(0);

    const handleNameChange = (e) => {
        $name.set(e.target.value === '' ? defaultName : e.target.value);
    }

    const handleEntryChange = (e) => {
        setEntry(e.target.value);
    }

    const handleFocus = (e, text, setter) => {
        if (e.target.value === text) {
            setter('');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            $entries.setKey(index, e.target.value);
            setEntry('');
            setIndex(index + 1);
        }
    }

    return (
        <>
            <Row><input value={name} onFocus={(e) => handleFocus(e, defaultName, $name.set)} onChange={handleNameChange} /><Pencil /></Row>
            <div className="fader">
                <div className="dialogger">
                    { Object.entries(entries).map(([key, value]) => (
                        <Row>
                            <label>{ parseInt(key) + 1 }</label>
                            <label>{ value }</label>
                        </Row>
                    ))}
                    <Row className="test">
                        <label>{ index + 1 }</label>
                        <input onKeyDown={handleKeyDown} onFocus={(e) => handleFocus(e, placeholderText, setEntry)} onChange={handleEntryChange} className="line" value={entry} />
                    </Row>
                </div>        
            </div>
        </>
    );
}