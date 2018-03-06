// Import React
import React from "react";

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import styled from "react-emotion";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#fefefe",
    secondary: "#e4002f",
    tertiary: "#01667f",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  splash: require("./images/splash.gif"),
  t: require("./images/t.png"),
  s: require("./images/s.webm")
};

const FunHeading = styled(Heading)`
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  border: none;
  font: normal 84px / normal "Anton", Helvetica, sans-serif;
  color: #re4002f;
  text-align: center;
  -o-text-overflow: clip;
  text-overflow: clip;
  text-shadow: 1px 1px 0 #fff, 2px 2px 0 #db4d3f, 3px 3px 0 #01667f, 4px 4px 0 #333333;
`;

const HighlightText = styled("span")`
  color: #01667f;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme} contentWidth="1280" contentHeight="720">
        <Slide align="left top" transition={["slide"]} bgImage={images.s}>
          <Heading textAlign="left" size={2} caps lineHeight={1} textColor="white">
            How to
          </Heading>
          <Heading textAlign="left" size={2} caps lineHeight={1} textColor="white">
            draw an
          </Heading>
          <Heading textAlign="left" size={1} caps lineHeight={1} textColor="white">
            owl
          </Heading>
          <Heading textAlign="left" size={6} margin="300px 0 0 0" textColor="white" caps lineHeight={1}>
            @marcelcutts
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <FunHeading fit size={1} caps lineHeight={1} margin="0 0 0 -20px" textColor="secondary">
            Types!
          </FunHeading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            They <HighlightText>promise</HighlightText>
          </Heading>
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            a lot
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Types promised us...
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🏋🏿‍♂️ Confidence in code
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🏎 Faster refactoring
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            💥 No runtime errors
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
        <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Types promised us...
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            📝 Fewer test cases
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            👓 Improved readability
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🛠 Tooling support
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Types have been going on for years
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Are in use but...
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Outside our bubble
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Undeniably hype, respected
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            How to draw an owl. Bimodal
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            How2 int
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Use tyyyypes
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            "this number is an int" - "argue about profunctor lenses on twitter"
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            "this number is an int" - "argue about profunctor lenses on twitter"
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            What are the frustrations
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            --- tooling - Slow - Flow / check / Errors yo - TS Error messages Annotation pain Add to stack of prettier /
            eslint (play nice!) / babel / awooo (managerie pain) --- lang Unknown how you can get it to work Syntax
            upgrades - sci Doesn’t feel right, ffi --- software Perhaps doesn’t push us as far - why?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Three problems
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Show four options
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Higlight ReasonML
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Based on ocaml
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            - Slow - Flow / check / Errors yo - TS Error messages Annotation pain Add to stack of prettier / eslint
            (play nice!) / babel / awooo (managerie pain) --- lang Unknown how you can get it to work Syntax upgrades -
            sci Doesn’t feel right, ffi
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            We’ll be using ReasonML: Type sound and bangin’ inference, like JS, jsx support, supports several styles
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            2 problems reason, one left
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            So what does that actually look like?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            So what does that actually look like?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Owl application
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            types
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text> Awoo </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text> Awoo </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text> Awoo </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text> Awoo </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text> Awoo </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text> Awoo </Text>
        </Slide>
      </Deck>
    );
  }
}
