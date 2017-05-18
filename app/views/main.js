import React, { Component } from 'react';

import { View, Text } from 'react-native';

// Components
import NewRecipeBook from '../components/recipeBook/new';
import ListRecipeBooks from '../components/recipeBook/list';

import NewRecipe from '../components/recipe/new';

export default class MainView extends Component {
    render() {
        return (
            <View style={{marginTop: 25}}>
                <NewRecipe />
            </View>
        );
    }
}