import React from "react";
import { User } from "../interfaces";
import LocaleLink from "./LocaleLink";

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <LocaleLink href={`/users/${encodeURIComponent(data.id)}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </LocaleLink>
);

export default ListItem;
