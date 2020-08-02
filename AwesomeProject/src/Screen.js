import{Navigation} from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import MeScreen from './MeScreen';
import OfferScreen from './HomeScreen';
import CustomerScreen from './CustomerScreen';
import ImageViewScreen from './ViewTest/ImageView';
import Button_TestScreen from './ViewTest/Button_test';
import PJLViewScreen from './ViewTest/PJLView';
import PJLFlatList from './ViewTest/PJLFlatList';
import SectionListView from './ViewTest/SectionListView';
import ActivityIndicatorView from './ViewTest/ActivityIndicatorView';
import ModelViewScreen from './ViewTest/ModalView';

export function reginserScreens(){

    Navigation.registerComponent('app.HomeScreen', () =>HomeScreen);    
    Navigation.registerComponent('app.MeScreen',() => MeScreen);
    Navigation.registerComponent('app.OfferScreen',() => OfferScreen);
    Navigation.registerComponent('app.CustomerScreen',()=>CustomerScreen);
    Navigation.registerComponent('app.ImageViewScreen',()=>ImageViewScreen);
    Navigation.registerComponent('app.Button_TestScreen',()=>Button_TestScreen);
    Navigation.registerComponent('app.PJLViewScreen',() => PJLViewScreen);
    Navigation.registerComponent('app.PJLFlatListScreen',()=>PJLFlatList);
    Navigation.registerComponent('app.SectionListViewScreen',()=>SectionListView);
    Navigation.registerComponent('app.ActivityIndicatorViewScreen',()=>ActivityIndicatorView);
    Navigation.registerComponent('app.ModelViewScreen',()=>ModelViewScreen);
}