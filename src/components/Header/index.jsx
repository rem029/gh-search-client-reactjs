import { AiFillGithub } from 'react-icons/ai';
import { Header as HeaderContainer } from '../../containers/';

const Footer = () => (
  <HeaderContainer>
    <a href="/">
      <h5>Search Github Users</h5>
    </a>
    <span>
      <a href="/">
        <AiFillGithub />
      </a>
    </span>
  </HeaderContainer>
);

export default Footer;
