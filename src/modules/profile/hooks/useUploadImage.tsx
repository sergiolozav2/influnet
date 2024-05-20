import { ChangeEvent, useMemo, useRef } from "react";

type Props = {
  onUpload: (file: File) => Promise<void>;
  accept?: string;
};

export function useUploadFile(data: Props) {
  const inputFileRef = useRef<HTMLInputElement>(null);

  function openFileInput() {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }

  const input = useMemo(() => {
    async function onChange(event: ChangeEvent<HTMLInputElement>) {
      const file = event.target?.files?.item(0);
      if (!file) {
        return;
      }
      data.onUpload(file);
    }
    const input = (
      <input
        className="hidden"
        type="file"
        accept={data.accept}
        ref={inputFileRef}
        onChange={onChange}
      />
    );
    return input;
  }, [data]);

  return { openFileInput, input };
}
