import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginUser = (event) => {
    event.preventDefault();

    // 입력 유효성 검사
    if (!email || !password) {
      setError('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    setAuthenticate(true);
    navigate('/');
  }


  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="아이디 입력" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            아이디는 이메일 형식입니다.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호 입력" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="아이디 저장" />
        </Form.Group>
        {error && <div className="text-danger">{error}</div>}
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login