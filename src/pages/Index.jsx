import { Box, Container, Heading, Text, Image, SimpleGrid, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10}>
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>Dwight D. Eisenhower</Heading>
          <Text fontSize="xl">34th President of the United States</Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>Biography</Heading>
          <Text>
            Dwight David Eisenhower was an American military officer and statesman who served as the 34th president of the United States from 1953 to 1961. During World War II, he was a five-star general in the United States Army and served as Supreme Commander of the Allied Expeditionary Forces in Europe.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>Achievements</Heading>
          <Text>
            Eisenhower's tenure as president was marked by prosperity and peace. He managed Cold War-era tensions with the Soviet Union under the looming threat of nuclear weapons, ended the Korean War, authorized the establishment of NASA, and launched the Interstate Highway System.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>Photo Gallery</Heading>
          <SimpleGrid columns={3} spacing={4}>
            <Image src="/images/eisenhower1.jpg" alt="Eisenhower in military uniform" />
            <Image src="/images/eisenhower2.jpg" alt="Eisenhower giving a speech" />
            <Image src="/images/eisenhower3.jpg" alt="Eisenhower with other world leaders" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;