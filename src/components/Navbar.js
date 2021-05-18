import styled from "styled-components";

function Navbar({ toggleTheme }) {
  return (
    <Nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <div>
        <button onClick={toggleTheme}>Switch Theme</button>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  top: 0;
  width: 100vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // background-color: ${({ theme }) => theme.primary0};
  z-index: 1;
`;

export default Navbar;
