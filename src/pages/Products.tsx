import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import ProductCard from "../components/ProductCart"
import Sidebar from "../components/SideBar"
import useCustomQuery from "../hooks/useCustomQuery"
import { IProduct } from "../interfaces";
import SkeletonCard from "../components/ui/SkeletonCard";


const ProductsPage = () => {
  const { isLoading, data } = useCustomQuery<{ products: IProduct[] }>({
    queryKey: ["products"],
    url: "/products",
  })

  return (
    <Flex>
      {/* Sidebar */}
      <Sidebar display={{ base: 'none', md: 'block' }} />
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
        {
          isLoading ? (
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
              {Array.from({ length: 10 }, (_, idx) => (
                <GridItem key={idx} colSpan={1}>
                  <SkeletonCard />
                </GridItem>
              ))}
            </Grid>
          ) : (data?.products?.length ?
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
              {data.products.map((product: IProduct) => (
                <GridItem key={product.id} colSpan={1}>
                  <ProductCard product={product} />
                </GridItem>
              ))}
            </Grid>
            : <h3>product not found</h3>)
        }
      </Box>
    </Flex>
  )
}

export default ProductsPage