export interface FileStructure {
  name: string;
  metadata: {
    path: string;
  };
  children?: FileStructure[] | [];
  isBranch?: boolean;
}

export interface assetInterface {
  name: string;
  path: string;
  fileType: string;
}