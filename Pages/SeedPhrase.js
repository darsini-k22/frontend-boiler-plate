import React from 'react'
import { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native'
import { FlatList } from 'react-native'
import reactNativeBip39 from 'react-native-bip39';


export default function SeedPhrase() {
    const [phrase, setPhrase] = useState([]);
    useEffect(() => {
        let items = Array.apply(null, Array(12)).map((v, i) => {
            return {
                id: i,
                text:  reactNativeBip39.generateMnemonic()
            };
        });
        setPhrase(items);
    }, []);
    console.log(phrase);
    return (
        <View>
            <Text>Your Seed Phrase makes it easy to backup and restore your account</Text>
            <Text>WARNING: Never disclose this Phrase. Anyonr with this phrase can take your assents forever.</Text>
            <View>
                <Image source={require('../assets/hide.png')}></Image>
            </View>
            <View>
                <FlatList data={phrase}

                    renderItem={({ p }) => (
                        <Text>{p}</Text>
                    )}
                    numColumns={3}
                    keyExtractor={(text, id) => id} />
            </View>
            <View>
                <Text>How to secure your seed phrase?</Text>
            </View>
            <Button title="CONFIRM"></Button>
        </View>
    )
}
