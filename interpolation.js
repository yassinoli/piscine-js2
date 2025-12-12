function interpolation({ step, start, end, callback, duration }) {
    const distStep = (end - start) / step
    const timeStep = duration / step

    for (let i = 1; i <= step; i++) {
        setTimeout(() => {
            const x = start + distStep * (i - 1)
            const y = timeStep * i
            callback([x, y])
        }, timeStep * i)
    }
}
