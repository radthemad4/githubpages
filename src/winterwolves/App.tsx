import OpenSeadragon from "openseadragon"
import { useEffect } from "react";

let openseadragonflag = false;
let viewer: OpenSeadragon.Viewer;


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
            overlays: [{
                id: 'example-overlay',
                x: 0.33,
                y: 0.75,
                width: 0.2,
                height: 0.25,
                className: 'highlight',
            }],
        });

        // Wrapper div. Important to append it as child to the viewer canvas.
        var mediaDiv = document.createElement("div")
        mediaDiv.style.position = "absolute"
        mediaDiv.style.pointerEvents = "none"
        viewer.canvas.appendChild(mediaDiv)

        // HTML element with the gif. Could be any other element, another div, iframe with embed video, text editor, image, possibilities are endless!!!!
        var gif = document.createElement("img")
        gif.src = "https://i.gifer.com/1fLL.gif"
        gif.style.width = "100%"
        gif.style.height = "100%"
        gif.style.objectFit = "contain"
        mediaDiv.appendChild(gif)

        const rect = new OpenSeadragon.Rect(9200, 2700, 2000, 2000)
        // Calculate position releative to the viewport and apply it to the wrapper div
        const repositionElement = function () {
            const newRect = viewer.viewport.viewportToViewerElementRectangle(
                viewer.viewport.imageToViewportRectangle(rect)
            )
            mediaDiv.style.left = newRect.x + "px"
            mediaDiv.style.top = newRect.y + "px"
            mediaDiv.style.width = newRect.width + "px"
            mediaDiv.style.height = newRect.height + "px"
        }

        // These handle repositioning the element when interacting with the viewer
        viewer.addHandler("open", repositionElement)
        viewer.addHandler("animation", repositionElement)
        viewer.addHandler("rotate", repositionElement)
    }
}



function App() {
    useEffect(() => {
        openseadragon();
    }, []);
    return (
        <div
            id="openseadragon1"
            style={{
                width: '100%',
                minHeight: '100%',
                height: 0,
                backgroundColor: 'black',
            }}>
            {/* <img
                style={{
                    maxWidth: '100%',
                }}
                src="https://files.catbox.moe/eyugib.png"
            /> */}
        </div >
    );
}

export default App