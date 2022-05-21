import { CloseIcon } from "@components/icons/close-icon";
import { SearchIcon } from "@components/icons/search-icon";
import cn from "classnames";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";

const classes = {
  root: "ps-10 pe-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0",
  normal:
    "bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent",
  solid:
    "bg-gray-100 border border-border-100 focus:bg-light focus:border-accent",
  outline: "border border-border-base focus:border-accent",
  shadow: "focus:shadow",
};

type SearchProps = {
  className?: string;
  shadow?: boolean;
  variant?: "normal" | "solid" | "outline";
  inputClassName?: string;
  onSearch: (data: SearchValue) => void;
};

type SearchValue = {
  searchText: string;
};

const Search: React.FC<SearchProps> = ({
  className,
  onSearch,
  variant = "outline",
  shadow = false,
  inputClassName,
  ...rest
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors },
  } = useForm<SearchValue>({
    defaultValues: {
      searchText: "",
    },
  });
  const searchText = watch("searchText");
  const { t } = useTranslation();

  useEffect(() => {
    if (!searchText) {
      onSearch({ searchText: "" });
    }
  }, [searchText]);

  const rootClassName = cn(
    classes.root,
    {
      [classes.normal]: variant === "normal",
      [classes.solid]: variant === "solid",
      [classes.outline]: variant === "outline",
    },
    {
      [classes.shadow]: shadow,
    },
    inputClassName
  );

  function clear() {
    reset();
    onSearch({ searchText: "" });
  }

  return (
    <form
      noValidate
      role="search"
      className={cn("w-full flex items-center relative", className)}
      onSubmit={handleSubmit(onSearch)}
    >
      <label htmlFor="search" className="sr-only">
        {t("form:input-label-search")}
      </label>
      <button className="outline-none absolute start-1 focus:outline-none active:outline-none p-2 text-body">
        <SearchIcon className="w-5 h-5" />
      </button>
      <input
        type="text"
        id="search"
        {...register("searchText")}
        className={rootClassName}
        placeholder={t("form:input-placeholder-search")}
        aria-label="Search"
        autoComplete="off"
        {...rest}
      />
      {errors.searchText && <p>{errors.searchText.message}</p>}
      {!!searchText && (
        <button
          type="button"
          onClick={clear}
          className="outline-none absolute end-1 focus:outline-none active:outline-none p-2 text-body"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      )}
    </form>
  );
};

export default Search;
