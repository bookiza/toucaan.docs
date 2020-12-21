import * as React from 'react'
import styled from 'styled-components'

import { Logo as BaseLogo } from '@components/ui'

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  height: 30vmin;
  margin-top: 10vmin;
  box-shadow: 0 10px 30px rgba(128,102,255,.2);
`

const Logo = styled(BaseLogo)`
  margin: 0 20px;
`

export const Footer = () => (
  <Wrapper>
    <div> Developed & maintained by <a rel="nofollow noreferrer" href="http://twitter.com/marvindanig">@marvindanig</a></div> <Logo height={30} />
  </Wrapper>
)
