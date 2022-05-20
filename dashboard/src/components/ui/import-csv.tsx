import { UploadIcon } from "@components/icons/upload-icon";

import { useDropzone } from "react-dropzone";

export default function ImportCsv({ onDrop, loading, title }: any) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".csv",
    multiple: false,
    onDrop,
  });

  return (
    <section className="upload">
      <div
        {...getRootProps({
          className:
            "border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none p-5",
        })}
      >
        <input {...getInputProps()} />
        {loading && (
          <span
            className="h-[30px] w-[30px] ms-2 rounded-full border-2 border-transparent border-t-2 animate-spin"
            style={{
              borderTopColor: "rgb(var(--color-accent))",
            }}
          />
        )}
        {!loading && <UploadIcon className="text-muted-light" />}
        <p className="text-body text-sm mt-4 text-center">
          <span className="text-accent font-semibold">{title}</span>
        </p>
      </div>
    </section>
  );
}
