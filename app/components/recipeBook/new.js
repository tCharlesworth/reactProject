import React, { Component } from 'react';
import { TextInput, Switch, View, ScrollView, Button, Text } from 'react-native';

// Classes
import RecipeBook from '../../models/recipeBook';

export default class NewRecipeBook extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: "",
            isPrivate: false
        }
    }
    onCreateBook() {
        var book = new RecipeBook (this.state.title, this.state.isPrivate);
        book.save();
    }
    render() {
        return (
            <ScrollView style={{padding: 10}}>
                <TextInput
                    onChangeText={ title => this.setState({title}) }
                    value={ this.state.title }
                    placeholder="book title"
                    style={{margin: 5}}/>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 3}}>
                    <Text>Private</Text>
                    <Switch
                        onValueChange={ isPrivate => this.setState({ isPrivate })}
                        value={ this.state.isPrivate } />
                </View>
                <Button
                    onPress={() => this.onCreateBook()}
                    title="Create">
                </Button>
            </ScrollView>
        );
    }
}