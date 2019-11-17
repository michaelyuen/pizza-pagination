import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PizzaPagination from "./PizzaPagination";

storiesOf("PizzaPagination", module).add("default", () => (
  <PizzaPagination currentPage={1} numberOfPages={10} onPageChange={() => {}} />
));
