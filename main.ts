sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(img`
. . . . 
. . . . 
5 5 5 5 
. . . . 
`, babyYoda, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let bullet: Sprite = null
let babyYoda: Sprite = null
babyYoda = sprites.create(img`
. . . b b b b b . 7 7 7 . . . . 
. . b b d d c . 7 7 7 7 7 . . . 
. b b d d b . 7 7 7 c c c . . . 
. b d d b c 7 7 7 7 7 c c . . . 
b b d d c . 7 7 7 7 7 7 7 . . . 
b d d d b 7 7 7 7 e e 7 7 . . . 
b b d d c 7 . . e e e e e . . . 
. b b b b . . . 7 7 7 e e . . . 
b b d b c b c b 7 7 f f f b c b 
b d d d b d d d d 7 f d d d d b 
b b d b b b b b b b b b b b b b 
. b b b d d d d d d d d d d b . 
. . b d d d d d d d d d d d b . 
. . b b b d d d d d d d b b b . 
. . . . b b d d d d d b b . . . 
. . . . . b b b b b b b . . . . 
`, SpriteKind.Player)
babyYoda.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(babyYoda, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . b b b b b b b . . 
. . . . . . b b c b c c c c b b 
. . . . . b b c c b c c c c c b 
. b b b b c c c b c c c c c c b 
b c c c c c c c b c c c c c b b 
b b b b b b b b b b b b b b b . 
. . . . . . . b 1 b b c c c b b 
. . . . . . b b c b c c c c c b 
. . . . . . . b 1 b b c c c b b 
b b b b b b b b b b b b b b b . 
b c c c c c c c b c c c c c b b 
. b b b b c c c b c c c c c c b 
. . . . . b b c c b c c c c c b 
. . . . . . b b c b c c c b b b 
. . . . . . . b b b b b b b . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
