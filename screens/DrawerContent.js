import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                   uri:  'https://yt3.ggpht.com/ytc/AKedOLQMxO5ybJytpgAsgyYDiMw2lrUpVGo1YZddOKEljQ=s900-c-k-c0x00ffffff-no-rj'
                                }}
                                size={70}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Jaydeep Das</Title>
                                <Caption style={styles.caption}>@itz_jd</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.Paragraph, styles.caption, {color: '#008000'}]}>₹1,500</Paragraph>
                                <Caption style={styles.caption, {marginLeft: 10, fontSize: 16, color: '#008000'}}>Total Cashback</Caption>
                            </View>
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name="home-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Home"
                                onPress={() => {}}
                            />
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name="account-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Profile"
                                onPress={() => {props.navigation.navigate('Profile')}}
                            />
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name="bookmark-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Bookmarks"
                                onPress={() => {}}
                            />
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name="wrench-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Settings"
                                onPress={() => {}}
                            />
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name="account-check-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Support"
                                onPress={() => {}}
                            />
                        </Drawer.Section>
                    </View>    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 16,

    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        lineHeight: 16
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    Paragraph: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})