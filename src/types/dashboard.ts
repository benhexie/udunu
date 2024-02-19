export interface FileStructure {
  path: string;
  name: string;
  children?: FileStructure[];
  isBranch?: boolean;
}
