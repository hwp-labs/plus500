export interface Data {
  file?: File;
  fileSizeMb?: string;
  blob?: Blob;
  base64?: string;
}

export const mockData = {
  file: {
    lastModified: 1598637436000,
    name: "filename.png",
    size: 41854, // bytes
    type: "image/png",
  },
  fileSizeMb: "0.5",
  blob: {
    size: 41854, // bytes
    type: "image/png",
  },
  base64: "data:image/png;base64,...",
};

export const mbToBytes = (mb: number): number => 1024 * 1024 * mb;

export const bytesToMb = (bytes: number): string => (bytes / (1024 * 1024)).toFixed(1);

export const fileToBlob = (file: File): Blob => new Blob([file], { type: file.type });

export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
