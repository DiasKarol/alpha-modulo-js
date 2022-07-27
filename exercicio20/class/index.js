class avatar {
    constructor(x, y, coin) {
        this.x = x
        this.y = y
        this.coin = coin
    }

    get getX() {
        return this.x
    }

    get getY() {
        return this.y
    }

    get getCoin() {
        return this.coin
    }

    forward() {
        return this.y += 1
    }

    back() {
        return this.y = this.y  == 0 ? 0 : this.y - 1
    }

    rigth() {
        return this.x += 1
    }

    left() {
        return this.x = this.x  == 0 ? 0 :this.x - 1
    }

    addCoin() {
        return this.coin += 1
    }
}