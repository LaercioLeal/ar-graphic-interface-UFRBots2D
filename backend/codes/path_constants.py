from codes.methods import getTeamDirectory

UFRBOTS_PATH = getTeamDirectory() + '/UFRBots2D'
BULLRUSSIA_PATH = getTeamDirectory() + '/bullrussia/src'
TITAS_PATH = getTeamDirectory() + '/titas/src'
FUTVASF_PATH = getTeamDirectory() + '/futvasf/src'
ROBOTBULLS_PATH = getTeamDirectory() + '/robotbulls/src'
ZOMBIE_PATH = getTeamDirectory() + '/zombie'

def getTeamPath(teamNum):
    path = None

    if(teamNum == 1):
        path = UFRBOTS_PATH
    elif(teamNum == 2):
        path = BULLRUSSIA_PATH
    elif(teamNum == 3):
        path = TITAS_PATH
    elif(teamNum == 4):
        path = FUTVASF_PATH
    elif(teamNum == 5):
        path = ROBOTBULLS_PATH
    elif(teamNum == 6):
        path = ZOMBIE_PATH
    
    return path

def getTeamName(teamNum):
    teamName = None

    if(teamNum == 1):
        teamName = 'UFRBots2D'
    elif(teamNum == 2):
        teamName = 'Bull Russia'
    elif(teamNum == 3):
        teamName = 'Titãs'
    elif(teamNum == 4):
        teamName = 'FUTVASF'
    elif(teamNum == 5):
        teamName = 'Robot Bulls'
    elif(teamNum == 6):
        teamName = 'Zombie'
    
    return teamName