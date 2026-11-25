
pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                echo 'Cleaning Jenkins workspace'
                cleanWs()
            }
        }

        stage("Git Checkout") {
            steps {
                git branch: 'main',
                    url: 'https://github.com/premkumarvarkala-ui/Nodejs-jenkins-demo.git'
            }
        }

        stage('Node Version') {
            steps {
                echo 'Checking Node.js and npm versions'
                sh '''
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies'
                sh 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo 'Executing JavaScript unit tests'
                sh 'npm test'
            }
        }

        stage('Run Node Application') {
            steps {
                echo 'Running Node.js application'
                sh '''
                    node -e "const app = require('./src/app'); console.log('Addition:', app.add(10, 20)); console.log('Subtraction:', app.subtract(20, 10)); console.log('Multiplication:', app.multiply(5, 5));"
                '''
            }
        }

        stage('Create Build Artifact') {
            steps {
                echo 'Creating JavaScript build artifact'
                sh 'npm run build'
            }
        }

        stage('Verify Artifact') {
            steps {
                echo 'Verifying build artifact'
                sh '''
                    if [ -f dist/app.js ]; then
                        echo "Build artifact exists"
                        ls -lh dist/app.js
                    else
                        echo "Build artifact not found"
                        exit 1
                    fi
                '''
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/**',
                                 fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'JavaScript CI Pipeline completed successfully!'
        }

        failure {
            echo 'JavaScript CI Pipeline failed. Check console output.'
        }

        always {
            echo 'Jenkins pipeline execution completed.'
        }
    }
}
