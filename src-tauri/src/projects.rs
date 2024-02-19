use native_dialog::FileDialog;
use std::fs;

#[tauri::command]
pub fn get_folder_path() -> String {    
    let mut result = FileDialog::new()
        .set_location("~/")
        .show_open_single_dir();

    if result.is_err() || result.as_mut().unwrap().is_none() { return "".to_string(); }

    let real_path: String = result.unwrap().unwrap().to_str().unwrap().to_string();
    if real_path.len() == 0 { return "".to_string(); }
    return real_path;
}

#[tauri::command]
pub fn check_name_availability(folder: String, name: String) -> (bool, String) {
    if folder.len() == 0 { return (true, "Project folder not provided".to_string()); }
    if name.len() == 0 { return (true, "Project name not provided".to_string()); }

    let project_path = format!("{}/{}", folder, name);

    match fs::read_dir(&project_path) {
        Ok(_) => return (true, "Project name already exists".to_string()),
        Err(_) => return (false, "Project name is available".to_string())
    };
}

#[tauri::command]
pub fn create_project(folder: String, name: String, mut framework: String) -> (bool, String) {
    if folder.len() == 0 { return (true, "Project folder not provided".to_string()); }
    if name.len() == 0 { return (true, "Project name not provided".to_string()); }
    if framework.len() == 0 { framework = "blank".to_string(); }

    let project_path = format!("{}/{}", folder, name);

    println!("Creating project at {}", project_path);

    return (false, "Project created successfully".to_string());
}