Note: Make sure to install expo cli
Maybe we should start using Docker?

npm i -g expo-cli

(add sudo for mac)

You'll also need to install an virtual device manager to simulate a phone, I'm using Andoid Studio's AVD

After installed, just cd into App and start the App

npm start


To connect to a physical device, just download expo client on the physical device 

run this instead of npm start:

npx expo start

Then just scan the qr code


Backend setup

https://dev.to/nagatodev/how-to-connect-flask-to-reactjs-1k8i

to deactivate virtual env:
deactivate