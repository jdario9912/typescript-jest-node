import pkg from "../package.json";
import { projectDescriptionTypeConIndex } from "../types/types";

const projectDescription: projectDescriptionTypeConIndex = {
  name: JSON.stringify(pkg.name),
  version: JSON.stringify(pkg.version),
  description: JSON.stringify(pkg.description),
  author: JSON.stringify(pkg.author),
};
export { projectDescription };
