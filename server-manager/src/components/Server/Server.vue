<template>
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="selectServer"
    >
        {{ server.name }} ({{server.id}})
    </li>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        props: {
            server: Object
        },
        methods: {
            selectServer() {
                serverBus.$emit('serverSelected', this.server);
            }
        }
    }
</script>

<style>

</style>
