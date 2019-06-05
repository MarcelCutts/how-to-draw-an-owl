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
  snow: require("./images/snow.gif"),
  reasonSplash: require("./images/reasonsplash.png"),
  ocaml: require("./images/ocaml.png"),
  bloomberg: require("./images/bloomberg.jpg"),
  simple: require("./images/packagejson.png"),
  inference: require("./images/inference.png"),
  rr: require("./images/rr.png"),
  palmer: require("./images/palmer.png"),
  jsoninf: require("./images/jsoninf.png"),
  bs: require("./images/bs.png"),
  ppx: require("./images/ppx.gif"),
  variants: require("./images/variants.png"),
  patternmatching: require("./images/patternmatching.png"),
  wat: require("./images/wat.gif"),
  erlang: require("./images/erlang.png"),
  elixir: require("./images/elixir.png"),
  whatsApp: require("./images/whatsapp.svg"),
  expressive: require("./images/expressive.png"),
  errors: require("./images/errors.png"),
  owlMystery: require("./images/owlmystery.png"),
  owlBasic: require("./images/owlbasic.png"),
  owlComplete: require("./images/owlcomplete.png"),
  nest: require("./images/nest.gif"),
  addType: require("./images/addType.png"),
  flowLogo: require("./images/flow-logo.png"),
  babelLogo: require("./images/babel-logo.png"),
  esLintLogo: require("./images/es-lint-logo.png"),
  prettierLogo: require("./images/prettier-logo.png"),
  ocamlCode: require("./images/ocamlcode.png"),
  simple: require("./images/simple.gif"),
  simpleReason: require("./images/simple.png"),
  yahoo: require("./images/yahoo.png"),
  jquery: require("./images/jquery.gif"),
  node: require("./images/node.png"),
  chrome: require("./images/chrome.png"),
  electron: require("./images/electron.png"),
  so: require("./images/so.png"),
  codegen: require("./images/codegen.png"),
  basic: require("./images/basic.png"),
  error: require("./images/error.png"),
  external: require("./images/external.png"),
  raw: require("./images/raw.png"),
  es2030: require("./images/es2030.png"),
  react: require("./images/react.png")
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
  text-shadow: 1px 1px 0 #fff, 2px 2px 0 #db4d3f, 3px 3px 0 #01667f,
    4px 4px 0 #333333;
`;

const GreyedImage = styled(Image)`
  filter: grayscale(100%);
`;

const HighlightTextBlue = styled("span")`
  color: #01667f;
`;

const HighlightTextRed = styled("span")`
  color: rgb(224, 69, 86);
`;

const HighlightTextDarkGrey = styled("span")`
  color: rgb(43, 21, 21);
