<template>
    <v-data-table :headers="headers" :items="_eval('data?.data')"
                  :items-per-page="_eval('data?.pagination.size')"
                  :loading="loading"
                  :options.sync="options"
                  :server-items-length="_eval('data?.pagination.totalElements')" class="elevation-1">
        <template v-slot:item.switch="{item}">
            <v-btn :text="item.disabled"></v-btn>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-btn @click="$emit('on-edit',item)" class="mr-2" color="indigo" depressed elevation="4"
                   fab outlined
                   x-small>
                <v-icon class="" small>mdi-pencil</v-icon>
            </v-btn>

            <v-btn class="mr-2" :href="item[has_file]" color="green" elevation="4" fab outlined v-if="has_file" x-small>
                <v-icon small>mdi-file</v-icon>
            </v-btn>
            <v-btn  color="red" elevation="4" fab outlined x-small>
                <v-icon @click="$emit('on-delete',item)" small>mdi-delete</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        props: {
            has_file: {
                type: String
            },
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
                    this.handler({page: this.options?.page, size: this.options?.itemsPerPage})
                },
                deep: true,
            },
        },
        methods: {
            _eval: parameter => eval('this.' + parameter)
        },
        name: 'DataTable',
        mounted() {
            this.handler()
        },
        data() {
            return {
                options: {},
                items: this.props
            }
        },
    }
</script>

<style scoped>

</style>
