function tabuada (tabuada,) {
    const results =[];

    for (let i = 0; i <=10; i++) {
        results.push (`${tabuada} x ${i} = ${tabuada * i}`)
    }
    return results
}

module.exports ={tabuada}