`;

const Spacer = styled("div")`
  width: 10%;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}
        contentWidth={1600}
        contentHeight={1080}
      >
        <Slide align="left top" transition={["slide"]} bgImage={images.s}>
          <Heading
            textAlign="left"
            size={1}
            caps
            lineHeight={1}
            textColor="white"
          >
            How to
          </Heading>
          <Heading
            textAlign="left"
            size={1}
            caps
            lineHeight={1}
            textColor="white"
          >
            draw an
          </Heading>
          <Heading
            textAlign="left"
            size={1}
            caps
            lineHeight={1}
            textColor="white"
          >
            owl
          </Heading>
          <Image src={images.name} height={130} margin="500px 0 0 0" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <FunHeading
            fit
            size={1}
            caps
            lineHeight={1}
            margin="0 0 0 -20px"
            textColor="secondary"
          >
            Types!
          </FunHeading>
        </Slide>
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes="this talk about is what they said they offer,why we havent got what we
          were promised and how we can get more out of typses"
        >
          <Heading
            size={1}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"40px 0"}
          >
            What was <HighlightTextRed>promised?</HighlightTextRed>
          </Heading>
          <Heading
            size={1}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"40px 0"}
          >
            Why does it feel like it{" "}
            <HighlightTextRed>falls short?</HighlightTextRed>
          </Heading>
          <Heading
            size={1}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"40px 0"}
          >
            Can we do <HighlightTextRed>better?</HighlightTextRed>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor="secondary">
            "JavaScript has types?"
          </Heading>
          <Heading size={3} textColor="tertiary">
            - A very senior Twitter engineer
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={4}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            ⏱ Designed in <HighlightTextRed>10 days</HighlightTextRed> by
            Brendan Eich
          </Heading>
          <Heading
            size={4}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            👩‍🎤 Inspired by <HighlightTextRed>Smalltalk</HighlightTextRed> and{" "}
            <HighlightTextRed>Scheme</HighlightTextRed>
          </Heading>
          <Heading
            size={4}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            🍡 Just a "glue" language for{" "}
            <HighlightTextRed>amateurs</HighlightTextRed>
          </Heading>

          <Appear>
            <Heading fit textColor="tertiary" margin="60px 0 0 0">
              🔥🎉 GMAIL 🔥🎉
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]}>
          <Image width="100%" src={images.yahoo} />
        </Slide>

        <Slide transition={["zoom"]}>
          <Image height="60%" src={images.jquery} />
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={1} textColor="secondary" caps>
            The DOM is a{" "}
            <HighlightTextRed>terrible foundation</HighlightTextRed>, but...
          </Heading>
          <Heading
            size={4}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            🚪 INCREDIBLY accessible platform
          </Heading>
          <Heading
            size={4}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            ⚡️ Push updates instantly
          </Heading>

          <Heading
            size={4}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            👷‍♀️ No build pipeline
          </Heading>

          <Heading
            size={4}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            💸 Minimal startup cost
          </Heading>
        </Slide>

        <Slide transition={["zoom"]}>
          <Layout>
            <Fill>
              <Image width="60%" src={images.chrome} />
            </Fill>
            <Fill>
              <Image width="100%" src={images.node} />
            </Fill>
            <Fill>
              <Image width="60%" src={images.electron} />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgImage={images.so} />

        <Slide transition={["slide"]}>
          <Heading
            fit
            size={1}
            caps
            margin="00px 0 0 0"
            lineHeight={1}
            textColor="secondary"
          >
            Modern JS
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👨‍🚀 Greater complexity
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👓 More critical
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🛠 Long lived
          </Heading>

          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🏃‍♂️ Runs everywhere
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.typescript} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.babelLogo} height="250px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.esLintLogo} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.prettierLogo} height="250px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} textColor="secondary">
            "ARMv8.3 adds a new float-to-int instruction with errors and
            out-of-range values handled
            <HighlightTextRed> the way that JavaScript </HighlightTextRed>
            wants. The previous [instructions] to get JavaScript’s semantics
            were much slower."
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <FunHeading
            fit
            size={1}
            caps
            lineHeight={1}
            margin="0 0 0 -20px"
            textColor="secondary"
          >
            Types!
          </FunHeading>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            They <HighlightTextDarkGrey>promised</HighlightTextDarkGrey>
          </Heading>
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            a lot
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Types promised us...
          </Heading>
          <Heading
            size={3}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🏋🏿‍♂️ Confidence in code
          </Heading>
          <Heading
            size={3}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🏎 Faster refactoring
          </Heading>
          <Heading
            size={3}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            💥 No runtime errors
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Types promised us...
          </Heading>
          <Heading
            size={3}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            📝 Fewer test cases
          </Heading>
          <Heading
            size={3}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👓 Improved readability
          </Heading>
          <Heading
            size={3}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
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
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🇺🇸 Boston: 10%
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🇬🇧 Manchester: 15%
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🇩🇪 Berlin: 35%
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🇮🇱 Tel Aviv: 20%
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
                <Heading
                  margin="0 0 50px 0"
                  size={3}
                  caps
                  lineHeight={1}
                  textColor="secondary"
                >
                  2014
                </Heading>
              </Appear>
            </Fill>
            <Fill>
              <Image src={images.typescript} height="200px" />
              <Appear>
                <Heading
                  margin="0 0 50px 0"
                  size={3}
                  caps
                  lineHeight={1}
                  textColor="secondary"
                >
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

        <Slide
          transition={["slide"]}
          notes="We only had a clear frontrunner emerge recently, by picking up some of the pain points. But why is it 8 years 7 years after TS launched it's still not widely adopted and even then, embraced haphazardly"
        >
          <Image src={images.typescript} height="400px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Even in teams that use types
          </Heading>
          <Heading fit caps textColor="tertiary" margin={10} padding={"30px 0"}>
            rarely embrace
          </Heading>
          <Heading fit caps textColor="tertiary" margin={10} padding={"30px 0"}>
            them fully
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.palmer} />

        <Slide transition={["slide"]} bgImage={images.wat}>
          <Heading
            margin="200px 0 0 0"
            textAlign="left"
            size={1}
            caps
            lineHeight={1}
            bgColor="rgba(255,255,255, 0.8)"
            textColor="tertiary"
          >
            How did we
          </Heading>
          <Heading
            bgColor="rgba(255,255,255, 0.8)"
            textAlign="left"
            size={1}
            caps
            lineHeight={1}
            textColor="tertiary"
          >
            get here?
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading
            fit
            size={1}
            caps
            margin="00px 0 0 0"
            lineHeight={1}
            textColor="secondary"
          >
            Modern JS
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👨‍🚀 Greater complexity
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👓 More critical
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🛠 Long lived
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🏃‍♂️ Runs everywhere
          </Heading>
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage={images.flyby}
          notes="some well meaning haskelite"
        >
          <Heading fit size={1} caps lineHeight={1} textColor="tertiary">
            Use tyyyypes
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="white">
          <Image height="600px" src={images.howtodrawnanowl} />
        </Slide>

        <Slide transition={["slide"]} bgColor="white">
          <Image height="600px" src={images.owlMystery} />
        </Slide>

        {/* Bimodal */}

        {/* uuuuuse ttytttpes */}
        <Slide transition={["slide"]} bgImage={images.addType} />

        <Slide
          transition={["slide"]}
          bgColor="white"
          notes="these instructions are clear, understandable, and easy to follow. How do you get from this toy to a full application? How hard can it be?"
        >
          <Image height="600px" src={images.owlBasic} />
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Heading fit caps textColor="secondary">
            Then you use types
          </Heading>
          <Heading fit caps textColor="secondary">
            in a <HighlightTextRed>real project</HighlightTextRed>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="white">
          <Heading caps fit textColor="secondary">
            Types come with
          </Heading>
          <Heading caps fit textColor="tertiary">
            challenges
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Writing types
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Maintaining types
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Third party types
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Duplicate types
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Editor tooling
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Build process
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Opportunity cost
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Long term risk
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                People
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Heading
            size={1}
            caps
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            People
          </Heading>
          <Heading
            size={3}
            caps
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            People are always tricky
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Heading caps fit textColor="tertiary">
            Type promises
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Code confidence
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Refactoring
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Runtime errors
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Fewer test cases
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Readability
              </Heading>
              <Heading
                size={3}
                textAlign="left"
                textColor="secondary"
                padding={"30px 30px"}
              >
                Tooling
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transition={["slide"]}
          bgColor="white"
          notes="You just wanted to ship an app but now you have to understand GADTs"
        >
          <Image src={images.owlComplete} height="600px" />
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage={images.snow}
          notes="if we were to look at the shortcomings systematically"
        >
          <Heading
            margin="200px 0 0 0"
            textAlign="left"
            size={4}
            caps
            lineHeight={1}
            textColor="white"
          >
            frustrations
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Tooling
          </Heading>

          <Heading size={3} caps lineHeight={1} textColor="secondary">
            and
          </Heading>

          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Language
          </Heading>
        </Slide>

        {/* handme down laptop - joke about cost */}
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Tooling
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary">
            Editor integration
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="quartenary">
            Speed, ease, helpfulness
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
            Large configs and complex build process
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Language
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary">
            Annotation
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="quartenary">
            Verbose chore makes engineer unhappy
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary">
            Permissive
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="quartenary">
            Type soundness and nullable
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary">
            External
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="quartenary">
            It's hard to use packages we rely on
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary">
            Features
          </Heading>
          <Heading size={6} caps textAlign="left" textColor="quartenary">
            Just types on JS, missing key beneifts
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            What have we learnt?
          </Heading>
          <Heading fit caps lineHeight={1} textColor="tertiary">
            Typing JS
          </Heading>
          <Heading fit caps lineHeight={1} textColor="tertiary">
            is hard
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Should we just
          </Heading>
          <Heading fit caps lineHeight={1} textColor="tertiary">
            give up?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit caps lineHeight={1} textColor="primary">
            Of course
          </Heading>
          <Heading fit caps lineHeight={1} textColor="primary">
            not!
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading
            fit
            size={1}
            caps
            margin="00px 0 0 0"
            lineHeight={1}
            textColor="secondary"
          >
            Modern JS
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👨‍🚀 Greater complexity
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👓 More critical
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🛠 Long lived
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🏃‍♂️ Runs everywhere
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            We can <HighlightTextRed>iterate</HighlightTextRed>
          </Heading>
          <Heading fit caps lineHeight={1} textColor="secondary">
            to a positive outcome
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes="If we look at the landscape we can see each one tried to do different parts"
        >
          <Layout>
            <Fill>
              <Image src={images.flow} height="300px" />
            </Fill>
            <Fill>
              <Image src={images.typescript} height="300px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.elm} height="300px" />
            </Fill>
            <Fill>
              <Image src={images.reasonml} height="300px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <GreyedImage src={images.flow} height="300px" />
            </Fill>
            <Fill>
              <Image src={images.typescript} height="300px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <GreyedImage src={images.elm} height="300px" />
            </Fill>
            <Fill>
              <GreyedImage src={images.reasonml} height="300px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Layout>
            <Fill>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Tooling
              </Heading>
              <Image src={images.typescript} height="200px" />
              <Appear>
                <Heading
                  size={6}
                  caps
                  textColor="tertiary"
                  margin={10}
                  padding={"30px 0"}
                >
                  (Speed?)
                </Heading>
              </Appear>
            </Fill>
            <Fill>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Language
              </Heading>
              <Heading
                size={6}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Annotation
              </Heading>
              <Heading
                size={6}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Permissive
              </Heading>
              <Heading
                size={6}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                External
              </Heading>
              <Heading
                size={6}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Features
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgImage={images.nest}>
          <Heading fit bgColor="rgba(255,255,255,0.8)">
            Where next?
          </Heading>
        </Slide>

        <Slide align="flex-start center" transition={["zoom"]}>
          <Image width="10%" src={images.typescript} />

          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🏎 Speed updates!
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🗣 Incremental language
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🛠 Supporting tools
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
          <Image width="100%" src={images.codegen} />
        </Slide>

        <Slide align="flex-start center" transition={["zoom"]}>
          <Image width="10%" src={images.typescript} />

          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            😩 Build process complex
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🚨 Type soundness
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🛑 Language limits
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👏 GREAT introduction
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <GreyedImage src={images.flow} height="300px" />
            </Fill>
            <Fill>
              <GreyedImage src={images.typescript} height="300px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <GreyedImage src={images.elm} height="300px" />
            </Fill>
            <Fill>
              <Image src={images.reasonml} height="300px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="secondary">
            Typing JS is
          </Heading>
          <Heading size={1} caps textColor="tertiary" margin="0 0 60px 0">
            really hard
          </Heading>
          <Heading size={1} caps textColor="secondary" margin="60px 0">
            Would getting a natively typed language outputting JS be
            <HighlightTextRed> easier?</HighlightTextRed>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.ocaml} width="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.ocaml} width="50%" />
          <Layout>
            <Fill>
              <Heading caps size={3} textAlign="left" margin="60px 0">
                Stunning compiler
              </Heading>
              <Heading caps size={3} textAlign="left" margin="60px 0">
                Easily extensible
              </Heading>
            </Fill>
            <Fill>
              <Heading caps size={3} textAlign="left" margin="60px 0">
                Hindley-Milner type system
              </Heading>
              <Heading caps size={3} textAlign="left" margin="60px 0">
                Used in critcal roles for years
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.bloomberg} height={"100%"} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.bs} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2}>OCaml</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>Bucklescript</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>JavaScript</Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.ocamlCode} />

        <Slide transition={["zoom"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image width={"80%"} src={images.erlang} />
            </Fill>
            <Fill>
              <Image width={"70%"} src={images.elixir} />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.reasonSplash} width="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2}>OCaml/ReasonML</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>Bucklescript</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>JavaScript</Heading>
        </Slide>

        <Slide bgImage={images.basic} />

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={3} textAlign="left" textColor="primary" margin={10}>
            Marcel, you idiot. Are you seriously suggesting I write applications
            in an alternative syntax for a 20 year old systems language that is
            compiled to JavaScript by a fancy keyboard company?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit textColor="tertiary">
            Yes.
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} textAlign="left" textColor="primary" margin={10}>
            Who would imagine such a thing let alone build it?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.react} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Tooling
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Slow
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Unhelpful
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Build process
              </Heading>
            </Fill>
            <Fill>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Language
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Annotation
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Permissive
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                External
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Features
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Facebook messenger rebuild
          </Heading>
          <Heading fit size={1} caps lineHeight={1} textColor="tertiary">
            {"< 0.1ms"}
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.simple} />

        <Slide transition={["slide"]} bgImage={images.error} />

        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Tooling
              </Heading>
              <Image src={images.reasonml} height="300px" />
            </Fill>
            <Fill>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Language
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Annotation
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Permissive
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                External
              </Heading>
              <Heading
                size={4}
                caps
                textColor="tertiary"
                margin={10}
                padding={"30px 0"}
              >
                Features
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.inference} />

        <Slide transition={["fade"]} bgImage={images.external} />

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading fit caps textColor="secondary">
            ES<HighlightTextRed>2030</HighlightTextRed>
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.es2030} />
        <Slide transition={["fade"]} bgImage={images.raw} />

        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Tooling
              </Heading>
              <Image src={images.reasonml} height="300px" />
            </Fill>
            <Fill>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Language
              </Heading>
              <Image src={images.reasonml} height="300px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading fit caps textColor="secondary">
            <HighlightTextRed>ReasonML</HighlightTextRed> Tradeoffs
          </Heading>

          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            📚 JSON clunky
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            🤨 Async quibbling
          </Heading>
          <Heading
            size={2}
            caps
            textAlign="left"
            textColor="secondary"
            margin={10}
            padding={"30px 0"}
          >
            🔭 Pioneering is hard
          </Heading>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading fit caps textColor="secondary">
            Should <HighlightTextRed> you </HighlightTextRed> try it?
          </Heading>
          <Appear>
            <Heading fit caps textColor="secondary" margin="30px 0">
              Slowly, maybe where TS fails?
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading fit textColor="primary">
            What did we learn?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Types in JS are
          </Heading>
          <Heading fit size={1} caps lineHeight={1} textColor="tertiary">
            hard
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Types are still
          </Heading>
          <Heading fit caps lineHeight={1} textColor="tertiary">
            important
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Effective change requires
          </Heading>
          <Heading fit caps lineHeight={1} textColor="tertiary">
            Incremental progress
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Be the change
          </Heading>
          <Heading fit size={1} caps lineHeight={1} textColor="tertiary">
            you want to see in the world
          </Heading>
        </Slide>

        <Slide align="left top" transition={["slide"]} bgImage={images.s}>
          <Heading
            textAlign="left"
            size={1}
            caps
            margin="200px 0 0 0"
            lineHeight={1}
            textColor="white"
          >
            Thanks :)
          </Heading>
          <Image height="13%" src={images.name} margin="300px 0 0 0" />
        </Slide>
      </Deck>
    );
  }
}
