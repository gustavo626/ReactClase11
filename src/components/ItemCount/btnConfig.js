export const btnConfig = (cantidad, max, handlesumar, handleRestar) => {
    return {
        restar: {   
            className:`btn ${cantidad === 0 ? 'btn-outline-danger' : 'btn-outline-primary'}`,
        onclick: handleRestar,
        disabled: cantidad === 0 
        },
        sumar: {
            className:`btn ${cantidad === max ? 'btn-danger' : 'btn-primary'}`,
            onclick: handlesumar,
            disabled: cantidad === max
        }
    }
}