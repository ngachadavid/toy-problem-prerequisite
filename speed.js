function speedDetector (speed) {
    let speedDetector = parseInt(speed, 10);
    if (speed < 70) {
        return Ok
    }
    else{
        const demeritPoints = ((speed - 70) / 5);
        Math.ceil(demeritPoints);
        return `points: ${demeritPoints}!`;
        if (demeritPoints >= 12) {
            return `License suspended.`
        } else {
            return 0
        }
    }
}
