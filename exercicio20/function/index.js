function avatar(x, y, coin) {
    this.x = x
    this.y = y
    this.Coin = coin
}

avatar.prototype.forward = function() {
        return this.y += 1
    }

avatar.prototype.back = function() {
    return this.y = this.y  == 0 ? 0 : this.y - 1
}

avatar.prototype.rigth = function() {
    return this.x += 1
}

avatar.prototype.left = function() {
    return this.x = this.x  == 0 ? 0 :this.x - 1
}

avatar.prototype.addCoin = function() {
    return this.coin += 1
}