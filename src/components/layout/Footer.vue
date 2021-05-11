<template>
    <div>
        <v-footer elevation="3" color="dark" padless app>
            <v-row justify="center" no-gutters>
                <v-col class="white py-4 text-right pr-2" cols="12">
                    <span class="text-sm-subtitle-2 grey--text font-italic" >Yinpay @{{ new Date().getFullYear() }}</span>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {

            }
        },
    }
</script>

<style scoped>

</style>
