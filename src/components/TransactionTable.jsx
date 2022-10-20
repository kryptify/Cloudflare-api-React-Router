import {Table, Container} from 'react-bootstrap'

const TransactionTable = (props) => {
    const txs = JSON.parse(props.txs);
    console.log(txs)
    return (
        <Container fluid="md">
            <h3>{`Block  #${Number(txs[0].blockNumber)}`}</h3>
            <Table className="rounded bg-white wrapped-table">
                <thead>
                    <tr>
                        <th>Transaction hash</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        txs.map(tx => {
                            return (
                                <tr key={tx.hash}>
                                    <td>{tx.hash}</td>
                                    <td>{tx.from}</td>
                                    <td>{tx.to}</td>
                                </tr>
                            )
                        })
                    }            
                </tbody>
            </Table>
        </Container>
        
    )
}

export default TransactionTable;