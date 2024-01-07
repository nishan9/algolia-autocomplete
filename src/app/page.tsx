// @ts-nocheck
"use client";
import React, { createElement } from "react";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { Autocomplete } from "./components/Autocomplete";
import { ProductItem } from "./components/ProductItem";

const appId = "E1TXPKYP9U";
const apiKey = "558b522985ea1f3a603fdb2196da443c";
const searchClient = algoliasearch(appId, apiKey);

function Page() {
  return (
    <Autocomplete
      openOnFocus={true}
      getSources={({ query }) => [
        {
          sourceId: "products",
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName:
                    "netlify_aa5cd1dd-815c-44fc-908a-67f4ec2ba3b8_master_all",
                  query,
                },
              ],
            });
          },
          templates: {
            item({ item, components }) {
              return <ProductItem hit={item} components={components} />;
            },
          },
        },
      ]}
    />
  );
}

export default Page;
