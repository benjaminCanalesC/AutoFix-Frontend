pipeline{
    agent any
    stages{
        stage("Build Frontend"){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/benjaminCanalesC/Autofix-Frontend']])
                bat "npm install"
                bat "npm run build"
            }
        }
        stage("Build and Push Docker Image"){
            steps{
                script{
                    withDockerRegistry(credentialsId: 'docker-credentials'){
                    bat "docker build -t bcanales/autofix-frontend:latest ."
                    bat "docker push bcanales/autofix-frontend:latest"
                    }
                }                    
            }
        }
    }
}