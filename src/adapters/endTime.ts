export const endTime = (diff) => {
    const time = diff[0] * 1e3 + diff[1] * 1e-6
    return time.toFixed(1)
}