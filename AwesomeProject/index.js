import { Navigation } from "react-native-navigation";
const React = require('react');
const { View, Text, Button, StyleSheet } = require('react-native');
// import {AppRegistry} from 'react-native';
import App from "./App";
import { reginserScreens } from "./src/Screen"


reginserScreens();

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'app.HomeScreen',

                  options: {
                    topBar: {
                      title: {
                        text: "尝试列表",
                        color: "red"
                      }

                    },
                    bottomTab: {
                      text: "home"
                    }
                  }

                },
              },
            ]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'app.MeScreen',
                  options: {
                    topBar: {
                      title: {
                        text: "Me",
                        color: "green",
                      }
                    },
                    bottomTab: {
                      text: "Me"
                    }
                  }


                }
              }
            ]
          }
        }
      ]
    }
  }

}

Navigation.registerComponent('Home', () => App);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLoginIn() ? mainRoot : loginRoot);
});

function isLoginIn() {

  return true;

}

const loginRoot = {
  root: {
    component: {
      name: 'Home'
    }
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
