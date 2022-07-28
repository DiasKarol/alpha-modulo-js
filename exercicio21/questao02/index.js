class avatar {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.coin = 0
        this.life = 10
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
}

class Cowboy extends avatar {
    constructor(x, y) {
        super(x, y)
        this.munition = 10
        this.damage = 2
    }

    get getMunition() {
        return this.munition
    }

    get getDamage() {
        return this.damage
    }

    attack() {
        if (this.life > 0) {
            if (this.munition > 0) {
                this.munition -= 1
            }
            return this.damage
        }
    }

    findMunition() {
        if (this.life > 0) {
            if (this.munition > 0) {
                this.munition += 1
            }
            return this.munition
        }
    }
}

class wizard extends avatar {
    constructor(x, y) {
        super(x, y)
        this.spells = 10
        this.damage = 3
    }

    get getSpells() {
        return this.spells
    }

    get getDamage() {
        return this.damage
    }

    attack() {
        if (this.life > 0) {
            if (this.spells > 0) {
                this.spells -= 1
                return this.damage
            } else {
                setTimeout(() => this.spells = 10, 10000)
                return 0
            }
        }
    }
}