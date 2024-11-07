import { useStore } from "@nanostores/react"
import { $page } from "../stores/page"
import { navigationMap } from "../utilities/navMap";

export default () => {
    const page = useStore($page);

    return (
        <div className="app-body">
            { navigationMap[page] }
        </div>
    )
}