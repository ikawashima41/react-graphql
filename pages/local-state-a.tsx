import { VFC } from "react"
import { LocalStateA } from "../components/LocalStateA"
import { Layout } from "../components/Layout"

const LocalStatePageA: VFC = () => {

    return (
        <Layout title="Local state A">
            <LocalStateA />
        </Layout>
    )
}
export default LocalStatePageA