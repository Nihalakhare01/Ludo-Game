import { useState } from "react"

export default function LudoBoard() {
// Objects & state
    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0 });
    let [arr, setarr]  = useState(["no move"]);

        let updateBlue = () => {
            // console.log(` blue moves ${moves.blue}`);
            setMoves({...moves, blue: moves.blue + 1});
        
            arr.pop();
            arr.push("Blue move");
            setarr([...arr]);

        }

        let updateYellow = () => {
            // console.log(` yellow moves ${moves.yellow}`);
            setMoves({...moves, yellow: moves.yellow + 1});

            arr.pop();
            arr.push("Yellow move");
            setarr([...arr]);
        }
        
        let updateGreen = () => {
            // console.log(` green moves ${moves.green}`);
            setMoves({...moves, green: moves.green + 1});

            arr.pop();
            arr.push("Green move");
            setarr([...arr]);
        }

        let updateRed = () => {
            // console.log(`red moves ${moves.red}`);
            setMoves({...moves, red: moves.red + 1});

            arr.pop();
            arr.push("Red move");
            setarr([...arr]);
        }

    return(
        <>
            <p>Game Begins!</p>

        <div className="board">

            {arr}

            <p>Blue moves : {moves.blue}</p>
            <button style = {{backgroundColor: "blue"}}  onClick={updateBlue}>+1</button>
            <p>Yellow moves : {moves.yellow}</p>
            <button style = {{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
            <p>Green moves : {moves.green}</p>
            <button style = {{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            <p>Red moves : {moves.red}</p>
            <button style = {{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            
        </div>

        </>

    )
}