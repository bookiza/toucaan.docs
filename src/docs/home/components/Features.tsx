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
          <Title>Reusable to the core</Title>
          <Text>
            Enjoy a lightning fast development experience with benefits of <Link to="/docs/reusable-helpers">maximum reusability</Link>.
            Separate critical CSS from everything else.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={grid} />
        <Info>
          <Title>Powerful CSS Grids</Title>
          <Text>
            Unleash the power of CSS Grids on your web designs. 
            Create smart responsive layouts with zero boilerplate code.
          </Text>
        </Info>
      </FeatureItem> 

      <FeatureItem>
        <Image src={watch} />
        <Info>
          <Title>WatchOS support</Title>
          <Text>
            Toucaan has been built ground up with support for Apple WatchOS 5.
            Design apps that scale from a 44mm wrist watch to a 120" hi-res projector.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={protractor} />
        <Info>
          <Title>Geometrical precision</Title>
          <Text>
            Use a mathematically grounded <a href="https://bubblin.io/blog/baseline-css">baseline reset</a> that's both logical & light in weight. 
            Under 1.5kb zipped with 100% support!
          </Text>
        </Info>
      </FeatureItem>

      <FeatureItem>
        <Image src={dimsums} />
        <Info>
          <Title>Blockscoped Typography</Title>
          <Text>
            Say hello to intrinsic design with blockscoped typography.
            Scale with geometric precision and never worry about text overflows again!
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={settings} />
        <Info>
          <Title>Easy to customize</Title>
          <Text>
            Toucaan is very easy to customize. Create your own theme or
            customize a readymade theme to make your app or website
            stand out.
          </Text>
        </Info>
      </FeatureItem>




      {/* <FeatureItem>
        <Image src={plug} />
        <Info>
          <Title>Fully pluggable</Title>
          <Text>
            Plugins provide a great way to add functionality to your application
            without changing your code. With Docz, you can hook into the
            dataflow and build steps of your application using GatsbyJS and Docz
            plugins.
          </Text>
        </Info>
      </FeatureItem> */}
    </ListItems>
  </Container>
)
