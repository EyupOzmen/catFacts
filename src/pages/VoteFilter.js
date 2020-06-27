import React, { useContext } from 'react'
import { SafeAreaView, Text, Button, FlatList, View } from 'react-native'

import Context from '../context/store'

const VoteFilter = props => {
    const { state, dispatch } = useContext(Context)

    return (
        <SafeAreaView>
            <Button title="Filtrele" onPress={() => dispatch({ type: "FILTER_CATS", vote: 2 })} />

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={state.filteredCats}
                ItemSeparatorComponent={() => <View style={{ borderWidth: 1, borderColor: '#bdbdbd', marginVertical: 10 }} />}
                renderItem={({ item }) => <Text numberOfLines={1} >{item.text}</Text>}
            />
        </SafeAreaView>
    )
}

export { VoteFilter }