// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

mod projects;
mod dashboard;
use projects::{
    get_folder_path, create_project, 
    check_name_availability, clone_remote_repo, 
    get_assets, read_file
};
use dashboard::get_folder_content;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_folder_path, create_project, check_name_availability,
            get_folder_content, clone_remote_repo, get_assets, read_file
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
