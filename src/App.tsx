import { f, VStack, Spacer, AspectRatio } from 'fusion-engine/jsx';
import { Card, Button, Avatar } from '@tourlane/fusion-you';

function App() {
  return (
    <>
      <f.div bgColor='primary'>Hello</f.div>
      <f.div maxW='360px' mx='auto'>
        <Card.Root as='article' variant='outlined'>
          <Card.Header>
            <Avatar
              htmlHeight={202.5}
              htmlWidth={360}
              name='Max Musterman'
              src='https://i.pravatar.cc/300'
            />
            <VStack>
              <f.h3 color={'on.surface'} textStyle={'title.md'}>
                Shrimp and Chorizo Paella
              </f.h3>
              <f.p color={'on.surface'} textStyle={'body.md'}>
                September 14, 2026
              </f.p>
            </VStack>
            <Spacer />
            <Button
              aria-label='More'
              icon='material-symbols:more-vert'
              variant='text'
            />
          </Card.Header>
          <AspectRatio>
            <Card.Image
              alt='my image'
              src='https://picsum.photos/seed/tech/600/400'
            />
          </AspectRatio>
          <Card.Body>
            <VStack>
              <f.h1 color='on.surface' textStyle={'body.lg'}>
                Lorem ipsum dolor sit amet
              </f.h1>
              <f.h2 color='on.surface.variant' textStyle={'body.md'}>
                consectetur adipiscing
              </f.h2>
            </VStack>
            <f.p color='on.surface.variant' lineClamp={2}>
              Duis a libero id lorem bibendum tincidunt vel et mi. Mauris
              dapibus volutpat cursus. Phasellus scelerisque turpis at magna
              mattis lobortis. Nulla id lectus vitae lorem consectetur
              pellentesque.
            </f.p>
          </Card.Body>
          <Card.Footer>
            <Button variant='outlined'>Click me</Button>
            <Button variant='filled'>Click me</Button>
          </Card.Footer>
        </Card.Root>
      </f.div>
    </>
  );
}

export default App;
