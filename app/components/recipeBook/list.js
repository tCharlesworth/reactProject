import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ListRecipeBooks extends Component {
    constructor(props) {
        super(props);
        var books = [{title: 'a'}, {title: 'b'}, {title: 'c'}];

        this.state={
            books,
            dataSource: ds.cloneWithRows(books)
        };
    }
    renderBook(book) {
        return (
            <View key={ book.title }>
                <Text>{ book.title || 'No Title' }</Text>
            </View>
        )
    }
    render() {
        return (
            <ListView
                style={{padding: 10}}
                dataSource={this.state.dataSource}
                renderRow={ data => this.renderBook(data) }>
            </ListView>
        )
    }
}