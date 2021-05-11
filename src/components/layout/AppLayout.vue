<template>
    <div>
        <v-app-bar color="white" elevation="1" app>
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

        <v-navigation-drawer light app v-model="drawer">
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
                    <v-list-group v-if="item.subs" :to="item.to" :key="item.title"
                                  :prepend-icon="item.icon">
                        <template v-slot:activator>
                            <v-list-item-title v-text="item.title"/>
                        </template>
                        <v-list-item :to="sub.to" v-for="sub in item.subs" :key="sub.title" link>
                            <v-list-item-icon>
                                <v-icon v-text="sub.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title v-text="sub.title"></v-list-item-title>
                        </v-list-item>
                    </v-list-group>

                    <v-list-item v-else :to="item.to" :key="item.title">
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
                title: 'Dashboard',
                drawer: true,
                items: menus
            }
        },
    }
</script>

<style scoped>

</style>
