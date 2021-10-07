/* eslint-disable react/prop-types */
import React from "react";

import { Flex } from "grid-styled";

function normalizeArray(array: any) {
  if (Array.isArray(array)) {
    array = array.filter(a => a);
    if (array.length === 0) {
      array = null;
    }
  }
  return array;
}

type Props = {
  children: React.ReactNode;
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
}

const ButtonBar: React.FC<Props> = ({
  children,
  left = children,
  center,
  right,
  ...props
}) => {
  left = normalizeArray(left);
  center = normalizeArray(center);
  right = normalizeArray(right);
  return (
    <Flex align="center" {...props}>
      <Flex
        align="center"
        justifyContent="flex-start"
        className={center ? "flex-full flex-basis-none" : "mr-auto"}
      >
        {left}
      </Flex>
      {center && <Flex align="center">{center}</Flex>}
      <Flex
        align="center"
        justifyContent="flex-end"
        className={center ? "flex-full flex-basis-none" : "ml-auto"}
      >
        {right}
      </Flex>
    </Flex>
  );
}

export default ButtonBar;