class avatar {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.coin = 0
        this.life = 10
        this.damage = 1
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

    get getLife() {
        return this.life
    }

    get getDamage() {
        return this.damage
    }

    get getAttack() {
        return damage;
    }

    forward() {
        if (this.life > 0) {
            return this.y += 1
        }
    }

    back() {
        if (this.life > 0) {
            return this.y = this.y  == 0 ? 0 : this.y - 1
        }
    }

    rigth() {
        if (this.life > 0) {
            return this.x += 1
        }
    }

    left() {
        if (this.life > 0) {
            return this.x = this.x  == 0 ? 0 :this.x - 1
        }
    }

    addCoin() {
        if (this.life > 0) {
            return this.coin += 1
        }
    }

    injury(value) {
        return this.life = this.life  == 0 ? 0 : this.life - value
    }

    attack() {
        if (this.life > 0) {
            return this.damage
        }
    }
}