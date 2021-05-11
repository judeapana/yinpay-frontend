<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12">
                <v-card  width="400" class="mx-auto text-center mt-16">
                    <v-card-text class="mx-auto text-center">
                        <Result status="403" title="401" sub-title="Sorry, you are not an authorized user.">
                            <template #extra>
                                <v-btn color="primary">
                                    Back Home
                                </v-btn>
                            </template>
                        </Result>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {Result} from "ant-design-vue";
    import 'ant-design-vue/dist/antd.css';

    export default {
        name: 'Unauthorized',
        components: {
            Result
        }
    }
</script>

<style scoped>

</style>
