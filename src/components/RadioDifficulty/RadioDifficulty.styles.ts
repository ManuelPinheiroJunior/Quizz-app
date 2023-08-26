import styled from 'styled-components';

export const ContainerRadios = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-font: 1rem;

  input[type="radio"]:checked{
    background-color: red;
}
`;
