import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState('');
  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>

              {product && product.size.map((item) => (
                <Dropdown.Item href="#/action-1">{item[0]}</Dropdown.Item>
              ))}

            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark">추가</Button>
        </Col>
      </Row>
    </Container >
  )
}

export default ProductDetail