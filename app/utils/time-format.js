export function timeformat( time ) {
    if (time < 24) {
        if (time < 1) {
            return 'Now'
        } else if (time === 1) {
            return time + 'hr'
        }
        else {
            return time + 'hrs'
        }
    } else if (time >= 24) {
        const t = Math.floor(time / 24)
        if (t === 1) {
            return t + 'day'
        }
        else if (t > 1) {
            if (t < 7) {
                return t + 'days'
            } else if (t === 7) {
                return t + 'week'
            } else {
                return t + 'weeks'
            }
        }
    }
}