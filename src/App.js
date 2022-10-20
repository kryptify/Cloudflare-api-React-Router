import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Block from "./pages/Block";
import Transaction from "./pages/Transaction";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate replace to="/block" />} />
          <Route path="/block/:number" element={<Block />}/>
          <Route path="/block" element={<Block />} exact/>
          <Route path="/transaction" element={<Transaction />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
