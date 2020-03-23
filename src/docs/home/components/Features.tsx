import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'docz'

import { Container } from '@components/ui'
import dimsums from '@images/icons/dimsums.svg'
import reusable from '@images/icons/reusable.svg'
import settings from '@images/icons/settings.svg'
import grid from '@images/icons/grid.svg'
import watch from '@images/icons/watch.svg'
import protractor from '@images/icons/protractor.svg'
import acessibility from '@images/icons/accessibility.svg'

const ListItems = styled.div`
  display: grid;
  justify-content: center;

  ${p =>
    p.theme.mq({
      margin: ['30px 0', '60px 0'],
      gridGap: ['30px', '60px'],
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(1, 0.8fr)',
      ],
    })}
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;

  ${p =>
    p.theme.mq({
      padding: ['0 10px', '0 20px', '0 20px', '0 30px'],
      flexDirection: ['column', 'row'],
      textAlign: ['center', 'left'],
    })};
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  height: 100px;

  ${p =>
    p.theme.mq({
      margin: ['0 0 30px', '0 40px'],
    })}
`

const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-family: 'Zilla Slab';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.02em;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
`

export const Features = () => (
  <Container>
    <ListItems>
      <FeatureItem>
        <Image src={reusable} />
        <Info>
          <Title>Reusable utilities</Title>
          <Text>
            Enjoy a lightning fast development experience with <Link to="/docs/reusable-helpers">reusable</Link> utilities.
            Write your styles as if you are writing in plain English.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={grid} />
        <Info>
          <Title>Semantic layouts</Title>
          <Text>
            Unleash the power of CSS Grids & Flexbox on your app.
            Create smart, intrinsic and meaningful layouts with zero boilerplate code.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={dimsums} />
        <Info>
          <Title>Blockscoped typography</Title>
          <Text>
            Say hello to intrinsic web design with blockscoped typography.
            Scale text with geometric precision and never worry about overflows again!
          </Text>
        </Info>
      </FeatureItem>

      <FeatureItem>
        <Image src={watch} />
        <Info>
          <Title>WatchOS support</Title>
          <Text>
            Toucaan has been built ground up starting with support for WatchOS.
            Design apps that scale from a wrist watch to an LCD projector.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={settings} />
        <Info>
          <Title>Super customizable</Title>
          <Text>
            Toucaan is mutative. Customize and create your own themes, create apps and websites that stand out.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={protractor} />
        <Info>
          <Title>Mathematical formulation</Title>
          <Text>
            Use a mathematically grounded <a href="https://bubblin.io/blog/baseline-css">reboot</a> that's both intrinsic & lightweight.
            Our baseline reset is less than 1.5 kilobyte unzipped!
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
            <Image src={acessibility} />
            <Info>
              <Title>Accessibility first</Title>
              <Text>
                Design accessible websites with smart media queries like <strong>darkmode</strong>, <strong>reduced-motion</strong> etc. Deliver solid experiences that put people first.
              </Text>
            </Info>
          </FeatureItem>
    </ListItems>
  </Container>
)
