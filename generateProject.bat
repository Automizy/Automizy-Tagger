@echo off
set /p moduleName1="Module name like Automizy-Email-Editor: "
set /p moduleName2="Module name like AutomizyEmailEditor: "
set /p moduleName3="Module name like automizy-email-editor: "
set /p moduleNameshort="Module name in short like aee: "
set /p moduleVariable="Module showrt variable like $AEE: "
set /p moduleDescription="Module description: "

set isConfirm=y
set /p isConfirm=Please confirm the new module informations [y/n] (default - y)?:

IF NOT "%isConfirm%"=="y" GOTO EXIT0

set fromDir=%cd%\
set target=%cd%\..\generatedModules\%moduleName1%

mkdir %target%
xxcopy /Y /S /Q "%fromDir%" "%target%"
rmdir /S /Q %target%\node_modules
rmdir /S /Q %target%\.bower
rmdir /S /Q %target%\.idea
rmdir /S /Q %target%\src\vendor


fart.exe -r -c -- %target%\src\* Autmizy Tagger "%moduleDescription%"
fart.exe -r -c -- %target%\src\* Automizy-Tagger %moduleName1%
fart.exe -r -c -- %target%\src\* AutomizyTagger %moduleName2%
fart.exe -r -c -- %target%\src\* automizy-tagger %moduleName3%
fart.exe -r -c -- %target%\src\* at %moduleNameshort%
fart.exe -r -c -- %target%\src\* $AT %moduleVariable%

fart.exe -c -- %target%\* Autmizy Tagger "%moduleDescription%"
fart.exe -c -- %target%\* Automizy-Tagger %moduleName1%
fart.exe -c -- %target%\* AutomizyTagger %moduleName2%
fart.exe -c -- %target%\* automizy-tagger %moduleName3%
fart.exe -c -- %target%\* at %moduleNameshort%
fart.exe -c -- %target%\* $AT %moduleVariable%

ren %target%\src\at.html %moduleNameshort%.html
ren %target%\src\at.js %moduleNameshort%.js
ren %target%\src\at.css %moduleNameshort%.css

cd %~dp0\%target%

npm install & bower update & grunt bower

echo New module created!
pause;

:EXIT0