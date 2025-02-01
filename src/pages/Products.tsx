import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import ProductCard from "../components/ProductCart"
import Sidebar from "../components/SideBar"

const ProductsPage = () => {
  return (
    <Flex>
      {/* Sidebar */}
      <Sidebar display={{base:'none' , md:'block'}} />

      <Box flex={1} p={4}>
        <Box mb={"8px"}>
          <Text fontSize={"lg"} fontWeight={700} color={"#000"}>
            Results
          </Text>
          <Text fontSize={"xs"} color={"#6F6F6F"}>
            Check each product page for other buying options. Price and other
            details may vary based on product size and colour.
          </Text>
        </Box>

        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>
          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>
          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>
          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>
          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>
          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>          <GridItem colSpan={1}>
            <ProductCard />
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  )
}

export default ProductsPage