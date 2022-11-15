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

cd
LINK_TIME_AR_SYSTEM="https://www.dropbox.com/scl/fo/dmiy32kd1oc3v34en9tqk/h?dl=0&rlkey=xg5purkjv3itu8oldy52s8k32"
LINK_TIME_AR_SYSTEM_RESERVA="https://www.dropbox.com/scl/fo/f3ugcskv2f6bcz0fqp0d3/h?dl=0&rlkey=wj5fkc0kgccyehyj8atc00clc"
DIRETORIO=$(pwd)

echo ""
echo -e "${Bright}${Reverse}Preparando ambiente ${Underscore}ARbot${Reset}${Bright}"
echo -e "${Reset}"
echo -e "${BgCyan} Você vai precisar digitar sua senha root, ${Underscore}fique atento"
echo -e "${Reset}${FgYellow}"
cd

echo -e "\n${Reset}${BgCyan}[PASSO 1]${Reset} ${FgMagenta}:: ${FgBlue} Verificando times${FgYellow}"
if [ -d "${DIRETORIO}/TIMES/AR_System" ];
then
  echo -e "${Reset}${BgCyan}TIME AR NO LUGAR CORRETO"
else
  echo -e "${Reset}${BgRed}NECESSÁRIO ADICIONAR TIME AR"
  echo -e "${Reset}${BgRed}Link para download ${LINK_TIME_AR_SYSTEM}"
fi

if [ -d "${DIRETORIO}/TIMES/AR_System_Reserva" ];
then
  echo -e "${Reset}${BgCyan}TIME RESERVA NO LUGAR CORRETO"
else
  echo -e "${Reset}${BgRed}NECESÁRIO ADICIONAR TIME RESERVA"
  echo -e "${Reset}${BgRed}Link para download ${LINK_TIME_AR_SYSTEM_RESERVA}"
fi

echo -e "\n${Reset}${BgCyan}[PASSO 2]${Reset} ${FgMagenta}:: ${FgBlue} Instalando NodeJs${FgYellow}"
sudo apt-get update
sudo apt-get install curl -y
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install npm -y
sudo apt-get update && sudo apt-get install yarn

echo -e "\n${Reset}${BgCyan}[PASSO 3]${Reset} ${FgMagenta}:: ${FgBlue} Clonando projeto${FgYellow}"

sudo apt-get install git -y
cd
git clone https://github.com/higorst/ar-graphic-interface.git
cd ar-graphic-interface

echo -e "\n${Reset}${BgCyan}[PASSO 4]${Reset} ${FgMagenta}:: ${FgBlue} Instalando dependências do ARbot${FgYellow}"
yarn

echo -e "\n${Reset}${BgCyan}[PASSO 5]${Reset} ${FgMagenta}:: ${FgBlue} Instalando python3${FgYellow}"
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt-get update
sudo apt-get install python3 -y
sudo apt-get install python3-pip -y

echo -e "\n${Reset}${BgCyan}[PASSO 6]${Reset} ${FgMagenta}:: ${FgBlue} Instalando bibliotecas do python${FgYellow}"
pip3 install flask
pip3 install flask_cors
sudo apt install python3-tk -y
sudo apt install sqlite3 -y

echo -e "\n${Reset}${BgCyan}[PASSO 7]${Reset} ${FgMagenta}:: ${FgBlue} Instalando Simulador 2D${FgYellow}"
# Necessário em versões mais novas do linux para encontrar o qt4
sudo add-apt-repository ppa:rock-core/qt4
sudo apt update
sudo apt install tcsh
# Instale as dependências:
sudo apt install libboost-all-dev flex -y
sudo apt-get install -y g++ build-essential libboost-all-dev qt4-dev-tools libaudio-dev libgtk-3-dev libxt-dev bison flex
sudo apt install qtbase5-dev -y
# Baixe e instale o servidor:
cd
wget https://github.com/rcsoccersim/rcssserver/releases/download/rcssserver-16.0.0/rcssserver-16.0.0.tar.gz
tar -vzxf rcssserver-16.0.0.tar.gz
cd  rcssserver-16.0.0
sudo ./configure
sudo make install
cd
# se ocorrer error com o FlexLexer.h
# - aqui precisei incluir a linha:
#   include /usr/local/share
# - no arquivo: /etc/ld.so.conf
sudo apt-get install libfl-dev

# Baixe e instale o Monitor:
cd
wget https://github.com/rcsoccersim/rcssmonitor/releases/download/rcssmonitor-16.0.0/rcssmonitor-16.0.0.tar.gz
tar -vzxf rcssmonitor-16.0.0.tar.gz
cd rcssmonitor-16.0.0
sudo ./configure
sudo make install
cd
# Baixe e instale a librcsc:
cd
wget https://pt.osdn.net/dl/rctools/librcsc-4.1.0.tar.gz
tar -vzxf librcsc-4.1.0.tar.gz
cd librcsc-4.1.0
sudo ./configure
sudo make install
cd
# Baixe e instale o time:
wget https://pt.osdn.net/dl/rctools/agent2d-3.1.1.tar.gz
tar -vzxf agent2d-3.1.1.tar.gz
cd agent2d-3.1.1
sudo ./configure
sudo make install
cd
# Possível error ao executar servidor: rcssserver: error while loading shared libraries: librcssclangparser.so.2: cannot open shared object file: No such file or directory
sudo /sbin/ldconfig -v

echo -e "\n${Reset}${BgCyan}Iniciando ${Underscore}ARbot${Reset}"
yarn start