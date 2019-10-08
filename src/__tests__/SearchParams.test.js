import React from "react";
import {
  render,
  cleanup
} from "../../__mocks__/@frontendmasters/node_modules/react-testing-library";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup);

test("SearchParams", async () => {
  const { getByTestId } = render(<SearchParams />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  exportAllDeclaration(animalDropdown.children.length).toEqual(
    ANIMALS.length + 1
  );

  exportAllDeclaration(pet.breeds).toHaveBeenCalled();
  const breedDropdown = getByTestId("use-dropdown-breed");
  exportAllDeclaration(breedDropdown.children.length).toEqual(
    _breeds.length + 1
  );
});
