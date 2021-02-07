import React from "react";
import Link from "next/link";

import { User } from "../interfaces";
import useTranslation from "../hooks/useTranslation";

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => {
  const { locale } = useTranslation();

  return (
    <Link href={`/[lang]/users/[id]`} as={`/${locale}/users/${data.id}`}>
      <a>
        {data.id}: {data.name}
      </a>
    </Link>
  );
};

export default ListItem;
