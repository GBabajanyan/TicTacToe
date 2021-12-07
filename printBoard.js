module.exports={
     printBoard:(playingBoard)=>{
        console.log(`---------PLAYING BOARD-----------`);
        for (const a of playingBoard) {
            console.log(a.join(' '));
        }
        console.log(`--------------------`);
    }
}