
function deck() {
    return {
        deck: [],
        drawnCard: [],
        suits: ['hearts', 'diamonds', 'spades', 'clubs'],
        // we have used commas as a separator to avoid the problem with number 10
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initialize() {
            const { suits, values, deck } = this;
            for (const suit of suits) {
                for (const value of values.split(',')) {
                    deck.push({ value, suit })
                }
            }
        },
        drawCard() {
            const card = this.deck.pop();
            this.drawnCard.push(card);
            return card;
        },
        drawnMultipleCard(numCards) {
            const cards = [];
            for (let i = 0; i < numCards; i++) {
                cards.push(this.drawCard());
            }
            return cards;
        },
        shuffle() {
            const { deck } = this;
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
            console.log(deck);
        }
    }
}

const deck1 = deck();
deck1.initialize();
deck1.shuffle();