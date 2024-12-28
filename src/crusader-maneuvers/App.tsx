import React from "react";
import { useEffect, useState } from "react";
import { FaUndo } from "react-icons/fa";

const initialManeuvers = [
  `Crusader's Strike`,
  `Vanguard Strike`,
  `Charging Minotaur (Full Round)`,
  `Douse the Flames`,
  `Leading the Attack`,
];

interface AppState {
  withheld: string[],
  granted: string[],
  expended: string[],
  maneuverList: string[],
  known: string[],
  readied: string[],

  grantedCount: number
}

function App() {
  const [state, setState] = useState<AppState>({
    withheld: [],
    granted: [],
    expended: [],
    maneuverList: [],
    known: [],
    readied: initialManeuvers,

    grantedCount: 2,
  });

  const { withheld, granted, expended, readied, grantedCount } = state;

  const drawWithheld = () => {
    setState(state => {
      const index = Math.floor(Math.random() * state.withheld.length);

      const { granted, withheld } = state;

      return {
        ...state,
        granted: [...granted, withheld[index]],
        withheld: [...withheld.slice(0, index), ...withheld.slice(index + 1)],
      }
    });
  }

  const refresh = (changes?: { grantedCount?: number, readied?: string[] }) => {

    setState(state => {

      const grantedCount = changes?.grantedCount ?? state.grantedCount;
      const readied = changes?.readied ?? state.readied;

      let tempWithheld = [...readied];
      let tempGranted: string[] = [];

      for (let i = 0; i < grantedCount && tempWithheld.length > 0; i++) {
        const index = Math.floor(Math.random() * tempWithheld.length);
        tempGranted = [...tempGranted, tempWithheld[index]];
        tempWithheld = [...tempWithheld.slice(0, index), ...tempWithheld.slice(index + 1)];
      }

      return {
        ...state,
        expended: [],
        granted: tempGranted,
        withheld: tempWithheld,
        readied,
        grantedCount,
      }
    });
  }

  useEffect(() => {
    refresh();
  }, []);

  const transparentButton: React.CSSProperties = {
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none',
  };

  return <>
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
      <div>
        <h2>Withheld</h2>
        <ul>
          {withheld.map((maneuver, index) => <li key={index}>{maneuver}</li>)}
        </ul>
      </div>
      <div>
        <h2>Granted</h2>
        <ul>
          {granted.map((maneuver, index) => <li key={index}>{maneuver} <button onClick={() => {
            setState(state => {
              const { granted, expended } = state;
              return {
                ...state,
                granted: [...granted.slice(0, index), ...granted.slice(index + 1)],
                expended: [...expended, maneuver],
              };
            });
          }}>Use</button></li>)}
        </ul>
      </div>
      <div>
        <h2>Expended</h2>
        {expended.map((maneuver, index) => <li key={index}>{maneuver} <button onClick={() => {
          setState(state => {
            const { granted, expended } = state;
            return {
              ...state,
              expended: [...expended.slice(0, index), ...expended.slice(index + 1)],
              granted: [...granted, maneuver],
            };
          });
        }}><FaUndo /></button></li>)}
      </div>
    </div>

    <div>
      <button onClick={() => {
        if (withheld.length === 0) {
          refresh();
        } else {
          drawWithheld();
        }
      }}>
        Next Turn
      </button>
    </div>
    <div>
      <button onClick={() => refresh()}>Refresh</button>
    </div>
    <div>
      <label style={{ marginRight: 5 }}>Initial granted manuevers:</label>
      <input type='number' value={grantedCount} onChange={(e) => {
        refresh({ grantedCount: +e.target.value });
      }}></input>
    </div>



    <div>
      <h2>Readied</h2>
      {readied.map((maneuver, index) => <div key={index}>
        <input style={{ width: 400 }} value={maneuver} onChange={(e) => {
          refresh({ readied: [...readied.slice(0, index), e.target.value, ...readied.slice(index + 1)] });
        }} />
        <button
          style={transparentButton}
          onClick={() => {
            refresh({ readied: [...readied.slice(0, index), ...readied.slice(index + 1)] });
          }}
        >
          ➖
        </button>
      </div>)}
      <button
        style={transparentButton}
        onClick={() => {
          refresh({ readied: [...readied, ''] });
        }}
      >
        ➕
      </button>

    </div>

    <div style={{ marginTop: '20px' }}>
      <button style={{ marginLeft: '5px', marginRight: '5px' }} onClick={() => {
        const input = window.prompt('Paste a JSON object exported with this');
        if (input != null) {
          const state = JSON.parse(input);
          setState(state);
        }
      }}>Import</button>
      <button style={{ marginLeft: '5px', marginRight: '5px' }}
        onClick={() => {
          const stringified = JSON.stringify(state);
          const parsed = JSON.parse(stringified);
          prompt('Copy to clipboard: Ctrl/Command + C', `${JSON.stringify(parsed)}`);
        }}>Export</button>
    </div>

  </>;
}

export default App;
