<template>
    <v-data-table :headers="headers" :items="_eval('data?.data')" :items-per-page="_eval('data?.pagination.size')"
                  :loading="loading"
                  :options.sync="options"
                  :server-items-length="_eval('data?.pagination.totalElements')"
                  @click:row="rowClicked" class="elevation-1">
        <template v-slot:no-data>
            <div class="pt-5">
                <a-empty/>
            </div>
        </template>

        <template v-slot:item.actions="{ item }">
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <v-list tile>
                            <v-list-item-group color="primary">

                                <v-list-item @click="$emit('on-edit',item)">
                                    <v-list-item-title>
                                        <v-icon small>mdi-pencil</v-icon>
                                        Edit
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="$emit('on-delete',item)">
                                    <v-list-item-title>
                                        <v-icon small>mdi-delete</v-icon>
                                        Delete
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item :href="item[has_file]" target="_blank" v-if="has_file">
                                    <v-list-item-title>
                                        <v-icon small>mdi-file</v-icon>
                                        File
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-list-item-content>
                </v-card>
            </v-menu>
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
            _eval: parameter => eval('this.' + parameter),
            rowClicked(item) {
                this.$emit('on-edit', item)
            }

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
