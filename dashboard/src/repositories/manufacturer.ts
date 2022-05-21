import {
  CreateManufacturerInput,
  UpdateManufacturerInput,
} from "@ts-types/generated";
import Base from "./base";

class Manufacturer extends Base<
  CreateManufacturerInput,
  UpdateManufacturerInput
> {}

export default new Manufacturer();
