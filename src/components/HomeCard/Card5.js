import { Card, Col, Text } from "@nextui-org/react";
import "./Card.css";
import Typewriter from "typewriter-effect";

export const Card5 = () => (
  <Card css={{ w: "100%", h: "700px", margin: "20px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text
          class="text-animation"
          size={12}
          weight="bold"
          transform="uppercase"
          color="#9E9E9E"
        >
          On Campus
        </Text>
        <Typewriter
          options={{
            strings: ["find your questions paper"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
        <Text class="text-animation" h1 color="white">
          Browse Questions and solutions on the go!!
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149146010.jpg?w=1800&t=st=1687917931~exp=1687918531~hmac=412e6600150d096c4be849b176fe9f74d9e48f8106d0d262f8b30f2ca9ebd175"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Dark theme"
      />
    </Card.Body>
  </Card>
);
