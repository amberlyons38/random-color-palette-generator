import React, { Component } from 'react'
import PaletteBox from "../components/PaletteBox";
import "../components/Palette.css";
import html2canvas from "html2canvas";

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reRendered: 0
        }
        this.paletteBoxRef = React.createRef();
    }

    handleNewPalette = () => {
        this.setState((curState) => ({
            reRendered: ++curState.reRendered
        }))
    }

    takeScreenshot = async () => {
        const paletteBoxElement = this.paletteBoxRef.current;

        const canvas = await html2canvas(paletteBoxElement, {
           backgroundColor: null
        });
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "palette.png";
        link.href = dataUrl;
        link.click();
    }

    randomKey = () => {
        return '_' + Math.random().toString(36).substring(2, 9);
    }

    render() { 
        return ( 
            <div className="Palette">
              <h1>Random Color Palette Generator</h1>
              <div ref={this.paletteBoxRef}>
                <PaletteBox key={this.randomKey()}/>
		  </div>
              <button className="button-6" onClick={this.handleNewPalette}>Generate a new random palette</button>
		  <button className="button-6" onClick={this.takeScreenshot}>Download palette</button>
            </div>
         );
    }
}
 
export default Palette;