function vectorLength(vec) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y)
}

function unitVector(vec) {
    const length = vectorLength(vec)
    return {x: vec.x / length, y: vec.y / length}
}

function parsePoints(str) {
    return str
        .split(' ')
        .map(point => point
            .split(',')
            .map(num => parseFloat(num))
        )
        .map(point => ({x: point[0], y: point[1]}))
}

function serializePoints(points) {
    return points
        .map(point => [point.x, point.y].join(','))
        .join(' ')
}

function setBatteryFill(batteryFill, batteryBody, level) {
    const emptyLevel = 1 - level

    const fillPoints = parsePoints(batteryFill.attributes.points.value)

    const bodyY = batteryBody.attributes.y.value
    const bodyHeight = batteryBody.attributes.height.value

    // hardcoded index = ugly af
    let lowerLeft = fillPoints[1]
    let lowerRight = fillPoints[0]
    let upperLeft = fillPoints[2]
    let upperRight = fillPoints[3]

    upperRight = {x: upperRight.x, y: bodyHeight * emptyLevel + bodyY}
    upperLeft = {x: upperLeft.x, y: bodyHeight * emptyLevel + bodyY}
    /*
    const vecUpperLeftUpperRight = {
        x: upperRight.x - upperLeft.x,
        y: upperRight.y - upperLeft.y
    }
    const slopeUnitVec = unitVector(vecUpperLeftUpperRight)
    */
    batteryFill.attributes.points.value = serializePoints([lowerRight, lowerLeft, upperLeft, upperRight])
}

function setPercentage(percentageElement, level) {
    percentageElement.innerText = (level * 100).toFixed(0) + '%'
}

window.onload = () => {
    navigator.getBattery().then(battery => {
        const batteryFill = document.getElementById('battery-fill')
        const batteryBody = document.getElementById('battery-body')
        const percentageElement = document.getElementById('percentage')

        setBatteryFill(batteryFill, batteryBody, battery.level)
        setPercentage(percentageElement, battery.level)
    })
}