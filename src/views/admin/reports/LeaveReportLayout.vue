<template>
    <v-card class="mx-auto" id="printable" tile>
        <v-card-title class="text-md-center">Leave Report</v-card-title>
        <v-card-actions>
            <v-row>
                <v-col class="" md="6">
                    <table class="text-muted">
                        <tr>
                            <td>Company Name: {{getCurrentBs.name}}</td>
                        </tr>
                        <tr>
                            <td>Type: {{getCurrentBs.btype}}</td>
                        </tr>
                        <tr>
                            <td>Address : {{getCurrentBs.address}}</td>
                        </tr>
                        <tr>
                            <td>Our Email Address : {{getCurrentBs.support_email}}</td>
                        </tr>
                        <tr>
                            <td>Our Phone Number : {{getCurrentBs.phone_number}}</td>
                        </tr>
                    </table>
                </v-col>
                <v-col md="1">
                    <v-img :src="getCurrentBs.logo" class="float-right" width="100"></v-img>
                </v-col>
            </v-row>

        </v-card-actions>

        <v-card-actions>
            <v-btn @click="printSection" class="d-print-none" fab small>
                <v-icon>mdi-printer</v-icon>
            </v-btn>
        </v-card-actions>
        <v-card-text>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th>Worker</th>
                        <th>Type Of Leave</th>
                        <th>To Date</th>
                        <th>From Date</th>
                        <th>Without Payment</th>
                        <th>Status</th>
                        <th>Reason</th>
                        <th>Created</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="index" v-for="(idata,index) in data">
                        <td>{{idata.user_meta.user.username}}</td>
                        <td>{{idata.ltype}}</td>
                        <td>{{idata.from_date}}</td>
                        <td>{{idata.to_date}}</td>
                        <td>{{idata.without_pay}}</td>
                        <td>{{idata.status}}</td>
                        <td>{{idata.reason}}</td>
                        <td>{{idata.created}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'LeaveReportLayout',
        props: ['data'],
        computed: {
            ...mapGetters('business', ['getCurrentBs'])
        },
        methods: {
            printSection() {
                this.$htmlToPaper("printable");
            }

        }
    }
</script>
