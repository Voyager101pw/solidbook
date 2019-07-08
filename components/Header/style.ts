import styled from 'styled-components'

export default styled.header`
  ${props =>
    props.theme.using === 'light'
      ? `box-shadow: 0px 6px 20px ${props.theme.decorationColorSecondary};`
      : `box-shadow: 0 0 1px 1px ${props.theme.decorationColorPrimary};`}

  padding: 0.4rem 0 0;
  font-size: 1rem;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoint}) {
    border-bottom: 1px solid
      ${props =>
        props.theme.using === 'light' ? props.theme.decorationColorSecondary : props.theme.decorationColorPrimary};

    box-shadow: none;
    padding: 0.4rem 1rem 0;
    text-align: left;
  }
`
