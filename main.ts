sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.hearts, 100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let projectile: Sprite = null
let mySprite = sprites.create(assets.image`temporary`, SpriteKind.Player)
scene.setBackgroundColor(3)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(assets.image`projectile`, 50, 0)
    projectile.setPosition(0, randint(0, 120))
})
