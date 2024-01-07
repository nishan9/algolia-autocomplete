"use client";
import React, { createElement } from "react";

export function ProductItem({ hit, components }: any) {
  return (
    <a href={hit.url} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle p-2">
          <p>{hit.title}</p>
        </div>
      </div>
    </a>
  );
}
