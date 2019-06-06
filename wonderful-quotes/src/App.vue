<template>
    <div class="container">
        <app-progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-progress-bar>
        <app-new-quote @quoteCreated="createQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import ProgressBar from './components/ProgressBar.vue';
    export default {
        data() {
            return {
                quotes: [
                    'The first Wonderful quote!'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            createQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Quotes limit is 10. You need to delete a quote to add a new one.');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appProgressBar: ProgressBar
        }
    }
</script>

<style>
</style>
