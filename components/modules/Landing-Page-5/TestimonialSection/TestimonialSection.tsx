/* eslint-disable linebreak-style */
import { Carousel } from '@mantine/carousel';
import { Center, Container, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import classes from './Testimonial.module.css';
import { Images } from '@/public';

const testimonialContent = [
  {
    content:
      'The plants I purchased have transformed my home into a green paradise! Their quality is unmatched, and the vibrant colors brighten up my living space. Every leaf seems to radiate health and vitality, making my home feel welcoming and alive. I could not be happier with my choices!',
    img: Images.profile_image,
    name: 'Emma L.',
    status: 'Happy Customer',
  },
  {
    content:
      'I love the variety offered at this nursery! Each plant is healthy and vibrant, and they have something for every corner of my home. From low-maintenance options to beautiful flowering plants, every selection has exceeded my expectations. This place is a true treasure for any plant lover!',
    img: Images.profile_image,
    name: 'James K.',
    status: 'Gardening Enthusiast',
  },
  {
    content:
      'Their customer service is fantastic! They helped me choose the perfect plants for my space and provided insightful care tips. It was a pleasure to walk through the nursery with someone who truly understands plants. I left feeling confident and excited about my new green companions!',
    img: Images.profile_image,
    name: 'Sophia R.',
    status: 'First-Time Buyer',
  },
  {
    content:
      'I appreciate the detailed care instructions provided with each plant. It makes my gardening journey easier! The team was incredibly knowledgeable and guided me through what to expect as my plants grow. I feel empowered to take care of my new friends and can’t wait to watch them thrive!',
    img: Images.profile_image,
    name: 'Liam W.',
    status: 'Nature Lover',
  },
  {
    content:
      'The quality of the plants is exceptional! I can’t wait to see them grow in my garden. Each plant arrived beautifully packaged and healthy, ready to be placed in its new home. I’m excited to see how they flourish and bring even more beauty to my outdoor space!',
    img: Images.profile_image,
    name: 'Olivia M.',
    status: 'Happy Gardener',
  },
];

export default function TestimonialSection() {
  const breakpointMaxW700 = useMediaQuery('(max-width: 700px)');
  return (
    <Container size="xl" mt={100}>
      <Center>
        <Text className={classes.heading}>What Our Customers Say</Text>
      </Center>
      <Carousel
        withControls={!breakpointMaxW700}
        nextControlIcon={<IconChevronRight aria-label="next_icon" />}
        previousControlIcon={<IconChevronLeft aria-label="previous_icon" />}
        mih={300}
        mt="40px"
        loop
        classNames={{
          indicator: classes.indicator,
        }}
      >
        {testimonialContent.map((item) => (
          <Carousel.Slide key={item.name}>
            <Center>
              <Text className={classes.content}>{item.content}</Text>
            </Center>
            <Center mt={20}>
              <Image
                src={item.img}
                width={60}
                height={60}
                alt="profile"
                objectFit="contain"
                quality={100}
              />
            </Center>
            <Center>
              <Text className={classes.userName}>{item.name}</Text>
            </Center>
            <Center>
              <Text className={classes.userStatus}>{item.status}</Text>
            </Center>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}
