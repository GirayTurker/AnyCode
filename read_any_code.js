console.log("read_any_code working . . .");
const check_packages = require ('./check_packages');
const express = require('express');
//const cross_env = require ('cross-env');
const { execSync } = require('child_process');

const fs = require('fs');
const read_any_code = express();
const port = 8080;

//DEFINES RUNNING FILE EXTENSION
//PRIO TO RUN PROGRAM
var code_file_extension ='.html';

// Specify HTML file name
var file_name_html ='Index'
const file_path_html = file_name_html+code_file_extension;


// Specify cpp file name
var file_name_for_cpp='TestForReadFile';
const file_path_cpp = file_name_for_cpp+code_file_extension;


// Specify the folder and file name for cs
const csharppath = require('path');
const file_path_cs = csharppath.join(__dirname,'TestForReadCSharp') ;

if(code_file_extension==='.cpp')
{
    console.log("=========================================================================");
    console.log("WORKING WITH: "+file_path_cpp);
    console.log("=========================================================================");
}
else if(code_file_extension==='.cs')
{
    console.log("=========================================================================");
    console.log("WORKING WITH: "+file_path_cs);
    console.log("=========================================================================");
}
else if(code_file_extension==='.html')
{
    console.log("=========================================================================");
    console.log("WORKING WITH: "+file_path_html);
    console.log("=========================================================================");
}

read_any_code.get('/', (req, res) => {
    try {
        //C++
        if(code_file_extension==='.cpp')
        {
             // Read the C++ file
        //const anyCode = fs.readFileSync('TestForReadFile.cpp', 'utf8');
        const anyCode = fs.readFileSync(file_path_cpp, 'utf8');

        // Save the C++ code to a temporary file
        fs.writeFileSync('temp.cpp', anyCode);      
        // Compile and run the C++ code using g++
        const result = execSync(`g++ temp.cpp -o temp && temp.exe`, { encoding: 'utf-8' });

        // Send the result as the HTTP response
        res.send(result);   
        }
        //C#
        else if(code_file_extension==='.cs')
        {
            process.chdir(file_path_cs);
            const result = execSync(`dotnet run`, { encoding: 'utf-8' });
            res.send(result);
        }
        //HTML
        else if(code_file_extension==='.html')
        {
            fs.readFile(file_path_html, 'utf-8', (err, result) => {
                if (err) {
                    console.error('Error reading HTML file:', err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
        
                // Send the HTML content as the response
                res.send(result);
            });    
        }
        
    } 
    catch (error)
    {
        // Handle compilation or execution errors
        res.status(500).send(error.message);
    } 
    finally 
    {
        // Cleanup temporary files
        if(code_file_extension==='.cpp')
        {
        fs.unlinkSync('temp.cpp');
        fs.unlinkSync('temp');
        }  
    }
});

read_any_code.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log("=========================================================================");
});

