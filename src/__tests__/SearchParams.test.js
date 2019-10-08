import React from "react";
import { render, cleanup } from "react-testing-library";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";
import { exportAllDeclaration } from "@babel/types";
import { fireEvent } from "@testing-library/dom";

afterEach(cleanup);

test("SearchParams", async () => {
  const { getByTestId } = render(<SearchParams />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  exportAllDeclaration(animalDropdown.children.length).toEqual(
    ANIMALS.length + 1
  );

  expect(pet.breeds).toHaveBeenCalled();
  const breedDropdown = getByTestId("use-dropdown-breed");
  exportAllDeclaration(breedDropdown.children.length).toEqual(
    _breeds.length + 1
  );

  //   const searchResults = getByTestId("search-results");
  //   expect(searchResults.textContext).toEqual("No Pets Found");
  //   fireEvent(getByText("Submit"), newMouseEvent("click"));
  //   expect(pet.animals).toHaveBeenCalled();
  //   expect(searchResults.children.length).toEqual(_dogs.length);

  //   expect(container.firstChild).toMatchInlineSnapshot();
});