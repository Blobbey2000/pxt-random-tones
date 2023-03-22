let allTones4000 = [
131,
147,
165,
175,
196,
220,
247,
262,
294,
330,
349,
392,
440,
494,
523,
587,
659,
698,
784,
880,
988
]
enum Lengths {
    //% block="1/16"
    Sixteenth,
    //% block="1/8"
    Eighth,
    //% block="1/4"
    Quarter,
    //% block="1/3"
    Triplet,
    //% block="1/2"
    Half,
    //% block="1"
    Whole,
    //% block="2"
    Double,
    //% block="4"
    Breve
}
enum Notes {
    //% block="any"
    Any,
    //% block="high"
    High,
    //% block="low"
    Low
}
namespace music {

    /**
     * Plays a random tone. Random tones do not include black notes.
     */
    //% group="Tone"
    //% block="play $note random tone for $length beat"
    //% picker.fieldEditor="gridpicker"
    //% picker.fieldOptions.width=200
    //% picker.fieldOptions.columns=1
    //% picker=Lengths
    //% ms.shadow="Lengths"
    //% picker=Notes
    //% ms.shadow="Notes"
    export function playRandomTone(note: Notes, length: Lengths) {
        if (note == 0) {
            if (length == 0) {
                music.playTone(allTones4000._pickRandom(), music.beat(BeatFraction.Sixteenth))
            } else if (length == 1) {
                music.playTone(allTones4000._pickRandom(), music.beat(BeatFraction.Eighth))
            } else if (length == 2) {
                music.playTone(allTones4000._pickRandom(), music.beat(BeatFraction.Quarter))
            } else if (length == 3) {
                music.playTone(allTones4000._pickRandom(), music.beat(BeatFraction.Triplet))
            } else if (length == 4) {
                music.playTone(allTones4000._pickRandom(), music.beat(BeatFraction.Half))
            } else if (length == 5) {
                music.playTone(allTones4000._pickRandom(), music.beat(BeatFraction.Whole))
            } else if (length == 6) {
                music.playTone(allTones4000._pickRandom(), music.beat(BeatFraction.Double))
            } else if (length == 7) {
                music.playTone(allTones4000._pickRandom(), music.beat(BeatFraction.Breve))
            }
        } else if (note == 1) {
            if (length == 0) {
                music.playTone(allTones4000[randint(10, 20)], music.beat(BeatFraction.Sixteenth))
            } else if (length == 1) {
                music.playTone(allTones4000[randint(10, 20)], music.beat(BeatFraction.Eighth))
            } else if (length == 2) {
                music.playTone(allTones4000[randint(10, 20)], music.beat(BeatFraction.Quarter))
            } else if (length == 3) {
                music.playTone(allTones4000[randint(10, 20)], music.beat(BeatFraction.Triplet))
            } else if (length == 4) {
                music.playTone(allTones4000[randint(10, 20)], music.beat(BeatFraction.Half))
            } else if (length == 5) {
                music.playTone(allTones4000[randint(10, 20)], music.beat(BeatFraction.Whole))
            } else if (length == 6) {
                music.playTone(allTones4000[randint(10, 20)], music.beat(BeatFraction.Double))
            } else if (length == 7) {
                music.playTone(allTones4000[randint(10, 20)], music.beat(BeatFraction.Breve))
            }
        } else if (note == 2) {
            if (length == 0) {
                music.playTone(allTones4000[randint(0, 9)], music.beat(BeatFraction.Sixteenth))
            } else if (length == 1) {
                music.playTone(allTones4000[randint(0, 9)], music.beat(BeatFraction.Eighth))
            } else if (length == 2) {
                music.playTone(allTones4000[randint(0, 9)], music.beat(BeatFraction.Quarter))
            } else if (length == 3) {
                music.playTone(allTones4000[randint(0, 9)], music.beat(BeatFraction.Triplet))
            } else if (length == 4) {
                music.playTone(allTones4000[randint(0, 9)], music.beat(BeatFraction.Half))
            } else if (length == 5) {
                music.playTone(allTones4000[randint(0, 9)], music.beat(BeatFraction.Whole))
            } else if (length == 6) {
                music.playTone(allTones4000[randint(0, 9)], music.beat(BeatFraction.Double))
            } else if (length == 7) {
                music.playTone(allTones4000[randint(0, 9)], music.beat(BeatFraction.Breve))
            }
        }

    }

}

