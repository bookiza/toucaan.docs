import * as React from 'react'
import { useContext } from 'react'
import { useWindowSize } from 'react-use'
import Github from 'react-feather/dist/icons/github'
import styled, { css } from 'styled-components'
import { Link } from 'docz'
import GitHubButton from 'react-github-button'

import { Hamburguer } from '@components/shared/Sidebar/Hamburguer'
import { Container, Logo } from '@components/ui'
import { breakpoints } from '@styles/responsive'
import { mainContext } from '../Main'

const Wrapper = styled.header`
  z-index: 999;
  width: 100%;
  position: fixed;
  height: 60px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0px 10px 30px rgba(128, 102, 255, 0.2);

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    ${p =>
      p.theme.mq({
        padding: ['0 14px', '0 20px', '0 20px', '0 20px'],
      })};
  }
`

const Accent = styled.div`
  background: rgba(128, 102, 255, 1);
  height: 0.25vmin;
  border-bottom: 1px solid rgba(128, 102, 255, 0.5);
`

const LogoLink = styled(Link)`
  height: 45px;
`

const Menu = styled.div`
  display: flex;
`

const linkStyle = (p: any) => css`
  color: ${p.theme.colors.main};
  opacity: 0.75;
  transition: opacity 0.2s;
  font-size: 15px;
  font-weight: 400;

  &.active,
  &:visited,
  &:hover {
    color: ${p.theme.colors.main};
    opacity: 1;
  }
`

const MenuLink = styled(Link)`
  ${linkStyle};
  margin: 0 10px;
`

export const IconLink = styled.a`
  ${linkStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;

  svg {
    stroke: ${p => p.theme.colors.main};
  }
`

interface MenuListItem {
  id: number
  children: React.ReactNode
  [key: string]: any
}

export const TOPBAR_LINKS: MenuListItem[] = [
  {
    id: 1,
    children: 'Home',
    to: '/',
  },
  {
    id: 2,
    children: 'Documentation',
    to: '/docs/introduction',
  },
  {
    id: 3,
    children: 'Starters',
    to: '/starters',
  },
  {
    id: 4,
    children: 'Themes',
    to: '/themes',
  }
]

export const Topbar = () => {
  const { width } = useWindowSize()
  const showFullMenu = width > breakpoints.tablet
  const { showing, setShowing } = useContext(mainContext)

  return (
    <Wrapper>
      <Accent></Accent>
      <Container>
        <LogoLink to="/">
          <Logo height={50} small={!showFullMenu} />
        </LogoLink>
        <GitHubButton
          type="stargazers"
          size="large"
          namespace="bookiza"
          repo="toucaan"
        />

        <Menu>
          {showFullMenu &&
            TOPBAR_LINKS.map(({ id, children, ...props }) => {
              const Component = props.to ? MenuLink : IconLink
              return (
                <Component key={id} {...props}>
                  {children}
                </Component>
              )
            })}
          <IconLink
            as="a"
            href="https://bubblin.io/blog/category/toucaan"
            target="_blank"
          >
            Blog
          </IconLink>
          <IconLink
            as="a"
            href="https://github.com/bookiza/toucaan"
            target="_blank"
          >
            <Github width={30} />
          </IconLink>
          {!showFullMenu && (
            <Hamburguer
              opened={showing}
              onClick={() => setShowing((s: any) => !s)}
            />
          )}
        </Menu>
      </Container>
    </Wrapper>
  )
}
