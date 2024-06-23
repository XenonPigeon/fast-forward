player.onItemInteracted(COPPER_INGOT, function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(LIGHTNING_BOLT, posCamera(0, 0, 6))
        mobs.spawn(LIGHTNING_BOLT, posCamera(0, 0, 7))
        mobs.spawn(LIGHTNING_BOLT, posCamera(0, 0, 3))
        mobs.spawn(LIGHTNING_BOLT, posCamera(0, 0, 4))
        mobs.spawn(LIGHTNING_BOLT, posCamera(0, 0, 5))
        mobs.spawn(LIGHTNING_BOLT, posCamera(0, 0, 8))
    }
})
player.onItemInteracted(CLOCK, function () {
    for (let index = 0; index < 120; index++) {
        gameplay.timeAdd(-100)
    }
})
