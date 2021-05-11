<template>
    <v-data-table :items-per-page="perpage" :options.sync="options"
                  :loading="loading"
                  :server-items-length="total"
                  :headers="headers"
                  :items="data" class="elevation-1">

        <template v-slot:item.actions="{ item }">
            <v-btn @click="$emit('on-edit',item.id)" outlined color="indigo" depressed
                   x-small fab
                   class="mr-2">
                <v-icon small class="">mdi-pencil</v-icon>
            </v-btn>
            <v-btn x-small depressed color="red" outlined fab>
                <v-icon @click="$emit('on-delete',item.id)" small>mdi-delete</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        props: {
            headers: {
                type: Object
            },
            data: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            total: {
                type: Number,
                default: 0
            },
            perpage: {
                type: Number,
                default: 0
            },
            options: {
                type: Object
            },
            loading: {
                type: Boolean,
                default: false
            }

        },
        name: 'DataTable',
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
