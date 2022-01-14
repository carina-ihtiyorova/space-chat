import React, {Component} from 'react';
import styled from 'styled-components'
import bgImage from './images/canvas.png'
import LogoPng from './images/Group.png'

class Login extends Component {
    render() {
        return (
            <Container>
                <Logo src={LogoPng}/>
                <SignInContainer>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore incidunt nam perferendis quasi sequi! Beatae delectus doloribus et impedit iusto laboriosam officia quam quasi voluptas voluptatem? Dolorum in provident temporibus.10
                </SignInContainer>
            </Container>
        );
    }
}

export default Login;

const Container = styled.div`
  background-image: url(${bgImage});
  background-color: #FFFFFF;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
const SignInContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 80px 64px;
  transform: translate(-50%, -50%);

  background: #FFFFFF;
  backdrop-filter: blur(24px);

  border-radius: 0 24px 24px 0;
`

const Logo = styled.img`
  position: absolute;
  left: 61.01%;
  right: 32.48%;
  top: 7.42%;
  bottom: 81.98%;

  transform: rotate(11.98deg);
`