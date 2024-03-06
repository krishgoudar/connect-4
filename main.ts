function CheckForWin3 (Row: number, Col: number, RedTrueYellowFalse: boolean) {
    if (RedTrueYellowFalse == true) {
        _true = 0
        for (let index = 0; index <= 3; index++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col + index, Row + index), Red)) {
                    _true = 0
                } else {
                    _true = 1
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    } else {
        _true = 0
        for (let index2 = 0; index2 <= 3; index2++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col + index2, Row + index2), Yellow)) {
                    _true = 0
                } else {
                    _true = 1
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    }
    if (RedTrueYellowFalse == true) {
        _true = 0
        for (let index3 = 0; index3 <= 3; index3++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col - index3, Row + index3), Red)) {
                    _true = 0
                    console.log("true is 0")
                } else {
                    _true = 1
                    console.log("true is 1")
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    } else {
        _true = 0
        for (let index4 = 0; index4 <= 3; index4++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col - index4, Row + index4), Yellow)) {
                    _true = 0
                } else {
                    _true = 1
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    }
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    Red = img`
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        `
    Yellow = img`
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        `
    Token.ay = 0
    if (sprite.image.equals(img`
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        `)) {
        tiles.setWallAt(sprite.tilemapLocation(), true)
        New_Turn(false)
        tiles.setTileAt(sprite.tilemapLocation(), Red)
        CheckForWin(sprite.tilemapLocation().row, sprite.tilemapLocation().column, true)
        CheckForWin2(sprite.tilemapLocation().row, sprite.tilemapLocation().column, true)
        CheckForWin3(sprite.tilemapLocation().row, sprite.tilemapLocation().column, true)
        CheckForWin4(sprite.tilemapLocation().row, sprite.tilemapLocation().column, true)
        checkfortie()
    } else {
        tiles.setWallAt(sprite.tilemapLocation(), true)
        New_Turn(Reds_Turn)
        tiles.setTileAt(sprite.tilemapLocation(), Yellow)
        CheckForWin(sprite.tilemapLocation().row, sprite.tilemapLocation().column, false)
        CheckForWin2(sprite.tilemapLocation().row, sprite.tilemapLocation().column, false)
        CheckForWin3(sprite.tilemapLocation().row, sprite.tilemapLocation().column, false)
        CheckForWin4(sprite.tilemapLocation().row, sprite.tilemapLocation().column, true)
        checkfortie()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Right_Most_Column >= tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.column)) {
        tiles.placeOnTile(Token, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.column) + 1, tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.row)))
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Left_Most_Column <= tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.column)) {
        tiles.placeOnTile(Token, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.column) - 1, tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.row)))
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Left_Most_Column <= tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.column)) {
        tiles.placeOnTile(Token, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.column) - 1, tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.row)))
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Right_Most_Column >= tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.column)) {
        tiles.placeOnTile(Token, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.column) + 1, tiles.locationXY(tiles.locationOfSprite(Token), tiles.XY.row)))
    }
})
function checkfortie () {
    if (tiles.getTilesByType(assets.tile`myTile3`).length + tiles.getTilesByType(assets.tile`myTile1`).length >= 3) {
        game.splash("\"There is a tie")
    }
}
function CheckForWin (Row: number, Col: number, RedTrueYellowFalse: boolean) {
    if (RedTrueYellowFalse == true) {
        _true = 0
        for (let index2 = 0; index2 <= 3; index2++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col, Row + index2), Red)) {
                    _true = 0
                } else {
                    _true = 1
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    } else {
        _true = 0
        for (let index3 = 0; index3 <= 3; index3++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col, Row + index3), Yellow)) {
                    _true = 0
                } else {
                    _true = 1
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Token.ay = 300
})
function CheckForWin4 (Row: number, Col: number, RedTrueYellowFalse: boolean) {
    if (RedTrueYellowFalse == true) {
        _true = 0
        for (let index7 = 0; index7 <= 3; index7++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col - index7, Row), Red)) {
                    _true = 0
                } else {
                    _true = 1
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    } else {
        _true = 0
        for (let index8 = 0; index8 <= 3; index8++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col - index8, Row), Yellow)) {
                    _true = 0
                } else {
                    _true = 1
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    }
}
function New_Turn (Red: boolean) {
    if (Red) {
        Token = sprites.create(img`
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            `, SpriteKind.Player)
    } else {
        Token = sprites.create(img`
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            `, SpriteKind.Player)
    }
    tiles.placeOnTile(Token, tiles.getTileLocation(4, 0))
}
function CheckForWin2 (Row: number, Col: number, RedTrueYellowFalse: boolean) {
    if (RedTrueYellowFalse == true) {
        _true = 0
        for (let index9 = 0; index9 <= 3; index9++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col + index9, Row), Red)) {
                    _true = 0
                } else {
                    _true = 1
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    } else {
        _true = 0
        for (let index10 = 0; index10 <= 3; index10++) {
            if (_true == 0) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Col + index10, Row), Yellow)) {
                    _true = 0
                } else {
                    _true = 1
                }
            }
        }
        if (_true == 0) {
            game.gameOver(true)
        }
    }
}
let Yellow: Image = null
let Red: Image = null
let _true = 0
let Reds_Turn = false
let Left_Most_Column = 0
let Right_Most_Column = 0
let Token: Sprite = null
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level1`)
Reds_Turn = true
Left_Most_Column = 2
Right_Most_Column = 6
New_Turn(Reds_Turn)
