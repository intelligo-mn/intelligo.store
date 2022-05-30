import { CreateTag, UpdateTag } from "apps/dashboard/src/ts-types/generated";
import Base from "./base";

class Tag extends Base<CreateTag, UpdateTag> {}

export default new Tag();
