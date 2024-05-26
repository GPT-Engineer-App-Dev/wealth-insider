import { Box, Container, Flex, Grid, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Box boxSize="50px" bg="gray.600" display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="xl" fontWeight="bold">FT</Text>
        </Box>
        <Flex as="ul" listStyleType="none" m={0} p={0} gap={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}><Text>Home</Text></Link>
          <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none" }}><Text>World</Text></Link>
          <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none" }}><Text>Business</Text></Link>
          <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none" }}><Text>Markets</Text></Link>
          <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none" }}><Text>Opinion</Text></Link>
          <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none" }}><Text>Tech</Text></Link>
        </Flex>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Box mb={8}>
            <Image src="https://via.placeholder.com/800x400" alt="Featured Article" />
            <Heading as="h2" size="xl" mt={4}>Featured Article Title</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>

          <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="https://via.placeholder.com/400x200" alt={`Article ${index + 1}`} />
                <Box p={4}>
                  <Heading as="h3" size="md">Article {index + 1} Title</Heading>
                  <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>

        <Box flex="1" p={4} bg="gray.50" borderLeftWidth={{ md: "1px" }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Trending Topics</Heading>
          <VStack align="start" spacing={4}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Text key={index}>Trending Topic {index + 1}</Text>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
          <Flex as="ul" listStyleType="none" m={0} p={0} gap={4}>
            <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none" }}><Text>About</Text></Link>
            <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none" }}><Text>Contact</Text></Link>
            <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none" }}><Text>Privacy Policy</Text></Link>
            <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none" }}><Text>Terms of Service</Text></Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;