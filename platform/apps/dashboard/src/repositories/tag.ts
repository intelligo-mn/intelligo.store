import { CreateTag, UpdateTag } from "@intelligo/dashboard/ts-types/generated";
import Base from "./base";

class Tag extends Base<CreateTag, UpdateTag> {}

export default new Tag();
