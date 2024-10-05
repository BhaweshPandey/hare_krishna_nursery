/* eslint-disable linebreak-style */
import { Box, Button, Container, Flex, Input, Text } from '@mantine/core';
import { IconBrandTelegram, IconMail } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './NewsLetter.module.css';
import { Images } from '@/public';

export default function NewsLetter() {
  const breakpointMaxW400 = useMediaQuery('(max-width: 400px)');
  const breakpointMaxW550 = useMediaQuery('(max-width: 550px)');

  return (
    <Container size="xl" mt={-105} mb={122}>
      <Flex justify="space-between" align="center" mt={breakpointMaxW400 ? '100px' : '44px'}>
        <Box>
          <Flex gap="5px" align="center">
            <IconMail className={classes.mailIcon} />
            <Text className={classes.heading}>Subscribe to Our Nursery Newsletter</Text>
          </Flex>
          <Flex gap="5px" mt={44} align="center" wrap="wrap" w="100%">
            <Input
              w={breakpointMaxW550 ? '100%' : '250px'}
              placeholder="Your Name"
              classNames={{
                input: classes.input,
              }}
            />
            <Flex
              align="center"
              gap="12px"
              w={breakpointMaxW550 ? '100%' : 'auto'}
              wrap={breakpointMaxW550 ? 'wrap' : 'nowrap'}
            >
              <Input
                w={breakpointMaxW550 ? '100%' : '250px'}
                placeholder="Your Email"
                classNames={{
                  input: classes.input,
                }}
              />
              {breakpointMaxW550 ? (
                <Button className={classes.submitBtn} w="100%" h="43px" mt="13px">
                  Submit
                </Button>
              ) : (
                <IconBrandTelegram className={classes.telegramIcon} />
              )}
            </Flex>
          </Flex>
        </Box>
        <Box display={breakpointMaxW550 ? 'none' : ' '}>
          <Image
            src={Images.photo6}
            alt="sofa"
            width={200}
            height={200}
            objectFit="contain"
            quality={100}
            className={classes.sofaImg}
          />
        </Box>
      </Flex>
    </Container>
  );
}
