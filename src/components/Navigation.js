import { $page } from "../stores/page"
import Circle from "./Circle"
import Row from "./Row"

export default () => {
    const setPage = (name) => $page.set(name);

    return (
        <div className="nav">
            <Row>
                <Circle /><h1>Dialogger</h1>
            </Row>
            <div className="options">
                <button onClick={() => setPage('new')}>New Dialogue</button>
                <button onClick={() => setPage('load')}>Load Dialogue</button>
                <button onClick={() => setPage('contribute')}>Contribute</button>
            </div>
        </div>
    )
}