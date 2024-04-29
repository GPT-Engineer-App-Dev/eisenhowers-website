import { Box, Container, Heading, Text, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { FaMedal, FaBook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10}>
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>Dwight D. Eisenhower</Heading>
          <Text fontSize="xl">34th President of the United States</Text>
          <Image borderRadius="full" boxSize="150px" src="/images/eisenhower.jpg" alt="Dwight D. Eisenhower" mt={4} />
        </Box>
        <Box as="section">
          <Heading as="h2" size="xl" mb={4}><FaBook /> Biography</Heading>
          <Text fontSize="lg">
            Dwight David Eisenhower was an American military officer and statesman who served as the 34th president of the United States from 1953 to 1961. During World War II, he became a five-star general in the Army and served as Supreme Commander of the Allied Expeditionary Forces in Europe.
          </Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="xl" mb={4}><FaMedal /> Achievements</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Text fontSize="lg">
              Led the Allies to victory in World War II, overseeing campaigns in North Africa, France, and Germany.
            </Text>
            <Text fontSize="lg">
              As President, he launched the Interstate Highway System, the Defense Advanced Research Projects Agency (DARPA), and the National Aeronautics and Space Administration (NASA).
            </Text>
          </SimpleGrid>
        </Box>
        <Box as="section">
          <Heading as="h2" size="xl" mb={4}>Photo Gallery</Heading>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
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