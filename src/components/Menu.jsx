import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Menu = () => {
  let navigate = useNavigate();
  const [blockNumber, setBlockNumber] = useState('');
  return (
    <div className="bg-white">
      <Container>
        <header className="d-flex flex-wrap align-items-center justify-content-between pt-4 pb-3">
          <Link
            to="/"
            className="d-flex align-items-centercol-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img src='https://etherscan.io/assets/svg/logos/logo-etherscan.svg?v=0.0.2' alt='etherscan' />
          </Link>
          <div className="d-flex align-items-center">
            <input 
              className="form-control rounded-0 shadow-none " 
              type="text" 
              placeholder="Search by Block..." 
              onChange={(e) => {setBlockNumber(e.target.value)}}/>
            <Button 
              className="btn btn-primary text-white rounded-0"
              onClick={() => {navigate(`/block/${blockNumber}`); navigate(0)}}>
                <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </header>
      </Container>
    </div>
    
  );
};

export default Menu;
