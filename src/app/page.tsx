// @ts-nocheck
"use client";
import React, { createElement } from "react";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { Autocomplete } from "./components/Autocomplete";
import { ProductItem } from "./components/ProductItem";

const appId = "latency";
const apiKey = "6be0576ff61c053d5f9a3225e2a90f76";
const searchClient = algoliasearch(appId, apiKey);

function Page() {
  return (
    <div className="app-container">
      <h1>React Application</h1>
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
                    indexName: "instant_search",
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
    </div>
  );
}

export default Page;
