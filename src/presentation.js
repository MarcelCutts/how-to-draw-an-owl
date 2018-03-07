// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Fill,
  Layout,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import styled from "react-emotion";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "rgb(242,242,242)",
    secondary: "rgb(43,21,21)",
    tertiary: "rgb(224, 69,86)",
    quartenary: "rgb(127,127,127)"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  t: require("./images/t.png"),
  s: require("./images/s.webm"),
  flow: require("./images/flow.png"),
  elm: require("./images/elm.png"),
  typescript: require("./images/typescript.png"),
  reasonml: require("./images/re.jpg"),
  howtodrawnanowl: require("./images/drawnanowl.jpg"),
  owllenses: require("./images/owllenses.png"),
  flyby: require("./images/flyby.png"),
  name: require("./images/name.svg"),
  flownumber: require("./images/flownumber.png"),
  tsnumber: require("./images/tsnumber.png"),
  fishy: require("./images/fishy.mp4"),
  amiss: require("./images/amiss.jpg"),
  snow: require("./images/snow.gif")
};

const FunHeading = styled(Heading)`
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  border: none;
  font: normal 84px / normal "Anton", Helvetica, sans-serif;
  color: rgb(224, 69, 86);
  text-align: center;
  -o-text-overflow: clip;
  text-overflow: clip;
  text-shadow: 1px 1px 0 #fff, 2px 2px 0 #db4d3f, 3px 3px 0 #01667f, 4px 4px 0 #333333;
`;

const HighlightTextBlue = styled("span")`
  color: #01667f;
`;

const HighlightTextDarkGrey = styled("span")`
  color: rgb(43, 21, 21);
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme} contentWidth={1280} contentHeight={720}>
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
          <Image src={images.name} margin="200px 0 0 0" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <FunHeading fit size={1} caps lineHeight={1} margin="0 0 0 -20px" textColor="secondary">
            Types!
          </FunHeading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            They <HighlightTextDarkGrey>promise</HighlightTextDarkGrey>
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
            Types are
          </Heading>
          <Heading fit caps textColor="tertiary" margin={10} padding={"30px 0"}>
            Wonderful
          </Heading>
        </Slide>

        <Slide transition={["slide"]} align="left top" bgImage={images.amiss}>
          <Heading size={1} caps textAlign="right" textColor="primary">
            Are
          </Heading>
          <Heading size={1} caps textAlign="right" textColor="primary">
            they?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            They are are in use but...
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            why aren't types
          </Heading>

          <Heading fit caps lineHeight={1} textColor="tertiary">
            everywhere?
          </Heading>
        </Slide>

        {/* Bubble ciites */}
        {/* why drag kicking and screaming */}

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary" />
          <Heading size={2} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🇺🇸 Boston: 10%
          </Heading>
          <Heading size={2} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🇬🇧 Manchester: 15%
          </Heading>
          <Heading size={2} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🇩🇪 Berlin: 35%
          </Heading>
        </Slide>

        {/* teams also i seen */}

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Typed JS
          </Heading>
          <Heading fit caps textColor="tertiary" margin={10} padding={"30px 0"}>
            isn't new
          </Heading>
        </Slide>

        {/* the fact there's choices means tradeoffs" */}

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.flow} height="200px" />
              <Appear>
                <Heading margin="0 0 50px 0" size={3} caps lineHeight={1} textColor="secondary">
                  2014
                </Heading>
              </Appear>
            </Fill>
            <Fill>
              <Image src={images.typescript} height="200px" />
              <Appear>
                <Heading margin="0 0 50px 0" size={3} caps lineHeight={1} textColor="secondary">
                  2012
                </Heading>
              </Appear>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.elm} height="200px" />
              <Appear>
                <Heading size={3} caps lineHeight={1} textColor="secondary">
                  2012
                </Heading>
              </Appear>
            </Fill>
            <Fill>
              <Image src={images.reasonml} height="200px" />
              <Appear>
                <Heading size={3} caps lineHeight={1} textColor="secondary">
                  2016
                </Heading>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading margin="200px 0 0 0" textAlign="left" size={4} caps lineHeight={1} textColor="white">
            What happened
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="white">
          <Image height="600px" src={images.howtodrawnanowl} />
        </Slide>

        {/* Bimodal */}

        {/* uuuuuse ttytttpes */}

        <Slide transition={["slide"]} bgImage={images.flyby}>
          <Heading fit size={1} caps margin="00px 0 0 0" lineHeight={1} textColor="tertiary">
            Use tyyyypes
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.tsnumber} />
        <Slide transition={["slide"]} bgImage={images.flownumber} />
        <Slide transition={["slide"]} bgColor="white">
          <Image src={images.owllenses} height="600px" />
        </Slide>
        <Slide transition={["slide"]} bgImage={images.snow}>
          <Heading margin="200px 0 0 0" textAlign="left" size={4} caps lineHeight={1} textColor="white">
            frustrations
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Developer frustrations
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🐢 "Makes my computer crawl"
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            💥 "It breaks things"
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            💼 "Brings so many chores"
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            💸 "Doesn't seem worth it"
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Heading size={5} caps lineHeight={1} textColor="secondary">
                Tooling
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Slow checks
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Package Interactions
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Bad errors
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Setup
              </Heading>
            </Fill>
            <Fill>
              <Heading size={5} caps lineHeight={1} textColor="secondary">
                Language
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Annotation
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Permissive
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                External
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Features
              </Heading>
            </Fill>
            <Fill>
              <Heading size={5} caps lineHeight={1} textColor="secondary">
                Approach
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                ANY
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Embrace new features
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Structures
              </Heading>
            </Fill>
          </Layout>
        </Slide>


      {/* handme down laptop */}
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Tooling
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary">
            Slow
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="quartenary">
            Compiling, inferring, editor integration
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary">
            Interdependecy
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="quartenary">
            Volatile upgrades, fear of change
          </Heading>

                    <Heading size={3} caps textAlign="left" textColor="tertiary">
            Bad errors
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="quartenary">
            Cryptic, unhelpful or misleading
          </Heading>

                    <Heading size={3} caps textAlign="left" textColor="tertiary">
            Setup
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="quartenary">
            Large configs and complexi build process
          </Heading>

          <Heading size={6} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            Bad errors - cryptic, unhelpful, misleading
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            Setup - Coofiguation
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
