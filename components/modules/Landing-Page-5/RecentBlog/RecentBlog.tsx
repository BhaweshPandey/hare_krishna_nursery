/* eslint-disable linebreak-style */
import { Button, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Images } from '@/public';
import classes from './RecentBlog.module.css';

const plantContent = [
  {
    img: Images.product1, // Updated to product1 image
    name: 'Jasminum', // Updated name
    owner: 'by Green Thumb on Sep 18th, 2024',
  },
  {
    img: Images.product2, // Updated to product2 image
    name: 'Rhoeo', // Updated name
    owner: 'by Plant Lover on Sep 20th, 2024',
  },
  {
    img: Images.product3, // Updated to product3 image
    name: 'Lemon Grass', // Updated name
    owner: 'by Cactus Fan on Sep 22nd, 2024',
  },
  {
    img: Images.product4, // Updated to product4 image
    name: 'Krishna Tulsi Plant', // This name already existed
    owner: 'by Herbalist on Sep 24th, 2024',
  },
  {
    img: Images.product5, // Updated to product5 image
    name: 'Raat Ki Rani', // This name already existed
    owner: 'by Night Blooming on Sep 26th, 2024',
  },
];

export default function RecentBlog() {
  const breakpointMaxW400 = useMediaQuery('(max-width: 400px)');

  return (
    <Container size="xl" mt={100} pb={200}>
      <Flex justify="space-between" align="center">
        <Text className={classes.heading} aria-label="recent plants">
          Recent Plants
        </Text>
        <Button className={classes.postBtn} aria-label="view all plants">
          View All Plants
        </Button>
      </Flex>
      <div style={{ width: '100%' }}>
        <Carousel
          withControls={false}
          slideSize={breakpointMaxW400 ? '100%' : '33.333333%'}
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
        >
          {plantContent.map((item, index) => (
            <Carousel.Slide key={index}>
              <div>
                <Image
                  src={item.img}
                  alt="plant post"
                  width={360}
                  height={249}
                  className={classes.imageStyle}
                />
                <Text className={classes.name} aria-label="plant name">
                  {item.name}
                </Text>
                <Text className={classes.owner} aria-label="plant owner">
                  {item.owner}
                </Text>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}
