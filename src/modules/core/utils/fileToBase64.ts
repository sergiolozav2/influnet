export async function fileToBase64(file: File) {
  const promise = new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      }
      reject("File isn't a string");
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
  return promise;
}
