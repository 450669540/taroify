import { ForwardRefExoticComponent } from "react"
import FloatingPanelComponent, { FloatingPanelProps } from "./floating-panel"

export type { FloatingPanelThemeVars } from './floating-panel.shared'

interface FloatingPanelInterface extends ForwardRefExoticComponent<FloatingPanelProps> {
  (props: FloatingPanelProps): JSX.Element
}

const FloatingPanel = FloatingPanelComponent as FloatingPanelInterface

export default FloatingPanel
