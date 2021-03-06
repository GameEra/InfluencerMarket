import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import {Actions } from 'react-native-router-flux'

import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Feather';

class ProfileInfo extends Component  {
  render() {
    return (
        <DrawerContentScrollView >
            <View
                style={styles.drawerContent }
            >
                <View style={styles.userInfoSection}>
                <Avatar.Image
                    source={{
                    uri:
                        'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                    }}
                    size={50}
                />
                <Title style={styles.title}>Who is this</Title>
                <Caption style={styles.caption}>{this.props.email}</Caption>
                <View style={styles.row}>
                    <View style={styles.section}>
                    <Paragraph style={[styles.paragraph, styles.caption]}>
                        202
                    </Paragraph>
                    <Caption style={styles.caption}>Following</Caption>
                    </View>
                    <View style={styles.section}>
                    <Paragraph style={[styles.paragraph, styles.caption]}>
                        159
                    </Paragraph>
                    <Caption style={styles.caption}>Followers</Caption>
                    </View>
                </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="search"  size={30} color="blue" style={{ marginLeft: 15 }} />
                    )}
                    label="Profile"
                    onPress={() => {}}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="search"  size={30} color="blue" style={{ marginLeft: 15 }} />
//                    <MaterialCommunityIcons name="tune" color={color} size={size} />
                    )}
                    label="Preferences"
                    onPress={() => {}}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="search"  size={30} color="blue" style={{ marginLeft: 15 }} />
                    // <MaterialCommunityIcons
                    //     name="bookmark-outline"
                    //     color={color}
                    //     size={size}
                    // />
                    )}
                    label="Bookmarks"
                    onPress={() => {}}
                />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                    <View pointerEvents="none">
                        <Switch value={false} />
                    </View>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.preference}>
                    <Text>RTL</Text>
                    <View pointerEvents="none">
                        <Switch value={false} />
                    </View>
                    </View>
                </TouchableRipple>
                </Drawer.Section>
            </View>
            </DrawerContentScrollView>
        );
    }
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => {
  console.log("ProfileInfo map", state.auth.user.user.email);
  return{
      email: state.auth.user.user.email,
      password: state.auth.password,
      user: state.auth.user.user,
      error: state.auth.error,
      loading: state.auth.loading
  }
} 

export default connect(mapStateToProps, null)(ProfileInfo);