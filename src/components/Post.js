import { View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Menu, MenuItem } from 'react-native-material-menu';

import AppText from './AppText'

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Post = ({ urlImage }) => {
    let avatar = require('../../assets/images/avatar_profile.png')

    let imgSize = Image.resolveAssetSource(urlImage)

    const windowWidth = Dimensions.get('window').width;

    const [likeButton, setLikeButton] = useState(false)
    const [likeCounter, setLikeCounter] = useState(123)

    const [visibleMenu, setVisibleMenu] = useState(false)

    return (
        <View
            style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
                marginBottom: 15,
            }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                
                <Image source={avatar} style={{ width: 40, height: 40, borderRadius: 20 }} />
                <View style={{ marginLeft: 10, }}>
                    <AppText content={'username'} fontWeight={'bold'} />
                    <AppText content={'10:25'} color={'grey'} fontSize={12} />
                </View>

                <TouchableOpacity
                    onPress={() => { setVisibleMenu(true) }}
                    style={{
                        position: 'absolute',
                        right: 0,
                    }}>
                    <Feather name="more-horizontal" size={24} color="grey" />
                    <Menu
                        visible={visibleMenu}
                        onRequestClose={() => { setVisibleMenu(false) }}
                    >
                        <MenuItem onPress={() => { setVisibleMenu(false) }}>Hide post</MenuItem>
                        <MenuItem onPress={() => { setVisibleMenu(false) }}>Remove post</MenuItem>
                    </Menu>
                </TouchableOpacity>

            </View>

            <View style={{ paddingTop: 10, }}>
                <AppText content={'title of post'} />
                {/* image posted */}
                <Image source={urlImage} style={{
                    marginTop: 10,
                    alignSelf: 'center',
                    width: windowWidth - 70,
                    height: (windowWidth - 70) * imgSize.height / imgSize.width,
                }} />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 15,
                    paddingBottom: 5,
                }}>
                    {/* like icon */}
                    <TouchableOpacity
                        onPress={() => {
                            setLikeButton(!likeButton)
                            setLikeCounter(c => likeButton ? c - 1 : c + 1)
                        }}
                        style={{ marginRight: 25, }}>
                        {likeButton ? <AntDesign name="heart" size={22} color="red" /> :
                            <AntDesign name="hearto" size={22} color="black" />}

                    </TouchableOpacity>
                    {/* comment icon */}
                    <TouchableOpacity
                        onPress={() => {
                            // console.log(carSize.height);
                        }}>
                        <Ionicons name="ios-chatbox-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <AppText content={`${likeCounter} ` + (likeCounter > 1 ? 'likes' : 'like')}
                    fontWeight={'bold'} />
            </View>



        </View >
    )
}

export default Post