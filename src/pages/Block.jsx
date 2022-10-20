import Meta from '../components/Meta'
import Blocktable from '../components/Blocktable'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'


const Block = () => {

  const { number } = useParams();
  const [block, setBlock] = useState(null)
  const navigate = useNavigate();
  useEffect(async () => {
    const resp = await fetch(
      new Request('https://web3-trial.cloudflare-eth.com/v1/mainnet', {
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_getBlockByNumber',
          params: [number? `0x${Number(number).toString(16)}`: 'latest', true],
          id: 1,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).then(res => {
      return res.json()
    }).catch(res => {console.log(res)})
    resp? setBlock(resp) : navigate('/*')
    
  }, [])
  console.log(block)

  return (
    <Container fluid="md" className="p-4">
      <Meta title="Home"/>
      {/* <Header head={pageTitle} description={pageDescription} /> */}
      {
        block &&
      <Blocktable block={JSON.stringify(block)} />
      }
    </Container>
  )
}

export default Block