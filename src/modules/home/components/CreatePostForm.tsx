import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fileToBase64 } from "@/modules/core/utils/fileToBase64";
import { ChangeEvent, useRef, useState } from "react";
import { FaImage } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useCreatePost } from "../hooks/useCreatePost";
import imageCompression from "browser-image-compression";

type CreatePostFormProps = {
  handleSuccess: () => void;
};
export function CreatePostForm(props: CreatePostFormProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);

  function openFileInput() {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }

  async function handleUploadFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target?.files?.item(0);
    if (!file) {
      return;
    }
    const compressed = await imageCompression(file, {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 512,
    });
    const urlBase64 = await fileToBase64(compressed);
    setPreview(urlBase64);
  }

  function handleRemoveFile() {
    setPreview(null);
  }

  const post = useCreatePost({ handleSucess: props.handleSuccess });
  function handleUploadPost() {
    post.mutate({ descripcion: descripcion, imagen: preview ?? "" });
  }
  const [preview, setPreview] = useState<string | null>(null);
  const [descripcion, setDescripcion] = useState("");

  return (
    <div className="flex flex-col">
      {preview && (
        <div className="relative flex max-h-32 w-full border border-border">
          <img className="object-cover" src={preview} />
          <button
            className="absolute right-2 top-2 rounded-full bg-black/20 p-1.5"
            onClick={handleRemoveFile}
          >
            <MdClose />
          </button>
        </div>
      )}
      <textarea
        className="mt-4 flex w-full rounded-md border border-input bg-background px-3 py-2 pb-8 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        placeholder="¿Que te gustaría compartir?"
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <Button
        className="mt-2 flex items-center justify-start"
        variant="ghost"
        onClick={openFileInput}
      >
        <FaImage className="mr-3 text-secondary" />
        <p> {preview ? "Reemplazar" : "Agregar"} imagen</p>
        <Input
          accept="image/png, image/jpg, image/jpeg"
          className="hidden"
          type="file"
          ref={inputFileRef}
          onChange={handleUploadFile}
        />
      </Button>
      <Button className="mt-4" onClick={handleUploadPost}>
        Compartir
      </Button>
    </div>
  );
}
