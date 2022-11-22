import React from "react";
import { Attribute } from "@framework/types";
import { ColorFilter } from "@components/shop/color-filter";
import { VariationFilter } from "@components/shop/variation-filter";

type Props = {
  attributes: Attribute[]
}

export const AttributesFilter: React.FC<Props> = ({ attributes }) => (
  <>
    {attributes.map((attribute: Attribute) => attribute.slug === 'color'
      ? <ColorFilter attribute={attribute} key={attribute.id}/> :
      <VariationFilter attribute={attribute} key={attribute.id}/>)}
  </>
)