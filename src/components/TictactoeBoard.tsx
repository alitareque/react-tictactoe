import React, { Fragment, useState, useEffect, useMemo }  from 'react';

const Tictactoe = () =>  {
    const dimension: number = 3;
    const [player, playerSet] = useState(1);
    const [player1, player1Set] = useState<number[]>([]);
    const [player2, player2Set] = useState<number[]>([]);
    const [winnerShow, winnerShowSet] = useState<string>('');
    const [tieShow, tieShowSet] = useState<string>('');
    const [winningCombo, winningComboSet] = useState<number[]>([]);
    const [countSquaresClicked, countSquaresClickedSet] = useState<number>(0);
   
    useMemo(() => {
        const winCheck = () => {
            const winComb = {
                0: [1,2,3],
                1: [4,5,6],
                2: [7,8,9],
                3: [1,5,9],
                4: [3,5,7],
                5: [1,4,7],
                6: [2,5,8],
                7: [3,6,9],
            };
            const winningFlag = Object.values(winComb).filter((value) => {
                if (value.every(elem => player1.indexOf(elem) > -1) === true ) {
                    winningComboSet(value);
                    winnerShowSet('Winner is player 1');
                    return value;
                }

                if (value.every(elem => player2.indexOf(elem) > -1) === true ) {
                    winningComboSet(value);
                    winnerShowSet('Winner is player 2');
                    return value;
                }
                return '';
            });
            if (countSquaresClicked === 9 && winningFlag.length === 0) {
                tieShowSet("It is a TIE!!!!");
            }

        }
        winCheck();
    }, [countSquaresClicked, player1, player2]);
    
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const elem = e.currentTarget;
        countSquaresClickedSet(val => val + 1);
        if (player === 1) {
            elem.innerText = 'X';
            player1Set(player1 => [...player1, parseInt(elem.value)]);
            playerSet(2);
        }
        
        if (player === 2) {
            elem.innerText = 'O';
            player2Set(player2 => [...player2, parseInt(elem.value)]);
            playerSet(1);
        }
        
        elem.disabled = true;
        
    };

    const getBoard = (dimension: number) => {
        const boardDimension = dimension * dimension;
        const board = [];
        let disabled = false;
        let squareClass = 'square';
        
        for (let i=1; i<=boardDimension; i++) {
            if (winnerShow) {
                disabled = true;
                if (winningCombo.includes(i)) {
                    squareClass = 'winner-square';
                } else {
                    squareClass = 'square';
                }
            }
            if (countSquaresClicked === 9 && tieShow) {
                squareClass = 'tie-square';
            }
            
            board.push(<button disabled={disabled} key={i} className={squareClass} onClick={(e) => { handleClick(e)}} value={i}>{<span>&nbsp;</span>}</button>);
        }
        return <>{board}</>;
    };
    
    const board = getBoard(dimension);

    return (
        <>
            <h1>Tic Tac Toe</h1>
            {tieShow && <h3>{tieShow}</h3>}
            {!tieShow && winnerShow && <h3>{winnerShow}</h3>}
            {!tieShow && !winnerShow && <h3>Trun for Player- {player.toString()}</h3>}
            <div className='canvas'>
                <div key={'abc'} className='board'>
                    {board}
                </div>
            </div>
        </>
    );
        
    
}
export default Tictactoe;