import React from "react";
import BrowseContainer from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selectionFilter";
export default function Browse() {
  // Get series
  const { series } = useContent("series"); // [target]:content
  console.log(series);

  // Get films
  const { films } = useContent("films"); // [target]:content
  console.log(films);

  // Get slides
  const slides = selectionFilter({ series, films });
  console.log(slides);

  // pass to browse container

  return <BrowseContainer slides={slides} />;
}
