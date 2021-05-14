<template>
    <div>
        <v-app-bar app color="white" elevation="1">
            <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
            <v-app-bar-title v-text="title"></v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app light v-model="drawer">
            <template v-slot:prepend>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/women/56.jpg">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>Business Name</v-list-item-title>
                        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>


            <v-list dense rounded>
                <template v-for="item in items">
                    <v-list-group :key="item.title" :prepend-icon="item.icon" :to="item.to"
                                  v-if="item.subs">
                        <template v-slot:activator>
                            <v-list-item-title v-text="item.title"/>
                        </template>
                        <v-list-item :key="sub.title" :to="sub.to" link v-for="sub in item.subs">
                            <v-list-item-icon>
                                <v-icon v-text="sub.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title v-text="sub.title"></v-list-item-title>
                        </v-list-item>
                    </v-list-group>

                    <v-list-item :key="item.title" :to="item.to" v-else>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-main tag="main">
            <div class="mx-5 mt-5">
                <slot name="content"></slot>
            </div>
        </v-main>

        <Footer/>
    </div>
</template>

<script>
    import Footer from "./Footer";
    import {menus} from "../../utils/menu";

    export default {
        name: 'AppLayout',
        components: {Footer},
        data() {
            return {
                menus,
                title: 'Dashboard',
                drawer: true,
                items: menus
            }
        },
    }
</script>

<style scoped>

</style>
