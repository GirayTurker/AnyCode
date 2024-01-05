console.log("Package Install working . . .");
exports.isPackageInstalled = function (packageName) {
    try {
        require.resolve(packageName);
        return true;
    } catch (error) {
        return false;
    }
};

 exports.installPackage = function(packageName) {
    console.log(`Installing ${packageName}...`);
    try {
        execSync(`npm install ${packageName}`, { stdio: 'inherit' });
        console.log(`${packageName} installed successfully.`);
    } catch (error) {
        console.error(`Error installing ${packageName}: ${error.message}`);
    }
};

console.log("Package Install finish working!");