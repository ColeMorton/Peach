import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("LoadingIndicator", module)
  .add("default", () => (
    <Component></Component>
  ));
