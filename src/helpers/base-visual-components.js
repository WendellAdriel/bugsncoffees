import styled from '@emotion/styled'

import { theme, breakpoints } from './styles'

export const Introduction = styled.section`
  width: 100%;
  text-align: justify;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  ${breakpoints.md} {
    font-size: 2.5rem;
  }
`

export const Highlight = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 700;

  a {
    border-bottom: 1px dashed ${theme.colors.secondary};
  }
`
