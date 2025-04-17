import { Button } from "@mui/material";
import "./App.css";
// import { Container, createTheme, Grid, ThemeProvider } from "@mui/material";
// import Header from "./components/Header";
// import FeaturedPost from "./components/FeaturedPost";
// import { featuredPosts } from "./data/data";
// import Postcard from "./components/Postcard";
import { useEffect, useState } from "react";

function App() {
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });
  const [count, setcount] = useState(0);
  const [text, settext] = useState();
  useEffect(() => settext("dsdni"), []);
  return (
    <>
      <h2>you clicked the button {count} times</h2>
      <Button color="inherit" onClick={() => setcount(count + 1)}>
        Increment
      </Button>

      <input
        type="text"
        placeholder="Enter some thing"
        color="components"
        value={text}
        onChange={(e) => settext(e.target.value)}
      ></input>
      <p>{text}</p>
    </>
    // <ThemeProvider theme={darkTheme}>
    //   <Container maxWidth="lg">
    //     <Header />
    //     <FeaturedPost />
    //     <br />
    //     <Grid>
    //       {featuredPosts.map((post) => (
    //         <Postcard post={post} key={post.title} />
    //       ))}
    //     </Grid>
    //   </Container>
    // </ThemeProvider>
  );
}

export default App;
