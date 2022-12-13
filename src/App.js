
import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react';
import Allroutes from './AllRoutes/Allroutes';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';


function App() {
  return (
    <Grid
    bg={"#232a47"}
    height="100vh"
    
  templateAreas={`"nav header "
                  "nav main "
                  "footer footer "`}
  gridTemplateRows={'60px 1fr auto'}
  gridTemplateColumns={'180px 1fr'}
  
  
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem  width="100%"  bg='#232a47' area={'header'}>
    <NavBar/>
  </GridItem>
  <GridItem   height={"100%"}   bg='#232a47' area={'nav'}>
    <SideBar/>
  </GridItem>
  <GridItem height={"90vh"} overflowY="scroll"  borderRadius={"20px 0 0 20px"}  bg='white' area={'main'}>
    <Allroutes/>
  </GridItem>
  <GridItem  bg='#232a47' area={'footer'}>
  </GridItem>
</Grid>
    
     );
}

export default App;
