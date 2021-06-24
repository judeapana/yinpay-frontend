<template>
    <v-data-table :headers="headers" :items="data.data"
                  :items-per-page="data.pagination.size"
                  :loading="loading"
                  :options.sync="options"
                  :server-items-length="data.pagination.totalElements" class="elevation-1">
        <template v-slot:item.switch="{item}">
            <v-btn :text="item.disabled"></v-btn>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-btn @click="$emit('on-edit',item.id)" class="mr-2" color="indigo" depressed elevation="4"
                   fab outlined
                   x-small>
                <v-icon class="" small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="red" elevation="4" fab outlined x-small>
                <v-icon @click="$emit('on-delete',item.id)" small>mdi-delete</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        props: {
            handler: {
                type: Function
            },
            headers: {
                type: Array
            },
            data: {
                type: Object
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            options: {
                handler() {
                    this.handler({page: this.options.page, size: this.options.itemsPerPage})
                },
                deep: true,
            },
        },
        name: 'DataTable',
        mounted() {
            this.handler()
        },
        data() {
            return {
                options: {}
            }
        },
    }
</script>

<style scoped>

</style>
