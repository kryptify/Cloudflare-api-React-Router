
import Meta from '../components/Meta'
import TransactionTable from '../components/TransactionTable'
import { useLocation } from 'react-router-dom'


const Transaction = () => {
    const { state } = useLocation();
    const { txs } = state || {}
    console.log(state)

    return (
        <div className="p-4">
        <Meta title="Transactions"/>
        {/* <Header head={pageTitle} description={pageDescription} /> */}
        {
            txs &&
        <TransactionTable txs={JSON.stringify(txs)} />
        }
        </div>
    )
}

export default Transaction