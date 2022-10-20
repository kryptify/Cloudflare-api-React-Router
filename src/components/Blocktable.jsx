import {Table, Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blocktable = (props) => {
    const navigate = useNavigate();
    const timestamp2days = (timestamp) => {
        const second = Math.floor((new Date() - timestamp * 1000) / 1000)
        const days = Math.floor(second / 86400) ? `${Math.floor(second / 86400)} days ` : ''
        const hrs = Math.floor(second % 86400 / 3600) ? `${Math.floor(second % 86400 / 3600)} hrs ` : ''
        const mins = Math.floor(second % 3600 / 60) ? `${Math.floor(second % 3600 / 60)} mins ` : ''
        const seconds = `${second % 60} seconds `
        const date = new Date(timestamp * 1000);
        return `${days}${hrs}${mins}${seconds}ago (${date})`
    }
    console.log(props)
    const block = JSON.parse(props.block).result;
    return (
        <Container>
            <h3>{`Block  #${Number(block.number)}`}</h3>
            <Table className="rounded bg-white mt-2">
                <tbody>                
                    <tr>
                        <td>Block Height:</td>
                        <td>{Number(block.number)}
                            <Button className="btn-sm py-0 px-1 mx-2 bg-primary-opacity" onClick={()=>{navigate(`/block/${Number(block.number) - 1}`); navigate(0)}}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Button>
                            <Button className="btn-sm py-0 px-1 ml-2 bg-primary-opacity" onClick={()=>{navigate(`/block/${Number(block.number) + 1}`); navigate(0)}}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td><span className="badge p-2 rounded text-success bg-success-opacity "><FontAwesomeIcon icon={faCheckCircle} /> Finalized </span></td>
                    </tr>
                    <tr>
                        <td>Timestamp:</td>
                        <td>{timestamp2days(Number(block.timestamp))}</td>
                    </tr>
                    <tr>
                        <td>Transactions:</td>
                        <td>
                            <Button className="badge p-2 rounded bg-primary-opacity" onClick={() => {navigate('/transaction', {state: {txs: block.transactions}})}}>
                                {`${block.transactions.length} transactions`}
                            </Button> 
                             in this block
                        </td>
                    </tr>
                    <tr>
                        <td>Mined by:</td>
                        <td>{block.miner}</td>
                    </tr>
                    <tr>
                        <td>Difficulty:</td>
                        <td>{Number(block.difficulty).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Total Difficulty:</td>
                        <td>{Number(block.totalDifficulty).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Size:</td>
                        <td>{Number(block.size)}</td>
                    </tr>
                    <tr>
                        <td>Gas Used:</td>
                        <td>{Number(block.gasUsed)}</td>
                    </tr>
                    <tr>
                        <td>Gas Limit:</td>
                        <td>{Number(block.gasLimit)}</td>
                    </tr>
                    <tr>
                        <td>Extra Data:</td>
                        <td>{`${Buffer.from(block.extraData.substring(2), 'hex').toString('utf8')} (Hex: ${block.extraData})`}</td>
                    </tr>
                    <tr>
                        <td>Hash:</td>
                        <td>{block.hash}</td>
                    </tr>
                    <tr>
                        <td>Parent Hash:</td>
                        <td>{block.parentHash}</td>
                    </tr>
                    <tr>
                        <td>Sha3Uncles:</td>
                        <td>{block.sha3Uncles}</td>
                    </tr>
                    <tr>
                        <td>StateRoot:</td>
                        <td>{block.stateRoot}</td>
                    </tr>
                    <tr>
                        <td>Nonce:</td>
                        <td>{block.nonce}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        
    )
}

export default Blocktable;