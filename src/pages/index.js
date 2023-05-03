import * as React from "react"
import Palette from "../components/Palette"
import "../components/App.css"
import Seo from "../components/seo"

function IndexPage() {
  return (
    <div className="App">
      <Palette />
      <div className="App-Icon">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
    </div>
  );
}

export const Head = () => <Seo title="Color Palette Generator" />

export default IndexPage
