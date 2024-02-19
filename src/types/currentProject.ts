export interface FolderItem {
  name: string;
  path: string;
  children?: FolderItem[];
  isBranch?: boolean;
}
