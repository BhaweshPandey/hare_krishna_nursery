/* eslint-disable linebreak-style */
import { Carousel } from '@mantine/carousel';
import { Box, Button, Center, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import { IconPlus } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { Images } from '@/public';
import classes from './Product.module.css';
import { translate } from '@/i18n';

const productData = [
  { img: Images.product1, price: '$99.00', name: 'Jasminum' },
  { img: Images.product2, price: '$99.00', name: 'Rhoeo' },

  { img: Images.product3, price: '$99.00', name: 'Lemon Grass' },
  { img: Images.product4, price: '$99.00', name: 'Krishna Tulsi Plant' },
  { img: Images.product5, price: '$99.00', name: 'Raat Ki Rani' },
];

export default function ProductSection() {
  const breakpointMaxW870 = useMediaQuery('(max-width: 870px)');
  const breakpointMaxW800 = useMediaQuery('(max-width: 800px)');

  function breakpointMaxW(): string {
    if (breakpointMaxW800) {
      return '100%';
    }
    if (breakpointMaxW800) {
      return '50%';
    }
    return '33.333333%';
  }

  return (
    <Container size="xl" mt={100}>
      <Flex gap="xl" wrap={breakpointMaxW870 ? 'wrap' : 'nowrap'}>
        <Box w={breakpointMaxW870 ? '100%' : '50%'}>
          <Text className={classes.craftText}>Nurture Your Garden with Our Top-Quality Plants</Text>
          <Text className={classes.craftContent}>
            Nurture Your Passion for Gardening With Our Diverse Plant Collection And Personalized
            Gardening Solutions!
          </Text>
          <Button className={classes.exploreBtn}>{translate('temp5.body.poc.button2')}</Button>
        </Box>

        <Carousel
          slideSize={breakpointMaxW()}
          slideGap="md"
          // withControls={false}
          loop
          align="start"
          w={breakpointMaxW870 ? '100%' : '50%'}
          slidesToScroll={1}
        >
          {productData.map((item) => (
            <Carousel.Slide key={item.name}>
              <Center>
                <Image
                  src={item.img}
                  width={200}
                  height={300}
                  alt="product"
                  objectFit="contain"
                  quality={100}
                />
              </Center>
              <Text className={classes.productName}>{item.name}</Text>
              <Text className={classes.productPrice}>{item.price}</Text>
              <Center>
                <IconPlus className={classes.plusIcon} />
              </Center>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Flex>
    </Container>
  );
}
