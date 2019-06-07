export const textMixin =  {
    computed: {
        textLength() {
            return `${this.someText} (${this.someText.length})`;
        }
    }
}