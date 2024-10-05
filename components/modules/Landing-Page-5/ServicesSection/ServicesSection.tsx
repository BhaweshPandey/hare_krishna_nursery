/* eslint-disable linebreak-style */
import { Container, Flex, Grid, Text } from '@mantine/core';
import {
  Icon3dRotate,
  IconHeadset,
  IconRefresh,
  IconShoppingCart,
  IconTruck,
} from '@tabler/icons-react';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import classes from './Services.module.css';
import { Images } from '@/public';
import { translate } from '@/i18n';
import I18nContext from '@/context/i18nContext';

const servicesContent = [
  {
    icon: <IconTruck />,
    name: 'Fast & Free Shipping',
    content:
      'Enjoy quick and reliable shipping on all orders. Your plants will arrive at your doorstep in perfect condition!',
  },
  {
    icon: <IconShoppingCart />,
    name: 'Hassle-Free Shopping',
    content:
      'Browse our wide selection of plants and gardening supplies with ease. Shopping has never been simpler!',
  },
  {
    icon: <IconHeadset />,
    name: '24/7 Customer Support',
    content:
      'Our dedicated support team is here to assist you at any time. We’re just a message away for all your inquiries!',
  },
  {
    icon: <IconRefresh />,
    name: 'Easy Returns',
    content:
      'If you are not completely satisfied with your purchase, we offer hassle-free returns for your peace of mind.',
  },
];

export default function ServicesSection() {
  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  return (
    <Container size="xl" mt={100}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
          <Text className={classes.heading}>
            Discover the ideal plants to transform your outdoor oasis.
          </Text>
          <Text className={classes.subHeading}>
            Craft a breathtaking outdoor space with our thoughtfully curated plants. Enjoy vibrant
            growth and flourishing landscapes.
          </Text>
          <Grid mt="50px">
            {servicesContent.map((service) => (
              <Grid.Col key={service.name} span={{ base: 12, xs: 6, sm: 4, md: 6, lg: 6 }}>
                {service.icon}
                <Text className={classes.serviceName}>{service.name}</Text>
                <Text className={classes.serviceContent}>{service.content}</Text>
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 12, xs: 12, md: 12, lg: 6 }}>
          <Flex pos="relative" ml={12}>
            <Image
              src={Images.yellow_dots}
              width={250}
              height={220}
              alt="service_img"
              className={classes.yellowDots}
            />
            <Image
              src={Images.photo2}
              className={classes.img}
              width={550}
              height={650}
              alt="service_img"
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
