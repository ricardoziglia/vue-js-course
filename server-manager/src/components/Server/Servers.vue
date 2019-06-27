<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server class="list-group-item" v-for="(server, index) in servers" :key="index" :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        data(){
            return {
                servers: [
                    { id: 1, status: 'Normal', name: 'Develop Server' },
                    { id: 2, status: 'Offline', name: 'Testing Server' },
                    { id: 3, status: 'Critical', name: 'Production Server' },
                    { id: 4, status: 'Low', name: 'Staging server' },
                    { id: 5, status: 'Unknown', name: 'Backup server' }
                ]
            }
        },
        components: {
            'app-server': Server
        }
    }
</script>

<style>

</style>
