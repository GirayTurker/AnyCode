ABSTRACT

Nodejs Application to run C++, C# and HTML files through local server. 

BEFORE RUN NODE 

- Developed with VSCode
- If working with IDE, apply necessary changes.
- Running npm install in a script requires that you have Node.js and npm installed on your machine, 
  and it may prompt for user input if there's an interactive requirement during the installation process.

Check:

- VSCode capable to execute C/C++ files (command: g++ example.cpp -o example). If not, install necessarry extensions.
  Make sure .vscode file generated under your project directory.

- VSCode capable to execute C# files (command: dotnet run). If not, install necessarry extensions (TargetFramework net8.0).
  look TestForReadCSharp/TestForReadCSharp.csproj file for details. 
  Make sure TestForReadCSharp file generated under your project directory.

- Install npm to VSCode:
    
    Watch the quick video: 

- Confirm npm is installed (command: npm -v)

RUN NODE

- Required Packages: check_packages.js  and package_install.js check and install 
  node modules to run program (suggest to check which modules will install before run node).

- Run program: node read_any_code.js command will run program, check and install required packages automatically.
  Command prompts will appear in the terminal to check and confirm that each JS file is working.
  If node run successfully, prompt message will appear with local http server address.

- At start, Index_cpp.html will run in local server.
- To change file to run in local server, !"code_file_extension"! should change accordingly.
  (Ex: to run cs file, value of string should be .cs, for c++, .cpp etc..) 
