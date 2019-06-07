<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1 -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <div>
                    <h2>Exercise 1</h2>
                    <p>{{ someText | reverseText}}</p>
                </div>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <div>
                    <h2>Exercise 2</h2>
                    <p>{{ someText | textLength}}</p>
                </div>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <div>
                    <h2>Exercise 3</h2>
                    <p>{{ reverseText }}</p>
                    <p>{{ textLength }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * <!-- Exercise 4 -->
       <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
     */
    import { textMixin } from './textMixin.js'
    export default {
        mixins: [textMixin],
        data() {
            return {
                someText: 'Ziglia'
            };
        },
        computed: {
            reverseText() {
                return this.someText.split('').reverse().join('');
            }
        },
        filters: {
            reverseText(value) {
                return value.split('').reverse().join('');
            }
        }
    }
</script>

<style>
</style>
