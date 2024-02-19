use std::fs;
use serde::Serialize;

#[derive(Serialize)]
#[allow(non_snake_case)]
pub struct FolderItem {
    name: String,
    path: String,
    isBranch: bool,
}

#[tauri::command]
pub fn get_folder_content(path: String) -> Vec<FolderItem> {
    let mut items = Vec::new();

    if let Ok(entries) = fs::read_dir(&path) {
        for entry in entries {
            if let Ok(entry) = entry {
                let name = entry.file_name().to_string_lossy().into_owned();
                let path_buf = entry.path();
                let is_branch = path_buf.is_dir();
                let path = path_buf.to_string_lossy().into_owned();
                let item = FolderItem {
                    name,
                    path,
                    isBranch: is_branch,
                };
                items.push(item);
            }
        }
    }

    items
}
