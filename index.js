function superbowlWin(array){
    return (array.find((item)=> item.result === "W")).year

    //return !!win ? win.year : undefined
    // if (win === undefined){
    //     return win
    // }
    // else {
    //     return win.year
    // }
}