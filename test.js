var fileStructure = {
    name: "",
    children: [
        {
            name: "src",
            children: [
                { name: "pages", isBranch: true },
                { name: "index.js" },
                { name: "styles.css" },
            ],
        },
        {
            name: "node_modules",
            isBranch: true,
        },
        { name: ".npmignore" },
        { name: "package.json" },
        { name: "webpack.config.js" },
    ],
};
var fileTreeUpdate = function (fileTree, path, children) {
    var pathArray = path.split("/").filter(function (p) { return p; });
    var updateFileTree = function (node, pathIndex) {
        var currentFolder = pathArray[pathIndex];
        var child = (node.children || []).find(function (c) { return c.name === currentFolder; });
        if (!child) {
            return; // Path does not exist in the file structure
        }
        if (pathIndex === pathArray.length - 1) {
            child.children = children; // Set children at the last path element
            return;
        }
        if (child.children) {
            updateFileTree(child, pathIndex + 1); // Recursively traverse the file structure
        }
    };
    updateFileTree(fileTree, 0);
};
fileTreeUpdate(fileStructure, "src/pages", [
    { name: "dashboard", isBranch: true },
    { name: "index.js" },
    { name: "styles.css" },
]);
console.log(JSON.stringify(fileStructure));
