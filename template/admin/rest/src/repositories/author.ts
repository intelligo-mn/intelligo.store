import { CreateAuthorInput, UpdateAuthorInput } from "@ts-types/generated";
import Base from "./base";

class Author extends Base<CreateAuthorInput, UpdateAuthorInput> {}

export default new Author();
