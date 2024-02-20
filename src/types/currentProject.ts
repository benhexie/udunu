export interface FileStructure {
  name: string;
  metadata: {
    path: string;
  };
  children?: FileStructure[] | [];
  isBranch?: boolean;
}
