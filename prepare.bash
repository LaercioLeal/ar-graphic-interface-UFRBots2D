#!/bin/bash

Reset='\e[0m'
Bright='\e[1m'
Dim='\e[2m'
Underscore='\e[4m'
Blink='\e[5m'
Reverse='\e[7m'
Hidden='\e[8m'

FgBlack='\e[30m'
FgRed='\e[31m'
FgGreen='\e[32m'
FgYellow='\e[33m'
FgBlue='\e[34m'
FgMagenta='\e[35m'
FgCyan='\e[36m'
FgWhite='\e[37m'

BgBlack='\e[40m'
BgRed='\e[41m'
BgGreen='\e[42m'
BgYellow='\e[43m'
BgBlue='\e[44m'
BgMagenta='\e[45m'
BgCyan='\e[46m'
BgWhite='\e[47m'

echo ""
echo -e "${Bright}${Reverse}Preparando ambiente ${Underscore}ARbot${Reset}${Bright}"
echo -e "${Reset}"
echo -e "${BgCyan} Você vai precisar digitar sua senha root, ${Underscore}fique atento"
echo -e "${Reset}"
sudo apt-get update

echo -e "\n${Reset}${BgCyan}[PASSO 1]${Reset} ${FgMagenta}:: ${FgBlue} instalando dependências do ARbot${FgYellow}"
yarn

echo -e "\n${Reset}${BgCyan}[PASSO 2]${Reset} ${FgMagenta}:: ${FgBlue} instalando python3${FgYellow}"
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt-get update
sudo apt-get install python3
sudo apt-get install python3-pip

echo -e "\n${Reset}${BgCyan}[PASSO 3]${Reset} ${FgMagenta}:: ${FgBlue} instalando bibliotecas do python${FgYellow}"
pip3 install flask flask_cors tkinter sqlite3


echo -e "\n${Reset}${BgCyan}Iniciando ${Underscore}ARbot${Reset}"
yarn start