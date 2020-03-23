import * as React from 'react'
import styled from 'styled-components'

import { Logo as BaseLogo } from '@components/ui'

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background: #fff;
  height: 50vmin;
  color: #897be8;
  margin-top: 10vmin;
  box-shadow: 0 10px 30px rgba(128,102,255,.2);
`

const Logo = styled(BaseLogo)`
  margin: 0 10px;
`

export const Footer = () => (
  <Wrapper>
    <span> Under <a rel="nofollow noreferrer noopener" href="https://github.com/bookiza/toucaan/blob/master/LICENSE.md">Public Parity License 7.0</a> license. Developer © Marvin Danig</span> <Logo height={30} />
  </Wrapper>
)
