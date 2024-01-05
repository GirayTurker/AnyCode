console.log("check_package working...");
let packages = require('./package_install');
if(!packages.isPackageInstalled('express'))
{
    console.log("express package downloading. . .");
    packages.installPackage('express');
    console.log("express package download is finish!");
}
else
{
    console.log("express package already installed!"); 
}

if(!packages.isPackageInstalled('cross-env'))
{
    console.log("cross-env package downloading. . .");
    packages.installPackage('cross-env');
    console.log("cross-env package download is finish!");
}
else
{
    console.log("cross-env package already installed!"); 
}

console.log("check_package finish working!");