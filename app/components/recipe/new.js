import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';

export default class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ingredients: [],
            directions: []
        }
    }
    onCreateRecipe() {
        
    }
    renderList(ing, idx) {
        return (
            <Text>{idx+1} {ing}</Text>
        )
    }
    render() {
        return (
            <ScrollView>
                <Text>New Recipe</Text>
                <TextInput
                    onChangeText={ title => this.setState({title}) }
                    placeholder="title" />
                <View>
                    <Text>Ingredients</Text>
                    {this.state.ingredients.map( (ing, idx) => this.renderList(ing, idx))}
                </View>
                <View>
                    <Text>Directions</Text>
                    {this.state.directions.map( (ing, idx) => this.renderList(ing, idx))}
                </View>
                <Button 
                    title="Create"
                    onPress={ () => this.onCreateRecipe() } />
            </ScrollView>
        )
    }
}