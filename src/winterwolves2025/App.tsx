import OpenSeadragon from "openseadragon"
import { StrictMode, useEffect } from "react";
import "./openseadragon-html-overlay";
import { createRoot, Root } from "react-dom/client";
import { FaLocationCrosshairs, FaLocationPin, FaVault } from "react-icons/fa6";

let openseadragonflag = false;
let viewer: OpenSeadragon.Viewer;

let root: Root | undefined;

let locations = [
  {
    locationName: 'Current Party Location',
    coordinates: { x: 637, y: 875 },
    mapIcon: (<FaLocationPin style={{ color: 'red' }} />),
  },
  {
    locationName: 'Starting Vault',
    coordinates: { x: 600, y: 925 },
    mapIcon: (<FaVault />),
  },
];

function openseadragon() {
  if (!openseadragonflag) {
    openseadragonflag = true;
    viewer = OpenSeadragon({
      id: "openseadragon1",
      // prefixUrl: "/openseadragon/images/",
      maxZoomLevel: 5,
      tileSources: {
        type: 'image',
        url: 'https://files.catbox.moe/eyugib.png',
      },
      crossOriginPolicy: 'Anonymous',
      ajaxWithCredentials: false,
      showNavigator: true,
      prefixUrl: 'https://raw.githubusercontent.com/openseadragon/openseadragon/refs/heads/master/images/',
    });

    // @ts-ignore
    const overlayElement = viewer.htmlOverlay().element() as HTMLElement;

    const reactContainer = document.createElement('div');
    reactContainer.id = 'reactContainer';
    // someTextDiv.innerText = 'Starting Vault Location';
    // someTextDiv.className = 'text-overlay';

    overlayElement.appendChild(reactContainer);

    if (root == undefined) {
      console.log('CREATE ROOT')
      root = createRoot(document.getElementById('reactContainer')!);
    }

    root.render(
      <StrictMode>
        {...locations.map(({ coordinates, mapIcon }, index) => (
          <div key={`mapLocation${index}`} className='map-icon'
            style={{ left: coordinates.x, top: coordinates.y }}
          >
            {mapIcon}
          </div>
        ))}

      </StrictMode>,
    )
  }
}



function App() {
  useEffect(() => {
    openseadragon();
  }, []);
  return (
    <div style={{
      display: 'flex',
      height: '100%',
      backgroundColor: 'green',
      alignContent: 'stretch',
    }}>
      <div style={{
        flex: 1,
        color: 'white',
        backgroundColor: '#334c48'
      }}>
        <h1>WinterWolves 2025</h1>
        {locations.map(({ locationName, coordinates }, index) => (
          <div key={`navbarLocation${index}`} style={{ display: 'flex' }}>
            <div>{locationName}</div>
            <button onClick={() => {
              viewer.viewport.zoomTo(3);
              viewer.viewport.panTo(new OpenSeadragon.Point(
                // @ts-ignore
                coordinates.x / viewer.world._contentSize.x, coordinates.y / viewer.world._contentSize.x,
              ));
            }}>
              <FaLocationCrosshairs />
            </button>
          </div>
        ))}
        {/* <br />
        <div>
          <a style={{ color: 'white' }} href="https://www.reddit.com/r/inkarnate/comments/mnnl3g/world_of_malo_my_first_world_map_for_my_fantasy/">
            Other stuff
          </a>
        </div> */}
        <br />
        <div>
          <a style={{ color: 'white' }} href="https://www.reddit.com/r/inkarnate/comments/mnnl3g/world_of_malo_my_first_world_map_for_my_fantasy/">
            World Map by freakinrobe
          </a>
        </div>
      </div>
      <div
        id="openseadragon1"
        style={{
          flex: 9,
          width: '100%',
          minHeight: '100%',
          height: 0,
          backgroundColor: 'black',
        }}
      />
    </div>
  );
}

export default App