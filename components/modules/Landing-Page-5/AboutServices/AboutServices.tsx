import { Box, Button, Container, Flex, Grid, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useContext, useRef, useState } from 'react';
import { IconCircle } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import classes from './AboutServices.module.css';
import { Images } from '@/public';
import I18nContext from '@/context/i18nContext';
import Autoplay from 'embla-carousel-autoplay';

const aboutServicesPoints = [
  { content: 'Expert advice on selecting the right plants for your nursery.' },
  { content: 'High-quality, healthy plants to ensure strong growth.' },
  { content: 'Customized planting plans tailored to your space.' },
  { content: 'Regular care tips to help your plants thrive.' },
];

const productData = [
  {
    img: Images.product1,
    description:
      'Jasminum: A fragrant indoor plant that brings a touch of elegance to any space with its beautiful white flowers.',
    name: 'Jasminum',
  },
  {
    img: Images.product2,
    description:
      'Rhoeo: A resilient plant featuring striking variegated leaves, ideal for both indoor and outdoor gardens.',
    name: 'Rhoeo',
  },
  {
    img: Images.product3,
    description:
      'Lemon Grass: An aromatic herb that adds flavor to dishes and serves as a natural insect repellent.',
    name: 'Lemon Grass',
  },
  {
    img: Images.product4,
    description:
      'Krishna Tulsi Plant: A sacred herb known for its medicinal properties and ability to purify the environment.',
    name: 'Krishna Tulsi Plant',
  },
  {
    img: Images.product5,
    description:
      'Raat Ki Rani: A night-blooming flower that fills the air with its enchanting fragrance after sunset.',
    name: 'Raat Ki Rani',
  },
];

export default function AboutServices() {
  const breakpointMaxW870 = useMediaQuery('(max-width: 870px)');
  const breakpointMaxW800 = useMediaQuery('(max-width: 800px)');
  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const getBreakpointWidth = (): string => {
    if (breakpointMaxW800) {
      return '100%';
    }
    if (breakpointMaxW870) {
      return '50%';
    }
    return '33.333333%';
  };

  return (
    <Container size="xl" mt={100}>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 12, md: 6 }}>
          <Box className={classes.boxStyle} w="100%">
            <Box>
              <Image
                src={Images.photo6}
                height={500}
                width={400}
                alt="interior"
                className={classes.interior}
              />
            </Box>
            <Box
              style={{
                position: 'relative',
                display: 'inline',
                bottom: '60%',
                left: '55%',
              }}
            >
              <Image
                src={Images.photo5}
                height={330}
                width={270}
                alt="chair"
                className={classes.chairImage}
              />
            </Box>

            <Box
              className={classes.office}
              style={{
                position: 'absolute',
                right: '4%',
                top: 0,
              }}
            >
              <Image
                src={Images.photo4}
                height={170}
                width={160}
                alt="office"
                className={classes.officeImage}
              />
            </Box>
          </Box>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 12, md: 6 }}>
          <Box w="100%">
            <Text className={classes.heading}>Nurturing Your Green Space</Text> {/* Updated Text */}
            <Text className={classes.content}>
              At our nursery, we provide expert advice and high-quality plants to help you cultivate
              a thriving green space. Our team is dedicated to offering customized planting plans
              and care tips tailored to your needs.
            </Text>
            <Grid mt="50px">
              {aboutServicesPoints.map((item, index) => (
                <Grid.Col key={index} span={{ base: 12, xs: 6, sm: 6, md: 6 }}>
                  <Flex align="center" gap="lg">
                    <IconCircle className={classes.circleIcon} />
                    <Text className={classes.aboutServicePoint}>{item.content}</Text>
                  </Flex>
                </Grid.Col>
              ))}
            </Grid>
            <Button className={classes.exploreBtn}>Explore Our Services</Button>
          </Box>
        </Grid.Col>
      </Grid>

      <Carousel
        mt="200px"
        slideSize={getBreakpointWidth()}
        slideGap="md"
        withControls={false}
        loop
        align="start"
        w="100%"
        // slidesToScroll={1}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {productData.map((item) => (
          <Carousel.Slide key={item.name}>
            <Flex align="center" gap="33px">
              <Image
                src={item.img}
                width={100}
                height={110}
                alt="product"
                objectFit="contain"
                quality={100}
              />
              <Box>
                <Text className={classes.productName}>{item.name}</Text>
                <Text className={classes.productDescription}>{item.description}</Text>
                <Button className={classes.readMoreBtn}>Read More</Button>
              </Box>
            </Flex>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}
