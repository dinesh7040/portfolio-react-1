pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                // sh "curl -fsSL https://deb.nodesource.com/setup_14.20 | sudo -E bash -"
                // sh "sudo apt-get install -y nodejs"
                // sh "node --version"
                // sh "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash"
                // sh 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && /. "$NVM_DIR/nvm.sh"'
                // sh "source ~/.bashrc"
                sh "node -v"
                sh "nvm -v"
                sh "nvm install 14.20"
                sh "nvm use 14.20"
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/react-app/"
            }
        }
    }
}