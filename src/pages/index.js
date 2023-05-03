import * as React from "react"
import Palette from "../components/Palette"
import "../components/App.css"
import Seo from "../components/seo"

function IndexPage() {
  return (
    <div className="App">
      <Palette />
    </div>
  );
}

export const Head = () => <Seo title="Color Palette Generator" />

export default IndexPage
